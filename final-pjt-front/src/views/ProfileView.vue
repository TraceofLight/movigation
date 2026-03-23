<template>
  <section class="profile-page surface-card">
    <div v-if="!isLoggedIn" class="profile-empty">
      <h1 class="section-title">My Profile</h1>
      <p class="section-copy">Log in first to view your account summary.</p>
      <router-link class="profile-cta" :to="{ name: 'Login' }">Go to login</router-link>
    </div>

    <div v-else class="profile-body">
      <header class="profile-header">
        <div>
          <p class="hero-kicker">Account summary</p>
          <h1 class="section-title">My Profile</h1>
          <p class="section-copy">
            Current backend-backed account details and preference counts.
          </p>
        </div>
        <div class="profile-badge">
          <span>{{ displayName }}</span>
        </div>
      </header>

      <section class="profile-grid">
        <article class="profile-card">
          <h2>Identity</h2>
          <dl>
            <div>
              <dt>Username</dt>
              <dd>{{ profileData.username || currentUser.username || '-' }}</dd>
            </div>
            <div>
              <dt>Nickname</dt>
              <dd>{{ profileData.nickname || currentUser.nickname || '-' }}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{{ profileData.phone_number || '-' }}</dd>
            </div>
          </dl>
        </article>

        <article class="profile-card">
          <h2>Activity</h2>
          <dl>
            <div>
              <dt>Favorite Genres</dt>
              <dd>{{ favoriteGenreCount }}</dd>
            </div>
            <div>
              <dt>Liked Movies</dt>
              <dd>{{ likedMovieCount }}</dd>
            </div>
            <div>
              <dt>Reviews</dt>
              <dd>{{ reviewCount }}</dd>
            </div>
          </dl>
        </article>
      </section>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser', 'profile']),
    profileData() {
      return this.profile || {}
    },
    displayName() {
      return this.profileData.nickname || this.currentUser.nickname || this.currentUser.username || 'User'
    },
    favoriteGenreCount() {
      return (this.profileData.like_genres || this.currentUser.like_genres || []).length
    },
    likedMovieCount() {
      return (this.profileData.like_movies || this.currentUser.like_movies || []).length
    },
    reviewCount() {
      return (this.profileData.reviews || this.currentUser.reviews || []).length
    },
  },
  created() {
    const username = this.currentUser?.username

    if (this.isLoggedIn && username) {
      this.fetchProfile({ username })
    }
  },
  methods: {
    ...mapActions(['fetchProfile']),
  },
}
</script>

<style scoped>
.profile-page {
  padding: 2rem;
}

.profile-empty,
.profile-body {
  display: grid;
  gap: 1.5rem;
}

.profile-cta {
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  text-decoration: none;
  padding: 0.85rem 1.25rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #04101e;
  font-weight: 700;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.profile-badge {
  min-width: 8rem;
  padding: 1rem 1.2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--panel-line);
  text-align: center;
  font-weight: 700;
}

.profile-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.profile-card {
  padding: 1.25rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--panel-line);
}

.profile-card h2 {
  margin-top: 0;
}

.profile-card dl {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.profile-card dt {
  color: var(--muted);
  font-size: 0.9rem;
}

.profile-card dd {
  margin: 0.25rem 0 0;
  font-size: 1.05rem;
}
</style>
