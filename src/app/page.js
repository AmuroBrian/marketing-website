import LoginAuthentication from "./components/LoginAuthentication";
import Navigation from "./components/navigation"; // Make sure "Navigation" has a capital "N"

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
    </div>
  );
}
