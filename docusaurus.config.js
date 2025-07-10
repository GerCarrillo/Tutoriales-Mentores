import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEUUNI UNIVERSIDAD',
  tagline: 'Bienvenidos 👋 ',
  favicon: 'img/logo-n.png',
  url: 'https://RicardoAlanEscobar.github.io/',
  baseUrl: '/',
  organizationName: 'RicardoAlanEscobar', // Usually your GitHub org/user name.
  projectName: 'documentacion', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        pages: {
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  /* plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mentores',
        path: 'mentores',
        routeBasePath: 'mentores',
        sidebarPath: require.resolve('./mySidebars.js'),
      },
    ],
  ], */

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-7G7NHQBYKM', // Aquí va tu ID de medición de GA4
        anonymizeIP: true, // Opcional: para anonimizar las IPs de los usuarios
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-2-n.jpeg',
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'Logo',
          src: 'img/logo-n.png',
        },
        items: [
          {

            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriales',
          },
          /* {
            type: 'docSidebar',
            sidebarId: 'mentoresSidebar',
            position: 'left',
            label: 'Mentores',
          }, */

         /* {
            to: '/administrativos',
            label: 'Administrativos',
            position: 'left'
          }, */
  
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contacto de Soporte Técnico:',
            items: [
              {
                label: 'Whatsapp',
                href: 'https://wa.me/message/RSY3GACKA2KTN1',
              },
              {
                label: 'Correo Electrónico',
                href: 'mailto:ayuda@unineuuni.edu.mx',
              },
            ],
          },
          {
            title: 'Nuestras plataformas:',
            items: [
              {
                label: 'NEUUNI Universidad',
                href: 'https://cursos.unineuuni.edu.mx/',
              },
              {
                label: 'Gedux',
                href: 'https://app.gedux.mx/login',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neuuni Universidad.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'R1Q0FCBJ5W',
        apiKey: 'a05dbad0b08785b5ebca48cb6cdc5366', // Esta es tu clave de búsqueda (Search-Only API Key)
        indexName: 'mentores-unineuuni', // <-- ¡REEMPLAZA ESTO CON EL NOMBRE DE TU ÍNDICE!

        // Opcional: Esto es para depuración o si quieres una personalización avanzada
        contextualSearch: true,

        // Opcional: Cómo se muestran los resultados de búsqueda
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Opcional: Parámetros de búsqueda adicionales (para filtros, etc.)
        searchParameters: {},

        // Opcional: Ruta para el CSS de DocSearch (ya viene con el tema)
        // Esto solo es necesario si no usas el preset classic o si quieres una ruta diferente
        // You can use a custom CSS file to override the default DocSearch CSS (might be useful for dark mode adjustments)
        // searchPagePath: 'search',

        // Opcional: Idioma del buscador (si tu sitio no es inglés)
        lang: 'es', // Por ejemplo, para español
      },
    }),
};

export default config;