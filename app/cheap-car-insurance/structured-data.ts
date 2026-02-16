export function cheapCarInsuranceJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cheap Car Insurance — Compare Quotes Smarter",
    url: `${siteUrl}/cheap-car-insurance`,
    description:
      "Find cheap car insurance by comparing quotes with correct state minimums and a Confidence Score.",
    isPartOf: {
      "@type": "WebSite",
      name: "Insurance Finder",
      url: siteUrl,
    },
  };
}
