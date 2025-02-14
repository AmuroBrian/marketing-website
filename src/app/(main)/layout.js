// app/src/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <aside style={{ width: "250px", background: "#f0f0f0", padding: "20px" }}>
            📂 Dashboard Sidebar
          </aside>
          <main style={{ flexGrow: 1, padding: "20px" }}>
            <header>📊 Dashboard Header</header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
