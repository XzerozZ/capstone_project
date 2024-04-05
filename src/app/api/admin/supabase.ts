import { createClient } from "@supabase/supabase-js";
import { v4 as uuid } from "uuid";
import { Supabase } from "@/app/api/interface/interface";

const supabaseConfig : Supabase = {
    supabaseUrl : process.env.SUPABASE_URL || '' ,
    supabaseKey : process.env.SUPABASE_KEY || ''
}

export const supabase: any = createClient(supabaseConfig.supabaseUrl,supabaseConfig.supabaseKey);

export const upLoadIMG = async (file: any) => {
  const fileName = "images/" + uuid() + ".jpg"  ;
  const { error } = await supabase.storage
    .from("CAPSTONE")
    .upload(fileName, file, { cacheControl: "image/jpg"});
  if (error) {
    throw error;
  }
  const { data } = await supabase.storage.from("CAPSTONE").getPublicUrl(fileName);
  return data.publicUrl;
};