// app/services/[slug]/page.js
import { notFound } from "next/navigation";
import { SERVICES, CITIES, BUSINESS, SITE_URL, getService } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Albany NY & Capital Region`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: CITIES.map((c) => ({
        "@type": "City",
        name: `${c.name}, NY`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="card hero">
        <div className="hero-main">
          <h1>{service.h1}</h1>
          <p className="hero-sub">{service.intro}</p>
          <div className="hero-cta-row">
            <a href="/builder" className="btn-primary">
              Price It in the Visual Builder
            </a>
            <a href="/#contact" className="btn-secondary">
              Book Free In-Home Design Visit
            </a>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>What&apos;s Included</h2>
        <ul className="hero-bullets">
          {service.points.map((p) => (
            <li key={p}>✓ {p}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Frequently Asked Questions</h2>
        {service.faqs.map((f) => (
          <div className="service-block" key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Where We Provide {service.name}</h2>
        <ul className="tag-list">
          {CITIES.map((c) => (
            <li key={c.slug}>
              <a href={`/areas/${c.slug}`}>{c.name}</a>
            </li>
          ))}
        </ul>
        <p>
          Call or text{" "}
          <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a> for a
          free in-home design visit.
        </p>
      </section>
    </div>
  );
}
