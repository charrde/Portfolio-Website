<template>
  <a href="#top" class="back-to-top-button" :class="{ 'show-back-to-top-button': isVisible }">
    <i class="bi bi-chevron-up"></i>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>