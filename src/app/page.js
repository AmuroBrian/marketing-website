
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";
import LoginAuthentication from "./components/LoginAuthentication";
import Navigation from "./components/navigation"; 



export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
     
        <div>
          <LoginAuthentication/>
        </div>

    
        <div>
            <Navigation/>
        </div>

        <div>
          <WhatIsAgent/>
          <EmailForm/>
        </div>

    </div>

  );
};
