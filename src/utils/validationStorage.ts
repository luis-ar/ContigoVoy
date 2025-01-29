import { supabase } from "@/lib/supabaseClient";

export const validateStorage = async () => {
  const { data, error } = await supabase.storage.listBuckets();
  const bucketExists = data?.some((bucket) => bucket.name === "avatars");
  if (!bucketExists) {
    await supabase.storage.createBucket("avatars", {
      public: true,
    });
  }
};