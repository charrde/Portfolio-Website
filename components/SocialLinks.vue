<template>
  <div class="socials" id="socials"
    :style="{ visibility: isVisible ? 'visible' : 'hidden', opacity: isVisible ? '1' : '0' }">
    <a v-for="social in socials" :key="social.url" :href="social.url" :class="social.icon"></a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(true);

const socials = [
  { url: 'https://www.linkedin.com/in/patjski', icon: 'bi bi-linkedin' },
  { url: 'https://github.com/charrde', icon: 'bi bi-github' },
  { url: 'https://x.com/charrrde', icon: 'bi bi-twitter-x' },
  { url: '', icon: 'bi bi-microsoft-teams' }
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
  checkIfBottom(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkIfBottom);
  window.removeEventListener('resize', checkIfBottom);
});
</script>