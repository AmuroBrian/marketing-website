
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";
<<<<<<< HEAD
import LoginAuthentication from "./components/LoginAuthentication";
import Navigation from "./components/navigation"; 
import TravelProtect from "./components/TravelProtect";
import TravelProtectAllInfo from "./components/TravelProtectAllInfo";


<<<<<<< HEAD

export default function Home() {
  return (
    <div>
        <div>
          <LoginAuthentication />
        </div>

        <div>
            <Navigation />
        </div>

        <div>
            <WhatIsAgent />
        </div>

        <div>
            <EmailForm />
        </div>

      

=======
=======
import Navigation from "./components/navigation";
>>>>>>> ed9ad2d1567182b48d30d60e1137fec3205aa835

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
>>>>>>> 71561d960b332594f5cc43c2b26c2688f6387299
     
        <div>
          <LoginAuthentication/>
        </div>

    
        <div>
          <br></br>
            <Navigation/>
        </div>

        <div>
          <WhatIsAgent/>
          <EmailForm/>
        </div>



        <div>
          <TravelProtect/>
            <br></br>
          <TravelProtectAllInfo/>
        </div>

=======
      <div>
        <Navigation />
      </div>
      <div>
        <WhatIsAgent />
        <EmailForm />
      </div>
>>>>>>> ed9ad2d1567182b48d30d60e1137fec3205aa835
    </div>
  );
}

