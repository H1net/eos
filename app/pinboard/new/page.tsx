'use client';

import { supabaseCreateForBrowser } from "@/lib/supabase-browser";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

// const supabase = supabaseCreateForBrowser()

// /pages/create.js

const CreatePin = () => {
  const initialState = {
    text: "",
  };

  const { user } = useAuth();

  //  const user = supabase.auth.getSession().user

  const router = useRouter();
  const [pinData, setPinData] = useState(initialState);
  const [supabase] = useState(() => supabaseCreateForBrowser())

  const { text } = pinData;

  const handleChange = (e: any) => {
    setPinData({ ...pinData, [e.target.name]: e.target.value });
  };

  const createPin = async () => {
    try {

      const { data, error } = await supabase
        .from("pins")
        .insert([
          {
            text,
            created_by_profile_id: user?.id,
          },
        ])
        .select()
        .single();
      if (error) throw error;
      //  alert("Pin created successfully");
      //  setPinData(initialState);
      // console.log(data)
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col px-2 prose max-w-none">
        <h1>New Pin</h1>
        <label>Pin text:</label>
        <textarea
          className="textarea textarea-bordered textarea-md w-full"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your pin text">
        </textarea>
        <button onClick={createPin} className="btn btn-primary btn-block">
          Add Pin
        </button>
      </div>
    </>
  );
};

export default CreatePin;