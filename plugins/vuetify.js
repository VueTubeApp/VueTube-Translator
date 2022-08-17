import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
 
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    // directives,
    iconfont: 'mdi',
    theme: {
      defaultTheme: 'dark'
    }
  })

  nuxtApp.vueApp.use(vuetify)
})