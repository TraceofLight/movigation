<template>
  <section id="SignupView" class="signup-page">
    <div class="box signup-box">
      <div class="box-part" id="bp-left">
        <div class="partition">
          <div class="partition-title">REGISTER ACCOUNT</div>
          <div class="partition-form">
            <form autocomplete="false" @submit.prevent="signup(payload)">
              <div class="autocomplete-fix">
                <input disabled type="password" />
              </div>
              <input v-model="payload.credentials.email" type="email" placeholder="Email" required />
              <input v-model="payload.credentials.username" type="text" placeholder="Username" required />
              <input v-model="payload.credentials.password1" type="password" placeholder="Password" required />
              <input
                v-model="payload.credentials.password2"
                type="password"
                placeholder="Password Confirmation"
                required
              />

              <button class="large-btn" type="submit">Register</button>
              <router-link :to="{ name: 'Login' }">
                <button class="large-btn" id="goback-btn" type="button">Go Back</button>
              </router-link>
            </form>

            <p v-if="signupAuthError" class="error-copy">
              Registration failed. Please check the submitted values.
            </p>
          </div>
        </div>
      </div>

      <div class="box-part genre-panel" id="bp-right">
        <p class="genre-label">Choose favorite genres</p>
        <div class="genre-grid">
          <button
            v-for="genre in genreOptions"
            :key="genre.id"
            type="button"
            class="genre-button"
            :class="{ 'genre-button--selected': payload.genres.includes(genre.id) }"
            @click="toggleGenre(genre.id)"
          >
            {{ genre.label }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignupView',
  data() {
    return {
      payload: {
        genres: [],
        credentials: {
          email: '',
          username: '',
          password1: '',
          password2: '',
        },
      },
      genreOptions: [
        { id: '10770', label: 'TV Movie' },
        { id: '878', label: 'SF' },
        { id: '10751', label: 'Family' },
        { id: '27', label: 'Horror' },
        { id: '99', label: 'Documentary' },
        { id: '18', label: 'Drama' },
        { id: '10749', label: 'Romance' },
        { id: '12', label: 'Adventure' },
        { id: '9648', label: 'Mystery' },
        { id: '80', label: 'Crime' },
        { id: '37', label: 'Western' },
        { id: '53', label: 'Thriller' },
        { id: '16', label: 'Animation' },
        { id: '28', label: 'Action' },
        { id: '36', label: 'History' },
        { id: '10402', label: 'Music' },
        { id: '10752', label: 'War' },
        { id: '35', label: 'Comedy' },
        { id: '14', label: 'Fantasy' },
      ],
    }
  },
  computed: {
    ...mapGetters(['signupAuthError']),
  },
  methods: {
    ...mapActions(['signup']),
    toggleGenre(genreId) {
      if (this.payload.genres.includes(genreId)) {
        this.payload.genres = this.payload.genres.filter(id => id !== genreId)
        return
      }

      this.payload.genres = [...this.payload.genres, genreId]
    },
  },
}
</script>

<style scoped lang="scss">
.signup-page {
  min-height: calc(100vh - 10rem);
}

.signup-box {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  overflow: hidden;
  background: white;
  color: #526077;
  border-radius: 24px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
}

.partition-title {
  padding: 2rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 300;
}

.partition-form,
.genre-panel {
  padding: 0 1.5rem 1.5rem;
}

input {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 0.95rem;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #dddedf;
  padding: 0.35rem 0.5rem;
}

.large-btn,
.genre-button {
  border-radius: 999px;
  border: 1px solid #d4ddeb;
  background: white;
  color: #304154;
  cursor: pointer;
}

.large-btn {
  width: 100%;
  padding: 0.85rem 1rem;
  margin-top: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.genre-label {
  margin: 0;
  padding-top: 2rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.genre-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.genre-button {
  padding: 0.6rem 0.95rem;
}

.genre-button--selected {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #04101e;
  border-color: transparent;
}

.error-copy {
  color: #c14444;
  margin-top: 1rem;
}

.autocomplete-fix {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  width: 0;
  height: 0;
}

@media (max-width: 900px) {
  .signup-box {
    grid-template-columns: 1fr;
  }
}
</style>
