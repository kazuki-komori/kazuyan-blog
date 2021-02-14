export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "ja",
    },
    title: "かずやん | tech blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'かずやんの tech blog' },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "かずやん | tech blog",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://kazuki-komori.github.io/kazuyan-blog/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "かずやん | tech blog",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "かずやんの tech blog",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kazuki-komori.github.io/kazuyan-blog/ogp/ogp.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kazuyan-blog/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css',
      },
    ]
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text)

        document.readingTime = minutes
      }
    }
  },
  router: {
    base: '/kazuyan-blog/'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    [
    '@nuxtjs/google-gtag',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        debug: true
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  content: {
    markdown: {
      remarkPlugins: ["remark-autolink-headings"],
      prism: {
        theme: 'prism-themes/themes/prism-darcula.css',
      }
    }
  },
  moment: {
    locales: ['ja'],
    defaultTimezone: 'Asia/Tokyo'
  },
}
