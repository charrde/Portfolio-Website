export const useTechnologies = () => {
  const allTechnologies = {
    // Frontend technologies
    html5: { id: 'html5', name: 'HTML5', image: 'html5.svg', category: 'frontend' },
    css3: { id: 'css3', name: 'CSS3', image: 'css.svg', category: 'frontend' },
    javascript: { id: 'javascript', name: 'JavaScript', image: 'javascript.svg', category: 'frontend' },
    react: { id: 'react', name: 'React', image: 'react.svg', category: 'frontend' },
    vue: { id: 'vue', name: 'Vue', image: 'vue.svg', category: 'frontend' },
    nuxt: { id: 'nuxt', name: 'Nuxt', image: 'nuxt.svg', category: 'frontend' },
    tailwindcss: { id: 'tailwindcss', name: 'TailwindCSS', image: 'tailwind.svg', category: 'frontend' },
    bootstrap: { id: 'bootstrap', name: 'Bootstrap', image: 'bootstrap.svg', category: 'frontend' },
    materialui: { id: 'materialui', name: 'MaterialUI', image: 'materialui.svg', category: 'frontend' },

    // Backend technologies
    csharp: { id: 'csharp', name: 'C#', image: 'csharp.svg', category: 'backend' },
    postgresql: { id: 'postgresql', name: 'PostgreSQL', image: 'postgresql.svg', category: 'backend' },
    java: { id: 'java', name: 'Java', image: 'java.svg', category: 'backend' },
    nodejs: { id: 'nodejs', name: 'Node.js', image: 'nodejs.svg', category: 'backend' },

    // Fullstack technologies
    nextjs: { id: 'nextjs', name: 'Next.js', image: 'nextjs.svg', category: 'fullstack' },
    blazor: { id: 'blazor', name: 'Blazor', image: 'blazor.svg', category: 'fullstack' },

    // Tools
    git: { id: 'git', name: 'Git', image: 'git.svg', category: 'tools' },
    github: { id: 'github', name: 'GitHub', image: 'github.svg', category: 'tools' },
    visualstudio: { id: 'visualstudio', name: 'Visual Studio', image: 'visualstudio.svg', category: 'tools' },
    vscode: { id: 'vscode', name: 'Visual Studio Code', image: 'vscode.svg', category: 'tools' },
    intellij: { id: 'intellij', name: 'IntelliJ IDEA', image: 'intellij.svg', category: 'tools' },
    figma: { id: 'figma', name: 'Figma', image: 'figma.svg', category: 'tools' },
    linqpad: { id: 'linqpad', name: 'Linqpad', image: 'linqpad.svg', category: 'tools' },
    markdown: { id: 'markdown', name: 'Markdown', image: 'markdown.svg', category: 'tools' },

    // Game Development
    godot: { id: 'godot', name: 'Godot Engine', image: 'godot.svg', category: 'gamedev' },
    gdscript: { id: 'gdscript', name: 'GDScript', image: 'godot.svg', category: 'gamedev' },
    unity: { id: 'unity', name: 'Unity', image: 'unity.svg', category: 'gamedev' },

    // Currently Learning
    typescript: { id: 'typescript', name: 'TypeScript', image: 'typescript.svg', category: 'learning' },
    flutter: { id: 'flutter', name: 'Flutter', image: 'flutter.svg', category: 'learning' },
    dart: { id: 'dart', name: 'Dart', image: 'dart.svg', category: 'learning' },
    tauri: { id: 'tauri', name: 'Tauri', image: 'tauri.svg', category: 'learning' },
    pinia: { id: 'pinia', name: 'Pinia', image: 'pinia.svg', category: 'learning' },
  }

  // Get technologies by category
  const getTechnologiesByCategory = (category: string) => {
    return Object.values(allTechnologies).filter(tech => tech.category === category)
  }

  // Get technology by ID
  const getTechnology = (id: keyof typeof allTechnologies) => {
    return allTechnologies[id]
  }

  // Get multiple technologies by ID
  const getTechnologies = (ids: (keyof typeof allTechnologies)[]) => {
    return ids.map(id => allTechnologies[id]).filter(Boolean)
  }

  // Predefined technology categories
  const categories = {
    frontend: getTechnologiesByCategory('frontend'),
    backend: getTechnologiesByCategory('backend'),
    tools: getTechnologiesByCategory('tools'),
    gamedev: getTechnologiesByCategory('gamedev'),
    learning: getTechnologiesByCategory('learning'),
    fullstack: getTechnologiesByCategory('fullstack'),
    web: [allTechnologies.html5, allTechnologies.css3, allTechnologies.javascript, allTechnologies.vue, allTechnologies.react],
    game: [allTechnologies.godot, allTechnologies.unity]
  }

  return {
    allTechnologies,
    categories,
    getTechnology,
    getTechnologies,
    getTechnologiesByCategory
  }
}