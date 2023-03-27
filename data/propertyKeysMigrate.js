require('dotenv').config()
const fs = require('fs')
const csv = require('csv-parser')
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
})

// console.log('pool: ', pool)

async function testDBFunc() {
    const testDB = await pool.query('SELECT * FROM propertys')
    console.log('testdB: ', testDB)
}

testDBFunc()
    // const testDB = await pool.query('SELECT * FROM propertys')

// console.log(testDB)

const filePath = 'data/data_import_key_management.csv'

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async(row) => {
        const {
            Property,
            Tag_Number,
            Tag_Letter,
            Description,
            Requested_By,
            Status,
            Sign_Out_DateTime,
            Expected_Return_Date,
            Sign_Out_To_Savills,
            Sign_Out_To_External,
            Contact_Phone_Number,
            Key_Cut_Required,
            Lost,
            Note,
            // Attachments,
        } = row

        // console.log('Starting key: ', { Property })

        // Check if property already exists
        const existingProperty = await pool.query(
            'SELECT * FROM propertys WHERE address = $1', [Property]
        )

        console.log('Property')

        console.log(existingProperty)

        if (existingProperty.rows.length > 0) {
            console.log('PA')
                // Property already exists, just add a new property_key
            const newPropertyKey = await pool.query(
                'INSERT INTO property_keys(property_id, status, tag_number, tag_letter, description, lost, cut_required) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id', [
                    existingProperty.rows[0].id,
                    Status,
                    Tag_Number,
                    Tag_Letter,
                    Description,
                    Lost,
                    Key_Cut_Required,
                ]
            )
            console.log(`Inserted property key with ID ${newPropertyKey.rows[0].id}`)
        } else {
            console.log('PNA')

            // Property does not exist, add new property and property_key
            const newProperty = await pool.query(
                'INSERT INTO propertys(address) VALUES($1) RETURNING id', [Property]
            )
            console.log(`Inserted property with ID ${newProperty.rows[0].id}`)
            const newPropertyKey = await pool.query(
                'INSERT INTO property_keys(property_id, status, tag_number, tag_letter, description, lost, cut_required) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id', [
                    newProperty.rows[0].id,
                    Status,
                    Tag_Number,
                    Tag_Letter,
                    Description,
                    Lost,
                    Key_Cut_Required,
                ]
            )
            console.log(`Inserted property key with ID ${newPropertyKey.rows[0].id}`)
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
        pool.end()
        process.exit()
    })

// process.exit()