<template>
  <section class="about-section">
    <div class="about-container">

      <!-- Bagian awal (We are & Our primary goal) -->
      <h2 class="about-title">We are</h2>
      <p class="about-text">
        team of like-minded people, socially active companies, media personalities,
        volunteers who help low-income shelters and foster carers to support
        homeless animals.
      </p>

      <h2 class="about-title">Our primary goal</h2>
      <p class="about-text">
        is to provide animals with the most necessary things – food, medicine,
        and urgent needs for the livelihood of shelters. We believe in our power
        and the power of conscious citizens who care about the environment and
        their health, who understand the importance of helping each other,
        especially our little friends. Growth begins with your care for your
        loved ones. Animals are one of the closest creatures to humans, who remain
        with us throughout our lives.
      </p>

      <!-- Quote -->
      <blockquote class="quote">
        <p><em>"Animals need to have friends. Just like humans."</em></p>
        <cite>– James Herriot, All Creatures Great and Small</cite>
      </blockquote>

      <!-- Ajakan -->
      <p class="about-text">
        Who else if not we should support our younger brothers, especially in difficult times? Let's be friends!
      </p>

      <!-- Video Embed -->
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/5Wk1rp99B7o?si=qZ-rmxiukTaJkkaH"
          title="Help the animals of Ukraine"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.about-section {
  background-color: white;
  min-height: 100vh;
  padding: 80px 20px;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.about-container {
  max-width: 1200px;
  margin: auto;
}

.about-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 15px;
  text-align: left;
  color: #000;
}

.about-text {
  font-size: 2.3rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #000;
  text-align: left;
}

.quote {
  border-left: 4px solid #ff80aa;
  padding-left: 20px;
  font-size: 2.3rem;
  margin: 40px 0;
  color: #000;
  text-align: left;
  margin-left: 5%;
}

.quote em {
  font-style: italic;
}

.quote cite {
  display: block;
  margin-top: 8px;
  font-size: 2rem;
  text-align: left;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 40px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
