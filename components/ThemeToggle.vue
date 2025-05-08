<template>
  <label class="switch" aria-label="Toggle theme">
    <input type="checkbox" class="theme-toggle" :checked="isDarkTheme" @change="toggleTheme">
    <span class="slider"><span class="toggle-thumb"></span></span>
  </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDarkTheme = ref(false);
const baseTheme = ref('dark');

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

  if (typeof window !== 'undefined' && window.refreshParticles) {
    window.refreshParticles();
  }
};

const secretThemeToggle = (event) => {
  if (event.target.classList.contains('secret-themes-button')) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const baseTheme = getBaseTheme(currentTheme);
    const themeList = themes[baseTheme];

    const currentIndex = themeList.indexOf(currentTheme);
    const newTheme = themeList[(currentIndex + 1) % themeList.length];

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (typeof window !== 'undefined' && window.refreshParticles) {
      window.refreshParticles();
    }
  }
};

onMounted(() => {
  const storedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);
  baseTheme.value = getBaseTheme(storedTheme);
  isDarkTheme.value = baseTheme.value === 'dark';

  document.addEventListener('click', secretThemeToggle);
});

watch(isDarkTheme, (newValue) => {
  baseTheme.value = newValue ? 'dark' : 'light';
});
</script>

<style scoped>
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  cursor: pointer;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--theme-toggle);
  transition: 0.4s;
  border-radius: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4em;
  box-sizing: border-box;
  overflow: hidden;
}

.slider::before,
.slider::after {
  content: "";
  width: 1.4em;
  height: 1.4em;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider::before {
  content: "🌙";
  font-size: 1em;
  color: transparent;
  text-shadow: 0 0 0 #fff;
}

.slider::after {
  content: "☀️";
  font-size: 1em;
  color: transparent;
  text-shadow: 0 0 0 #fff;
}

.toggle-thumb {
  position: absolute;
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 0.3em;
  bottom: 0.3em;
  background-color: var(--theme-accent);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.switch input:checked+.slider .toggle-thumb {
  transform: translateX(1.5em);
}

.switch:hover .toggle-thumb {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

@media (min-width: 800px) {
  .switch {
    font-size: 18px;
  }
}

@media (min-width: 1100px) {
  .switch {
    font-size: 20px;
    width: 3.6em;
  }

  .slider::before,
  .slider::after {
    width: 1.5em;
    height: 1.5em;
  }

  .toggle-thumb {
    height: 1.5em;
    width: 1.5em;
  }
}
</style>