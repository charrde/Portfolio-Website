<template>
  <section class="center-container hero">
    <div class="hero-content">
      <div class="hello-badge">
        <span class="hello-text">Hello, World!</span>
      </div>

      <h1 class="hero-title">Patrick <span>Skinner</span></h1>

      <div class="code-brackets">
        <span class="bracket">&lt;</span>
        <span id="occupation">Software Developer</span>
        <span class="bracket">/&gt;</span>
      </div>


      <p class="hero-description">
        Based in Alberta, Canada, I'm passionate about web development,
        game development, and software solutions.
      </p>

      <div class="button-container">
        <a href="#portfolio" class="button-primary view-work-button">
          <span class="btn-icon">&#9741;</span> View My Work
        </a>
        <a href="#contact" class="button-secondary contact-button">
          <span class="btn-icon">&#9993;</span> Contact Me
        </a>
      </div>

      <div class="scroll-indicator">
        <span>Scroll Down</span>
        <div class="arrow-down">&#8595;</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hello-badge {
  background-color: var(--primary30);
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 1.5rem;
  padding: 0.5rem 1.25rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.hello-text {
  font-size: 0.875rem;
  font-weight: 500;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.2s;
}

.hero-title span {
  color: var(--primary);
}

.code-brackets {
  margin: 0.5rem 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.4s;
  height: 2.5rem;
}

.bracket {
  color: var(--primary);
  font-size: 1.75rem;
  font-weight: 300;
  font-family: monospace;
}

#occupation {
  font-family: 'Poppins', sans-serif;
  color: var(--tertiary);
  font-weight: 500;
  font-size: 1.25rem;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 100%;
  margin-bottom: 2rem;
  color: var(--text);
  opacity: 0.9;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.6s;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2.5rem;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

.button-container a {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.button-container a:hover {
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1.25rem;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
  font-size: 0.875rem;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
  animation: fadeIn 1s ease forwards 1.2s;
}

.scroll-indicator:hover {
  opacity: 0.8;
}

.arrow-down {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}

@media (min-width: 800px) {
  .hero-content {
    max-width: 800px;
  }

  .hero-title {
    font-size: 3rem;
  }

  #occupation {
    font-size: 1.5rem;
  }

  .code-brackets {
    gap: 1rem;
  }

  .hero-description {
    font-size: 1.125rem;
    max-width: 80%;
  }

  .button-container {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }

  .button-container a {
    min-width: 180px;
  }
}

@media (min-width: 1100px) {
  .hero {
    min-height: 90vh;
  }

  .hero-content {
    max-width: 1000px;
  }

  .hero-title {
    font-size: 4rem;
  }

  #occupation {
    font-size: 1.75rem;
  }

  .code-brackets {
    margin: 1rem 0 2rem;
  }

  .bracket {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
    max-width: 60%;
    margin-bottom: 3rem;
  }

  .button-container {
    margin-bottom: 4rem;
  }

  .button-container a {
    padding: 1rem 1.5rem;
  }
}
</style>