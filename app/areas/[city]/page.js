// app/areas/[city]/page.js
import { notFound } from "next/navigation";
import { SERVICES, CITIES, BUSINESS, SITE_URL, getCity } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }) {
  const city = getCity(params.city);
  if (!city) return {};
  return {
    title: `Bathroom & Shower Remodeling in ${city.name}, NY`,
    description: `Shower remodels, tub-to-shower conversions and bathroom remodeling in ${city.name}, NY (${city.county}). Upfront pricing online and a free in-home design visit from Moore Done Right.`,
    alternates: { canonical: `/areas/${city.slug}` },
  };
}

export default function CityPage({ params }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Bathroom and shower remodeling in ${city.name}, NY`,
    url: `${SITE_URL}/areas/${city.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: `${city.name}, NY` },
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="card hero">
        <div className="hero-main">
          <h1>Bathroom &amp; Shower Remodeling in {city.name}, NY</h1>
          <p className="hero-sub">
            Moore Done Right helps {city.name} homeowners ({city.county}) replace
            worn-out tubs and showers and update whole bathrooms. Build your
            project online with live pricing, then book a free in-home design
            and measurement visit.
          </p>
          <div className="hero-cta-row">
            <a href="/builder" className="btn-primary">
              Build My Shower / Bath
            </a>
            <a href="/#contact" className="btn-secondary">
              Book Free In-Home Visit in {city.name}
            </a>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Remodeling Services in {city.name}</h2>
        <div className="grid-3">
          {SERVICES.map((s) => (
            <div className="service-block" key={s.slug}>
              <h3>
                <a href={`/services/${s.slug}`}>{s.name}</a>
              </h3>
              <p>{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Nearby Areas We Serve</h2>
        <ul className="tag-list">
          {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
            <li key={c.slug}>
              <a href={`/areas/${c.slug}`}>{c.name}</a>
            </li>
          ))}
        </ul>
        <p>
          Call or text{" "}
          <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>.
        </p>
      </section>
    </div>
  );
}
