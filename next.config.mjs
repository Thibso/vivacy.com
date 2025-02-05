import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/en/products/other-brands",
        destination: "https://vivacy.com/en/premium-aesthetic-solutions",
        permanent: true,
      },
      {
        source: "/en/products/dermo-cosmetics-for-women",
        destination:
          "https://vivacy.com/en/vivacy-beauty-dermo-cosmetic-skincare",
        permanent: true,
      },
      {
        source: "/en/our-history",
        destination: "https://vivacy.com/en/hyaluronic-acid-expert",
        permanent: true,
      },
      {
        source: "/en/technologies/ipn-technology",
        destination:
          "https://vivacy.com/en/ipn-like-technology-hyaluronic-acid",
        permanent: true,
      },
      {
        source: "/en/products/intimate-care",
        destination: "https://vivacy.com/en/desirial-treatment-vaginal-dryness",
        permanent: true,
      },
      {
        source: "/fr",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/en/products/monsieur-skin-care",
        destination:
          "https://vivacy.com/en/vivacy-beauty-dermo-cosmetic-skincare",
        permanent: true,
      },
      {
        source: "/en/informations",
        destination: "https://vivacy.com/en/corporate-commitments-csr",
        permanent: true,
      },
      {
        source: "/en/products/stylage",
        destination: "https://vivacy.com/en/stylage-hyaluronic-acid-treatment",
        permanent: true,
      },
      {
        source: "/en/rd",
        destination:
          "https://vivacy.com/en/research-development-innovation-aesthetic-medicine",
        permanent: true,
      },
      {
        source: "/en/technologies/vivasome-complex",
        destination:
          "https://vivacy.com/en/vivasome-dermo-cosmetic-technology-skincare",
        permanent: true,
      },
      {
        source: "/en/technologies/bi-soft",
        destination:
          "https://vivacy.com/en/bi-soft-injection-technology-hyaluronic-acid",
        permanent: true,
      },
      {
        source: "/en/footer-contact/contact-us",
        destination: "https://vivacy.com/en/contact",
        permanent: true,
      },
      {
        source: "/en/sitemap",
        destination: "https://vivacy.com/en",
        permanent: true,
      },
      {
        source: "/en/products/perfumes",
        destination: "https://vivacy.com/en",
        permanent: true,
      },
      {
        source: "/fr/produits/eaux-de-parfum",
        destination: "https://vivacy.com/en",
        permanent: true,
      },
      {
        source: "/fr/contact-footer/contactez-nous",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/produits/monsieur-skin-care",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/produits/medecine-esthetique",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/recherche-developpement",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/politique-de-confidentialite",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/mentions-legales",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/plan-du-site",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/bi-soft",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/vivasome-complex",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/produits/medecine-intime",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/ipn-technologie",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/notre-histoire",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/produits/gamme-dermo-cosmetique",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
      {
        source: "/fr/produits/autres-marques",
        destination: "https://vivacy.com/en",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
