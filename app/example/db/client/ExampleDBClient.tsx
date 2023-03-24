'use client';

import { supabaseCreateForBrowser } from "@/lib/supabase-browser";
import { useEffect, useState } from "react";

export default function ExampleDBClient({
  data
}: {
  data: any[]
}) {
  const [examples, setExamples] = useState(data)
  const [supabase] = useState(() => supabaseCreateForBrowser())

  useEffect(() => {
    const channel = supabase
    .channel('realtime examples')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'examples'
      },
      (payload) => {
        console.log('payload', payload);
        setExamples([...examples, payload.new])
      })
      .subscribe();
    return() => {
      supabase.removeChannel(channel)
    }
  }, [supabase, examples, setExamples])

return <pre>{JSON.stringify({ examples }, null, 2)}</pre>;
}