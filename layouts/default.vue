<template>
  <div>
    <ParticlesBackground />
    <Header />
    <main>
      <slot />
      <div class="edge-container">
        <BackToTop />
        <SocialLinks />
      </div>
    </main>
    <Footer />
    <div class="subfooter">
      <p>Designed By <span>Patrick Skinner</span></p>
      <p>This website is open source. you're free to inspire yourself or sample the code!</p>
    </div>
  </div>
</template>

<script setup>
// Components will be auto-imported by Nuxt
</script>