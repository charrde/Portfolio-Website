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
  </div>
</template>