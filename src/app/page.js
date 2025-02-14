
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";
import Navigation from "./components/Navigation";
import TravelProtect from "./components/TravelProtect";
import TravelProtectAllInfo from "./components/TravelProtectAllInfo";

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

