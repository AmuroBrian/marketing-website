
import Image from "next/image";
import WhatIsAgent from "./components/WhatIsAgent";
import EmailForm from "./components/EmailForm";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navigation />
      </div>
      <div>
        <WhatIsAgent />
        <EmailForm />
      </div>
    </div>
  );
};
