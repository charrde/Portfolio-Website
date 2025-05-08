<template>
  <div class="social-links" id="socials"
    :style="{ visibility: isVisible ? 'visible' : 'hidden', opacity: isVisible ? '1' : '0' }">
    <a v-for="social in socials" :key="social.url" :href="social.url" :class="social.icon"
      :aria-label="social.name"></a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(true);

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/patjski', icon: 'bi bi-linkedin' },
  { name: 'GitHub', url: 'https://github.com/charrde', icon: 'bi bi-github' },
  { name: 'X', url: 'https://x.com/charrrde', icon: 'bi bi-twitter-x' },
  { name: 'Microsoft Teams', url: '', icon: 'bi bi-microsoft-teams' }
];

const checkIfBottom = () => {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  isVisible.value = !(windowHeight + scrollPosition >= documentHeight - 1);
};

onMounted(() => {
  window.addEventListener('scroll', checkIfBottom);
  window.addEventListener('resize', checkIfBottom);
  checkIfBottom();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkIfBottom);
  window.removeEventListener('resize', checkIfBottom);
});
</script>

<style scoped>
.social-links {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: var(--primary70);
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-all);
  z-index: 50;
  transform: translateY(0);
}

.social-links:hover {
  transform: translateY(-5px);
}

.social-links a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--primary30);
  color: var(--text);
  font-size: 1.25rem;
  transition: var(--transition03);
  transition-property: transform, background-color, color;
}

.social-links a:hover {
  color: var(--primary);
  transform: translateY(-2px) scale(1.1);
  background-color: var(--background);
}

@media (min-width: 800px) {
  .social-links {
    flex-direction: row;
    padding: 0.5rem 1rem;
    bottom: 25px;
    left: 25px;
  }

  .social-links a {
    font-size: 1.35rem;
  }
}

@media (min-width: 1100px) {
  .social-links {
    left: 35px;
    bottom: 35px;
    padding: 0.65rem 1.25rem;
  }

  .social-links a {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
}
</style>