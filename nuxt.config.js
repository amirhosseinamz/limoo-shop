export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,

  publicRuntimeConfig: {},

  head: {
    titleTemplate: "limoo | لیمو",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "لیمو" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logos/limoo-logo.png" },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~plugins/modal/index.js" },
    { src: "~/plugins/persistedState.js" },
    { src: "~/plugins/client-only.js", mode: "client" },

    // { src: "~/plugins/vuejs-paginate/index.js" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios", "@nuxtjs/auth-next"],
  // scss
  styleResources: {
    scss: ["./assets/styles/*.scss"],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {},
  },
  env: {
    CLIENT_KEY: "4FDD6981-C063-46E1-BBE9-D88D2B889EB3",
    SIGN_UP_API: "https://unison-dev.parsdata.net/auth/signin",
    SIGN_UP_OTP_API: "https://unison-dev.parsdata.net/auth/signin/otp",
    SIGN_OUT_API: "https://unison-dev.parsdata.net/auth/signout",
  },
  server: {
    host: "0.0.0.0"
  },
  // router: {
  //     middleware: ["auth"]
  // }
  // url by default go to login page in global routGuard
};
