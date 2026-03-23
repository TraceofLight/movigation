<template>
  <section class="review-page surface-card">
    <p class="hero-kicker">Backend aligned</p>
    <h1 class="section-title">Review Workflow</h1>
    <p class="section-copy">
      The legacy frontend expected review mutation endpoints that are not present in the current Django backend. This screen now stays explicit instead of exposing broken controls.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ReviewView',
}
</script>

<style scoped>
.review-page {
  padding: 2rem;
}
</style>
