<template>
  <section id="about" class="about">
    <div class="center-container">
      <h2><span>About </span>Me</h2>

      <div class="about-container">
        <!-- Profile container with headshot and bio -->
        <div class="profile-container">
          <div class="headshot-wrapper">
            <img src="/img/headshot1.png" alt="Patrick Skinner" class="headshot">
          </div>

          <div class="bio-content">
            <h3>Patrick Skinner</h3>
            <h4>Full-Stack Developer</h4>
            <div class="bio-location">
              <i class="bi bi-geo-alt"></i>
              <span>Alberta, Canada</span>
            </div>
            <div class="bio-buttons">
              <a href="#contact" class="contact-button">
                <i class="bi bi-envelope"></i>
                <span>Contact Me</span>
              </a>
              <a href="" class="download-button">
                <i class="bi bi-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Code editor styled section -->
        <div class="code-editor">
          <div class="window-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
            <div class="file-name">about_me.js</div>
          </div>

          <div class="editor-content">
            <div class="code-lines">
              <div class="line-numbers">
                <span v-for="i in 15" :key="i">{{ i }}</span>
              </div>

              <div class="code-text">
                <div class="line comment-block">/**</div>
                <div class="line comment-block"> * Hi, I'm Patrick Skinner, a Full-Stack Developer based in Alberta,
                  Canada.</div>
                <div class="line comment-block"> * I am an undergraduate from NAIT (Northern Alberta Institute of
                  Technology)</div>
                <div class="line"></div>
                <div class="line"><span class="keyword">const</span> <span class="variable">aboutMe</span> <span
                    class="operator">=</span> <span class="brace">{</span></div>
                <div class="line indented"><span class="property">passion:</span> <span class="string">'I am very
                    passionate about improving my programming skills and building applications, video games and
                    websites.'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">goal:</span> <span class="string">'I am always looking
                    for new opportunities to learn and grow as a developer.'</span></div>
                <div class="line"><span class="brace">}</span><span class="semicolon">;</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="education-section">
          <div class="window-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
            <div class="file-name">education.js</div>
          </div>

          <div class="editor-content">
            <div class="code-lines">
              <div class="line-numbers">
                <span v-for="i in 12" :key="i">{{ i }}</span>
              </div>

              <div class="code-text">
                <div class="line"><span class="keyword">const</span> <span class="variable">education</span> <span
                    class="operator">=</span> <span class="brace">{</span></div>
                <div class="line indented"><span class="property">degree:</span> <span class="string">'Diploma in
                    Digital Media and IT'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">specialization:</span> <span class="string">'Computer
                    Software Development'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">institution:</span> <span class="string">'NAIT
                    (Northern Alberta Institute of Technology)'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">location:</span> <span class="string">'Edmonton,
                    Alberta'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">period:</span> <span
                    class="string">'2023-2025'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">status:</span> <span class="string">'In
                    Progress'</span><span class="comma">,</span></div>
                <div class="line indented"><span class="property">achievements:</span> <span class="brace">[</span>
                </div>
                <div class="line double-indented"><span class="string">'Dean\'s Honor Roll'</span><span
                    class="comma">,</span></div>
                <div class="line double-indented"><span class="string">'Advanced Software Development Projects'</span>
                </div>
                <div class="line indented"><span class="brace">]</span></div>
                <div class="line"><span class="brace">}</span><span class="semicolon">;</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hobbies Section -->
        <div class="hobbies-container">
          <h3>Hobbies &amp; Interests</h3>
          <div class="hobby-grid">
            <div v-for="(hobby, index) in hobbies" :key="index" class="hobby-item">
              <i :class="hobbyIcons[index]"></i>
              <span>{{ hobby }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const hobbies = [
  'Playing video games',
  'Creating mods for games',
  'Listening to music',
  'Tinkering with game engines',
  'Game development',
  'Building websites',
  'Collecting video game & Marvel memorabilia',
  'Creating vector art',
  'Building computers and keyboards from scratch',
  'Playing with, tinkering with Arduinos and circuits'
];

const hobbyIcons = [
  'bi bi-controller',
  'bi bi-code-slash',
  'bi bi-music-note-beamed',
  'bi bi-gear',
  'bi bi-joystick',
  'bi bi-browser-chrome',
  'bi bi-collection',
  'bi bi-pencil-square',
  'bi bi-pc-display',
  'bi bi-cpu'
];
</script>

<style scoped>
.about {
  padding: 4rem 1rem;
  background-color: var(--background);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  overflow-x: hidden;
}

.center-container {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
}

.about h2 {
  color: var(--text);
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.about h2 span {
  color: var(--tertiary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--primary30);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.headshot-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid var(--primary);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.headshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bio-content h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.bio-content h4 {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--tertiary);
  margin-bottom: 1rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.bio-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.bio-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.contact-button,
.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: var(--static-white);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  width: 100%;
  transition: var(--transition03);
  transition-property: background-color, transform;
}

.contact-button:hover,
.download-button:hover {
  background-color: var(--accent);
  transform: translateY(-3px);
}

.download-button {
  background-color: var(--secondary);
  color: var(--text);
}

.download-button:hover {
  background-color: var(--secondary70);
}

.code-editor {
  background-color: var(--quarternary);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.window-controls {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-right: 1rem;
  background-color: var(--background);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--quarternary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background-color: #ff5f56;
}

.control.yellow {
  background-color: #ffbd2e;
}

.control.green {
  background-color: #27c93f;
}

.file-name {
  font-family: 'Courier New', monospace;
  color: var(--text);
  font-size: 0.9rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.editor-content {
  padding: 1rem;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

.code-lines {
  display: flex;
}

.line-numbers {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 1rem;
  color: var(--secondary);
  user-select: none;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
  flex-shrink: 0;
}

.code-text {
  flex: 1;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.line {
  min-height: 1.5rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.indented {
  padding-left: 2rem;
}

.comment-block {
  color: var(--tertiary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.keyword {
  color: var(--code-keyword);
}

.variable {
  color: var(--code-variable);
}

.property {
  color: var(--code-property);
}

.string {
  color: var(--code-string);
}

.comment-block,
.comment {
  color: var(--code-comment);
}

.operator,
.brace,
.semicolon,
.comma {
  color: var(--text);
}

.download-line {
  margin-top: 0.5rem;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: var(--static-white);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition03);
  transition-property: background-color, transform;
}

.download-button:hover {
  background-color: var(--accent);
  transform: translateY(-2px);
}

.education-section {
  background-color: var(--quarternary);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.double-indented {
  padding-left: 4rem;
}

.hobbies-container {
  background-color: var(--primary70);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.hobbies-container h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: center;
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.hobby-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background-color: var(--primary30);
  border-radius: 0.5rem;
  transition: var(--transition03);
  transition-property: var(--transition-colors), transform;
}

.hobby-item:hover {
  transform: translateY(-3px);
  background-color: var(--accent);
}

.hobby-item i {
  font-size: 1.25rem;
  color: var(--tertiary);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

.hobby-item span {
  font-size: 0.95rem;
  color: var(--text);
  transition: var(--transition03);
  transition-property: var(--transition-colors);
}

@media (min-width: 800px) {
  .about h2 {
    font-size: 3rem;
  }

  .profile-container {
    flex-direction: row;
    text-align: left;
    gap: 2rem;
    align-items: center;
  }

  .headshot-wrapper {
    margin-bottom: 0;
    width: 180px;
    height: 180px;
  }

  .bio-location {
    justify-content: flex-start;
  }

  .hobby-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .about h2 {
    font-size: 3.5rem;
  }

  .about-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas:
      "profile code-editor"
      "education education"
      "hobbies hobbies";
    gap: 2rem;
  }

  .profile-container {
    grid-area: profile;
  }

  .code-editor {
    grid-area: code-editor;
  }

  .education-section {
    grid-area: education;
  }

  .hobbies-container {
    grid-area: hobbies;
  }

  .hobby-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .headshot-wrapper {
    width: 200px;
    height: 200px;
  }

  .indented {
    padding-left: 2.5rem;
  }

  .double-indented {
    padding-left: 4rem;
  }
}
</style>