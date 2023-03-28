'use client'

import Link from 'next/link'
import { Database } from '@/lib/database.types'
import LoadingNotifier from '@/components/LoadingNotifier'
import { StarIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useMemo } from 'react'
import { supabaseCreateForBrowser } from '@/lib/supabase-browser'
type PropertyKeyRequest =
  Database['public']['Tables']['property_key_requests']['Row']

export const revalidate = 0

export const property_key_statuses = [
  { key: 'ON_HOOK', value: 'On Hook' },
  { key: 'WITH_SUPPLIER', value: 'With Supplier' },
  { key: 'WITH_STAFF', value: 'With Staff' },
  { key: 'WITH_OWNER', value: 'With Owner' },
  { key: 'WITH_TENANT', value: 'With Tenant' },
  { key: 'WITH_CONCIERGE', value: 'With Concierge' },
]

function PropertyKeyRequestRow({
  propertyKeyRequest,
}: {
  propertyKeyRequest: PropertyKeyRequest
}) {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    checked ? setChecked(false) : setChecked(true)
  }

  return (
    <div className="bg-primary text-primary-content p-1">
      {/* <input
        type="checkbox"
        checked={checked}
        className="checkbox mr-1"
        onChange={handleCheck}
      /> */}
      <Link href={`/propertyKeyRequest/${propertyKeyRequest.id}`}>
        {propertyKeyRequest.id}
      </Link>
    </div>
  )
}

export default function PropertyKeyRequestsList({
  data,
}: {
  data: PropertyKeyRequest[]
}) {
  const initialFilterState = {
    search_text: '',
    mode: 'new', // new, out, in
    property_key_status: '', // ON_HOOK
    property_id: '',
    property_key_id: '',
  }
  const [propertyKeyRequests, setPropertyKeyRequests] =
    useState<PropertyKeyRequest[]>(data)
  // TODO should be useMemo instead of useState to prevent uncessary calls?

  const [supabase] = useState(() => supabaseCreateForBrowser())
  const [filter, setFilter] = useState(initialFilterState)

  const filterSearchText = (propertyKeyRequest: PropertyKeyRequest) => {
    const search_text = filter.search_text?.toLowerCase().trim()
    if (!search_text) return true
    return Object.values(propertyKeyRequest).some((val) =>
      String(val).toLowerCase().includes(search_text)
    )
  }

  const filterMode = (propertyKeyRequest: PropertyKeyRequest) => {
    return true
  }

  const filterPropertyKeyStatus = (propertyKeyRequest: PropertyKeyRequest) => {
    return true
  }

  const filterProperty = (propertyKeyRequest: PropertyKeyRequest) => {
    if (filter.property_id) {
      return filter.property_id == propertyKeyRequest.property_id ? true : false
    } else {
      return true
    }
  }

  const filterPropertyKey = (propertyKeyRequest: PropertyKeyRequest) => {
    if (filter.property_key_id) {
      return filter.property_key_id == propertyKeyRequest.property_key_id
        ? true
        : false
    } else {
      return true
    }
  }

  const filteredPropertyKeyRequests = useMemo<PropertyKeyRequest[]>(
    () =>
      propertyKeyRequests
        .filter(filterMode)
        .filter(filterPropertyKeyStatus)
        .filter(filterProperty)
        .filter(filterPropertyKey)
        .filter(filterSearchText),
    [
      propertyKeyRequests,
      filterSearchText,
      filterMode,
      filterPropertyKeyStatus,
      filterProperty,
      filterPropertyKey,
    ]
  )

  const handleChange = (e: any) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const channel = supabase
      .channel('realtime propertyKeyRequests')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'property_key_requests',
        },
        (payload) => {
          console.log('payload', payload)
          // Ensure payload.new has all the necessary properties to match the PropertyKeyRequest type
          const newPropertyKeyRequest: PropertyKeyRequest = {
            created_at: payload.new.created_at,
            author_profile_id: payload.new.author_profile_id,
            id: payload.new.id,
            by_profile_id: payload.new.by_profile_id,
            by_name: payload.new.by_name,
            out_at: payload.new.out_at,
            in_at: payload.new.in_at,
            property_key_id: payload.new.property_key_id,
            property_id: payload.new.property_id,
            updated_at: payload.new.updated_at,
          }
          setPropertyKeyRequests([
            ...propertyKeyRequests,
            newPropertyKeyRequest,
          ])
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, propertyKeyRequests, setPropertyKeyRequests])

  // if (!Array.isArray(propertyKeyRequests)) {
  //   return <LoadingNotifier />
  // }

  return (
    <section>
      <div className="mb-2">
        <h1 className="text-primary">Key Requests</h1>
      </div>
      <Link href="/property/key/request/new">
        <button className="btn btn-block btn-primary">Add Key Request</button>
      </Link>
      <div className="rounded mt-4 p-1">
        <h2>Filter</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control flex flex-row space-x-1 rounded bg-primary">
            <label className="label cursor-pointer">
              <span className="label-text">Search</span>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
                name="search_text"
                value={filter.search_text ?? ''}
                onChange={handleChange}
              />
            </label>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">New</span>
                <input
                  type="radio"
                  name="mode"
                  className="radio checked:bg-warning"
                  value="new"
                  checked={filter.mode === 'new'}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Out</span>
                <input
                  type="radio"
                  name="mode"
                  className="radio checked:bg-error`"
                  value="out"
                  checked={filter.mode === 'out'}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Returned</span>
                <input
                  type="radio"
                  name="mode"
                  className="radio checked:bg-success"
                  value="in"
                  checked={filter.mode === 'in'}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className="label cursor-pointer">
              <span className="label-text">Status</span>
              <select
                className="select w-full max-w-xs"
                name="propertyKeyRequest_group_id"
                value={filter.property_key_status ?? 'any'}
                onChange={handleChange}
              >
                <option value={0}>Any Status</option>
                {property_key_statuses.map((property_key_status) => (
                  <option
                    value={property_key_status.key}
                    key={property_key_status.key}
                  >
                    {property_key_status.value}
                  </option>
                ))}
              </select>
            </label>
            {filter.property_id && (
              <>
                <label className="label cursor-pointer">
                  <span className="label-text">Property</span>
                  {filter.property_id}
                </label>
              </>
            )}
            {filter.property_key_id && (
              <>
                <label className="label cursor-pointer">
                  <span className="label-text">Key</span>
                  {filter.property_key_id}
                </label>
              </>
            )}
          </div>
        </form>
      </div>
      <article className="container flex flex-col space-y-2 mt-4">
        <h2>Results</h2>
        {filteredPropertyKeyRequests.map((propertyKeyRequest) => (
          <PropertyKeyRequestRow
            propertyKeyRequest={propertyKeyRequest}
            key={propertyKeyRequest.id}
          />
        ))}
      </article>
    </section>
  )
}
