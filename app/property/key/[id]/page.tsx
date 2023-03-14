import { supabase } from "@/lib/supabase"

export default async function KeyPage() {
  const { data: propertyKey }: any = await supabase.from('property_keys').select('*, propertys (*)').single();
  const { propertys: property } = propertyKey
  const { data: propertyKeyRequests } = await supabase.from('property_key_requests').select('*');
//  const { propertyKeyRequest, propertyKey, property } = data

return (
    <div>
      <h1>
      Key
      </h1>
      <div>
      {/* <Link href={`/property/key/${propertyKey.id}`} key={propertyKey.id}> */}
        <p>Tag number: {propertyKey?.tag_number}</p>
        <p>Address: {property?.address}</p>
      {/* </Link> */}
      </div>
      <h2>Requests</h2>
      <div>
        {propertyKeyRequests?.map((pkr) => (
          <div key={pkr.id}>
          {/* <Link href={`/property/key/${propertyKey.id}`} key={propertyKey.id}> */}
            {pkr.id}
          {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}
