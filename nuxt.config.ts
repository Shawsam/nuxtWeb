// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://t-playletweb.tarsocial.com/api',
        changeOrigin: true,
        prependPath: true
      }
    }
  }
})
