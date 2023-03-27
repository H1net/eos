'use client'

import Link from 'next/link'
import { Database } from '@/lib/database.types'
import LoadingNotifier from '@/components/LoadingNotifier'
import { StarIcon, CheckIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useMemo } from 'react'
import { supabaseCreateForBrowser } from '@/lib/supabase-browser'
type PropertyKeyRequest = Database['public']['Tables']['property_key_requests']['Row']

export const revalidate = 0

function PropertyKeyRequestRow({ propertyKeyRequest }: { propertyKeyRequest: PropertyKeyRequest }) {
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

export default function PropertyKeyRequestsList({ data }: { data: PropertyKeyRequest[] }) {
  const initialFilterState = {
    search_text: '',
    mode: 'new', // new, out, in
    property_key_id: '0',
    property_key_status: '', // ON_HOOK
    completed: false,
  }
  const [propertyKeyRequests, setPropertyKeyRequests] = useState<PropertyKeyRequest[]>(data)
  // TODO should be useMemo instead of useState to prevent uncessary calls?

  const [supabase] = useState(() => supabaseCreateForBrowser())
  const [filter, setFilter] = useState(initialFilterState)

  const filterStarred = (propertyKeyRequest: PropertyKeyRequest) => {
    // console.log('filter', filter)
    // if (propertyKeyRequest.starred) {
    //   return true
    // } else {
    //   return filter.starred ? false : true
    // }
    return true
  }

  const filterCompleted = (propertyKeyRequest: PropertyKeyRequest) => {
    // console.log('filter', filter)
    // if (propertyKeyRequest.completed_at) {
    //   return filter.completed ? true : false
    // } else {
    //   return filter.completed ? false : true
    // }
    return true
  }

  const filterStatus = (propertyKeyRequest: PropertyKeyRequest) => {
    // console.log('filter', filter)
    // if (filter.propertyKeyRequest_group_id > 0) {
    //   return filter.propertyKeyRequest_group_id == propertyKeyRequest.propertyKeyRequest_group_id ? true : false
    // } else {
    //   return true
    // }
    return true
  }

  const filteredPropertyKeyRequests = useMemo<PropertyKeyRequest[]>(
    () =>
      propertyKeyRequests.filter(filterCompleted).filter(filterStarred).filter(filterStatus),
    [propertyKeyRequests, filterCompleted, filterStarred, filterStatus],
  )

  // const applyFilters = () => {
  //   const newFilteredPropertyKeyRequests = propertyKeyRequests.filter(filterCompleted)
  //   console.log('newFilteredPropertyKeyRequests', newFilteredPropertyKeyRequests)
  //   setFilteredPropertyKeyRequests(newFilteredPropertyKeyRequests)
  // }

  const handleChange = (e: any) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
    // applyFilters()
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
        payload => {
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
          setPropertyKeyRequests([...propertyKeyRequests, newPropertyKeyRequest])
        },
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
      <div className="prose mb-2">
        <h1 className="text-primary">Key Requests</h1>
      </div>
      <Link href="/property/key/request/new">
        <button className="btn btn-block btn-primary">Add Key Request</button>
      </Link>
      <div className="rounded mt-4 p-1">
        <h2>Filter</h2>

        <form>
          <div className="form-control flex flex-row space-x-1">
            {/* <label className="label cursor-pointer">
              <span className="label-text">
                <StarIcon className="h-6 w-6" />
              </span>
              <input
                type="checkbox"
                className="toggle"
                name="starred"
                checked={filter.starred ?? false}
                onChange={() =>
                  setFilter({ ...filter, starred: !(filter.starred ?? false) })
                }
              />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text">
                <CheckIcon className="h-6 w-6" />
              </span>
              <input
                type="checkbox"
                className="toggle"
                name="completed"
                checked={filter.completed ?? false}
                onChange={() =>
                  setFilter({
                    ...filter,
                    completed: !(filter.completed ?? false),
                  })
                }
              />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text">Group</span>
              <select
                className="select w-full max-w-xs"
                name="propertyKeyRequest_group_id"
                value={filter.propertyKeyRequest_group_id ?? 0}
                onChange={handleChange}
              >
                <option value={0}>No Group Filter</option>
                <option value={1}>Group 1</option>
                <option value={2}>Group 2</option>
              </select>
            </label> */}
          </div>
        </form>
      </div>
      <article className="container flex flex-col space-y-2 mt-4">
        <h2>Results</h2>
        {filteredPropertyKeyRequests.map(propertyKeyRequest => (
          <PropertyKeyRequestRow propertyKeyRequest={propertyKeyRequest} key={propertyKeyRequest.id} />
        ))}
      </article>
    </section>
  )
}