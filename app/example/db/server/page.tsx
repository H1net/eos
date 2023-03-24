// import 'server-only';

// import createServerClient from '@/lib/supabase-server';
import { supabaseCreateForServer } from '@/lib/supabase-server';

// do not cache this page
export const revalidate = 0;

// this page will display with or without a user session
export default async function ExampleDBServerPage() {
  const supabase = supabaseCreateForServer();
  const { data } = await supabase.from('examples').select('*');

  console.log('data', data);

  return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}
