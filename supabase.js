// Load Supabase client from CDN
const { createClient } = window['@supabase/supabase-js'];
const supabase = createClient('https://ifmuqihgfbxyxrxlhjxx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmbXVxaWhnZmJ4eXhyeGxoanh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MDA1MTYsImV4cCI6MjA2ODM3NjUxNn0.soSyGRyoR1jDGPW2aJJw8eNtWkLmYVNs-KavBZy4Ib4');
window.supabase = supabase;
