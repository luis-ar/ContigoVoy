import { supabase } from "@/lib/supabaseClient";
import { Tables } from "./core";

//llama a las tablas existentes en core
export async function insertData(table:Tables, data:unknown): Promise<boolean>{
 const {error} = await supabase.from(table).insert(data);
/* if (error) {
    console.error("Error al insertar datos en Supabase:", error.message);
    return false;*/

 return !error;
}