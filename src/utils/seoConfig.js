// Type imports

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: "https://mifanllantas.pe/", // Production URL.
  description:
    "Nuestra compañía se especializa en la importación de una amplia gama de accesorios para vehículos, incluyendo llantas y neumáticos para automóviles, camionetas y camiones, todo a precios inigualables. Contamos con una extensa selección de tamaños y estilos de llantas, con marcas líderes como Michelin, Continental, Pirelli, Yokohama, Goodyear, y muchas más. ¡Aprovecha nuestras promociones y ofertas especiales hoy mismo!",
  type: "website",
  image: {
    url: "https://cdn.lavelada.dev/og.jpg",
    alt: "Mi fan llantas",
    width: 705,
    height: 606,
  },
  siteName: "Mi fan llantas",
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: "Mi fan llantas",
  short_name: "Mi fan llantas",
  description:
    "Nuestra compañía se especializa en la importación de una amplia gama de accesorios para vehículos, incluyendo llantas y neumáticos para automóviles, camionetas y camiones, todo a precios inigualables. Contamos con una extensa selección de tamaños y estilos de llantas, con marcas líderes como Michelin, Continental, Pirelli, Yokohama, Goodyear, y muchas más. ¡Aprovecha nuestras promociones y ofertas especiales hoy mismo!",
  theme_color: "#d5ff00",
  background_color: "#d5ff00",
  display: "fullscreen",
  icons: [
    {
      src: "/img/icons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/img/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/img/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
