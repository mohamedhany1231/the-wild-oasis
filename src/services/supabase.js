import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ezayvrsgiwrbfpjrdqja.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YXl2cnNnaXdyYmZwanJkcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMDU4NTMsImV4cCI6MjAxNDc4MTg1M30.oRwrqDDvLoU2BFZX0IVk3HOOi4oYxVYqX8wMVzP1Ae0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
