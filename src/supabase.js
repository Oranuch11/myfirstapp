import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wuxzzffqtoofdlepzqzd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1eHp6ZmZxdG9vZmRsZXB6cXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0MDk4MzMsImV4cCI6MTk5NDk4NTgzM30.RkmXtgq62iVOXj-InbnoxfcQ0n0KwfpHj_ta7HOkb6M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
