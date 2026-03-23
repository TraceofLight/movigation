<template>
  <section class="search-page surface-card">
    <header class="search-header">
      <p class="hero-kicker">Fast local filter</p>
      <h1 class="section-title">Movie Search</h1>
      <p class="section-copy">
        Search against the cached movie list that already exists on the backend instead of the old Vuetify public API demo.
      </p>
    </header>

    <label class="search-label" for="movie-search">Search by title</label>
    <input
      id="movie-search"
      v-model.trim="query"
      class="search-input"
      type="search"
      placeholder="Search by title"
    />

    <p class="search-summary">
      <span v-if="isLoading">Loading movies...</span>
      <span v-else>{{ filteredMovies.length }} title(s) matched</span>
    </p>

    <div v-if="loadError" class="status-copy status-copy--error">{{ loadError }}</div>
    <MovieList v-else :movies="filteredMovies" />
  </section>
</template>

<script>
import axios from 'axios'

import MovieList from '@/components/MovieList.vue'
import drf from '@/api/drf'

export default {
  name: 'SearchView',
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
      query: '',
      isLoading: false,
      loadError: '',
    }
  },
  computed: {
    filteredMovies() {
      const needle = this.query.toLowerCase()

      if (!needle) {
        return this.movies
      }

      return this.movies.filter(movie =>
        (movie.title || movie.name || '').toLowerCase().includes(needle)
      )
    },
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
          this.loadError = 'Movies could not be loaded for search.'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style scoped>
.search-page {
  padding: 2rem;
}

.search-header {
  margin-bottom: 1.5rem;
}

.search-label {
  display: block;
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.search-input {
  width: 100%;
  border: 1px solid var(--panel-line);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border-radius: 18px;
  padding: 1rem 1.1rem;
}

.search-summary {
  color: var(--muted);
  margin: 1rem 0 1.5rem;
}

.status-copy--error {
  color: var(--danger);
}
</style>
