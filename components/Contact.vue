<template>
  <section id="contact" class="contact">
    <div class="center-container">
      <h2>Get In <span>Touch</span></h2>

      <div class="contact-container">
        <!-- Contact Information Panel -->
        <div class="contact-info-panel">
          <div class="info-card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.</p>

            <div class="info-item">
              <div class="icon-wrapper">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="info-content">
                <span class="info-label">Email</span>
                <a href="mailto:chpatsk@gmail.com">chpatsk@gmail.com</a>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-wrapper">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-content">
                <span class="info-label">Location</span>
                <span>Alberta, Canada</span>
              </div>
            </div>

            <div class="connect-section">
              <h4>Connect with me</h4>
              <div class="social-links">
                <a href="https://github.com/charrde" target="_blank" class="social-icon">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/patjski" target="_blank" class="social-icon">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://x.com/charrrde" target="_blank" class="social-icon">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="" class="social-icon">
                  <i class="bi bi-microsoft-teams"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Panel -->
        <div class="contact-form-panel">
          <div class="form-card">
            <div class="window-controls">
              <span class="control red"></span>
              <span class="control yellow"></span>
              <span class="control green"></span>
              <span class="window-title">Send Me a Message</span>
            </div>

            <form @submit.prevent="submitForm" method="POST" id="contact-form">
              <input data-remove-prefix type="hidden" name="subject" value="[patski.dev] Someone left a message" />

              <div class="form-group">
                <label for="name">Your Name</label>
                <div class="input-wrapper">
                  <i class="bi bi-person"></i>
                  <input v-model="form.name" type="text" id="name" name="name" placeholder="John Doe" required>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>
                <div class="input-wrapper">
                  <i class="bi bi-envelope"></i>
                  <input v-model="form.email" type="email" id="email" name="email" placeholder="john@example.com"
                    required>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <div class="input-wrapper">
                  <i class="bi bi-chat-square-text"></i>
                  <input v-model="form.subject" type="text" id="subject" name="subject" placeholder="Project Inquiry"
                    required>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <div class="input-wrapper">
                  <i class="bi bi-chat-text"></i>
                  <textarea v-model="form.message" id="message" name="message" placeholder="Your message here..."
                    required></textarea>
                </div>
              </div>

              <button type="submit" class="submit-button">
                <span>Send Message</span>
                <i class="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = async () => {
  try {
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    alert('Your message has been sent successfully!');
  } catch (error) {
    alert('There was an error sending your message. Please try again later.');
  }
};
</script>

<style scoped>
.contact {
  margin-top: 6rem;
  margin-bottom: 6rem;
  padding: 0 1rem;
}

.center-container {
  margin: 0 auto;
  max-width: 1200px;
}

h2 {
  color: var(--text);
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

h2 span {
  color: var(--tertiary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info-panel {
  flex: 1;
}

.info-card {
  background-color: var(--primary70);
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  height: 100%;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-card h3 {
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-card p {
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary);
  border-radius: 50%;
  color: var(--static-white);
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-content {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--tertiary);
  margin-bottom: 0.25rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-content a,
.info-content span:not(.info-label) {
  color: var(--text);
  font-size: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.info-content a:hover {
  color: var(--primary);
}

.connect-section {
  margin-top: 2.5rem;
}

.connect-section h4 {
  color: var(--text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--primary30);
  border-radius: 50%;
  color: var(--text);
  font-size: 1.25rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors), transform;
}

.social-icon:hover {
  background-color: var(--primary);
  color: var(--static-white);
  transform: translateY(-3px);
}

.contact-form-panel {
  flex: 1;
}

.form-card {
  background-color: var(--quarternary);
  border-radius: 1.25rem;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--background);
  padding: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.control {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.control.red {
  background-color: #FF5F56;
}

.control.yellow {
  background-color: #FFBD2E;
}

.control.green {
  background-color: #27C93F;
}

.window-title {
  margin-left: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  opacity: 0.75;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--background);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.input-wrapper i {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  color: var(--text);
  opacity: 0.7;
  font-size: 1.125rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

input,
textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background-color: transparent;
  color: var(--text);
  border: none;
  font-size: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  outline: none !important;
}

textarea {
  resize: vertical;
  min-height: 8rem;
}

input::placeholder,
textarea::placeholder {
  color: var(--text);
  opacity: 0.5;
}

textarea {
  min-height: 120px;
  line-height: 1.5;
}

input:focus,
textarea:focus {
  background-color: rgba(40, 40, 40, 0.5);
}

.input-wrapper:focus-within {
  box-shadow: 0 0 0 2px var(--primary);
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--primary);
  color: var(--static-white);
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition03);
  transition-property: var(--transition-colors), transform, box-shadow;
}

.submit-button:hover {
  background-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.submit-button i {
  font-size: 1.125rem;
}

@media (min-width: 800px) {
  .contact-container {
    flex-direction: row;
  }

  h2 {
    font-size: 3rem;
  }

  .info-card h3 {
    font-size: 1.75rem;
  }

  .info-card p {
    font-size: 1.125rem;
  }

  .submit-button {
    width: auto;
    padding: 1rem 2rem;
    margin-left: auto;
  }
}

@media (min-width: 1100px) {
  .contact {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  .info-card {
    padding: 3rem;
  }

  .icon-wrapper {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }

  .info-label {
    font-size: 1rem;
  }

  .info-content a,
  .info-content span:not(.info-label) {
    font-size: 1.125rem;
  }

  form {
    padding: 2.5rem;
  }

  .window-controls {
    padding: 1.25rem;
  }

  .control {
    width: 1rem;
    height: 1rem;
  }

  .window-title {
    font-size: 1rem;
  }
}
</style>