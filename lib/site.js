// lib/site.js – single source of truth for SEO, schema and sitemap data

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://moore-done-right-rznp.vercel.app"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Moore Done Right",
  phone: "+1-518-210-4372",
  phoneDisplay: "(518) 210-4372",
  email: "smoore4372@gmail.com",
  logo: "/images/logo.png",
};

export const SERVICES = [
  {
    slug: "tub-to-shower-conversion",
    name: "Tub-to-Shower Conversion",
    title: "Tub-to-Shower Conversion",
    h1: "Tub-to-Shower Conversions in the Capital Region",
    summary:
      "Replace a tub you no longer use with a safe, low-threshold walk-in shower.",
    description:
      "Tub-to-shower conversions in Albany, Saratoga and the Capital Region NY. Low-threshold bases, BCI acrylic or tile walls, Delta fixtures and glass. Free in-home design visit.",
    intro:
      "If nobody in your home takes baths anymore, or stepping over a tall tub wall is getting harder, a tub-to-shower conversion gives you back usable space and a much safer bathroom. We remove the tub, rebuild the plumbing and framing as needed, and install a low-threshold shower that fits the same footprint.",
    points: [
      "Low-threshold and curbless-style bases for easier, safer entry",
      "BCI Prime acrylic wall systems or custom tile walls",
      "Delta fixtures, handheld sprayers and optional rain heads",
      "Grab bars, corner seats, niches and shelving built in",
      "Frameless, semi-frameless or slider glass doors",
    ],
    faqs: [
      {
        q: "How long does a tub-to-shower conversion take?",
        a: "Most conversions are completed in a few working days once materials are on site. Tile showers take longer than acrylic wall systems because of waterproofing and cure times. We confirm the schedule in your written proposal.",
      },
      {
        q: "Will the new shower fit where my tub is now?",
        a: "In most homes, yes. Standard tubs are 60 inches long and 30 to 32 inches wide, and we offer shower bases sized to match. We measure during your free in-home visit to confirm.",
      },
      {
        q: "Can I see options and pricing before you visit?",
        a: "Yes. Our online Visual Builder lets you pick the base, walls, fixtures and glass and see a running, itemized estimate before we schedule a visit.",
      },
    ],
  },
  {
    slug: "walk-in-showers",
    name: "Walk-In Shower Remodeling",
    title: "Walk-In Shower Remodeling",
    h1: "Walk-In Shower Remodeling in the Capital Region",
    summary:
      "Replace an old or leaking shower with a modern, accessible walk-in design.",
    description:
      "Walk-in shower remodeling in Albany, Latham, Saratoga and the Capital Region NY. Accessible bases, seats, grab bars and glass. Upfront pricing and a free design visit.",
    intro:
      "An outdated, cramped or leaking shower is one of the most common reasons homeowners call us. We replace the walls, base, valve and fixtures with a walk-in design that is easier to clean, easier to use and built to last.",
    points: [
      "Multiple base sizes, including 48x36, 60x30 and 60x32 options",
      "Slip-resistant surfaces and low-profile entries",
      "Optional bench seats, grab bars (12 and 24 inch) and handheld showers",
      "Moisture-resistant wall panels or tile with proper waterproofing",
      "Glass door styles to suit your layout and budget",
    ],
    faqs: [
      {
        q: "Can you make a shower safer for aging in place?",
        a: "Yes. Low-threshold entries, grab bars, seats and handheld shower heads can all be added. We design around how you use the space, not just how it looks.",
      },
      {
        q: "Do you handle the plumbing and electrical too?",
        a: "We coordinate the plumbing, exhaust fan and lighting work needed for the project so you deal with one company. Scope is confirmed in your written proposal.",
      },
    ],
  },
  {
    slug: "tile-showers",
    name: "Custom Tile Showers",
    title: "Custom Tile Showers",
    h1: "Custom Tile Showers in the Capital Region",
    summary:
      "Fully custom tile showers with proper waterproofing and a design made around you.",
    description:
      "Custom tile showers in Albany, Saratoga, Troy and the Capital Region NY. Tile pans, niches, benches and glass, installed with proper waterproofing. Free in-home design visit.",
    intro:
      "When you want a one-of-a-kind look, a custom tile shower lets you choose the tile, layout, niche and bench exactly how you want them. Our focus is what you can't see: correct slope, waterproofing and installation, so the shower stays watertight for years.",
    points: [
      "Custom tile pans or acrylic and fiberglass pans under tile",
      "Subway, large-format and mosaic tile layouts",
      "Built-in niches, benches and accent bands",
      "Waterproofing systems installed to manufacturer specifications",
      "Clear selections and an itemized, written proposal",
    ],
    faqs: [
      {
        q: "Is tile or an acrylic wall system better?",
        a: "It depends on budget, timeline and the look you want. Acrylic systems install faster and have no grout lines to maintain. Tile offers unlimited design choices. We'll walk you through both during your visit.",
      },
      {
        q: "Why does a tile shower cost more?",
        a: "Tile showers involve more labor, more steps (waterproofing, setting, grouting, sealing) and more cure time. You are paying for a custom result.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Full Bathroom Remodeling",
    title: "Full Bathroom Remodeling",
    h1: "Bathroom Remodeling in the Capital Region",
    summary:
      "Shower, flooring, vanity, lighting and finishes handled together.",
    description:
      "Bathroom remodeling in Albany, Latham, Saratoga and the Capital Region NY. Showers, LifeProof flooring, vanities, lighting and more. Free in-home design visit.",
    intro:
      "A full bathroom update brings the shower, floor, vanity, lighting and finishes together into one cohesive project. One contractor, one schedule and one proposal, with the details you chose in the Visual Builder carried through to installation.",
    points: [
      "LifeProof luxury vinyl or tile flooring",
      "New vanities, countertops, mirrors and lighting",
      "Quiet exhaust fans for moisture control",
      "Wall finishes such as wainscoting, shiplap and fresh drywall",
      "Shower or tub upgrades as part of the same project",
    ],
    faqs: [
      {
        q: "How do I get a price for a full bathroom?",
        a: "Start with the Visual Builder for a ballpark, then book a free in-home design visit. We measure, confirm selections and give you a finalized written proposal.",
      },
    ],
  },
];

export const CITIES = [
  { slug: "albany-ny", name: "Albany", county: "Albany County" },
  { slug: "latham-ny", name: "Latham", county: "Albany County" },
  { slug: "delmar-ny", name: "Delmar", county: "Albany County" },
  { slug: "loudonville-ny", name: "Loudonville", county: "Albany County" },
  { slug: "colonie-ny", name: "Colonie", county: "Albany County" },
  { slug: "schenectady-ny", name: "Schenectady", county: "Schenectady County" },
  { slug: "troy-ny", name: "Troy", county: "Rensselaer County" },
  { slug: "saratoga-springs-ny", name: "Saratoga Springs", county: "Saratoga County" },
  { slug: "clifton-park-ny", name: "Clifton Park", county: "Saratoga County" },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
