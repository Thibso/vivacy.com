import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/en/products/other-brands/",
        destination: "/en/premium-aesthetic-solutions",
        permanent: true,
      },
      {
        source: "/en/products/dermo-cosmetics-for-women/",
        destination: "/en/vivacy-beauty-dermo-cosmetic-skincare",
        permanent: true,
      },
      {
        source: "/en/our-history/",
        destination: "/en/hyaluronic-acid-expert",
        permanent: true,
      },
      {
        source: "/en/technologies/ipn-technology/",
        destination: "/en/ipn-like-technology-hyaluronic-acid",
        permanent: true,
      },
      {
        source: "/en/products/intimate-care/",
        destination: "/en/desirial-treatment-vaginal-dryness",
        permanent: true,
      },
      {
        source: "/fr",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/en/products/monsieur-skin-care/",
        destination: "/en/vivacy-beauty-dermo-cosmetic-skincare",
        permanent: true,
      },
      {
        source: "/en/informations/",
        destination: "/en/corporate-commitments-csr",
        permanent: true,
      },
      {
        source: "/en/products/stylage/",
        destination: "/en/stylage-hyaluronic-acid-treatment",
        permanent: true,
      },
      {
        source: "/en/rd/",
        destination: "/en/research-development-innovation-aesthetic-medicine",
        permanent: true,
      },
      {
        source: "/en/technologies/vivasome-complex/",
        destination: "/en/vivasome-dermo-cosmetic-technology-skincare",
        permanent: true,
      },
      {
        source: "/en/technologies/bi-soft/",
        destination: "/en/bi-soft-injection-technology-hyaluronic-acid",
        permanent: true,
      },
      {
        source: "/en/footer-contact/contact-us/",
        destination: "/en/contact",
        permanent: true,
      },
      {
        source: "/en/sitemap/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/en/products/perfumes/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/fr/produits/eaux-de-parfum/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/fr/contact-footer/contactez-nous/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/produits/monsieur-skin-care/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/produits/medecine-esthetique/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/recherche-developpement/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/politique-de-confidentialite/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/mentions-legales/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/plan-du-site/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/bi-soft/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/vivasome-complex/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/produits/medecine-intime/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/technologies/ipn-technologie/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/notre-histoire/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/produits/gamme-dermo-cosmetique/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/fr/produits/autres-marques/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
