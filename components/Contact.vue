<template>
  <section id="contact" class="contact">
    <h2 class="center-container">Contact <span>Me</span></h2>
    <div class="center-container contact-card">
      <div class="contact-form">
        <form @submit.prevent="submitForm" method="POST" id="contact-form">
          <input data-remove-prefix type="hidden" name="subject" value="[patski.dev] Someone left a message" />
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="form.message" id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="button-primary contact-submit-button">Send</button>
        </form>
      </div>
      <div class="contact-info">
        <h3>Get in touch directly</h3>
        <p>Email: <a>chpatsk@gmail.com</a></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = async () => {
  try {
    form.value = {
      name: '',
      email: '',
      message: ''
    };
    
    alert('Your message has been sent successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again later.');
  }
};
</script>