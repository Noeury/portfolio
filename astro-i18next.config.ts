/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "fr", "es"],
  routes: {
    fr: {
      "#experiencia": "fr/#expérience",
      "#proyectos": "fr/#projets"
    },
    es: {
      "#experiencia": "es/#experiencia",
      "#proyectos": "es/#proyectos"
    },
  }
}