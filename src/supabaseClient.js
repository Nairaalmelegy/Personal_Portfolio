import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://utyonausewqjbzgddlin.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0eW9uYXVzZXdxamJ6Z2RkbGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NjQzMDgsImV4cCI6MjA1NDU0MDMwOH0.w6BERqF-SpNd7Yr6Yuk61JbmYYy9AID3ZUhb65rld54";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
