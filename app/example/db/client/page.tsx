import LoadingNotifier from "@/components/LoadingNotifier";
import { supabaseCreateForServer } from "@/lib/supabase-server"
import ExampleDBClient from "./ExampleDBClient";

// do not cache this page
export const revalidate = 10;

// this page will display with or without a user session
export default async function ExampleDBClientPage() {
  const supabase = supabaseCreateForServer();
  const { data } = await supabase.from('examples').select('*');

  console.log('data', data);

  if (!Array.isArray(data)) {
    return <LoadingNotifier />;
  }

  return <ExampleDBClient data={data ?? []} />;
}