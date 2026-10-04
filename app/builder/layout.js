// app/builder/layout.js – metadata for the (client) builder page
export const metadata = {
  title: "Shower & Bath Visual Builder with Live Pricing",
  description:
    "Design your new shower or bathtub replacement online. Pick bases, walls, Delta fixtures, glass doors and flooring and see an itemized estimate instantly. Serving Albany NY and the Capital Region.",
  alternates: { canonical: "/builder" },
};

export default function BuilderLayout({ children }) {
  return children;
}
