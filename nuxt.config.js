export default {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    titleTemplate: 'The Magnolia Salon Boutique',
    title: 'The Magnolia Salon Boutique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dublin Ohio Hair Salon' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel&display=swap' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
      },
    ],
  },
  /*
     ** Customize the progress-bar color
     */
  loading: { color: '#fff' },
  /*
     ** Global CSS
     */
  css: [],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [],
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /*
     ** Nuxt.js modules
     */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#000000',
          accent: '#AE9152',
          secondary: '#DFECEB',
        },
      },
    },
  },
  /*
  ** Router configuration
  */
 router: {
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    // eslint-disable-next-line require-await
    const findEl = async (hash, x) => {
      return document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
        })
    }

    if (to.hash) {
      const el = await findEl(to.hash)
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, el.offsetTop)
      }
    }

    return { x: 0, y: 0 }
  },
},
  /*
     ** Build configuration
     */
  build: {
    /*
         ** You can extend webpack config here
         */
    extend (config, ctx) {},
  },
}
