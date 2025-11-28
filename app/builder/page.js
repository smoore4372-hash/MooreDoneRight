const products = {
  showerTypes: [
    {
      id: "tub_to_shower",
      name: "Tub-to-Shower Conversion",
      description: "Remove existing tub, install low-threshold shower system.",
      basePrice: 9500
    },
    {
      id: "shower_only",
      name: "Shower Remodel",
      description: "Replace existing shower with new walls, base, and fixtures.",
      basePrice: 8500
    },
    {
      id: "tub_replacement",
      name: "Tub Replacement",
      description: "New tub and walls in existing alcove.",
      basePrice: 8500
    }
  ],
  wallSystems: [
    {
      id: "bci_subway_white",
      name: "BCI Prime – White Subway",
      description: "Classic subway pattern acrylic wall system.",
      image: "/images/sample-wall-subway.png",
      priceAdj: 2000
    },
    {
      id: "bci_marble_bianca",
      name: "BCI Prime – Bianca Marble",
      description: "Elegant marble-look acrylic for a premium feel.",
      image: "/images/sample-wall-marble.png",
      priceAdj: 2600
    },
    {
      id: "bci_slabs_sandbar",
      name: "BCI Prime – Sandbar Large Format",
      description: "Large-format acrylic for a modern, low-grout look.",
      image: "/images/sample-wall-sandbar.png",
      priceAdj: 2400
    }
  ],
 bases: [
  {
    id: "base_60x30",
    name: '60" x 30" Acrylic Shower Base',
    description: "Standard 5' acrylic shower pan with center drain.",
    image: "/images/sample-base-60x30.png",
    price: 1200
  },
  {
    id: "base_60x32",
    name: '60" x 32" Acrylic Shower Base',
    description: "Slightly deeper base for extra elbow room.",
    image: "/images/sample-base-60x32.png",
    price: 1300
  },
  {
    id: "base_48x36",
    name: '48" x 36" Acrylic Shower Base',
    description: "Compact base for smaller bathrooms.",
    image: "/images/sample-base-48x36.png",
    price: 1100
  }
],
  fixtures: [
    {
      id: "delta_t17_classic",
      name: "Delta T17 Series – Classic Trim",
      description: "Pressure-balanced T17 trim with standard showerhead.",
      image: "/images/sample-fixture-t17.png",
      price: 750
    },
    {
      id: "delta_in2ition",
      name: "Delta In2ition Combo Shower",
      description: "Handheld and fixed head combo for a spa-like experience.",
      image: "/images/sample-fixture-in2ition.png",
      price: 950
    },
    {
      id: "delta_r22000_upgrade",
      name: "Delta R22000 Valve + Trim Upgrade",
      description: "Upgraded universal valve body and premium trim.",
      image: "/images/sample-fixture-r22000.png",
      price: 1250
    }
  ],
  glass: [
    {
      id: "glass_slider_clear",
      name: "Clear Glass Slider",
      description: "Frameless-style sliding door, clear tempered glass.",
      image: "/images/sample-glass-slider.png",
      price: 1800
    },
    {
      id: "glass_hinge_black",
      name: "Hinged Door – Matte Black",
      description: "Premium hinged door with matte black hardware.",
      image: "/images/sample-glass-hinge.png",
      price: 2100
    }
  ],
  flooring: [
    {
      id: "lifeproof_walton_oak",
      name: "LifeProof Walton Oak LVP",
      description: "Waterproof luxury vinyl plank from Home Depot.",
      image: "/images/sample-floor-lvp1.png",
      pricePerRoom: 1800
    },
    {
      id: "lifeproof_dusk_hickory",
      name: "LifeProof Dusk Hickory LVP",
      description: "Durable, scratch-resistant plank in a warm tone.",
      image: "/images/sample-floor-lvp2.png",
      pricePerRoom: 1900
    },
    {
      id: "lifeproof_lvt_stone",
      name: "LifeProof Stone Look LVT",
      description: "Luxury vinyl tile with stone appearance.",
      image: "/images/sample-floor-lvt.png",
      pricePerRoom: 2000
    }
  ],
  accessories: [
    {
      id: "grab_bar_24",
      name: "24" Grab Bar (qty 1)",
      description: "Stainless grab bar installed to blocking.",
      price: 275
    },
    {
      id: "grab_bar_12",
      name: "12" Grab Bar (qty 1)",
      description: "Shorter grab bar, ideal for entries.",
      price: 225
    },
    {
      id: "niche_single",
      name: "Single Niche",
      description: "Built-in storage niche for shampoo and soaps.",
      price: 450
    },
    {
      id: "seat_corner",
      name: "Corner Seat",
      description: "Triangular corner seat integrated into system.",
      price: 650
    }
  ]
};

function formatMoney(n) {
  return "$" + n.toLocaleString("en-US", {maximumFractionDigits: 0});
}

export default function BuilderPage() {
  // Simple in-memory state using React hooks
  const [selection, setSelection] = React.useState({
    showerType: "tub_to_shower",
    wallSystem: "bci_subway_white",
    base: "base_60x30",
    fixture: "delta_t17_classic",
    glass: "glass_slider_clear",
    flooring: null,
    accessories: []
  });

  function toggleAccessory(id) {
    setSelection(prev => {
      const exists = prev.accessories.includes(id);
      return {
        ...prev,
        accessories: exists
          ? prev.accessories.filter(x => x !== id)
          : [...prev.accessories, id]
      };
    });
  }

  function setField(field, value) {
    setSelection(prev => ({ ...prev, [field]: value }));
  }

  function buildCart() {
    const cart = [];

    const showerType = products.showerTypes.find(p => p.id === selection.showerType);
    if (showerType) {
      cart.push({
        label: showerType.name,
        price: showerType.basePrice
      });
    }

    const wall = products.wallSystems.find(p => p.id === selection.wallSystem);
    if (wall) {
      cart.push({
        label: wall.name,
        price: wall.priceAdj
      });
    }

    const base = products.bases.find(p => p.id === selection.base);
    if (base) {
      cart.push({
        label: base.name,
        price: base.price
      });
    }

    const fixture = products.fixtures.find(p => p.id === selection.fixture);
    if (fixture) {
      cart.push({
        label: fixture.name,
        price: fixture.price
      });
    }

    const glass = products.glass.find(p => p.id === selection.glass);
    if (glass) {
      cart.push({
        label: glass.name,
        price: glass.price
      });
    }

    if (selection.flooring) {
      const floor = products.flooring.find(p => p.id === selection.flooring);
      if (floor) {
        cart.push({
          label: floor.name,
          price: floor.pricePerRoom
        });
      }
    }

    products.accessories.forEach(acc => {
      if (selection.accessories.includes(acc.id)) {
        cart.push({
          label: acc.name,
          price: acc.price
        });
      }
    });

    return cart;
  }

  const cart = buildCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const estPayment = total > 0 ? Math.round(total / 120) : 0;

  function renderSelect(label, field, items, key="id") {
    return (
      <div style={{marginBottom:10}}>
        <div style={{fontSize:"0.8rem",fontWeight:600,marginBottom:4}}>{label}</div>
        <select
          value={selection[field]}
          onChange={e => setField(field, e.target.value)}
          style={{
            width:"100%",padding:"7px 9px",borderRadius:8,
            border:"1px solid #d1d5db",background:"#f9fafb"
          }}
        >
          {items.map(item => (
            <option key={item[key]} value={item[key]}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="grid">
      <div className="card">
        <h2 style={{marginTop:0,fontSize:"1.3rem"}}>Build the Shower / Bath</h2>
        <p style={{marginTop:4,fontSize:"0.85rem",color:"var(--text-muted)"}}>
          Choose each component. The cart on the right will update instantly with
          line-item pricing. Images below change as you pick different walls,
          bases and fixtures.
        </p>

        {renderSelect("Project Type", "showerType", products.showerTypes)}
        {renderSelect("Wall System (BCI Prime)", "wallSystem", products.wallSystems)}
        {renderSelect("Shower Base Size", "base", products.bases)}
        {renderSelect("Delta Fixtures", "fixture", products.fixtures)}
        {renderSelect("Glass Door", "glass", products.glass)}

        <div style={{marginTop:8}}>
          {renderSelect(
            "LifeProof Flooring (optional)",
            "flooring",
            [{id:"",name:"No LifeProof flooring"}].concat(products.flooring),
            "id"
          )}
        </div>

        <div style={{marginTop:8}}>
          <div style={{fontSize:"0.8rem",fontWeight:600,marginBottom:4}}>
            Accessories
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {products.accessories.map(acc => {
              const active = selection.accessories.includes(acc.id);
              return (
                <button
                  key={acc.id}
                  type="button"
                  onClick={() => toggleAccessory(acc.id)}
                  style={{
                    borderRadius:999,
                    border: active ? "1px solid var(--primary)" : "1px solid #d1d5db",
                    background: active ? "var(--primary-light)" : "white",
                    padding:"4px 9px",
                    fontSize:"0.75rem",
                    cursor:"pointer"
                  }}
                >
                  {acc.name}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{marginTop:16}}>
          <h3 style={{fontSize:"1rem",marginBottom:6}}>Visual Preview (sample)</h3>
          <div style={{
            borderRadius:14,
            border:"1px solid #e5e7eb",
            padding:10,
            background:"linear-gradient(145deg,#f9fafb,#e5ecff)"
          }}>
            <div style={{display:"grid",gridTemplateColumns:"2fr 1.1fr",gap:10}}>
              <div style={{
                borderRadius:12,
                background:"#111827",
                padding:8,
                color:"white",
                minHeight:150,
                position:"relative",
                overflow:"hidden"
              }}>
                <div style={{
                  position:"absolute",
                  inset:0,
                  opacity:0.42,
                  background:"radial-gradient(circle at top,#4b5563,#020617)"
                }} />
                <div style={{position:"relative",zIndex:1}}>
                  <div style={{fontSize:"0.8rem",opacity:0.9}}>
                    {products.wallSystems.find(w => w.id === selection.wallSystem)?.name}
                  </div>
                  <div style={{fontSize:"0.7rem",opacity:0.8,marginBottom:6}}>
                    {products.bases.find(b => b.id === selection.base)?.name}
                  </div>
                  <div style={{
                    marginTop:30,
                    height:80,
                    borderRadius:10,
                    background:"linear-gradient(135deg,#e5e7eb,#f9fafb)",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"#1f2937",
                    fontSize:"0.8rem"
                  }}>
                    Sample render – final app will show real photography / 3D.
                  </div>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:6,fontSize:"0.75rem"}}>
                <div style={{borderRadius:10,background:"white",padding:6,border:"1px solid #e5e7eb"}}>
                  <strong>Fixtures:</strong><br />
                  {products.fixtures.find(f => f.id === selection.fixture)?.name}
                </div>
                <div style={{borderRadius:10,background:"white",padding:6,border:"1px solid #e5e7eb"}}>
                  <strong>Glass:</strong><br />
                  {products.glass.find(g => g.id === selection.glass)?.name}
                </div>
                {selection.flooring && (
                  <div style={{borderRadius:10,background:"white",padding:6,border:"1px solid #e5e7eb"}}>
                    <strong>Flooring:</strong><br />
                    {products.flooring.find(fl => fl.id === selection.flooring)?.name}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p style={{marginTop:10,fontSize:"0.7rem",color:"var(--text-muted)"}}>
          <strong>Disclaimer:</strong> All pricing shown is for budgeting and concept
          only and may vary based on site conditions, final selections, structural
          changes, code requirements, and current material / labor costs.
        </p>
      </div>

      <aside className="card">
        <h2 style={{marginTop:0,fontSize:"1.2rem"}}>Live Cart & Estimate</h2>
        <div style={{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:8}}>
          This is what you or the homeowner review at the table. Every selection on
          the left appears here as a line item.
        </div>
        <div style={{
          maxHeight:260,
          overflowY:"auto",
          borderRadius:10,
          border:"1px solid #e5e7eb",
          padding:"6px 8px",
          background:"#f9fafb",
          fontSize:"0.8rem"
        }}>
          {cart.map((item, idx) => (
            <div
              key={idx}
              style={{
                display:"flex",
                justifyContent:"space-between",
                gap:8,
                padding:"4px 0",
                borderBottom: idx === cart.length - 1 ? "none" : "1px dashed #e5e7eb"
              }}
            >
              <span>{item.label}</span>
              <span style={{fontWeight:600}}>{formatMoney(item.price)}</span>
            </div>
          ))}
          {cart.length === 0 && (
            <div style={{fontStyle:"italic",color:"var(--text-muted)"}}>
              Start selecting items on the left to build an estimate.
            </div>
          )}
        </div>

        <div style={{marginTop:10}}>
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"baseline",
            marginBottom:4
          }}>
            <span style={{fontSize:"0.9rem",fontWeight:700}}>Total Investment</span>
            <span style={{fontSize:"1.1rem",fontWeight:800}}>
              {formatMoney(total)}
            </span>
          </div>
          <div style={{fontSize:"0.8rem",color:"var(--text-muted)"}}>
            Sample finance estimate (120 months): <strong>{formatMoney(estPayment)}/mo</strong><br />
            Final finance terms subject to credit approval and current lender programs.
          </div>
        </div>

        <button className="btn-primary" style={{marginTop:12,width:"100%"}}>
          Save / Print Proposal (next phase)
        </button>

        <p style={{marginTop:8,fontSize:"0.7rem",color:"var(--text-muted)"}}>
          Future upgrades here: PDF proposal, e-signatures, CRM integration, and
          calendar scheduling that can sync with your phone.
        </p>
      </aside>
    </div>
  );
}

import React from "react";
