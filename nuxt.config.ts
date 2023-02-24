// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app:{
        head:{
            link: [
                { rel: 'icon', type: 'image/png', href: '/images/app-icon.png' }
              ],
              bodyAttrs:{
                id:'father',
              }
        }
    },

    css:['~/assets/css/main.css'],
})
