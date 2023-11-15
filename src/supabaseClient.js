import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://udtnhbnqthkdfztilewy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkdG5oYm5xdGhrZGZ6dGlsZXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMDMxODYsImV4cCI6MjAxNTU3OTE4Nn0.BJPqgSW2V6lJ_GMV--DkonQ3GoGxeMj42XD2aqhlbWw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
