import { createClient } from "@supabase/supabase-js";
import { supabase_url, supabase_public_anon_key } from "./envkeys";

const options = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionUrl: true,
};

export const supabase = createClient(
  `${supabase_url}`,
  `${supabase_public_anon_key}`,
  options
);
