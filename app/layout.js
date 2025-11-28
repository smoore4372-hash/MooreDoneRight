// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Moore Done Right | Bathroom & Shower Remodeling in Albany NY",
  description:
    "Design and price your new shower or bath in minutes. Moore Done Right provides tub-to-shower conversions, walk-in showers, tile showers, and bathroom remodeling across the Capital Region of NY.",
  metadataBase: new URL("https://moore-done-right-rznp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moore Done Right – Shower & Bath Visual Builder",
    description:
      "Build and price your new shower or bath from home. See options for BCI acrylic walls, Delta fixtures, glass doors, LifeProof flooring and more.",
    url: "https://moore-done-right-rznp.vercel.app",
    siteName: "Moore Done Right",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <div className="logo-wrap">
              <img
                src="/images/logo.png"
                alt="Moore Done Right logo"
                className="logo-img"
              />
              <div className="logo-text">
                <div className="logo-title">Moore Done Right</div>
                <div className="logo-sub">Shower & Bath Specialists</div>
              </div>
            </div>
            <nav className="main-nav">
              <a href="/">Home</a>
              <a href="/builder">Visual Builder</a>
              <a href="#services">Services</a>
              <a href="#areas">Service Areas</a>
              <a href="#contact">Free Design Visit</a>
            </nav>
          </div>
        </header>

        <main className="site-main">{children}</main>

        <footer class
