import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://gvhnttzguppthdadicsu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aG50dHpndXBwdGhkYWRpY3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNjI1MTksImV4cCI6MjA1MzkzODUxOX0.1SBbV6GxFMAIrXvrTLk6E1O9dsFm4OV9HCVbz6FT4dA"
);
