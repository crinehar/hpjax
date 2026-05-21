// JSON-LD schema generators for Health Pointe Jacksonville
// Usage: import the relevant generator, call it, and inject via:
//   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

const SITE_URL = "https://hpjax.com";
const BUSINESS_ID = `${SITE_URL}/#business`;
const PRACTITIONER_ID = `${SITE_URL}/#practitioner`;

// ─── Shared entities (reused across schemas via @id) ──────────────────────────

export const drJuleeMillerEntity = {
  "@type": "Person",
  "@id": PRACTITIONER_ID,
  name: "Dr. Julee Miller",
  honorificPrefix: "Dr.",
  jobTitle: "Acupuncturist",
  image: `${SITE_URL}/images/team/dr-julee-miller.jpg`,
  worksFor: { "@id": BUSINESS_ID },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "DAcCHM" },
    { "@type": "EducationalOccupationalCredential", name: "AP" },
    { "@type": "EducationalOccupationalCredential", name: "FABORM" },
  ],
  knowsAbout: [
    "Fertility acupuncture",
    "Women's health",
    "Pelvic floor therapy",
    "Chronic pain acupuncture",
    "Neurological disorders",
    "Sports acupuncture",
    "Pediatric acupuncture",
    "Long COVID support",
    "Cosmetic acupuncture",
    "Massage therapy",
  ],
};

export const localBusinessEntity = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": BUSINESS_ID,
  name: "Health Pointe Jacksonville",
  url: SITE_URL,
  telephone: "+1-904-448-0046",
  email: "hello@hpjax.com",
  logo: `${SITE_URL}/images/logo.png`,
  image: [
    `${SITE_URL}/images/logo.png`,
    `${SITE_URL}/images/hero-home.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3840 Belfort Road #305",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32216",
    addressCountry: "US",
  },
  hasMap:
    "https://www.google.com/maps/place/Health+Pointe+Jacksonville+Acupuncture+%2B+Wellness+Clinic/@30.2593339,-81.5826583,17z",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2593293,
    longitude: -81.580078,
  },
  areaServed: [
    { "@type": "City", name: "Jacksonville, FL" },
    { "@type": "AdministrativeArea", name: "Duval County, FL" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "14:00" },
  ],
  sameAs: [
    "https://www.facebook.com/HealthPointeJacksonville",
    "https://www.instagram.com/healthpointejax",
    "https://www.tiktok.com/@healthpointejax",
  ],
  founder: { "@id": PRACTITIONER_ID },
};

// ─── Page-level generators ────────────────────────────────────────────────────

/** Homepage: MedicalBusiness + LocalBusiness + Person */
export function homepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessEntity, drJuleeMillerEntity],
  };
}

/** Service / treatment pages */
export function servicePageSchema({
  name,
  description,
  url,
  alternateName,
}: {
  name: string;
  description: string;
  url: string;
  alternateName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE_URL}${url}#webpage`,
        name,
        description,
        url: `${SITE_URL}${url}`,
        isPartOf: { "@id": BUSINESS_ID },
        about: {
          "@type": "MedicalTherapy",
          name,
          ...(alternateName ? { alternateName } : {}),
          relevantSpecialty: "Acupuncture",
          study: {
            "@type": "MedicalStudy",
            studyLocation: { "@type": "AdministrativeArea", name: "Jacksonville, FL" },
          },
        },
        provider: { "@id": PRACTITIONER_ID },
        breadcrumb: breadcrumbSchema([
          { name: "Home", href: "/" },
          { name, href: url },
        ]),
      },
      { ...localBusinessEntity },
    ],
  };
}

/** Condition pages (chronic pain, neurological, long covid, etc.) */
export function conditionPageSchema({
  conditionName,
  description,
  url,
  faqs,
}: {
  conditionName: string;
  description: string;
  url: string;
  faqs?: { question: string; answer: string }[];
}) {
  const graph: object[] = [
    {
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}${url}#webpage`,
      name: `${conditionName} Treatment in Jacksonville, FL`,
      description,
      url: `${SITE_URL}${url}`,
      about: {
        "@type": "MedicalCondition",
        name: conditionName,
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: "Acupuncture",
        },
      },
      provider: { "@id": PRACTITIONER_ID },
      breadcrumb: breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: conditionName, href: url },
      ]),
    },
  ];

  if (faqs && faqs.length > 0) {
    graph.push(faqSchema(faqs));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Blog article */
export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  modifiedAt,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishedAt,
    ...(modifiedAt ? { dateModified: modifiedAt } : {}),
    author: { "@id": PRACTITIONER_ID },
    publisher: { "@id": BUSINESS_ID },
    ...(imageUrl
      ? { image: { "@type": "ImageObject", url: `${SITE_URL}${imageUrl}`, width: 1200, height: 630 } }
      : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${url}` },
  };
}

/** FAQ section — used standalone or embedded in conditionPageSchema */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/** Breadcrumb trail */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/** Team / practitioner page */
export function teamPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...drJuleeMillerEntity,
        description:
          "Dr. Julee Miller is a board-certified Doctor of Acupuncture and Chinese Herbal Medicine (DAcCHM) and Florida Licensed Acupuncture Physician (AP). She holds the FABORM credential — making her one of Jacksonville, FL's top ABORM-certified holistic fertility specialists.",
        url: `${SITE_URL}/our-team/`,
      },
      { ...localBusinessEntity },
    ],
  };
}
