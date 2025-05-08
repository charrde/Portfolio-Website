<template>
  <section class="center-container hero">
    <div class="inner-container">
      <h2><span>Hello </span>Portfolio,</h2>
      <h2>I'm Patrick <span>Skinner</span></h2>
      <h2>The &gt;<span id="occupation">{{ currentText }}</span><span class="cursor">|</span></h2>
      <div class="button-container">
        <a href="#about" class="button-primary hero-about-button">About Me</a>
        <a href="#contact" class="button-secondary hero-contact-button">Contact</a>
      </div>
    </div>
    <div class="inner-container">
      <div class="headshot-container">
        <nuxt-img src="/img/headshot1.png" alt="Patrick Skinner"/>
      </div>
    </div>
    <div class="inner-container">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const phrases = ref(['Software Developer', 'Full-Stack Developer', 'Web Designer', 'Mod Developer', 'Game Developer']);
const currentText = ref('');
const index = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);
const isPaused = ref(false);
let typingTimeout = null;

const type = () => {
  const fullText = phrases.value[index.value];
  
  if (isDeleting.value) {
    currentText.value = fullText.substring(0, charIndex.value - 1);
    charIndex.value--;
  } else {
    currentText.value = fullText.substring(0, charIndex.value + 1);
    charIndex.value++;
  }

  if (!isDeleting.value && charIndex.value === fullText.length) {
    // Wait at the end of typing
    typingTimeout = setTimeout(() => {
      isDeleting.value = true;
      type();
    }, 500);
  } else if (isDeleting.value && charIndex.value === 0) {
    // Change phrase after deleting
    isDeleting.value = false;
    index.value = (index.value + 1) % phrases.value.length;
    type();
  } else {
    // Continue typing or deleting
    const typingSpeed = isDeleting.value ? 50 : 100;
    typingTimeout = setTimeout(type, typingSpeed);
  }
};

// Create an intersection observer to pause/resume typing when element is in/out of view
const setupObserver = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (isPaused.value) {
            isPaused.value = false;
            type();
          }
        } else {
          isPaused.value = true;
          clearTimeout(typingTimeout);
        }
      });
    });
    
    const element = document.getElementById('occupation');
    if (element) {
      observer.observe(element);
    }
  }
};

onMounted(() => {
  // Start typing effect
  type();
  // Set up intersection observer
  setTimeout(setupObserver, 100);
});

onUnmounted(() => {
  // Clean up timeout
  clearTimeout(typingTimeout);
});
</script>