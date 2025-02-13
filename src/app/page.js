
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    


    <div className="flex flex-col min-h-screen">
      {/* Top Section - LoginAuthentication */}
      <div>
        <LoginAuthentication />
      </div>

      {/* Bottom Section - Navigation (Sticky to Bottom) */}
      <div>
        <Navigation />
      </div>

    <div>
    <WhatIsAgent/>
    <EmailForm/>
    </div>

  );
}
