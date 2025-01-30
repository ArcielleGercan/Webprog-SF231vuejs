import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://wkgliaonauuwiqnlpzmp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ2xpYW9uYXV1d2lxbmxwem1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNDYwMjEsImV4cCI6MjA1MzgyMjAyMX0.S_5mxSR-iBGeJCzgTvgVdILHLqmblxOBHkVkGjRdnYs')