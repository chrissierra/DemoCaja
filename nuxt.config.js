export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DemoCaja',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  script:[
    {src: "https://kit.fontawesome.com/761f284d42.js", crossorigin: "anonymous"},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
