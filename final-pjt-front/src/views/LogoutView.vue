<template>
  <section class="logout-page surface-card">
    <h1 class="section-title">Signing Out</h1>
    <p class="section-copy">
      Your session is being cleared and you will be returned to the home screen.
    </p>
  </section>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'LogoutView',
  created() {
    this.logout().finally(() => {
      router.push({ name: 'Home' })
    })
  },
  methods: {
    ...mapActions(['logout']),
  },
}
</script>

<style scoped>
.logout-page {
  padding: 2rem;
  text-align: center;
}
</style>
