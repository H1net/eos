import { createBrowserSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './database.types'

// const supabaseCreateForBrowser: SupabaseClient = createBrowserSupabaseClient<Database>();

const supabaseCreateForBrowser = () => createBrowserSupabaseClient<Database>();

export { supabaseCreateForBrowser, SupabaseClient }
