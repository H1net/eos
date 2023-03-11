import { createBrowserSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs';

const supabase: SupabaseClient = createBrowserSupabaseClient();

export default supabase;
