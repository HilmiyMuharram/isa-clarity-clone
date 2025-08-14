<template>
  <div>
    <!-- ===== Our Projects Section ===== -->
    <section class="projects-section">
      <div class="container">
        <h2 class="title" ref="title">Our projects</h2>
        <p class="subtitle" ref="subtitle">
          are very different in terms of priority, scale and complexity of implementation
        </p>

        <div class="stack">
          <div
            v-for="(project, i) in projects"
            :key="i"
            class="project-card"
            :style="{ background: project.bg }"
            ref="cards"
          >
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== We Want to Help Section ===== -->
    <section class="help-section">
      <div class="container">
        <h2 class="help-title" ref="helpTitle">We want to help</h2>
        <p class="help-subtitle" ref="helpSubtitle">
          homeless packs, volunteers, guardians, overstayers, shelters and other organisations
        </p>

        <div class="help-grid">
          <div
            v-for="(item, i) in shelters"
            :key="i"
            class="help-card"
            ref="helpCards"
          >
            <span class="help-text">{{ item }}</span>
          </div>
        </div>
        <button class="apply-btn">Apply For Help</button>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          title: "Emergency Aid. WAR 2022.",
          desc: "Providing food and medicine to the shelters and animals which lost their homes and families due to the war",
          bg: "black"
        },
        {
          title: "Non-commercial feed line",
          desc: "construction of industrial production base where food for shelters will be produced on a free basis ",
          bg: "#3CB043"
        },
        {
          title: "Education and Control",
          desc: "lectures on communication, organisation and coordination of processes, control over the use of aid",
          bg: "pink"
        }
      ],
      shelters: [
        "Shelter of Victoria Bulbyna",
        "City of faithful hearts",
        "Shelter of Natalia Tymoshenko",
        "Shelter of Jeanne Sass",
        "Shelter of Victoria Bondarenko",
        "Sterilization center",
        "Zoo chance",
        "Save lives",
        "City Center for the Treatment of Animals",
        "City Center for the Treatment of Animals",
        "City Center for the Treatment of Animals",
        "City Center for the Treatment of Animals",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center",
        "Sterilization center"
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Animasi judul & subjudul Our Projects
      gsap.from(this.$refs.title, {
        scrollTrigger: { trigger: this.$refs.title, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(this.$refs.subtitle, {
        scrollTrigger: { trigger: this.$refs.subtitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });

      // Animasi card Our Projects
      this.$refs.cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "restart none none reverse", // <-- ini bikin tiap scroll ulang
          },
          x: -150,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2
        });
      });

      // Animasi judul & subjudul We want to help
      gsap.from(this.$refs.helpTitle, {
        scrollTrigger: { trigger: this.$refs.helpTitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
      });
      gsap.from(this.$refs.helpSubtitle, {
        scrollTrigger: { trigger: this.$refs.helpSubtitle, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2
      });

      // Animasi kotak We want to help
      this.$refs.helpCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "restart none none reverse", // <-- sama juga di sini
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: index * 0.105
      });
    });
    });
  }
};
</script>

<style scoped>
/* ===== Projects Section ===== */
.projects-section {
  background: #2385ee;
  color: #fff;
  padding: 96px 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 8px;
  text-align: left;
}

.subtitle {
  font-size: clamp(2.1rem, 2.1vw, 2.75rem);
  opacity: 0.95;
  margin-bottom: 40px;
  text-align: left;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* Project Card */
.project-card {
  width: 100%;
  min-height: 185px;
  padding: 20px 5px;
  text-align: left;
  color: white;
  position: relative;
  cursor: pointer;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 4px solid #fff;
  transition: transform 0.35s ease;
}

.project-card:hover::before {
  transform: translate(10px,-10px);
}

.card-title, .card-desc {
  position: relative;
  z-index: 1;
  margin-left: 50px;
  transition: transform 0.35s ease;
}

.project-card:hover .card-title,
.project-card:hover .card-desc {
  transform: translate(10px,-10px);
}

.card-title {
  font-size: clamp(1.8rem, 2.8vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 6px;
}

.card-desc {
  font-size: clamp(2rem, 1.8vw, 2.25rem);
  line-height: 1.5;
  opacity: 0.95;
}

/* ===== We Want to Help Section ===== */
.help-section {
  background: #fff933;
  padding: 96px 20px;
  font-family: 'Inter', sans-serif;
}

.help-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 15px;
  text-align: left;
}

.help-subtitle {
  font-size: clamp(2.1rem, 2.1vw, 2.75rem);
  margin-bottom: 40px;
  text-align: left;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolom */
  gap: 22px;
}

.help-card {
  background: white;
  padding: 25px 20px;
  min-height: 90px; /* tinggi kotak */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.help-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid black;
  transition: transform 0.10s ease;
}

.help-card:hover::before {
  transform: translate(10px,-10px); /* efek geser */
}

.help-text {
  position: relative;
  z-index: 1;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 500;
  text-align: center;
  color: black;
  transition: transform 0.10s ease;
}

.help-card:hover .help-text {
  transform: translate(10px,-10px); /* teks ikut geser */
}

.apply-btn {
  display: inline-flex; /* biar teks & icon sejajar */
  align-items: center;
  gap: 10px; /* jarak teks & panah */
  background: #ff99cc; /* pink */
  border: 5px solid black;
  padding: 5px 25px;
  width: 23%;
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
  cursor: pointer;
  transition: transform 0.15s ease;
  margin-top: 130px;
  margin-right: 90%;
}

.apply-btn::after {
  content: "→"; /* panah kanan */
  font-size: 4rem;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.3s; /* animasi smooth */
}

/* hover hanya untuk panah */
.apply-btn:hover::after {
  transform: translate(15px, -5px);
}

</style>
