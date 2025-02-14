
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
    <div className="flex flex-col min-h-screen">
      <div>
        <br></br>
        <Navigation />
      </div>
      <div>
        <WhatIsAgent />
        <EmailForm />
      </div>
      <div>
        <TravelProtect />
        <br></br>
        <TravelProtectAllInfo />
      </div>
    </div>
  );
}

