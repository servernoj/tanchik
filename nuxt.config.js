
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Data analyst for hire',
    titleTemplate: 'Tatiana Baeva, %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio website representing Tatiana Baeva\'s skills, and experience'
      },
      { name: 'og:title', content: 'Tatiana Baeva, data analyst for hire' },
      { name: 'og:description', content: 'Portfolio website representing Tatiana Baeva\'s skills, and experience' },
      { name: 'og:url', content: 'https://tatiana.baeva.work' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://lh3.googleusercontent.com/pw/ACtC-3cXLOqFTAF5fDl2o5U5gHGUxZ5rIxarSmFOtFNBzPeIYrq0TPCR7qrSXy_K9zhAgfwCvxVOKJVbzO4iVgKAqposwnlwOFr5aVHeGKxJmWs8lrO-1L0xLHOmEh_MRFcvSu7KAD9r6Yc2ASb7Y5I7RRdEuQ=s362-no' },
      { name: 'twitter:image', content: 'https://lh3.googleusercontent.com/pw/ACtC-3cXLOqFTAF5fDl2o5U5gHGUxZ5rIxarSmFOtFNBzPeIYrq0TPCR7qrSXy_K9zhAgfwCvxVOKJVbzO4iVgKAqposwnlwOFr5aVHeGKxJmWs8lrO-1L0xLHOmEh_MRFcvSu7KAD9r6Yc2ASb7Y5I7RRdEuQ=s362-no' },
      { name: 'twitter:title', content: 'Tatiana Baeva, data analyst for hire' },
      { name: 'twitter:description', content: 'Portfolio website representing Tatiana Baeva\'s skills, and experience' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/fontawesome', {
        component: 'fa',
        suffix: true,
        icons: {
          solid: ['faDownload', 'faPhone'],
          regular: ['faEnvelope'],
          brands: ['faLinkedin']
        }
      }
    ],
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-175534268-1'
      }
    ]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
