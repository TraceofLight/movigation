<template>
  <section class="featured-page">
    <header class="featured-header">
      <p class="hero-kicker">TMDB selection</p>
      <h1 class="section-title">Featured Movies</h1>
      <p class="section-copy">
        Pulling from the backend movie cache and opening a local detail modal instead of a framework-specific component stack.
      </p>
    </header>

    <MovieCarousel />

    <section class="featured-list surface-card">
      <div v-if="isLoading" class="status-copy">Loading featured movies...</div>
      <div v-else-if="loadError" class="status-copy status-copy--error">
        {{ loadError }}
      </div>
      <MovieList v-else :movies="movies" />
    </section>
  </section>
</template>

<script>
import axios from 'axios'

import drf from '@/api/drf'
import MovieCarousel from '../components/MovieCarousel.vue'
import MovieList from '../components/MovieList.vue'

export default {
  name: 'FeaturedView',
  components: {
    MovieCarousel,
    MovieList,
  },
  data() {
    return {
      movies: [],
      isLoading: false,
      loadError: '',
    }
  },
  created() {
    this.fetchMovies()
  },
  methods: {
    fetchMovies() {
      this.isLoading = true
      this.loadError = ''

      axios
        .get(drf.movies.list())
        .then(({ data }) => {
          this.movies = Array.isArray(data) ? data : []
        })
        .catch(() => {
          this.loadError = 'Featured movies could not be loaded right now.'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style scoped>
.featured-page {
  display: grid;
  gap: 1.5rem;
}

.featured-list {
  padding: 1.5rem;
}

.status-copy {
  color: var(--muted);
  text-align: center;
  padding: 2rem 0;
}

.status-copy--error {
  color: var(--danger);
}
</style>
