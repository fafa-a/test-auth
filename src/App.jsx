import { createClient } from '@supabase/supabase-js'
import {
  Auth,
  ThemeSupa,
} from '@supabase/auth-ui-react'

const supabase = createClient(
  'https://wbsyqrrzaoxqjujtaglo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indic3lxcnJ6YW94cWp1anRhZ2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNjY4MjksImV4cCI6MTk4Nzg0MjgyOX0.y2CVm-6mEdTTw98mqEA_N0UowGgPS0rv1KZ9AoS41vM'
)
import latepoint from './assets/data/mod475_latepoint_customers.json'

const {data} = latepoint[2]

  for (const user of data) {
    const {email, password} = user 
    if(email ==="gomes.boris@gmail.com") {
    const res = await supabase.auth.signUp({
     email,
     password
    }) 
    console.log(res)
    }
  }

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google','facebook']}
  />
)

export default App
