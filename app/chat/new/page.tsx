'use client';

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

// /pages/create.js

const Create = () => {
 const initialState = {
   title: "",
   messageText: "",
 };

 const { user } = useAuth();

//  const user = supabase.auth.getSession().user

 const router = useRouter();
 const [conversationData, setConversationData] = useState(initialState);

 const { title, messageText } = conversationData;

 const handleChange = (e) => {
   setConversationData({ ...conversationData, [e.target.name]: e.target.value });
 };

 const createConversation = async () => {
   try {

     const { data, error } = await supabase
       .from("conversations")
       .insert([
         {
           title,
           created_by_profile_id: user?.id,
         },
       ])
       .select()
       .single();
     if (error) throw error;
    //  alert("Conversation created successfully");
    //  setConversationData(initialState);
    // console.log(data)
     router.push("/chat/"+data.id);
   } catch (error) {
     alert(error.message);
   }
 };

 return (
   <>
     <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Chat GPT - New Conversation</h1>
         <p>Create a New Conversation</p>
         <label>Conversation title:</label>
         <input
           type="text"
           name="title"
           value={title}
           onChange={handleChange}
           placeholder="Enter a title"
         />
         <label>First message:</label>
         <input
           type="text"
           name="messageText"
           value={messageText}
           onChange={handleChange}
           placeholder="Enter your first message"
         />
         <button onClick={createConversation}>
           Send
         </button>
       </div>
   </>
 );
};

export default Create;