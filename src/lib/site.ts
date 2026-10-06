// Replace APP_STORE_URL and APP_STORE_ID once the App Store listing is live.
export const APP_STORE_URL = "#";
export const APP_STORE_ID: string | null = null;

export const site = {
  name: "Heem",
  url: "https://heemapp.com",
  tagline: "Find second-hand furniture that fits you, fast",
  description:
    "Heem searches Tradera, Blocket, Facebook Marketplace and Mjuk for second-hand furniture that matches your style, then takes you straight to the listing.",
  email: "support@heemapp.com",
  region: "Greater Stockholm",
  platform: "iPhone",
  company: {
    name: "Dev Konnect AB",
    orgNumber: "559439-5617",
    address: "Petterbergsvägen 42, 129 40 Hägersten, Sweden",
  },
};

export const marketplaces = [
  "Tradera",
  "Blocket",
  "Facebook Marketplace",
  "Mjuk",
] as const;

export const legalLinks = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete account" },
];

export function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop`;
}
