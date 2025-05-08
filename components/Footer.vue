<template>
  <footer>
    <section class="center-container">
      <div class="footer-engagement">
        <div class="contact-info">
          <h4>Contact Me</h4>
          <p>Email: chpatsk@gmail.com</p>
        </div>
        <div class="socials">
          <a href="https://www.linkedin.com/in/patjski" class="bi bi-linkedin"></a>
          <a href="https://github.com/charrde" class="bi bi-github"></a>
          <a href="https://x.com/charrrde" class="bi bi-twitter-x"></a>
          <a href="" class="bi bi-microsoft-teams"></a>
        </div>
      </div>
      <div class="footer-nav">
        <h4>Quick Navigation</h4>
        <nav>
          <ul>
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href">{{ item.text }}</a>
            </li>
            <li>
              <a class="secret-themes-button"> Super Secret Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </footer>
</template>

<script setup>
const navItems = [
  { href: '#top', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#education', text: 'Education' },
  { href: '#portfolio', text: 'Projects' },
  { href: '#contact', text: 'Contact' }
];
</script>