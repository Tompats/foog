export type SocialLinks = {
  instagram: string;
  facebook: string;
  youtube?: string;
  twitter?: string;
};

export interface SiteMetadata {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  keywords: string[];
  locale: string;
  language: string;
  siteUrl: string;
  contactEmail: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    country: string;
  };
  socials: SocialLinks;
  foundingYear: number;
  defaultSocialImage: string;
  socialImageAlt: string;
  themeColor: string;
};

export const siteMetadata: SiteMetadata = {
  name: "Φ.Ο.Ο.Γ - Φυσιολατρικός Ορειβατικός Όμιλος Γιαννιτσών",
  shortName: "Φ.Ο.Ο.Γ",
  tagline: "Φυσιολατρικός Ορειβατικός Όμιλος Γιαννιτσών",
  description:
    "Εθελοντικός ορειβατικός όμιλος Γιαννιτσών με εξορμήσεις, εκπαίδευση ασφάλειας σε χιόνι και ανοιχτή κοινότητα φυσιολατρών.",
  keywords: [
    "ορειβασία",
    "Φ.Ο.Ο.Γ",
    "Φυσιολατρικός Ορειβατικός Όμιλος Γιαννιτσών",
    "πεζοπορία",
    "χιονοδρομία",
    "σκι",
    "snowboard",
    "περιβαλλοντικές δράσεις",
    "ορειβατικός σύλλογος",
    "σκι γιαννιτσά",
    "ορειβασία γιαννιτσά",
    "φοογ",
    "foog",
    "f.o.o.g",
    "φ.ο.ο.γ"
  ],
  locale: "el_GR",
  language: "el",
  siteUrl: "https://tompats.github.io/foog",
  contactEmail: "fooggiannitson@gmail.com",
  phone: "+30 23820 00000",
  address: {
    street: "Ανοιχτού Θεάτρου 8",
    city: "Γιαννιτσά",
    postalCode: "58100",
    region: "Πέλλα",
    country: "Ελλάδα",
  },
  socials: {
    instagram: "https://www.instagram.com/f.o.o.giannitson/",
    facebook: "https://www.facebook.com/profile.php?id=100064516099445",
  },
  foundingYear: 1973,
  defaultSocialImage: "/og-default.jpg",
  socialImageAlt:
    "Μέλη του Φ.Ο.Ο.Γ. στη χιονισμένη κορυφή Προφήτης Ηλίας του Βόρα",
  themeColor: "#356859",
};

export const getSiteBaseUrl = () =>
  siteMetadata.siteUrl.endsWith("/")
    ? siteMetadata.siteUrl
    : `${siteMetadata.siteUrl}/`;

export const organizationId = `${getSiteBaseUrl()}#organization`;

export const getOrganizationJsonLd = () => {
  const baseUrl = getSiteBaseUrl();
  const socialLinks = Object.values(siteMetadata.socials).filter(
    Boolean
  ) as string[];
  const defaultImagePath = siteMetadata.defaultSocialImage.replace(/^\//, "");
  const defaultImageUrl = new URL(defaultImagePath, baseUrl).href;

  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "@id": organizationId,
    name: siteMetadata.name,
    alternateName: siteMetadata.shortName,
    url: baseUrl,
    description: siteMetadata.description,
    logo: `${baseUrl}favicon.png`,
    sameAs: socialLinks,
    foundingDate: `${siteMetadata.foundingYear}-01-01`,
    image: [defaultImageUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteMetadata.contactEmail,
        telephone: siteMetadata.phone,
        areaServed: "GR",
        availableLanguage: ["Greek", "English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.city,
      postalCode: siteMetadata.address.postalCode,
      addressRegion: siteMetadata.address.region,
      addressCountry: siteMetadata.address.country,
    },
  };
};
