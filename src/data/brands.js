/**
 * Central brands data file.
 * To add a brand: add an entry here and drop the logo image in /src/assets/brands/
 * All product pages and the Brands page will update automatically.
 *
 * Fields:
 *   id        — unique key
 *   name      — full brand display name
 *   shortName — abbreviated label used in small UI (e.g., hero sidebar tags)
 *   logo      — import path (set to null until you have the real image)
 *   initials  — fallback 2–3 letter monogram shown when no logo is available
 *   color     — accent color for the monogram card
 *   badge     — optional badge text ("In-House", "Mill Partner", etc.)
 *   highlight — if true, rendered with a special "our brand" style
 *   yarns     — which yarns this brand supplies ['DTY','POY','FDY']
 *   website   — optional URL
 */

// ── Logo imports (uncomment once you drop the files in /src/assets/brands/) ──
import relianceLogo from "../assets/brands/reliance.png";
import bhilosaLogo from "../assets/brands/bhilosa.png";
import wellknownLogo from "../assets/brands/wellknown.png";
import sanathanlogo from "../assets/brands/sanathan.png";
// import siddhiLogo      from '../assets/brands/siddhi-vinayak.png';

export const brands = [
  {
    id: "siddhi-vinayak",
    name: "Siddhi Vinayak Polyester",
    shortName: "In-House DTY",
    logo: null, // replace with: siddhiLogo
    initials: "SV",
    color: "#2563eb", // accent blue
    badge: "In-House Manufacturer",
    highlight: true,
    yarns: ["DTY"],
    website: null,
  },
  {
    id: "reliance",
    name: "Reliance Industries",
    shortName: "Reliance",
    logo: relianceLogo,
    initials: "RI",
    color: "#0f4c81",
    badge: "Mill Partner",
    highlight: false,
    yarns: ["POY", "FDY"],
    website: "https://www.ril.com",
  },
  {
    id: "bhilosa",
    name: "Bhilosa Industries",
    shortName: "Bhilosa",
    logo: bhilosaLogo,
    initials: "BI",
    color: "#1a7f64",
    badge: "Mill Partner",
    highlight: false,
    yarns: ["POY", "FDY", "DTY"],
    website: null,
  },
  {
    id: "wellknown",
    name: "Wellknown Polyester",
    shortName: "Wellknown",
    logo: wellknownLogo,
    initials: "WP",
    color: "#7c3aed",
    badge: "Mill Partner",
    highlight: false,
    yarns: ["POY", "FDY", "DTY"],
    website: null,
  },
  {
    id: "sanathan",
    name: "Sanathan Textiles",
    shortName: "Sanathan",
    logo: sanathanlogo,
    initials: "SP",
    color: "#b45309",
    badge: "Mill Partner",
    highlight: false,
    yarns: ["POY", "FDY", "DTY"],
    website: null,
  },
];

/** Helper: get brands for a specific yarn type */
export function getBrandsForYarn(yarnType) {
  return brands.filter((b) => b.yarns.includes(yarnType));
}
