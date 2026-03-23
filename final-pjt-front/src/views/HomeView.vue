<template>
  <section class="home-page">
    <div class="home-hero">
      <div class="logo">
        <span class="letter" data-letter="M">M</span>
        <span class="letter" data-letter="O">O</span>
        <span class="letter" data-letter="V">V</span>
        <span class="letter" data-letter="I">I</span>
        <span class="letter" data-letter="G">G</span>
        <span class="letter" data-letter="A">A</span>
        <span class="letter" data-letter="T">T</span>
        <span class="letter" data-letter="I">I</span>
        <span class="letter" data-letter="O">O</span>
        <span class="letter" data-letter="N">N</span>
      </div>
      <p class="hero-kicker">Movie discovery without the clutter</p>
      <h1 class="section-title">Find Your Best Movie</h1>
      <p class="section-copy hero-copy">
        Browse featured picks, filter titles quickly, and jump into a detail panel without dragging a legacy UI framework behind the app.
      </p>
    </div>

    <section class="film-strip surface-card">
      <div class="film-strip__track">
        <div
          v-for="slide in slides"
          :key="slide"
          class="film-strip__poster"
          :style="{ backgroundImage: `url(${slide})` }"
        ></div>
        <div
          v-for="slide in slides"
          :key="`${slide}-repeat`"
          class="film-strip__poster"
          :style="{ backgroundImage: `url(${slide})` }"
        ></div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      slides: [
        'https://picsum.photos/seed/1/200/300',
        'https://picsum.photos/seed/2/200/300',
        'https://picsum.photos/seed/3/200/300',
        'https://picsum.photos/seed/4/200/300',
        'https://picsum.photos/seed/5/200/300',
        'https://picsum.photos/seed/6/200/300',
        'https://picsum.photos/seed/7/200/300',
        'https://picsum.photos/seed/8/200/300',
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:900');

.home-page {
  display: grid;
  gap: 2rem;
}

.home-hero {
  padding-top: 2rem;
  text-align: center;
}

.hero-kicker {
  margin-bottom: 0.5rem;
  color: var(--accent-strong);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-copy {
  width: min(720px, 100%);
  margin: 1rem auto 0;
}

.logo {
  width: min(100%, 980px);
  margin: 0 auto 1.5rem;
  text-align: center;
}

.letter {
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 9vw, 6.5rem);
  margin: 0.06em;
  position: relative;
  color: var(--accent);
  transform-style: preserve-3d;
  perspective: 400px;
}

.letter:before,
.letter:after {
  position: absolute;
  content: attr(data-letter);
  transform-origin: top left;
  top: 0;
  left: 0;
}

.letter,
.letter:before,
.letter:after {
  transition: all 0.3s ease-in-out;
}

.letter:before {
  color: #02070f;
  text-shadow:
    -1px 0 1px rgba(255, 255, 255, 0.55),
    1px 0 1px rgba(0, 0, 0, 0.6);
  transform: rotateY(-10deg);
}

.letter:after {
  color: rgba(255, 255, 255, 0.12);
  transform: scale(1.08, 1) rotateY(24deg) skew(0deg, 8deg);
}

.logo:hover .letter:before {
  transform: rotateY(-30deg);
}

.logo:hover .letter:after {
  transform: scale(1.08, 1) rotateY(40deg) skew(0deg, 11deg);
}

.film-strip {
  overflow: hidden;
  padding: 1.5rem 0;
}

.film-strip__track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 20s linear infinite;
}

.film-strip__poster {
  width: 180px;
  height: 270px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
