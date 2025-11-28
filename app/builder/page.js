"use client";

import React, { useState } from "react";

const products = {
  showerTypes: [
    {
      id: "tub_to_shower",
      name: "Tub-to-Shower Conversion",
      description: "Remove existing tub, install low-threshold shower system.",
      basePrice: 9500,
    },
    {
      id: "shower_only",
      name: "Shower Remodel",
      description:
        "Replace existing shower with new walls, base, and fixtures.",
      basePrice: 8500,
    },
    {
      id: "tub_replacement",
      name: "Tub Replacement",
      description: "New tub and walls in existing alcove.",
      basePrice: 8500,
    },
  ],

  wallSystems: [
    {
      id: "bci_subway_white",
      name: "BCI Prime – White Subway",
      description: "Classic subway pattern acrylic wall system.",
      image: "/images/sample-wall-subway.png",
      priceAdj: 2000,
    },
    {
      id: "bci_marble_bianca",
      name: "BCI Prime – Bianca Marble",
      description: "Elegant marble-look acrylic for a premium feel.",
      image: "/images/sample-wall-marble.png",
      priceAdj: 2600,
    },
    {
      id: "bci_slabs_sandbar",
      name: "BCI Prime – Sandbar Large Format",
      description:
        "Large-format acrylic for a modern, low-grout look.",
      image: "/images/sample-wall-sandbar.png",
      priceAdj: 2400,
    },
  ],

  bases: [
    {
      id: "base_60x30",
      name: '60" x 30" Acrylic Shower Base',
      description: "Standard 5' acrylic shower pan with center drain.",
      image: "/images/sample-base-60x30.png",
      price: 1200,
    },
    {
      id: "base_60x32",
      name: '60" x 32" Acrylic Shower Base',
      description: "Slightly deeper base for extra elbow room.",
      image: "/images/sample-base-60x32.png",
      price: 1300,
    },
    {
      id: "base_48x36",
      name: '48" x 36" Acrylic Shower Base',
      description: "Compact base for smaller bathrooms.",
      image: "/images/sample-base-48x36.png",
      price: 1100,
    },
  ],

  fixtures: [
    {
      id: "delta_t17_classic",
      name: "Delta T17 Series – Classic Trim",
      description:
        "Pressure-balanced T17 trim with standard showerhead.",
      image: "/images/sample-fixture-t17.png",
      price: 750,
    },
    {
      id: "delta_in2ition",
      name: "Delta In2ition Combo Shower",
      description:
        "Handheld and fixed head combo for a spa-like experience.",
      image: "/images/sample-fixture-in2ition.png",
      price: 950,
    },
    {
      id: "delta_r22000_upgrade",
      name: "Delta R22000 Valve + Trim Upgrade",
      description: "Upgraded universal valve body and premium trim.",
      image: "/images/sample-fixture-r22000.png",
      price: 1250,
    },
  ],

  glass: [
    {
      id: "glass_slider_clear",
      name: "Clear Glass Slider",
      description:
        "Frameless-style sliding door, clear tempered glass.",
      image: "/images/sample-glass-slider.png",
      price: 1800,
    },
    {
      id: "glass_hinge_black",
      name: "Hinged Door – Matte Black",
      description:
        "Premium hinged door with matte black hardware.",
      image: "/images/sample-glass-hinge.png",
      price: 2100,
    },
  ],

  flooring: [
    {
      id: "lifeproof_walton_oak",
      name: "LifeProof Walton Oak LVP",
      description:
        "Waterproof luxury vinyl plank from Home Depot.",
      image: "/images/sample-floor-lvp1.png",
      pricePerRoom: 1800,
    },
    {
      id: "lifeproof_dusk_hickory",
      name: "LifeProof Dusk Hickory LVP",
      description:
        "Durable, scratch-resistant plank in a warm tone.",
      image: "/images/sample-floor-lvp2.png",
      pricePerRoom: 1900,
    },
    {
      id: "lifeproof_lvt_stone",
      name: "LifeProof Stone Look LVT",
      description: "Luxury vinyl tile with stone appearance.",
      image: "/images/sample-floor-lvt.png",
      pricePerRoom: 2000,
    },
  ],

  accessories: [
    {
      id: "grab_bar_24",
      name: '24" Grab Bar (qty 1)',
      description: "Stainless grab bar installed to blocking.",
      price: 275,
    },
    {
      id: "grab_bar_12",
      name: '12" Grab Bar (qty 1)',
      description: "Shorter grab bar, ideal for entries.",
      price: 225,
    },
    {
      id: "niche_single",
      name: "Single Niche",
      description:
        "Built-in storage niche for shampoo and soaps.",
      price: 450,
    },
    {
      id: "seat_corner",
      name: "Corner Seat",
      description:
        "Triangular corner seat integrated into system.",
      price: 650,
    },
  ],
};

function formatMoney(n) {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function BuilderPage() {
  // Simple in-memory state using React hooks
  const [selection, setSelection] = useState({
    showerType: "tub_to_shower",
    wallSystem: "bci_subway_white",
    base: "base_60x30",
    fixture: "delta_t17_classic",
    glass: "glass_slider_clear",
    flooring: null,
    accessories: [],
  });

  function toggleAccessory(id) {
    setSelection((prev) => {
      const exists = prev.accessories.includes(id);
      return {
        ...prev,
        accessories: exists
          ? prev.accessories.filter((x) => x !== id)
          : [...prev.accessories, id],
      };
    });
  }

  function setField(field, value) {
    setSelection((prev) => ({ ...prev, [field]: value }));
  }

  function buildCart() {
    const cart = [];

    const showerType = products.showerTypes.find(
      (p) => p.id === selection.showerType
    );
    if (showerType) {
      cart.push({
        label: showerType.name,
        price: showerType.basePrice,
      });
    }

    const wall = products.wallSystems.find(
      (p) => p.id === selection.wallSystem
    );
    if (wall) {
      cart.push({
        label: wall.name,
        price: wall.priceAdj,
      });
    }

    const base = products.bases.find((p) => p.id === selection.base);
    if (base) {
      cart.push({
        label: base.name,
        price: base.price,
      });
    }

    const fixture = products.fixtures.find(
      (p) => p.id === selection.fixture
    );
    if (fixture) {
      cart.push({
        label: fixture.name,
        price: fixture.price,
      });
    }

    const glass = products.glass.find((p) => p.id === selection.glass);
    if (glass) {
      cart.push({
        label: glass.name,
        price: glass.price,
      });
    }

    if (selection.flooring) {
      const floor = products.flooring.find(
        (p) => p.id === selection.flooring
      );
      if (floor) {
        cart.push({
          label: floor.name,
          price: floor.pricePerRoom,
        });
      }
    }

    products.accessories.forEach((acc) => {
      if (selection.accessories.includes(acc.id)) {
        cart.push({
          label: acc.name,
          price: acc.price,
        });
      }
    });

    return cart;
  }

  const cart = buildCart
