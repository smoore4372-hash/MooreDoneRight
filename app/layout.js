import "./globals.css";

export const metadata = {
  title: "Moore Done Right – Shower Specialists",
  description: "Visual bathroom & shower remodeling builder for the Capital Region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{
                width:56,height:56,borderRadius:14,background:"#0d4f7c",
                display:"flex",alignItems:"center",justifyContent:"center",
                overflow:"hidden"
              }}>
                <img
                  src="/images/logo.png"
                  alt="Moore Done Right Shower Specialists"
                  style={{width:"100%",height:"100%",objectFit:"contain"}}
                />
              </div>
              <div>
                <div style={{fontWeight:800,letterSpacing:"0.08em",fontSize:"0.85rem"}}>
                  MOORE DONE RIGHT
                </div>
                <div style={{fontSize:"0.8rem",color:"var(--text-muted)"}}>
                  Shower Specialists • Capital Region
                </div>
              </div>
            </div>
            <nav className="nav-links">
              <a href="/" className="active">Home</a>
              <a href="/builder">Visual Builder</a>
            </nav>
          </header>
          <main style={{marginTop:16}}>{children}</main>
        </div>
      </body>
    </html>
  );
}
