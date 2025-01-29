import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/vivacy": {
      en: "/hyaluronic-acid-expert",
    },
    "/brands": {
      en: "/premium-aesthetic-solutions",
    },
    "/commitments": {
      en: "/corporate-commitments-csr",
    },
    "/r&d": {
      en: "/research-development-innovation-aesthetic-medicine",
    },
    "/ipnlike": {
      en: "/ipn-like-technology-hyaluronic-acid",
    },
    "/bisoft": {
      en: "/bi-soft-injection-technology-hyaluronic-acid",
    },
    "/vivasome": {
      en: "/vivasome-dermo-cosmetic-technology-skincare",
    },
    "/myvivacy": {
      en: "/my-vivacy-app-authentication-injection-advice",
    },
    "/stylage": {
      en: "/stylage-hyaluronic-acid-treatment",
    },
    "/desirial": {
      en: "/desirial-treatment-vaginal-dryness",
    },
    "/beauty": {
      en: "/vivacy-beauty-dermo-cosmetic-skincare",
    },
    "/contact": {
      en: "/contact",
    },
    "/map": {
      en: "/network-distributors-subsidiaries",
    },
    "/academy": {
      en: "/vivacy-academy-learning-plateform",
    },
    "/hydromax": {
      en: "/stylage-hydromax-hyaluronic-acid-skinbooster",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
