<template>
  <header class="hero">
    <button class="donate-btn">donate</button>

    <div class="hero-content">
      <!-- Kiri: Gambar Dog dengan animasi -->
      <div class="logo">
        <transition name="slide-down" mode="out-in">
          <img :key="currentDog" :src="currentDog" alt="Dog face" class="dog-img" />
        </transition>
      </div>

      <!-- Kanan: Tulisan -->
      <div class="text">
        <h1>Innovative Solutions<br>for<br> Animals</h1>
      </div>
    </div>

    <!-- Tengah Bawah: Charity + Sosmed -->
    <div class="bottom-center">
      <p class="subtitle">charity organization</p>
      <div class="social-icons">
        <img src="@/assets/images/youtube.svg" alt="YouTube" />
        <img src="@/assets/images/instagram.svg" alt="Instagram" />
        <img src="@/assets/images/facebook.svg" alt="Facebook" />
        <img src="@/assets/images/patreon.svg" alt="Patreon" />
        <img src="@/assets/images/telegram.svg" alt="Telegram" />
      </div>
    </div>
  </header>
</template>

<script>
import dog1 from '@/assets/images/hero.svg'
import dog2 from '@/assets/images/hero2.svg'

export default {
  name: 'MainHeader',
  data() {
    return {
      currentDog: dog1,
      dogs: [dog1, dog2],
      index: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.index = (this.index + 1) % this.dogs.length
      this.currentDog = this.dogs[this.index]
    }, 4000) // sedikit lebih lama supaya animasi terlihat
  }
}
</script>

<style scoped>
.hero {
  background: #fff34f;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  padding: 40px 20px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 10px;
}

.logo {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.dog-img {
  width: 200px;
  height: auto;
}

.text {
  flex: 1;
  text-align: left;
}

.text h1 {
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  color: black;
  margin: 0;
  line-height: 1.1;
}

.bottom-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  font-size: clamp(2rem, 2.5vw, 2.3rem);
  font-weight: 500;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
}

.donate-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 1.5rem;
  z-index: 999;
  cursor: pointer;
}

/* Animasi slide down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
