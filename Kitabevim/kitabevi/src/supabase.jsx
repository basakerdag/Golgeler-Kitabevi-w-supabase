import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://flawwoazwgvfhnmoqctf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsYXd3b2F6d2d2ZmhubW9xY3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMDY4ODAsImV4cCI6MjA1Njc4Mjg4MH0.scUiMVkU7WKrWAM_90eGlxzOU18emAMwH4A-IqwRSbA";

const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default supabase;
