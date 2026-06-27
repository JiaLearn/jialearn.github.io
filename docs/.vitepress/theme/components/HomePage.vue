<script setup lang="ts">
const focusAreas = [
  'LLM Application Development',
  'AI Agent Engineering',
  'Retrieval-Augmented Generation',
  'Data Analysis Automation',
  'AI Tools and Workflow Automation',
  'Practical Evaluation of LLM Applications'
]

const sections = [
  {
    title: 'Notes',
    text: 'Systematic notes for agent engineering, RAG, LLM applications, engineering basics, and data automation.',
    link: '/notes/',
    meta: 'Learning records'
  },
  {
    title: 'Projects',
    text: 'Projects will be added after they become reproducible, documented, and meaningful enough to share.',
    link: '/projects/',
    meta: 'Reproducible work'
  },
  {
    title: 'Reviews',
    text: 'Practical reviews of AI coding tools, LLM frameworks, model APIs, vector databases, and workflow tools.',
    link: '/reviews/',
    meta: 'Tool evaluation'
  },
  {
    title: 'Roadmap',
    text: 'A staged learning path from foundations to agents, RAG systems, tool workflows, evaluation, and portfolio projects.',
    link: '/roadmap/',
    meta: 'Learning plan'
  }
]

const tags = [
  'Agent',
  'RAG',
  'LLM App',
  'Tool Calling',
  'Workflow',
  'Evaluation',
  'Observability',
  'Vector Search',
  'Automation',
  'Data Analysis',
  'Prompting',
  'Model API'
]
</script>

<template>
  <main class="jl-home">
    <section class="jl-banner" aria-labelledby="home-title">
      <div class="jl-banner__content">
        <p class="jl-kicker">Technical Learning Homepage</p>
        <h1 id="home-title">JiaLearn</h1>
        <p class="jl-lead">
          JiaLearn focuses on long-term learning around LLM applications, AI agents,
          retrieval systems, automation workflows, and practical evaluation.
        </p>
        <div class="jl-actions">
          <a class="jl-button jl-button--primary" href="/notes/">Start Reading</a>
          <a class="jl-button" href="https://github.com/JiaLearn" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>

    <section class="jl-shell" aria-label="Homepage content">
      <aside class="jl-profile" aria-label="Site profile">
        <div class="jl-avatar" aria-hidden="true">JL</div>
        <h2>JiaLearn</h2>
        <p>
          A semi-anonymous technical record for notes, reviews, project reflections,
          and staged understanding of AI engineering topics.
        </p>
        <div class="jl-profile__links">
          <a href="/about/">About</a>
          <a href="https://github.com/JiaLearn" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </aside>

      <div class="jl-main-column">
        <section class="jl-panel" aria-labelledby="focus-title">
          <div class="jl-section-head">
            <p>Focus</p>
            <h2 id="focus-title">Learning Directions</h2>
          </div>
          <div class="jl-focus-grid">
            <span v-for="area in focusAreas" :key="area">{{ area }}</span>
          </div>
        </section>

        <section class="jl-card-grid" aria-label="Main sections">
          <a v-for="section in sections" :key="section.title" class="jl-card" :href="section.link">
            <span>{{ section.meta }}</span>
            <h2>{{ section.title }}</h2>
            <p>{{ section.text }}</p>
          </a>
        </section>

        <section class="jl-panel" aria-labelledby="tags-title">
          <div class="jl-section-head">
            <p>Index</p>
            <h2 id="tags-title">Topic Tags</h2>
          </div>
          <div class="jl-tag-cloud">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
