import { supabaseCreateForServer } from '@/lib/supabase-server'
// import Link from 'next/link'
// import TextDisplay from './TextDisplay'
import { Database } from '@/lib/database.types'
import LoadingNotifier from '@/components/LoadingNotifier'
// import { StarIcon } from '@heroicons/react/24/outline'
import PropertyKeyRequestsList from './PropertyKeyRequestsList'
// import LoadingNotifier from './LoadingNotifier'
type PropertyKeyRequest = Database['public']['Tables']['property_key_requests']['Row']

export const revalidate = 0

async function getPropertyKeyRequests() {
  const supabase = supabaseCreateForServer()
  return await supabase.from('property_key_requests').select('*')
}

type PropertyKeyRequestsResponse = Awaited<ReturnType<typeof getPropertyKeyRequests>>
type PropertyKeyRequestsResponseSuccess = PropertyKeyRequestsResponse['data']
type PropertyKeyRequestsResponseError = PropertyKeyRequestsResponse['error']

export default async function PropertyKeyRequestsPage() {
  const propertyKeyRequestsResponse: PropertyKeyRequestsResponse = await getPropertyKeyRequests()

  // console.log('propertyKeyRequestsResponse', propertyKeyRequestsResponse)
  console.log('data', propertyKeyRequestsResponse?.data)

  if (!Array.isArray(propertyKeyRequestsResponse.data)) {
    return <LoadingNotifier />
  }

  return <PropertyKeyRequestsList data={propertyKeyRequestsResponse.data ?? []} />
}