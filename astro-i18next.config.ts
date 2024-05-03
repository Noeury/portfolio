/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "en",
    locales: ["en", "fr", "es"],
    routes: {
      fr: {
        experiencia: "#expérience",
        proyectos:"Projets"

      },
      es: {
        about: "a-proposito",
        "contact-us": "contactenos",
        products: {
          index: "productos",
          categories: "categorias",
        },
    }
  }}