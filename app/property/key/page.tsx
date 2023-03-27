import { supabaseCreateForServer } from "@/lib/supabase-server";
import Link from "next/link";
import { Database } from "@/lib/database.types";
import LoadingNotifier from "@/components/LoadingNotifier";
type PropertyKey = Database['public']['Tables']['property_keys']['Row']
type Property = Database['public']['Tables']['propertys']['Row']

export const revalidate = 0

async function getPropertyKeys() {
  const supabase = supabaseCreateForServer()
  return await supabase.from('property_keys').select('*, propertys (*)')
}

type PropertyKeysResponse = Awaited<ReturnType<typeof getPropertyKeys>>
type PropertyKeysResponseSuccess = PropertyKeysResponse['data']
type PropertyKeysResponseError = PropertyKeysResponse['error']


export default async function KeysPage() {
  const propertyKeysResponse: PropertyKeysResponse = await getPropertyKeys()
  // console.log(data)

  if (!Array.isArray(propertyKeysResponse.data)) {
    return <LoadingNotifier />
  }

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
        {propertyKeysResponse.data?.map((propertyKey) => (
          <Link href={`/property/key/${propertyKey.id}`} key={propertyKey.id}>
            <p>Tag number: {propertyKey?.tag_number}</p>
            {/* @ts-expect-error */}
            <p>Address: {propertyKey?.propertys?.address}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
