<template>
  <header>
    <section class="header-container" ref="headerContainer">
      <div class="inner-container" :class="{ shrink: isHeaderShrunk }">
        <h1>Patrick</h1>
        <button class="menu" @click="toggleMenu" aria-label="Toggle menu">
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

<style scoped>
header {
  background-color: var(--background);
  border-bottom: 1px solid var(--quarternary);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.header-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: space-between;
}

.inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: padding 0.3s ease, font-size 0.3s ease;
}

.inner-container.shrink h1 {
  font-size: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors), font-size;
}

.menu {
  width: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.menu svg {
  fill: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.nav {
  visibility: hidden;
  opacity: 0;
  width: 100%;
  left: -100%;
  top: 100%;
  position: absolute;
  background: var(--background);
  color: var(--text);
  text-decoration: none;
  font-size: 1.5rem;
  border-top: 1px solid var(--quarternary);
  border-bottom: 1px solid var(--quarternary);
  transition: var(--transition03);
  transition-property: var(--transition-colors), left, opacity;
}

.show-nav {
  visibility: visible;
  width: 100%;
  opacity: 1;
  left: 0;
}

nav {
  padding: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: var(--text);
  display: block;
  padding: 10px 20px;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  font-weight: 500;
}

nav ul li a:hover {
  background-color: var(--primary30);
  color: var(--accent);
  cursor: pointer;
}

.theme-switch-mobile {
  display: flex;
  padding: 20px 20px;
  justify-content: flex-end;
}

.theme-switch {
  display: none;
}

@media (min-width: 800px) {
  .inner-container h1 {
    font-size: 1.75rem;
  }

  nav ul li a {
    font-size: 1.2rem;
  }
}

@media (min-width: 1100px) {
  h1 {
    font-size: 2rem;
  }

  .menu {
    display: none;
  }

  .nav {
    position: unset;
    visibility: visible;
    opacity: 1;
    border: unset;
    width: auto;
    left: auto;
  }

  nav {
    padding: 0;
  }

  nav ul {
    flex-direction: row;
    justify-content: flex-end;
  }

  nav ul li {
    margin-right: 20px;
  }

  nav ul li a {
    padding: 10px 15px;
    font-size: 1rem;
    position: relative;
  }

  nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease, left 0.3s ease;
  }

  nav ul li a:hover::after {
    width: 100%;
    left: 0;
  }

  .header-container {
    padding: 15px 20px;
    transition: padding 0.3s ease;
  }

  .header-container.shrink {
    padding: 8px 20px;
  }

  .inner-container {
    width: auto;
  }

  .theme-switch {
    display: block;
    margin-left: 20px;
  }

  .theme-switch-mobile {
    display: none;
  }
}
</style>