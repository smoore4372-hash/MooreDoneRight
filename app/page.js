// app/page.js

export default function HomePage() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="card hero" id="top">
        <div className="hero-main">
          <h1>Bathroom Remodeling in Albany NY – Design & Price in Minutes</h1>
          <p className="hero-sub">
            Use our visual builder to customize your new shower or bath from
            home. See options for BCI acrylic walls, Delta fixtures, glass
            doors, LifeProof flooring, vanities and more – with live, upfront
            pricing.
          </p>

          <div className="hero-cta-row">
            <a href="/builder" className="btn-primary">
              Build My Shower / Bath
            </a>
            <a href="#contact" className="btn-secondary">
              Book Free In-Home Design Visit
            </a>
          </div>

          <ul className="hero-bullets">
            <li>✓ Tub-to-shower conversions & shower remodels</li>
            <li>✓ Tile showers, acrylic wall systems & custom bases</li>
            <li>✓ Serving Albany, Latham, Delmar, Loudonville & Saratoga</li>
          </ul>
        </div>

        <div className="hero-side">
          <div className="hero-card">
            <h2>Fast, Transparent Estimates</h2>
            <p>
              Every selection you make in the builder is added to a live cart, so
              you&apos;ll always see a clear, itemized price for your project.
            </p>
            <p className="hero-highlight">
              Typical projects start at:
              <br />
              <strong>Tub replacement from $8,500</strong>
              <br />
              <strong>Tile showers from $12,000</strong> with acrylic or
              fiberglass pan
              <br />
              <strong>Custom tile pans from $14,000+</strong>
            </p>
            <p className="tiny">
              *Pricing is for budgeting only and may vary based on actual
              measurements, structural work, plumbing/electrical changes and
              final selections.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="card" id="services">
        <h2>Remodeling Services We Offer</h2>
        <div className="grid-3">
          <div className="service-block">
            <h3>Tub-to-Shower Conversions</h3>
            <p>
              Convert a hard-to-use tub into a low-threshold walk-in shower with
              modern BCI Prime acrylic walls, upgraded Delta fixtures and
              frameless glass.
            </p>
          </div>
          <div className="service-block">
            <h3>Shower & Bath Systems</h3>
            <p>
              Choose from multiple base sizes, wall patterns, grab bars,
              shelving, niches, seats and glass doors. The builder lets you see
              it all come together in real time.
            </p>
          </div>
          <div className="service-block">
            <h3>Full Bathroom Updates</h3>
            <p>
              Add LifeProof luxury vinyl or tile flooring, new vanity &
              countertop, mirrors, lights, exhaust fan, wall finishes
              (wainscoting, shiplap, drywall) and more.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="card">
        <h2>Why Homeowners in the Capital Region Choose Moore Done Right</h2>
        <div className="grid-3">
          <div className="service-block">
            <h3>Local, Owner-Operated</h3>
            <p>
              We focus on the Capital Region – Albany, Schenectady, Troy,
              Saratoga, Columbia and Greene Counties – so you&apos;re never just a
              number in a national call center.
            </p>
          </div>
          <div className="service-block">
            <h3>Clear, Upfront Pricing</h3>
            <p>
              Our visual builder gives you realistic project ranges before we
              ever step into the home. No games, no “today only” pressure.
            </p>
          </div>
          <div className="service-block">
            <h3>Designed Around You</h3>
            <p>
              Safety-minded options like 12&quot; and 24&quot; grab bars, corner seats,
              slip-resistant bases and handheld shower heads – or spa upgrades
              like In2ition and rain heads.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="card" id="areas">
        <h2>Bathroom Remodeling Service Area</h2>
        <p>
          We specialize in bathroom remodels and shower projects throughout the
          Capital Region of New York:
        </p>
        <ul className="tag-list">
          <li>Albany</li>
          <li>Latham</li>
          <li>Delmar</li>
          <li>Loudonville</li>
          <li>Colonie</li>
          <li>Schenectady</li>
          <li>Troy</li>
          <li>Saratoga Springs</li>
          <li>Clifton Park</li>
          <li>Rensselaer County</li>
          <li>Columbia &amp; Greene Counties</li>
        </ul>
      </section>

      {/* SIMPLE “HOW IT WORKS” FUNNEL */}
      <section className="card">
        <h2>How the Process Works</h2>
        <ol className="steps-list">
          <li>
            <strong>1. Build your project online.</strong> Use the Visual Builder
            to choose walls, base, fixtures, doors, flooring and accessories.
          </li>
          <li>
            <strong>2. Get a ballpark estimate instantly.</strong> Every option
            you select updates the live cart so you know where your investment
            is landing.
          </li>
          <li>
            <strong>3. Schedule an in-home design & measurement visit.</strong>{" "}
            We confirm selections, measure precisely, review installation
            details and present a finalized proposal.
          </li>
          <li>
            <strong>4. Professional installation.</strong> Our team completes
            the project with respect for your home, clear communication and a
            thorough clean-up.
          </li>
        </ol>
        <div className="hero-cta-row">
          <a href="/builder" className="btn-primary">
            Start My Visual Builder
          </a>
          <a href="#contact" className="btn-secondary">
            Talk to a Designer
          </a>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section className="card" id="contact">
        <h2>Request Your Free In-Home Design & Price Lock</h2>
        <p>
          Tell us a little about your bathroom and we&apos;ll reach out to confirm
          a day and time. No obligation and no high-pressure sales tactics.
        </p>

        {/* NOTE: update the action to your preferred form handler or CRM later */}
        <form
          className="simple-form"
          method="POST"
          action="https://formsubmit.co/smoore4372@gmail.com"
        >
          <input type="hidden" name="_subject" value="New lead from Moore Done Right app" />
          <div className="form-grid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" required />
            </label>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              City / Town
              <input type="text" name="city" />
            </label>
          </div>
          <label>
            What are you looking to do?
            <textarea
              name="project_details"
              rows={4}
              placeholder="Example: convert tub to shower, tile floor, update vanity and lighting…"
            />
          </label>
          <button type="submit" className="btn-primary">
            Submit Request
          </button>
          <p className="tiny">
            By submitting, you agree that Moore Done Right may contact you by
            phone, text or email regarding your project. You can opt out at any
            time.
          </p>
        </form>
      </section>
    </div>
  );
}
