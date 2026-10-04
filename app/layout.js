// app/layout.js
import "./globals.css";
import { SITE_URL, BUSINESS, SERVICES, CITIES } from "@/lib/site";

export const metadata = {
  title: {
    default: "Moore Done Right | Bathroom & Shower Remodeling in Albany NY",
    template: "%s | Moore Done Right",
  },
  description:
    "Design and price your new shower or bath in minutes. Moore Done Right provides tub-to-shower conversions, walk-in showers, tile showers, and bathroom remodeling across the Capital Region of NY.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Moore Done Right – Shower & Bath Visual Builder",
    description:
      "Build and price your new shower or bath from home. See options for BCI acrylic walls, Delta fixtures, glass doors, LifeProof flooring and more.",
    url: SITE_URL,
    siteName: "Moore Done Right",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  image: `${SITE_URL}${BUSINESS.logo}`,
  logo: `${SITE_URL}${BUSINESS.logo}`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  description:
    "Shower, bathtub and bathroom remodeling in Albany NY and the Capital Region.",
  areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c.name}, NY` })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bathroom remodeling services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
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
              <a href="/#services">Services</a>
              <a href="/#areas">Service Areas</a>
              <a href="/#contact">Free Design Visit</a>
            </nav>
          </div>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div>
              <strong>Moore Done Right</strong> – Bathroom Remodeling
              <br />
              Serving Albany, Latham, Delmar, Saratoga, Loudonville and the
              Capital Region of NY.
            </div>
            <div className="footer-contact">
              <div>Call or text: <a href="tel:15182104372">(518) 210-4372</a></div>
              <div>Email: <a href="mailto:smoore4372@gmail.com">smoore4372@gmail.com</a></div>
              <div>© {new Date().getFullYear()} Moore Done Right. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
