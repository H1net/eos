import { supabaseCreateForServer } from "@/lib/supabase-server";
import Link from "next/link";

export default async function KeysPage() {
  const supabase = supabaseCreateForServer()
  const { data } = await supabase.from('property_keys').select('*, propertys (*)');
  // console.log(data)
  return (
    <div>
      <h1>Keys List</h1>
      <div>
      {/* <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select> */}
      </div>
      <div>
        {data?.map((propertyKey) => (
          <Link href={`/property/key/${propertyKey.id}`} key={propertyKey.id}>
            <p>Tag number: {propertyKey?.tag_number}</p>
            <p>Address: {propertyKey?.propertys?.address}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
