
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";

import LoginAuthentication from "./components/LoginAuthentication";
import Navigation from "./components/navigation"; 
import TravelProtect from "./components/TravelProtect";
import TravelProtectAllInfo from "./components/TravelProtectAllInfo";
import AccountInformation from "./components/AccountInformation"; 




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
        
        <div>
        <AccountInformation/>
        </div>


    </div>
  );
}

