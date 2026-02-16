export type Company = {
  id: string;
  name: string;
  tagline: string;
  bestFor: string[];
  url: string; // company official link
};

export const COMPANIES: Company[] = [
  {
    id: "geico",
    name: "GEICO",
    tagline: "Often competitive for many drivers.",
    bestFor: ["Budget shoppers", "Clean record", "Fast online quotes"],
    url: "https://www.geico.com/",
  },
  {
    id: "progressive",
    name: "Progressive",
    tagline: "Strong discounts and flexible options.",
    bestFor: ["New drivers", "Telematics", "Compare pricing"],
    url: "https://www.progressive.com/",
  },
  {
    id: "statefarm",
    name: "State Farm",
    tagline: "Great if you want an agent + bundling.",
    bestFor: ["Agent support", "Bundling", "Families"],
    url: "https://www.statefarm.com/",
  },
  {
    id: "allstate",
    name: "Allstate",
    tagline: "Good coverage add-ons and agents.",
    bestFor: ["More coverage", "Agents", "Add-ons"],
    url: "https://www.allstate.com/",
  },
  {
    id: "nationwide",
    name: "Nationwide",
    tagline: "Solid discounts for safe drivers.",
    bestFor: ["Safe drivers", "Bundling", "Discounts"],
    url: "https://www.nationwide.com/",
  },
  {
    id: "travelers",
    name: "Travelers",
    tagline: "Strong for bundles and coverage options.",
    bestFor: ["Bundling", "Home+Auto", "Coverage options"],
    url: "https://www.travelers.com/",
  },
];
