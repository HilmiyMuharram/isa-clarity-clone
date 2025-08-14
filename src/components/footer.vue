<template>
  <!-- ===== Our Partners Section ===== -->
  <section class="partners-section">
    <div class="container">
      <h2 class="partners-title" ref="partnersTitle">Our partners</h2>
      <p class="partners-subtitle" ref="partnersSubtitle">
        are take care of our fund and help us with many questions
      </p>

      <div class="partners-grid">
        <div
          v-for="(partner, i) in partners"
          :key="i"
          class="partner-card"
          ref="partnerCards"
        >
          <img :src="partner.img" alt="" class="partner-img" />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Contact Us Section ===== -->
  <section class="contact-section">
    <div class="container contact-grid">
      <!-- Kiri -->
      <div class="contact-info" ref="contactInfo">
        <h2 class="contact-title">Contact us</h2>
        <p class="contact-location">Kyiv, Ukraine</p>
        <p class="contact-email">mail@isa.co.ua</p>

        <div class="social-icons">
          <a
            v-for="(icon, index) in socialIcons"
            :key="index"
            :href="icon.link"
            target="_blank"
          >
            <img :src="icon.img" :alt="icon.name" />
          </a>
        </div>
      </div>

      <!-- Kanan -->
      <div class="contact-image" ref="contactImage">
        <img src="@/assets/images/hero3.svg" alt="Cats" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "PartnersAndContact",
  data() {
    return {
      partners: [
        { img: require('@/assets/images/partner1.png') },
        { img: require('@/assets/images/partner2.jpg') },
        { img: require('@/assets/images/partner3.jpg') },
        { img: require('@/assets/images/partner4.png') },
        { img: require('@/assets/images/partner5.png') },
        { img: require('@/assets/images/partner6.png') }
      ],
      socialIcons: [
        { name: "YouTube", img: require('@/assets/images/youtube.svg'), link: "#" },
        { name: "Instagram", img: require('@/assets/images/instagram.svg'), link: "#" },
        { name: "Facebook", img: require('@/assets/images/facebook.svg'), link: "#" },
        { name: "Patreon", img: require('@/assets/images/patreon.svg'), link: "#" },
        { name: "Telegram", img: require('@/assets/images/telegram.svg'), link: "#" },
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Animasi partners
      gsap.from(this.$refs.partnersTitle, {
        scrollTrigger: { trigger: this.$refs.partnersTitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from(this.$refs.partnersSubtitle, {
        scrollTrigger: { trigger: this.$refs.partnersSubtitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });

      this.$refs.partnerCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%" },
          y: 100, opacity: 0, duration: 0.8, ease: "power3.out", delay: index * 0.15
        });
      });

      // Animasi contact
      gsap.from(this.$refs.contactInfo, {
        scrollTrigger: { trigger: this.$refs.contactInfo, start: "top 90%" },
        y: 100, opacity: 0, duration: 0.8, ease: "power3.out"
      });

      gsap.from(this.$refs.contactImage, {
        scrollTrigger: { trigger: this.$refs.contactImage, start: "top 90%" },
        y: 100, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });
    });
  }
};
</script>

<style scoped>
/* ===== Our Partners ===== */
.partners-section {
  background: white;
  padding: 96px 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.partners-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 8px;
  text-align: left;
}

.partners-subtitle {
  font-size: clamp(2.1rem, 2.1vw, 2.75rem);
  opacity: 0.95;
  margin-bottom: 40px;
  text-align: left;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: center;
  justify-items: start;
}

.partner-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
}

.partner-img {
  max-width: 250px;
  max-height: 140px;
  object-fit: contain;
  filter: grayscale(100%) brightness(70%);
  opacity: 0.85;
  transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.partner-img:hover {
  filter: grayscale(100%) brightness(50%);
  opacity: 1;
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .partners-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 576px) {
  .partners-grid { grid-template-columns: 1fr; }
}

/* ===== Contact Us ===== */
.contact-section {
  background:#3CB043;
  padding: 100px 90px;
  height: 400px;
  color: black;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}

.contact-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 8px; /* lebih rapat ke lokasi */
  text-align: left;
}

.contact-location {
  font-size: clamp(1.9rem, 1.5vw, 1.25rem);
  margin-bottom: 4px; /* rapat ke email */
  text-align: left;
}

.contact-email {
  font-size: clamp(1.9rem, 1.5vw, 1.25rem);
  margin-bottom: 20px; /* jarak lebih besar ke ikon sosmed */
  text-align: left;
}


.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.social-icons img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.2);
}

.contact-image {
  display: flex;
  justify-content: center;
}

.contact-image img {
  max-width: 650px; /* diperbesar */
  height: auto;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .social-icons { justify-content: center; }
}
</style>
