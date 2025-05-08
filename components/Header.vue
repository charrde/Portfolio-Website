<template>
  <header>
    <section class="center-container header" ref="headerContainer">
      <div class="inner-container" :class="{ shrink: isHeaderShrunk }">
        <h1>Patrick</h1>
        <button class="menu" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M5 9v2h40V9H5zm0 15v2h40v-2H5zm0 15v2h40v-2H5z"></path>
          </svg>
        </button>
      </div>
      <div class="nav" :class="{ 'show-nav': isMenuOpen }">
        <nav>
          <ul>
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" @click="closeMenu">{{ item.text }}</a>
            </li>
          </ul>
          <div class="theme-switch-mobile">
            <ThemeToggle v-if="isMobile" />
          </div>
        </nav>
      </div>
      <div class="theme-switch">
        <ThemeToggle v-if="!isMobile" />
      </div>
    </section>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isHeaderShrunk = ref(false);
const isMobile = ref(window?.innerWidth < 1100);
const headerContainer = ref(null);

const navItems = [
  { href: '#top', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#education', text: 'Education' },
  { href: '#portfolio', text: 'Projects' },
  { href: '#contact', text: 'Contact' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const checkHeaderShrink = () => {
  isHeaderShrunk.value = window.scrollY > 50;
};

const checkMobileView = () => {
  isMobile.value = window.innerWidth < 1100;
};

onMounted(() => {
  window.addEventListener('scroll', checkHeaderShrink);
  window.addEventListener('resize', checkMobileView);
  checkHeaderShrink();
  checkMobileView();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkHeaderShrink);
  window.removeEventListener('resize', checkMobileView);
});
</script>