<template>
  <div>
    <MainHeader />
    <AboutSection1 />
    <AboutSection2 />
    <EtcSection />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/header.vue'
import AboutSection1 from '@/components/section-1.vue'
import AboutSection2 from '@/components/section-2.vue'
import EtcSection from '@/components/etc.vue'
import MainFooter from '@/components/footer.vue'

export default {
  name: 'AboutUs',
  components: {
    MainHeader,
    AboutSection1,
    AboutSection2,
    EtcSection,
    MainFooter
  }
}
</script>

