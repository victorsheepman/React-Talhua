import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://sqrevjfizglmjxxfuvxy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxcmV2amZpemdsbWp4eGZ1dnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MTE5MDcsImV4cCI6MjAxODQ4NzkwN30.-eI2fmeRlqgwcMT2CaAF1WSYzm9jIbCEP9E-CEVugmw'
)

export default supabase
