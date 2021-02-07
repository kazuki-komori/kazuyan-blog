export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kazuyan-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
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
  }
}
