import { createStore } from 'vuex'

import accounts from './modules/accounts'
import movies from './modules/movies'

export default createStore({
  modules: {
    accounts,
    movies,
  }
})
