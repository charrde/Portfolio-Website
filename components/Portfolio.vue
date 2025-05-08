<template>
  <section id="portfolio" class="center-container portfolio">
    <h2><span>My </span>Projects</h2>
    <div class="portfolio-container">
      <div v-for="(project, index) in visibleProjects" :key="index" class="portfolio-card">
        <img :src="`/img/screenshots/${project.screenshot}`" :alt="project.alt">
        <div class="card-text">
          <h3>{{ project.title }}</h3>
          <p>
            {{ project.description }}
            <span v-if="project.expandedDescription" class="read-more" :class="{ 'show': project.isExpanded }">
              {{ project.expandedDescription }}
            </span>
            <span v-if="project.expandedDescription" class="read-more-button" @click="toggleExpand(index)" v-show="!project.isExpanded">
              [Expand]
            </span>
            <span v-if="project.expandedDescription" class="read-less-button" @click="toggleExpand(index)" v-show="project.isExpanded">
              [Collapse]
            </span>
          </p>
          <div class="card-buttons">
            <a v-if="project.github" :href="project.github" target="_blank" class="button-github">
              <i class="bi bi-github"></i>View on Github
            </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="button-primary">
              <i class="bi bi-box-arrow-up-right"></i>Explore
            </a>
            <a v-if="!project.liveUrl && !project.github" href="#contact" class="button-primary">
              Available Upon Request
            </a>
          </div>
        </div>
        <p class="portfolio-badge" :class="project.type === 'Personal' ? 'personal-project-badge' : 'school-project-badge'">
          {{ project.type }}
        </p>
      </div>
    </div>
    <div class="show-more-container">
      <button class="button-secondary toggle-projects-button" @click="toggleShowMore">
        {{ showAllProjects ? 'Show Less Projects' : 'Show More Projects' }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const showAllProjects = ref(false);
const cardsToShow = 6;

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A website all about me, my resume, and my portfolio.',
    screenshot: 'porfolio-website.png',
    alt: 'Portfolio Website',
    github: 'https://github.com/charrde/Portfolio-Website',
    liveUrl: 'https://patrickskinner.netlify.app/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: 'Virtual Turntable',
    description: 'A music player with a unique turntable.',
    screenshot: 'turntable.png',
    alt: 'A music player with a unique turntable.',
    github: 'https://github.com/charrde/virtual-turntable',
    liveUrl: 'https://turntable.patski.dev/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: '3Clues',
    description: 'A word game where you get 3 clues',
    expandedDescription: 'and you have to find the answer to what it is.',
    screenshot: '3clues.png',
    alt: 'A word game where you get 3 clues to find the answer.',
    github: 'https://github.com/charrde/3clues',
    liveUrl: 'https://3clues.ca/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: 'Winton Clicker',
    description: 'The ultimate plushie collecting clicker game!',
    expandedDescription: 'Collect plushies, buy autoclicking buildings, buy upgrades, collect buddies, get achievements, and run expeditions!',
    screenshot: 'winton.png',
    alt: 'The ultimate clicker game.',
    github: 'https://github.com/charrde/winton-clicker',
    liveUrl: 'https://winton.patski.dev/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: 'WhiskrJS',
    description: 'A snackbar/toast library with extreme customization.',
    screenshot: 'whiskr.png',
    alt: 'A snackbar/toast library with extreme customization.',
    github: 'https://github.com/charrde/whiskrjs',
    liveUrl: 'https://whiskr.patski.dev/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: 'Papertrail',
    description: 'A tool to help you track progress while you write.',
    screenshot: 'papertrail.png',
    alt: 'A tool to help you track progress while you write.',
    github: 'https://github.com/charrde/papertrail',
    liveUrl: 'https://papertrail.patski.dev/',
    type: 'Personal',
    isExpanded: false
  },
  {
    title: 'The Homestead Club',
    description: 'A mockup website for a homesteading blog.',
    screenshot: 'thehomesteadclub.png',
    alt: 'A brand website about homesteading.',
    liveUrl: null,
    github: null,
    type: 'School',
    isExpanded: false
  },
  {
    title: 'Thistle & Thread',
    description: 'A mockup brand website posting events',
    expandedDescription: 'and selling tartan, other traditional scottish merchandise.',
    screenshot: 'thistlethread.png',
    alt: 'A mockup brand website posting events and selling tartan, other traditional scottish merchandise.',
    liveUrl: null,
    github: null,
    type: 'School',
    isExpanded: false
  },
  {
    title: 'VAN Clothing',
    description: 'A mockup for a clothing brand\'s website.',
    screenshot: 'vanclothing.png',
    alt: 'A brand website about homesteading.',
    liveUrl: null,
    github: null,
    type: 'School',
    isExpanded: false
  }
];

const visibleProjects = computed(() => {
  return showAllProjects.value ? projects : projects.slice(0, cardsToShow);
});

const toggleShowMore = () => {
  showAllProjects.value = !showAllProjects.value;
};

const toggleExpand = (index) => {
  if (index < projects.length) {
    projects[index].isExpanded = !projects[index].isExpanded;
  }
};
</script>