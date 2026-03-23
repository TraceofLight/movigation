<template>
  <section id="loginView" class="auth-page">
    <div class="box auth-box">
      <div class="box-part" id="bp-left">
        <div class="partition" id="partition-register">
          <div class="partition-title">LOGIN ACCOUNT</div>
          <div class="partition-form">
            <form autocomplete="false" @submit.prevent="login(credentials)">
              <div class="autocomplete-fix">
                <input disabled type="password" />
              </div>

              <input v-model="credentials.username" type="text" placeholder="Username" required />
              <label>Username</label>

              <input
                v-model="credentials.password"
                type="password"
                placeholder="Password"
                required
              />
              <label>Password</label>

              <div class="button-set">
                <button id="login-btn" type="submit">Sign In</button>
                <router-link :to="{ name: 'Signup' }">
                  <button id="register-btn" type="button">Register</button>
                </router-link>
              </div>
            </form>

            <p v-if="loginAuthError" class="error-copy">
              Account login failed. Please check your username and password.
            </p>
          </div>
        </div>
      </div>
      <div class="box-part auth-visual" id="bp-right"></div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters(['loginAuthError']),
  },
  methods: {
    ...mapActions(['login']),
  },
}
</script>

<style scoped lang="scss">
.auth-page {
  display: grid;
  place-items: center;
  min-height: calc(100vh - 10rem);
}

.auth-box {
  background: white;
  overflow: hidden;
  width: min(720px, 100%);
  min-height: 420px;
  border-radius: 24px;
  color: #8b8c8d;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
}

.box-part {
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 50%;
  min-height: 420px;
}

.auth-visual {
  background: url('@/assets/login-bg.png') no-repeat center center;
  background-size: cover;
  border-left: 1px solid #eee;
}

.partition-title {
  padding: 2rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 300;
}

.partition-form {
  padding: 0 1.5rem 1.5rem;
}

input[type='password'],
input[type='text'] {
  display: block;
  margin-bottom: 0.25rem;
  width: 100%;
  font-size: 0.9rem;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #dddedf;
  padding: 0.4rem 0.5rem;
  transition: 0.3s all;
}

button {
  background: white;
  border-radius: 999px;
  padding: 0.85rem 1rem;
  width: 100%;
  margin-top: 0.9rem;
  color: #526077;
  cursor: pointer;
  border: 1px solid #dddedf;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

button:hover {
  border-color: #506580;
  color: #213041;
}

.button-set {
  display: grid;
  gap: 0.35rem;
  margin-top: 1rem;
}

.error-copy {
  color: #c14444;
  margin: 1rem 0 0;
  font-size: 0.85rem;
}

.autocomplete-fix {
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
}

@media (max-width: 720px) {
  .box-part {
    display: block;
    width: 100%;
  }

  .auth-visual {
    min-height: 200px;
    border-left: 0;
    border-top: 1px solid #eee;
  }
}
</style>
