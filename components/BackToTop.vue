<template>
  <a href="#top" class="back-to-top" :class="{ 'visible': isVisible }" aria-label="Back to top">
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
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--primary);
  color: var(--static-white);
  border-radius: 50%;
  visibility: hidden;
  opacity: 0;
  transform: translateY(20px);
  box-shadow: var(--box-shadow);
  z-index: 50;
  transition: var(--transition03);
  transition-property: visibility, opacity, transform, background-color;
}

.back-to-top.visible {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.back-to-top i {
  font-size: 1.25rem;
}

.back-to-top:hover {
  background-color: var(--accent);
}

.back-to-top:active {
  transform: translateY(-3px);
}

@media (min-width: 800px) {
  .back-to-top {
    bottom: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
  }

  .back-to-top i {
    font-size: 1.5rem;
  }
}

@media (min-width: 1100px) {
  .back-to-top {
    bottom: 35px;
    right: 35px;
    width: 55px;
    height: 55px;
  }

  .back-to-top i {
    font-size: 1.75rem;
  }
}
</style>