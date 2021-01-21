export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    // ssr:false,

    head: {
        titleTemplate: "limoo | لیمو",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "لیمو" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/logos/limoo-logo.png" }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        // SCSS file in the project
        "~/assets/styles/main.scss"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {src:"~plugins/modal/index.js"}, 
        {src:"~/plugins/persistedState.js"}],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ["@nuxtjs/style-resources", "@nuxtjs/axios", "@nuxtjs/auth-next"],
    // scss
    styleResources: {
        scss: ["./assets/styles/*.scss"]
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {}
    },
    server: {
        // host: "0.0.0.0"
    }
    // router: {
    //     middleware: ["auth"]
    // }
    // url by default go to login page in global routGuard
};
