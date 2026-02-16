export type StateKey =
  | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA"
  | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD"
  | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ"
  | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC"
  | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

export type StateInfo = {
  code: StateKey;
  name: string;

  // Liability minimums (common format)
  // biPerPerson / biPerAccident / propertyDamage
  minLiability: { biPerson: number; biAccident: number; pd: number } | null;

  // Optional notes (e.g., no-fault, PIP, special state quirks)
  notes: string[];
};

export const STATES: StateInfo[] = [
  { code: "AL", name: "Alabama", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "AK", name: "Alaska", minLiability: { biPerson: 50, biAccident: 100, pd: 25 }, notes: [] },
  { code: "AZ", name: "Arizona", minLiability: { biPerson: 25, biAccident: 50, pd: 15 }, notes: [] },
  { code: "AR", name: "Arkansas", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "CA", name: "California", minLiability: { biPerson: 15, biAccident: 30, pd: 5 }, notes: [] },
  { code: "CO", name: "Colorado", minLiability: { biPerson: 25, biAccident: 50, pd: 15 }, notes: [] },
  { code: "CT", name: "Connecticut", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "DE", name: "Delaware", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: [] },
  { code: "FL", name: "Florida", minLiability: { biPerson: 0, biAccident: 0, pd: 10 }, notes: ["No-fault state (PIP required)."] },
  { code: "GA", name: "Georgia", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },

  { code: "HI", name: "Hawaii", minLiability: { biPerson: 20, biAccident: 40, pd: 10 }, notes: ["No-fault style coverage (PIP)."] },
  { code: "ID", name: "Idaho", minLiability: { biPerson: 25, biAccident: 50, pd: 15 }, notes: [] },
  { code: "IL", name: "Illinois", minLiability: { biPerson: 25, biAccident: 50, pd: 20 }, notes: [] },
  { code: "IN", name: "Indiana", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "IA", name: "Iowa", minLiability: { biPerson: 20, biAccident: 40, pd: 15 }, notes: [] },
  { code: "KS", name: "Kansas", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: ["No-fault state (PIP required)."] },
  { code: "KY", name: "Kentucky", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: ["Choice no-fault state (PIP usually offered)."] },
  { code: "LA", name: "Louisiana", minLiability: { biPerson: 15, biAccident: 30, pd: 25 }, notes: [] },
  { code: "ME", name: "Maine", minLiability: { biPerson: 50, biAccident: 100, pd: 25 }, notes: [] },
  { code: "MD", name: "Maryland", minLiability: { biPerson: 30, biAccident: 60, pd: 15 }, notes: [] },

  { code: "MA", name: "Massachusetts", minLiability: { biPerson: 20, biAccident: 40, pd: 5 }, notes: ["No-fault state (PIP)."] },
  { code: "MI", name: "Michigan", minLiability: { biPerson: 50, biAccident: 100, pd: 10 }, notes: ["No-fault state (PIP)."] },
  { code: "MN", name: "Minnesota", minLiability: { biPerson: 30, biAccident: 60, pd: 10 }, notes: ["No-fault state (PIP)."] },
  { code: "MS", name: "Mississippi", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "MO", name: "Missouri", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "MT", name: "Montana", minLiability: { biPerson: 25, biAccident: 50, pd: 20 }, notes: [] },
  { code: "NE", name: "Nebraska", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "NV", name: "Nevada", minLiability: { biPerson: 25, biAccident: 50, pd: 20 }, notes: [] },
  { code: "NH", name: "New Hampshire", minLiability: null, notes: ["Insurance is not mandatory, but you may need to show financial responsibility."] },
  { code: "NJ", name: "New Jersey", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: ["No-fault state (PIP). Basic vs Standard policies exist."] },

  { code: "NM", name: "New Mexico", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: [] },
  { code: "NY", name: "New York", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: ["No-fault state (PIP)."] },
  { code: "NC", name: "North Carolina", minLiability: { biPerson: 30, biAccident: 60, pd: 25 }, notes: [] },
  { code: "ND", name: "North Dakota", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "OH", name: "Ohio", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "OK", name: "Oklahoma", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "OR", name: "Oregon", minLiability: { biPerson: 25, biAccident: 50, pd: 20 }, notes: [] },
  { code: "PA", name: "Pennsylvania", minLiability: { biPerson: 15, biAccident: 30, pd: 5 }, notes: ["Choice no-fault state (limited vs full tort)."] },
  { code: "RI", name: "Rhode Island", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "SC", name: "South Carolina", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },

  { code: "SD", name: "South Dakota", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "TN", name: "Tennessee", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "TX", name: "Texas", minLiability: { biPerson: 30, biAccident: 60, pd: 25 }, notes: [] },
  { code: "UT", name: "Utah", minLiability: { biPerson: 25, biAccident: 65, pd: 15 }, notes: ["No-fault state (PIP)."] },
  { code: "VT", name: "Vermont", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: [] },
  { code: "VA", name: "Virginia", minLiability: { biPerson: 30, biAccident: 60, pd: 20 }, notes: ["Some drivers may opt to pay an uninsured motor vehicle fee."] },
  { code: "WA", name: "Washington", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: [] },
  { code: "WV", name: "West Virginia", minLiability: { biPerson: 25, biAccident: 50, pd: 25 }, notes: [] },
  { code: "WI", name: "Wisconsin", minLiability: { biPerson: 25, biAccident: 50, pd: 10 }, notes: [] },
  { code: "WY", name: "Wyoming", minLiability: { biPerson: 25, biAccident: 50, pd: 20 }, notes: [] },
];

export const STATE_BY_CODE: Record<StateKey, StateInfo> = STATES.reduce((acc, s) => {
  acc[s.code] = s;
  return acc;
}, {} as Record<StateKey, StateInfo>);
