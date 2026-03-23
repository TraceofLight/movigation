<template>
  <section class="movie-review-section">
    <p class="review-text">Reviews</p>
    <div class="review-placeholder">
      Review write and edit actions are disabled because the current backend does not expose matching endpoints yet.
    </div>
  </section>
</template>

<script>
export default {
  name: 'MovieDetailReview',
  props: {
    movieId: Number,
  },
}
</script>

<style scoped>
.movie-review-section {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.review-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
}

.review-placeholder {
  width: 100%;
  padding: 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--muted);
  text-align: left;
  line-height: 1.6;
}
</style>
