<template>
  <section id="skills" class="skills">
    <div class="center-container">
      <h2>Skills</h2>

      <div class="skills-grid">
        <!-- Frontend Section -->
        <div class="skill-category frontend">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-globe"></i>
            </div>
            <h3>Frontend</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.frontend" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Backend Section -->
        <div class="skill-category backend">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-server"></i>
            </div>
            <h3>Backend</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.backend" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Fullstack Section -->
        <div class="skill-category fullstack">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-laptop"></i>
            </div>
            <h3>Fullstack</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.fullstack" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Tools Section -->
        <div class="skill-category tools">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-tools"></i>
            </div>
            <h3>Tools</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.tools" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Game Dev Section -->
        <div class="skill-category gamedev">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-controller"></i>
            </div>
            <h3>Game Dev</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.gamedev" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Currently Learning Section -->
        <div class="skill-category learning">
          <div class="category-header">
            <div class="icon-container">
              <i class="bi bi-lightning-charge"></i>
            </div>
            <h3>Currently Learning</h3>
          </div>
          <div class="skill-tags">
            <div v-for="skill in techCategories.learning" :key="skill.id" class="skill-tag">
              <div class="skill-icon">
                <img :src="`/img/${skill.image}`" :alt="skill.name">
              </div>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTechnologies } from '~/composables/Technologies';

const { categories: techCategories } = useTechnologies();
</script>

<style scoped>
.center-container {
  margin: 0 auto;
  max-width: 1200px;
}

.skills {
  margin-top: 125px;
  padding: 20px;
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

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.skill-category {
  background-color: var(--primary30);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  position: relative;
  overflow: hidden;
  border-left: 4px solid transparent;
}

.frontend {
  border-color: #61dafb;
}

.backend {
  border-color: #3C873A;
}

.fullstack {
  border-color: #F0DB4F;
}

.tools {
  border-color: #9B4F96;
}

.gamedev {
  border-color: #E44D26;
}

.learning {
  border-color: #38B2AC;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
  background-color: var(--primary70);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.frontend .icon-container {
  color: #61dafb;
}

.backend .icon-container {
  color: #3C873A;
}

.tools .icon-container {
  color: #9B4F96;
}

.gamedev .icon-container {
  color: #E44D26;
}

.learning .icon-container {
  color: #38B2AC;
}

.category-header i {
  font-size: 1.25rem;
}

.category-header h3 {
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 600;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  margin: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  display: flex;
  align-items: center;
  background-color: var(--primary70);
  border-radius: 50px;
  padding: 0.25rem 0.75rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.skill-tag:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.skill-icon img {
  max-width: 100%;
  max-height: 100%;
}

.skill-tag span {
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

@media (min-width: 800px) {
  .skills h2 {
    font-size: 3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "frontend backend"
      "tools fullstack"
      "gamedev learning";
  }

  .frontend {
    grid-area: frontend;
  }

  .backend {
    grid-area: backend;
  }

  .fullstack {
    grid-area: fullstack;
  }

  .tools {
    grid-area: tools;
  }

  .gamedev {
    grid-area: gamedev;
  }

  .learning {
    grid-area: learning;
  }
}

@media (min-width: 1100px) {
  .skills h2 {
    font-size: 3.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "frontend backend fullstack"
      "tools gamedev learning";
  }

  .skill-tag {
    padding: 0.35rem 1rem;
  }

  .skill-icon {
    width: 28px;
    height: 28px;
  }

  .skill-tag span {
    font-size: 1rem;
  }

  .category-header h3 {
    font-size: 1.75rem;
  }

  .icon-container {
    width: 48px;
    height: 48px;
  }

  .category-header i {
    font-size: 1.5rem;
  }
}
</style>