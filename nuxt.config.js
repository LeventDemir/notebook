
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** page tansition
  */
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'success',
        message: message => message,
        options: {
          type: 'success',
          theme: 'outline',
          duration: 3000
        }
      },
      {
        name: 'error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          theme: 'outline',
          duration: 3000
        }
      },
      {
        name: 'warning',
        message: message => message,
        options: {
          type: 'info',
          theme: 'outline',
          duration: 3000
        }
      },
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** serverMiddleware
  */
  serverMiddleware: [
    {
      path: 'api',
      handler: '~/server/index.js'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.baseURL || 'http://localhost:3000/api'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
