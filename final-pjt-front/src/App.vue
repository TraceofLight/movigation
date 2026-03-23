<template>
  <div class="app-shell">
    <TheNavbar />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar,
  },
}
</script>

<style>
:root {
  color-scheme: dark;
  --bg: #08111f;
  --bg-soft: #10213a;
  --panel: rgba(8, 17, 31, 0.84);
  --panel-line: rgba(130, 167, 255, 0.22);
  --text: #edf3ff;
  --muted: #a2b5d3;
  --accent: #3ed0ff;
  --accent-strong: #66f0c9;
  --danger: #ff7272;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(62, 208, 255, 0.18), transparent 32%),
    radial-gradient(circle at 85% 15%, rgba(102, 240, 201, 0.14), transparent 24%),
    linear-gradient(180deg, #091321 0%, #050b16 100%);
  color: var(--text);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

a {
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}

#app,
.app-shell {
  min-height: 100vh;
}

.page-shell {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 7rem 0 3rem;
}

.surface-card {
  background: var(--panel);
  border: 1px solid var(--panel-line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.section-title {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: 0.04em;
}

.section-copy {
  color: var(--muted);
  line-height: 1.7;
}
</style>
