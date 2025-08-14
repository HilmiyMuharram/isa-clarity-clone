<template>
  <!-- ===== Our Team Section ===== -->
  <section class="team-section">
    <div class="container">
      <h2 class="team-title" ref="teamTitle">Our team</h2>
      <p class="team-subtitle" ref="teamSubtitle">
        consists of completely different people who are united by a common desire – to help
      </p>

      <div class="team-grid">
        <div
          v-for="(member, i) in team"
          :key="i"
          class="team-card"
          ref="teamCards"
        >
          <div class="team-inner">
            <img :src="member.img" alt="" class="team-img" />
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Socially Active Citizens Section ===== -->
  <section class="citizens-section">
    <div class="container">
      <h2 class="citizens-title" ref="citizensTitle">Socially active citizens</h2>
      <p class="citizens-subtitle" ref="citizensSubtitle">support us</p>

      <div class="citizens-grid">
        <div
          v-for="(citizen, i) in citizens"
          :key="i"
          class="citizen-card"
          ref="citizenCards"
        >
          <img :src="citizen.img" alt="" class="citizen-img" />
          <h3 class="citizen-name">{{ citizen.name }}</h3>
          <p class="citizen-role">{{ citizen.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "TeamSection",
  data() {
    return {
      team: [
        { name: "Daryna Deriy", role: "Chairman of the Board", img: require('@/assets/images/team1.jpg') },
        { name: "Polina Snisarenko-Kulchytska", role: "Curator of the Foundation", img: require('@/assets/images/team2.jpg') },
        { name: "Bohdan Kulchytsky", role: "Executive Manager", img: require('@/assets/images/team3.jpg') },
        { name: "Polina Snisarenko-Kulchytska", role: "Curator of the Foundation", img: require('@/assets/images/team4.jpg') },
        { name: "Anna Kulchytska", role: "Translator", img: require('@/assets/images/team5.jpg') },
        { name: "Ponisarenko Kulchytska", role: "Director", img: require('@/assets/images/team6.jpg') },
        { name: "Lina Yabcobcuk", role: "Designer", img: require('@/assets/images/team7.jpg') },
        { name: "Anna Andriychuk", role: "SMM Manager", img: require('@/assets/images/team8.jpg') },
        { name: "Basil Glo", role: "Web Developer", img: require('@/assets/images/team9.jpg') },
        { name: "Polina Snisarenko-Kulchytska", role: "Curator of the Foundation", img: require('@/assets/images/team10.jpg') },
        { name: "SEO Spesialist", role: "Open Vacancy", img: require('@/assets/images/hero2.svg') },
        { name: "Office Manager", role: "Open Vacancy", img: require('@/assets/images/hero.svg') }
      ],
      citizens: [
        { name: "Oleksiy Tritenko", role: "theater and film actor", img: require('@/assets/images/team5.jpg') },
        { name: "Stanislav Boklan", role: "People's Artist of Ukraine", img: require('@/assets/images/citizen1.jpg') },
        { name: "Alexander Rudinsky", role: "theater and film actor", img: require('@/assets/images/citizen2.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/citizen3.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/citizen4.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/citizen5.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/citizen6.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/citizen7.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/team8.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/team4.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/team9.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/team1.jpg') },
        { name: "Oksana Zhdanova", role: "theater and film actress", img: require('@/assets/images/team12.jpg') },
        
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Animasi "Our Team"
      gsap.from(this.$refs.teamTitle, {
        scrollTrigger: { trigger: this.$refs.teamTitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(this.$refs.teamSubtitle, {
        scrollTrigger: { trigger: this.$refs.teamSubtitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });
      this.$refs.teamCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15
        });
      });

      // Animasi "Socially active citizens"
      gsap.from(this.$refs.citizensTitle, {
        scrollTrigger: { trigger: this.$refs.citizensTitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(this.$refs.citizensSubtitle, {
        scrollTrigger: { trigger: this.$refs.citizensSubtitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });
      this.$refs.citizenCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15
        });
      });
    });
  }
};
</script>

<style scoped>
/* ===== OUR TEAM ===== */
.team-section {
  background: white;
  padding: 96px 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.team-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 15px;
  text-align: left;
  color: black;
}

.team-subtitle {
  font-size: clamp(2.5rem, 1.8vw, 3.45rem);
  margin-bottom: 40px;
  text-align: left;
  color: black;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 22px;
  align-items: stretch;
}

.team-card {
  background: #fff933;
  padding: 0;
  display: flex;
  flex-direction: column;
  transition: padding 0.3s ease;
}

.team-inner {
  border: 4px solid black;
  background: #fff933;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
}

.team-card:hover {
  padding: 10px;
}

.team-card:hover .team-inner {
  transform: scale(0.95);
}

.team-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 15px;
}

.team-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.team-role {
  font-size: 1rem;
  color: black;
  margin-top: auto;
}

/* ===== CITIZENS ===== */
.citizens-section {
  background: #ff80b5;
  padding: 96px 20px;
  font-family: 'Inter', sans-serif;
}

.citizens-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 15px;
  text-align: left;
  color: black;
}

.citizens-subtitle {
 font-size: clamp(2.5rem, 1.8vw, 3.45rem);
  margin-bottom: 40px;
  text-align: left;
  color: black;
}

.citizens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 22px;
}

.citizen-card {
  text-align: center;
}

.citizen-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin-bottom: 15px;
}

.citizen-name {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 5px;
}

.citizen-role {
  font-size: 1rem;
  color: black;
}
</style>
