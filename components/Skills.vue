<template>
  <section id="skills" class="center-container skills">
    <h2>Skills</h2>
    <div class="skills-slider languages-slider" id="languages-slider" ref="languagesSlider">
      <div class="skills-slide-track" :style="sliderStyle">
        <div v-for="(skill, index) in skills" :key="index" class="skills-slide">
          <div class="skills-card">
            <div class="skills-image">
              <img :src="`/img/${skill.image}`" :alt="skill.name">
            </div>
            <h4>{{ skill.name }}</h4>
          </div>
        </div>
      </div>
      <div class="carousel-nav" v-if="isMobile">
        <button id="languages-prev" @click="prevSlide">&lt;</button>
        <button id="languages-next" @click="nextSlide">&gt;</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const skills = [
  { name: 'HTML5', image: 'html5.svg' },
  { name: 'CSS3', image: 'css.svg' },
  { name: 'JavaScript', image: 'javascript.svg' },
  { name: 'C#', image: 'csharp.svg' },
  { name: 'Bootstrap', image: 'bootstrap.svg' },
  { name: 'GDScript', image: 'godot.svg' },
  { name: 'React', image: 'react.svg' },
  { name: 'Blazor', image: 'blazor.svg' },
  { name: 'Visual Studio', image: 'visualstudio.svg' },
  { name: 'Godot Engine', image: 'godot.svg' },
  { name: 'Visual Studio Code', image: 'vscode.svg' },
  { name: 'Figma', image: 'figma.svg' },
  { name: 'Linqpad', image: 'linqpad.svg' },
  { name: 'IntelliJ IDEA', image: 'intellij.svg' },
  { name: 'Flutter', image: 'flutter.svg' },
  { name: 'Dart', image: 'dart.svg' },
  { name: 'Java', image: 'java.svg' },
  { name: 'Android Studio', image: 'androidstudio.svg' },
  { name: 'Pinia', image: 'pinia.svg' },
  { name: 'Vue', image: 'vue.svg' },
  { name: 'Nuxt', image: 'nuxt.svg' },
  { name: 'TailwindCSS', image: 'tailwind.svg' },
  { name: 'PostgreSQL', image: 'postgresql.svg' },
  { name: 'Git', image: 'git.svg' },
  { name: 'GitHub', image: 'github.svg' },
  { name: 'Markdown', image: 'markdown.svg' },
  { name: 'MaterialUI', image: 'materialui.svg' },
  { name: 'Tauri', image: 'tauri.svg' },
];

const currentIndex = ref(0);
const isMobile = ref(false);
const isAutoSliding = ref(false);
const languagesSlider = ref(null);
let autoSlideInterval = null;
let autoSlideTimeout = null;

const autoSlideDelay = 2000; // 2 seconds
const resumeDelay = 5000; // 5 seconds

const sliderStyle = computed(() => {
  if (!isMobile.value) return {};
  
  const width = languagesSlider.value?.querySelector('.skills-slide')?.clientWidth || 0;
  return {
    transform: `translateX(-${currentIndex.value * width}px)`
  };
});

const nextSlide = () => {
  if (currentIndex.value < skills.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  
  if (isMobile.value) {
    stopAutoSlide();
    resetAutoSlideTimeout();
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = skills.length - 1;
  }
  
  if (isMobile.value) {
    stopAutoSlide();
    resetAutoSlideTimeout();
  }
};

const startAutoSlide = () => {
  if (!isAutoSliding.value && isMobile.value) {
    isAutoSliding.value = true;
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
  }
};

const stopAutoSlide = () => {
  isAutoSliding.value = false;
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
};

const resetAutoSlideTimeout = () => {
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(startAutoSlide, resumeDelay);
};

const resetCarousel = () => {
  currentIndex.value = 0;
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
};

const setupTouchEvents = () => {
  const slider = languagesSlider.value;
  let startX = 0;
  let endX = 0;
  
  if (slider) {
    slider.addEventListener('touchstart', (event) => {
      startX = event.touches[0].clientX;
    });
    
    slider.addEventListener('touchmove', (event) => {
      endX = event.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', () => {
      const swipeDistance = endX - startX;
      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    });
  }
};

const checkWindowSize = () => {
  isMobile.value = window.innerWidth < 800;
  
  if (isMobile.value) {
    if (!autoSlideInterval) {
      resetCarousel();
      startAutoSlide();
    }
  } else {
    stopAutoSlide();
    resetCarousel();
  }
};

onMounted(() => {
  checkWindowSize();
  setupTouchEvents();
  
  window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
  stopAutoSlide();
  clearTimeout(autoSlideTimeout);
  window.removeEventListener('resize', checkWindowSize);
});
</script>