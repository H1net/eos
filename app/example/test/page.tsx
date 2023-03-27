'use client';

import { useAuth } from '@/components/AuthProvider';

// import { supabase } from "@/lib/supabase";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// /pages/create.js
// import createClient from "@/lib/supabase-server"

const TPage = () => {
  // const user = supabase.auth.getSession().user
  // const supabase = createClient();
  const { user } = useAuth();

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // const session = supabase.auth.getSession()
  // const user = supabase.auth.getSession().user
  // alert("user is " + user);

 return (
   <>
     <div>
       <p>Test</p>
       <p>User is {user?.id}</p>
     </div>
   </>
 );
};

export default TPage;