<template>
  <section id="about" class="center-container about">
    <h2>About <span>Me</span></h2>
    <div class="cardbox">
      <div class="bio-card">
        <h4>Bio</h4>
        <h3>Patrick Skinner</h3>
        <h4>Full-Stack Developer</h4>
        <p>Hi, I'm Patrick Skinner, a Full-Stack Developer based in Alberta, Canada. I am an undergraduate from NAIT (Northern Alberta Institute of Technology) I have experience in web development, game development, and software development. I am very passionate about improving my programming skills and building applications, video games and websites. I am always looking for new opportunities to learn and grow as a developer.</p>
      </div>
      <div class="resume-card">
        <h4>Resume</h4>
        <p>Download, view, or print a copy of my resume here.</p>
        <a href="" class="button-secondary about-download-button">Download</a>
      </div>
    </div>
    <div class="hobbies-card">
      <h4>Hobbies &amp; Interests</h4>
      <ul>
        <li v-for="(hobby, index) in hobbies" :key="index">{{ hobby }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const hobbies = [
  'Playing video games.',
  'Creating mods for games.',
  'Listening to music.',
  'Tinkering with game engines.',
  'Game development.',
  'Building websites.',
  'Collecting video game & Marvel memorabilia.',
  'Creating vector art.',
  'Building computers and keyboards from scratch.',
  'Playing with, tinkering with Arduinos and circuits.'
];
</script>