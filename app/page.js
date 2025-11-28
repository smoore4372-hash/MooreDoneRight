export default function Home() {
  return (
    <div className="card">
      <h1 style={{marginTop:0,fontSize:"1.7rem"}}>
        Moore Done Right – Shower & Bath Visual Builder
      </h1>
      <p style={{marginTop:4,fontSize:"0.95rem",color:"var(--text-muted)"}}>
        This is your landing page for homeowners and reps. Use the Visual Builder
        tab above to build a full shower or bath package with live pricing, images,
        and an itemized cart.
      </p>
      <ul style={{fontSize:"0.9rem",marginTop:10}}>
        <li>Live cart with itemized selections.</li>
        <li>BCI Prime acrylic walls, bases & accessories (sample set wired in).</li>
        <li>LifeProof luxury vinyl & LVT flooring options (sample set).</li>
        <li>Delta fixtures (T17, In2ition, R22000 upgrade paths).</li>
        <li>Good / Better / Best packages + fully custom builds.</li>
      </ul>
      <p style={{marginTop:10,fontSize:"0.9rem"}}>
        To continue, click <strong>Visual Builder</strong> in the top navigation.
      </p>
    </div>
  );
}
