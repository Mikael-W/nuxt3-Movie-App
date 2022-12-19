// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  modules: [
    '@pinia/nuxt',],
    
})
