<template>
  <section class="movie-info-section">
    <div class="poster-shell">
      <img :src="posterPath" :alt="movieName" class="poster-image" />
    </div>

    <section class="information-container">
      <div>
        <h2 class="movie-title">{{ movieName }}</h2>
        <p class="movie-subtitle">TMDB ID {{ movieId }}</p>
      </div>

      <div class="score-chip">
        <span>Score</span>
        <strong>{{ displayScore }}</strong>
      </div>
    </section>

    <div class="overview-container">
      {{ movie.overview || 'Overview is not available for this title yet.' }}
    </div>
  </section>
</template>

<script>
import axios from 'axios'

import drf from '@/api/drf'
import notFoundImg from '@/assets/404-not-found.png'

export default {
  name: 'MovieDetailInfoSection',
  props: {
    movieId: Number,
    movieName: String,
  },
  data() {
    return {
      movie: {},
    }
  },
  computed: {
    displayScore() {
      return this.movie.vote_average ?? '-'
    },
    posterPath() {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
      }

      return notFoundImg
    },
  },
  created() {
    axios
      .get(drf.movies.movie(this.movieId))
      .then(({ data }) => {
        this.movie = Array.isArray(data) ? data[0] || {} : data
      })
      .catch(() => {
        this.movie = {}
      })
  },
}
</script>

<style scoped>
.movie-info-section {
  margin: 1rem;
}

.poster-shell {
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
}

.poster-image {
  display: block;
  width: 100%;
  max-height: 480px;
  object-fit: cover;
}

.information-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}

.movie-title {
  margin: 0;
  text-align: left;
  color: white;
  font-weight: bold;
}

.movie-subtitle {
  color: var(--muted);
  margin: 0.35rem 0 0;
}

.score-chip {
  display: grid;
  gap: 0.25rem;
  min-width: 7rem;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  text-align: center;
  color: white;
}

.overview-container {
  margin-top: 1rem;
  text-align: left;
  color: white;
  line-height: 1.7;
}
</style>
