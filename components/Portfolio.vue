<template>
  <section id="portfolio" class="portfolio">
    <div class="center-container">
      <h2><span>My </span>Projects</h2>

      <div class="filter-tabs">
        <button class="filter-tab" :class="{ active: activeFilter === 'all' }" @click="setFilter('all')">
          All Projects
        </button>
        <button class="filter-tab" :class="{ active: activeFilter === 'personal' }" @click="setFilter('personal')">
          Personal
        </button>
        <button class="filter-tab" :class="{ active: activeFilter === 'school' }" @click="setFilter('school')">
          School
        </button>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in filteredProjects" :key="index" class="project-card">
          <div class="project-image-container">
            <img :src="`/img/screenshots/${project.screenshot}`" :alt="project.alt">
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <div class="project-badge" :class="project.type.toLowerCase()">
                {{ project.type }}
              </div>
            </div>
            <p>
              {{ project.description }}
              <span v-if="project.expandedDescription" class="read-more" :class="{ 'show': project.isExpanded }">
                {{ project.expandedDescription }}
              </span>
              <button v-if="project.expandedDescription" class="expand-button" @click="toggleExpand(index)">
                {{ project.isExpanded ? 'Read Less' : 'Read More' }}
              </button>
            </p>

            <div class="project-tech">
              <div v-if="project.technologies" class="tech-badges">
                <div v-for="tech in project.technologies" :key="tech.id" class="tech-badge">
                  <img v-if="tech.image" :src="`/img/${tech.image}`" :alt="tech.name">
                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>

            <div class="project-actions">
              <a v-if="project.github" :href="project.github" target="_blank" class="action-button github-button">
                <i class="bi bi-github"></i>
                <span>GitHub</span>
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="action-button live-button">
                <i class="bi bi-box-arrow-up-right"></i>
                <span>Live Demo</span>
              </a>
              <a v-if="!project.liveUrl && !project.github" href="#contact" class="action-button contact-button">
                <i class="bi bi-envelope"></i>
                <span>Request Access</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMoreProjects" class="show-more-container">
        <button class="show-more-button" @click="toggleShowMore">
          {{ showAllProjects ? 'Show Less Projects' : 'Show More Projects' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTechnologies } from '~/composables/Technologies';

const showAllProjects = ref(false);
const cardsToShow = 6;
const activeFilter = ref('all');

const { getTechnologies } = useTechnologies();

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A website all about me, my resume, and my portfolio.',
    screenshot: 'porfolio-website.png',
    alt: 'Portfolio Website',
    github: 'https://github.com/charrde/Portfolio-Website',
    liveUrl: 'https://www.patski.dev/',
    type: 'Personal',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript', 'typescript', 'vue', 'nuxt']
  },
  {
    title: 'Virtual Turntable',
    description: 'A music player with a unique turntable.',
    screenshot: 'turntable.png',
    alt: 'A music player with a unique turntable.',
    github: 'https://github.com/charrde/virtual-turntable',
    liveUrl: 'https://turntable.patski.dev/',
    type: 'Personal',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
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
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
  },
  {
    title: 'Plushie Clicker',
    description: 'The ultimate plushie collecting clicker game!',
    expandedDescription: 'Collect plushies, buy autoclicking buildings, buy upgrades, collect buddies, get achievements, and run expeditions!',
    screenshot: 'plushie.png',
    alt: 'The ultimate clicker game.',
    github: 'https://github.com/charrde/winton-clicker',
    liveUrl: 'https://winton.patski.dev/',
    type: 'Personal',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript', 'vue', 'nuxt', 'tailwind', 'tauri', 'pinia', 'postgresql']
  },
  {
    title: 'WhiskrJS',
    description: 'A snackbar/toast library with extreme customization.',
    screenshot: 'whiskr.png',
    alt: 'A snackbar/toast library with extreme customization.',
    github: 'https://github.com/charrde/whiskrjs',
    liveUrl: 'https://whiskr.patski.dev/',
    type: 'Personal',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
  },
  {
    title: 'Papertrail',
    description: 'A tool to help you track progress while you write.',
    screenshot: 'papertrail.png',
    alt: 'A tool to help you track progress while you write.',
    github: 'https://github.com/charrde/papertrail',
    liveUrl: 'https://papertrail.patski.dev/',
    type: 'Personal',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript', 'react', 'tailwind', 'nextjs']
  },
  {
    title: 'The Homestead Club',
    description: 'A mockup website for a homesteading blog.',
    screenshot: 'thehomesteadclub.png',
    alt: 'A brand website about homesteading.',
    liveUrl: null,
    github: null,
    type: 'School',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
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
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
  },
  {
    title: 'VAN Clothing',
    description: 'A mockup for a clothing brand\'s website.',
    screenshot: 'vanclothing.png',
    alt: 'A brand website about homesteading.',
    liveUrl: null,
    github: null,
    type: 'School',
    isExpanded: false,
    technologyIds: ['html5', 'css3', 'javascript']
  }
];

const processedProjects = projects.map(project => ({
  ...project,
  technologies: getTechnologies(project.technologyIds)
}));

const filteredProjects = computed(() => {
  let filtered = processedProjects;

  if (activeFilter.value === 'personal') {
    filtered = processedProjects.filter(project => project.type === 'Personal');
  } else if (activeFilter.value === 'school') {
    filtered = processedProjects.filter(project => project.type === 'School');
  }

  return showAllProjects.value ? filtered : filtered.slice(0, cardsToShow);
});

const hasMoreProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return processedProjects.length > cardsToShow;
  } else if (activeFilter.value === 'personal') {
    return processedProjects.filter(project => project.type === 'Personal').length > cardsToShow;
  } else if (activeFilter.value === 'school') {
    return processedProjects.filter(project => project.type === 'School').length > cardsToShow;
  }
  return false;
});

const setFilter = (filter) => {
  activeFilter.value = filter;
  showAllProjects.value = false;
};

const toggleShowMore = () => {
  showAllProjects.value = !showAllProjects.value;
};

const toggleExpand = (index) => {
  if (index < processedProjects.length) {
    processedProjects[index].isExpanded = !processedProjects[index].isExpanded;
  }
};
</script>

<style scoped>
.portfolio {
  padding: 3rem 1rem;
  background-color: var(--background);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.center-container {
  margin: 0 auto;
  max-width: 1200px;
}

.portfolio h2 {
  color: var(--text);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.portfolio h2 span {
  color: var(--tertiary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  background-color: var(--primary70);
  padding: 0.75rem;
  border-radius: 0.75rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.filter-tab {
  padding: 0.65rem 1.25rem;
  border-radius: 2rem;
  background-color: transparent;
  color: var(--text);
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition03);
  transition-property: background-color, color, transform, box-shadow;
  position: relative;
  overflow: hidden;
}

.filter-tab:hover {
  color: var(--primary);
}

.filter-tab.active {
  background-color: var(--primary);
  color: var(--static-white);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.project-card {
  background-color: var(--primary30);
  border-radius: 1rem;
  overflow: hidden;
  transition: var(--transition03);
  transition-property: transform, box-shadow;
  box-shadow: var(--box-shadow);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.project-image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition03);
}

.project-card:hover .project-image-container img {
  transform: scale(1.05);
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.project-badge {
  padding: 0.35rem 1rem;
  border-radius: 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--static-white);
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.project-badge.personal {
  background-color: var(--accent);
}

.project-badge.school {
  background-color: var(--tertiary);
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-card h3 {
  font-size: 1.25rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  margin: 0;
}

.project-card p {
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.read-more {
  display: none;
}

.read-more.show {
  display: inline;
}

.expand-button {
  background: none;
  border: none;
  color: var(--tertiary);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin-left: 0.5rem;
  transition: var(--transition03);
}

.expand-button:hover {
  text-decoration: underline;
}

.project-tech {
  margin: 1rem 0;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.3rem 0.75rem;
  background-color: var(--primary70);
  border-radius: 1rem;
  font-size: 0.75rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors), transform;
}

.tech-badge:hover {
  transform: translateY(-2px);
}

.tech-badge img {
  width: 1rem;
  height: 1rem;
}

.tech-badge span {
  color: var(--text);
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.25rem;
  flex-wrap: wrap;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition03);
  transition-property: background-color, color, transform;
  flex: 1;
  justify-content: center;
  min-width: 7rem;
}

.action-button:hover {
  transform: translateY(-2px);
}

.github-button {
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--text);
}

.github-button:hover {
  background-color: var(--text);
  color: var(--background);
}

.live-button {
  background-color: var(--primary);
  color: var(--static-white);
  border: 1px solid var(--primary);
}

.live-button:hover {
  background-color: var(--primary70);
  color: var(--text);
}

.contact-button {
  background-color: var(--secondary);
  color: var(--text);
  border: 1px solid var(--secondary);
}

.contact-button:hover {
  background-color: var(--secondary70);
}

.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.show-more-button {
  padding: 0.75rem 2rem;
  background-color: var(--primary);
  color: var(--static-white);
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition03);
  transition-property: background-color, transform, box-shadow;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.show-more-button:hover {
  background-color: var(--primary70);
  color: var(--text);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

@media (min-width: 800px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .portfolio h2 {
    font-size: 3rem;
  }

  .filter-tabs {
    gap: 1rem;
  }

  .filter-tab {
    padding: 0.75rem 2rem;
  }

  .project-card h3 {
    font-size: 1.5rem;
  }

  .project-card p {
    font-size: 1rem;
  }

  .project-badge {
    font-size: 0.75rem;
  }
}

@media (min-width: 1100px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .portfolio h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }

  .filter-tabs {
    margin-bottom: 3rem;
  }

  .filter-tab {
    font-size: 1.1rem;
  }

  .action-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }

  .tech-badge {
    padding: 0.4rem 0.85rem;
    font-size: 0.85rem;
  }

  .tech-badge img {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>