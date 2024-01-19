// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui',
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: true,
          Inter: [400, 700],
          Lato: [100, 300],
          Poppins: true,
        }
    }],
  ],
  css: ['./assets/css/main.css']
})

