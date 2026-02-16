export type FAQ = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: FAQ[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "cheap-car-insurance-tips-2026",
    title: "Cheap Car Insurance: 13 Real Ways to Lower Your Premium (2026)",
    description:
      "Looking for cheap car insurance? Learn how to lower your premium safely without buying bad coverage.",
    date: "2026-02-14",
    keywords: [
      "cheap car insurance",
      "how to lower car insurance",
      "cheapest auto insurance",
      "car insurance discounts",
    ],
    sections: [
      {
        heading: "1) Compare Quotes the Right Way",
        body: [
          "Always compare at least 3 insurance quotes.",
          "Use the same deductibles and liability limits for accurate comparison.",
          "Do not compare a $500 deductible quote with a $1000 deductible quote.",
        ],
      },
      {
        heading: "2) Increase Deductible (Carefully)",
        body: [
          "A higher deductible lowers your premium.",
          "Only increase it if you can afford to pay it in an emergency.",
        ],
      },
      {
        heading: "3) Ask for Every Discount",
        body: [
          "Good driver discount.",
          "Good student discount.",
          "Bundling auto + renters/home.",
          "Telematics / safe driving apps.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the fastest way to get cheap car insurance?",
        a: "Compare at least three quotes using identical deductibles and liability limits, then ask for all available discounts.",
      },
      {
        q: "Is minimum coverage always the cheapest?",
        a: "Often yes, but it may not protect you in a serious accident. Slightly higher limits can protect your savings.",
      },
      {
        q: "Does age affect car insurance price?",
        a: "Yes. Drivers under 25 typically pay higher premiums due to statistical risk.",
      },
    ],
  },

  {
    slug: "car-insurance-for-students",
    title: "Best Car Insurance for Students (Save Hundreds Per Year)",
    description:
      "Student car insurance guide: discounts, good student savings, and how to avoid overpaying.",
    date: "2026-02-14",
    keywords: [
      "car insurance for students",
      "cheap student car insurance",
      "good student discount insurance",
    ],
    sections: [
      {
        heading: "Why Student Insurance Is Expensive",
        body: [
          "Young drivers statistically file more claims.",
          "Less driving experience increases risk rating.",
        ],
      },
      {
        heading: "How Students Can Pay Less",
        body: [
          "Good student discount (GPA based).",
          "Stay on a parent policy if possible.",
          "Choose a lower-risk vehicle.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is car insurance for students?",
        a: "It varies by state, but students typically pay more than older drivers. Discounts can significantly reduce the cost.",
      },
      {
        q: "What GPA is needed for good student discount?",
        a: "Most insurers require a B average or 3.0 GPA equivalent.",
      },
    ],
  },

  {
    slug: "how-much-car-insurance-do-i-need",
    title: "How Much Car Insurance Do I Really Need?",
    description:
      "Minimum vs full coverage explained. Learn how much insurance is enough to protect your finances.",
    date: "2026-02-14",
    keywords: [
      "how much car insurance do i need",
      "minimum vs full coverage",
      "liability insurance explained",
    ],
    sections: [
      {
        heading: "Minimum Coverage Explained",
        body: [
          "Minimum coverage satisfies state law.",
          "It may not fully protect your assets in large accidents.",
        ],
      },
      {
        heading: "When to Choose Full Coverage",
        body: [
          "If your car is financed or leased.",
          "If your car is newer or high value.",
          "If you cannot afford to replace your car out-of-pocket.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is full coverage required by law?",
        a: "No. It is typically required by lenders if your vehicle is financed or leased.",
      },
      {
        q: "Is minimum coverage risky?",
        a: "Yes. It may not cover damages beyond state-required limits.",
      },
    ],
  },
];
