
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";
import LoginAuthentication from "./components/LoginAuthentication";
import Navigation from "./components/navigation"; 
import TravelProtect from "./components/TravelProtect";
import TravelProtectAllInfo from "./components/TravelProtectAllInfo";
<<<<<<< HEAD

=======
import AccountInformation from "./components/AccountInformation"; 
>>>>>>> 2023c666a068b223235fdc967d9fa2ed3b291fab

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
     
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
        <br></br>
        <Navigation />
      </div>
>>>>>>> 2023c666a068b223235fdc967d9fa2ed3b291fab
      <div>
        <WhatIsAgent />
        <EmailForm />
      </div>
<<<<<<< HEAD
=======
      <div>
        <TravelProtect />
        <br></br>
        <TravelProtectAllInfo />
      </div>
>>>>>>> 2023c666a068b223235fdc967d9fa2ed3b291fab
    </div>
  );
}

