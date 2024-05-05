import { createClient } from '@supabase/supabase-js'
import { Auth} from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import image5 from '../assets/image5.jpg'
import ColorChangingCircle from '../components/circle';
import Intro from '../components/intro';

const supabase = createClient(
    "https://eatvfemgvbiwuzljhsmd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdHZmZW1ndmJpd3V6bGpoc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMDI1NDYsImV4cCI6MjAyNzc3ODU0Nn0.CaSDu7QuPworTX509rNlBCDmIVKaW-pEl9INfw4zRSc"
);

function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange((event) => {
    if(event === "SIGNED_IN"){
        //redirect to success page
        navigate( "/home" );
    }
})
    return (
      <div className="bg-black h-screen w-screen flex justify-center">
        <div class="w-1/2 h-screen flex flex-col justify-start items-start  text-gr font-semibold text-lg leading-normal"><div class="w-full flex justify-"><img src={image5} class="h-screen"></img></div></div>
        
        <header className=" bg-black px-20 w-1/3 flex flex-col justify-center ">
        <div class="flex justify-start items-center"><ColorChangingCircle/><img src={logo} class="w-3/5 my-5"></img></div>
          <Auth
            appearance={{theme:ThemeSupa}}
            theme='light'
            supabaseClient={supabase}
            providers={["google"]}
          />
        </header>
      </div>
    );
  }
  
  export default Login;