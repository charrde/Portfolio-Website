<template>
  <footer>
    <div class="footer-container">
      <div class="footer-engagement">
        <div class="contact-info">
          <h4>Contact Me</h4>
          <p>Email: chpatsk@gmail.com</p>
        </div>
        <div class="socials">
          <a href="https://www.linkedin.com/in/patjski" class="bi bi-linkedin" aria-label="LinkedIn"></a>
          <a href="https://github.com/charrde" class="bi bi-github" aria-label="GitHub"></a>
          <a href="https://x.com/charrrde" class="bi bi-twitter-x" aria-label="X"></a>
          <a href="" class="bi bi-microsoft-teams" aria-label="Microsoft Teams"></a>
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
    </div>
  </footer>
  <div class="subfooter">
    <p>Designed By <span>Patrick Skinner</span></p>
    <p>This website is open source. You're free to inspire yourself or sample the code!</p>
  </div>
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

<style scoped>
footer {
  padding: 3rem 1.5rem 2rem;
  background-color: var(--background);
  color: var(--text);
  text-align: center;
  border-top: 1px solid var(--quarternary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-engagement {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.contact-info h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.contact-info p {
  font-size: 1rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  margin-top: 0.5rem;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--primary30);
  color: var(--text);
  font-size: 1.25rem;
  transition: var(--transition03);
  transition-property: transform, background-color, color;
}

.socials a:hover {
  color: var(--primary);
  transform: translateY(-3px);
  background-color: var(--primary70);
}

.footer-nav {
  width: 100%;
}

.footer-nav h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.footer-nav nav {
  width: 100%;
}

.footer-nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.footer-nav nav ul li {
  width: calc(50% - 1rem);
  text-align: center;
}

.footer-nav nav ul li:last-of-type {
  width: 100%;
  margin-top: 1rem;
}

.footer-nav nav ul li a {
  display: block;
  color: var(--text);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.95rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors), background-color;
}

.footer-nav nav ul li a:hover {
  background-color: var(--primary30);
  color: var(--accent);
}

.secret-themes-button {
  cursor: pointer;
  color: var(--text);
  opacity: 0.8;
  transition: var(--transition03);
  position: relative;
}

.secret-themes-button::before {
  content: '✨';
  margin-right: 0.5rem;
}

.secret-themes-button:hover {
  opacity: 1;
}

.subfooter {
  text-align: center;
  background-color: var(--quarternary);
  padding: 1.5rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.subfooter p {
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.subfooter span {
  color: var(--accent);
  font-weight: 600;
}

@media (min-width: 800px) {
  .footer-container {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }

  .footer-engagement,
  .footer-nav {
    width: 48%;
    align-items: flex-start;
  }

  .socials {
    margin-top: 1.5rem;
  }

  .footer-nav ul {
    justify-content: flex-start;
  }

  .contact-info p {
    margin-top: 1rem;
  }

  .subfooter p {
    font-size: 1rem;
  }
}

@media (min-width: 1100px) {
  .footer-container {
    gap: 4rem;
  }

  .footer-nav nav ul li {
    width: calc(33.33% - 1rem);
  }

  .footer-nav h4,
  .contact-info h4 {
    font-size: 1.5rem;
  }

  .contact-info p {
    font-size: 1.1rem;
  }

  .socials a {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }

  .footer-nav nav ul li a {
    font-size: 1rem;
    padding: 0.75rem;
  }
}
</style>