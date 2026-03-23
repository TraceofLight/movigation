<template>
  <section class="carousel surface-card">
    <div class="carousel__copy">
      <p class="hero-kicker">TOP FEATURED</p>
      <h2>TMDB Selection</h2>
    </div>

    <div class="carousel__track">
      <div
        v-for="slide in slides"
        :key="slide"
        class="carousel__slide"
        :style="{ backgroundImage: `url(${slide})` }"
      ></div>
      <div
        v-for="slide in slides"
        :key="`${slide}-repeat`"
        class="carousel__slide"
        :style="{ backgroundImage: `url(${slide})` }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MovieCarousel',
  data() {
    return {
      slides: [
        'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      ],
    }
  },
}
</script>

<style scoped>
.carousel {
  overflow: hidden;
  padding: 1.5rem;
}

.carousel__copy h2 {
  margin: 0;
}

.carousel__track {
  display: flex;
  gap: 1rem;
  width: max-content;
  margin-top: 1rem;
  animation: scroll 20s linear infinite;
}

.carousel__slide {
  width: 240px;
  height: 320px;
  border-radius: 20px;
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
