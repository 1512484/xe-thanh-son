import colors from 'vuetify/es5/util/colors'

export default {
  mode:'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Xe Thanh Son',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit amet' },
      { hid: 'keywords', name: 'keywords', content: 'Lorem ipsum dolor sit amet' },
      { hid: "og:title", name:"og:title", property: "og:title", content: "Xe Thanh Son" },
      { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: "Xe Thanh Son" },
      { hid: "og:site_name", name: "og:site_name", property: "og:site_name", content: "Xe Thanh Son" },
      { hid: "og:description", name: "og:description", property: "og:description", content: "Lorem ipsum dolor sit amet" },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 't-type', name: 'twitter:title', content: 'Xe Thanh Son' },
      { hid: 't-type', name: 'twitter:description', content: 'Lorem ipsum dolor sit amet' },
      { hid: 'og:image', property: 'og:image', content:  "/banner-img.svg" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    // script: [
    //   {
    //     type: 'text/javascript',
    //     hid: 'fb-customer-chat',
    //     body: true,
    //     innerHTML: `
    //       var chatbox = document.getElementById('fb-customer-chat');
    //       chatbox.setAttribute("page_id", "1175565702494581");
    //       chatbox.setAttribute("attribution", "biz_inbox");
    
    //       window.fbAsyncInit = function() {
    //         FB.init({
    //           xfbml            : true,
    //           version          : 'v11.0'
    //         });
    //       };
    
    //       (function(d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    //         fjs.parentNode.insertBefore(js, fjs);
    //       }(document, 'script', 'facebook-jssdk'));`
    //   },
    // ],
    // __dangerouslyDisableSanitizersByTagID: { 'fb-customer-chat': ['innerHTML'] },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#EFA810",
          C20: "#201505",
          CF8: "#F8F8F8",
          CF5: "#F5F5F5",
          white: "#FFFFFF",
          black: "#212121"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
