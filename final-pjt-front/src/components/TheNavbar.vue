<template>
  <header class="nav-shell surface-card">
    <div class="nav-brand-row">
      <router-link class="brand-link" :to="{ name: 'Home' }">
        <span class="brand-mark">M</span>
        <span class="brand-text">Movigation</span>
      </router-link>

      <button class="menu-toggle" type="button" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'Close' : 'Menu' }}
      </button>
    </div>

    <nav class="nav-links" :class="{ 'nav-links--open': menuOpen }">
      <router-link class="nav-link" :to="{ name: 'Featured' }" @click="menuOpen = false">
        Featured
      </router-link>
      <router-link class="nav-link" :to="{ name: 'Search' }" @click="menuOpen = false">
        Search
      </router-link>
      <router-link class="nav-link" :to="{ name: 'Review' }" @click="menuOpen = false">
        Review
      </router-link>
      <router-link
        v-if="isLoggedIn"
        class="nav-link"
        :to="{ name: 'Profile' }"
        @click="menuOpen = false"
      >
        Account
      </router-link>
      <router-link
        v-if="isNotLoggedIn"
        class="nav-link nav-link--ghost"
        :to="{ name: 'Login' }"
        @click="menuOpen = false"
      >
        Login
      </router-link>
      <router-link
        v-if="isNotLoggedIn"
        class="nav-link nav-link--accent"
        :to="{ name: 'Signup' }"
        @click="menuOpen = false"
      >
        Sign Up
      </router-link>
      <router-link
        v-if="isLoggedIn"
        class="nav-link nav-link--accent"
        :to="{ name: 'Logout' }"
        @click="menuOpen = false"
      >
        Logout
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbar',
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'isNotLoggedIn']),
  },
}
</script>

<style scoped>
.nav-shell {
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 20;
  width: min(1180px, calc(100% - 2rem));
  transform: translateX(-50%);
  padding: 1rem 1.25rem;
}

.nav-brand-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.9rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #04101e;
  font-weight: 800;
}

.brand-text {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.menu-toggle {
  display: none;
  border: 1px solid var(--panel-line);
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  padding: 0.65rem 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--muted);
  transition: 0.2s ease;
}

.nav-link:hover,
.router-link-active.nav-link {
  color: var(--text);
  border-color: var(--panel-line);
  background: rgba(255, 255, 255, 0.04);
}

.nav-link--ghost {
  border-color: var(--panel-line);
}

.nav-link--accent {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #04101e;
  font-weight: 700;
}

.nav-link--accent.router-link-active,
.nav-link--accent:hover {
  border-color: transparent;
  color: #04101e;
}

@media (max-width: 720px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: stretch;
  }

  .nav-links--open {
    display: flex;
  }
}
</style>
