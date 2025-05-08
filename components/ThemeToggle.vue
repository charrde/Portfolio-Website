<template>
  <label class="switch">
    <input type="checkbox" class="theme-toggle" :checked="isDarkTheme" @change="toggleTheme">
    <span class="slider"><span></span></span>
  </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDarkTheme = ref(false);
const baseTheme = ref('dark');
const currentTheme = ref('dark');

// theme variants
const themes = {
  light: ['light', 'pink-light', 'blue-light', 'green-light', 'purple-light', 'orange-light'],
  dark: ['dark', 'pink-dark', 'blue-dark', 'green-dark', 'purple-dark', 'orange-dark']
};

const getBaseTheme = (theme) => {
  if (themes.dark.includes(theme)) {
    return 'dark';
  }
  return 'light';
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme.includes('light') 
    ? currentTheme.replace('light', 'dark') 
    : currentTheme.replace('dark', 'light');
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  baseTheme.value = getBaseTheme(newTheme);
  isDarkTheme.value = baseTheme.value === 'dark';
  
  // Call particle refresh
  if (typeof window !== 'undefined' && window.refreshParticles) {
    window.refreshParticles();
  }
};

// Handle the secret theme button functionality
const secretThemeToggle = (event) => {
  if (event.target.classList.contains('secret-themes-button')) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const baseTheme = getBaseTheme(currentTheme);
    const themeList = themes[baseTheme];

    const currentIndex = themeList.indexOf(currentTheme);
    const newTheme = themeList[(currentIndex + 1) % themeList.length];

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Call particle refresh
    if (typeof window !== 'undefined' && window.refreshParticles) {
      window.refreshParticles();
    }
  }
};

onMounted(() => {
  // Load saved theme from localStorage or use default
  const storedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);
  baseTheme.value = getBaseTheme(storedTheme);
  isDarkTheme.value = baseTheme.value === 'dark';
  
  // Set up event listener for secret theme button
  document.addEventListener('click', secretThemeToggle);
});

watch(isDarkTheme, (newValue) => {
  baseTheme.value = newValue ? 'dark' : 'light';
});
</script>