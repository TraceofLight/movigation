import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

export function createMovigationApp(rootComponent = App) {
  const app = createApp(rootComponent)

  app.use(router)
  app.use(store)

  return { app, router, store }
}

if (!import.meta.vitest) {
  const { app } = createMovigationApp()
  app.mount('#app')
}
