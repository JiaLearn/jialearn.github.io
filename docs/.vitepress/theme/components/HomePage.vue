<script setup lang="ts">
const focusAreas = [
  'LLM Application Development',
  'AI Agent Engineering',
  'Retrieval-Augmented Generation',
  'Data Analysis Automation',
  'AI Tools and Workflow Automation',
  'Practical Evaluation'
]

const categories = [
  { title: 'Agent Engineering', link: '/notes/agent-engineering', note: 'Planning, tools, memory' },
  { title: 'RAG', link: '/notes/rag', note: 'Retrieval and grounding' },
  { title: 'LLM Application', link: '/notes/llm-application', note: 'Patterns and interfaces' },
  { title: 'Engineering Basics', link: '/notes/engineering-basics', note: 'Reliable foundations' },
  { title: 'Data Automation', link: '/notes/data-analysis-automation', note: 'Repeatable analysis' }
]

const highlights = [
  {
    title: 'Notes',
    eyebrow: 'Learning Archive',
    text: 'Organized notes for concepts, implementation details, and lessons worth revisiting.',
    link: '/notes/'
  },
  {
    title: 'Reviews',
    eyebrow: 'Tool Evaluation',
    text: 'Practical reviews of AI coding tools, frameworks, model APIs, vector databases, and workflow tools.',
    link: '/reviews/'
  },
  {
    title: 'Projects',
    eyebrow: 'Reproducible Work',
    text: 'Projects will be added after they become reproducible, documented, and meaningful enough to share.',
    link: '/projects/'
  }
]

const roadmap = [
  'Foundation',
  'Agent Basics',
  'RAG Systems',
  'Tool Calling and Workflows',
  'Evaluation and Observability',
  'Portfolio Projects'
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
    <section class="jl-hero" aria-labelledby="home-title">
      <div class="jl-hero__inner">
        <div class="jl-hero__copy">
          <p class="jl-kicker">JiaLearn Blog</p>
          <h1 id="home-title">Learning AI engineering by building, reviewing, and writing.</h1>
          <p class="jl-lead">
            JiaLearn focuses on LLM applications, AI agent engineering, RAG systems,
            data analysis automation, workflow tools, and practical evaluation.
          </p>
          <div class="jl-actions">
            <a class="jl-button jl-button--primary" href="/notes/">Read Notes</a>
            <a class="jl-button" href="/roadmap/">Roadmap</a>
          </div>
        </div>
        <div class="jl-hero__panel" aria-label="Focus areas">
          <p>Focus Index</p>
          <div>
            <span v-for="area in focusAreas" :key="area">{{ area }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="jl-layout" aria-label="Homepage content">
      <aside class="jl-sidebar">
        <section class="jl-card jl-profile" aria-label="Site profile">
          <div class="jl-avatar" aria-hidden="true">JL</div>
          <div>
            <h2>JiaLearn</h2>
            <p>Technical notes, tool reviews, project reflections, and staged learning records for AI engineering.</p>
          </div>
          <div class="jl-profile__links">
            <a href="/about/">About</a>
            <a href="https://github.com/JiaLearn" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <section class="jl-card jl-note-card">
          <p class="jl-card-label">Announcement</p>
          <p>
            This site is being built as a long-term technical archive. Content will be added after it is clear,
            reproducible, and useful for later review.
          </p>
        </section>

        <section class="jl-card jl-compact-list">
          <p class="jl-card-label">Categories</p>
          <a v-for="category in categories" :key="category.title" :href="category.link">
            <span>{{ category.title }}</span>
            <small>{{ category.note }}</small>
          </a>
        </section>
      </aside>

      <div class="jl-content">
        <section class="jl-highlight-grid" aria-label="Primary sections">
          <a v-for="item in highlights" :key="item.title" class="jl-feature" :href="item.link">
            <span>{{ item.eyebrow }}</span>
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </a>
        </section>

        <section class="jl-board" aria-labelledby="roadmap-title">
          <div class="jl-section-head">
            <p>Roadmap</p>
            <h2 id="roadmap-title">Current Learning Path</h2>
          </div>
          <ol class="jl-timeline">
            <li v-for="(item, index) in roadmap" :key="item">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <strong>{{ item }}</strong>
            </li>
          </ol>
        </section>

        <section class="jl-board jl-review-strip" aria-labelledby="reviews-title">
          <div class="jl-section-head">
            <p>Reviews</p>
            <h2 id="reviews-title">Evaluation Areas</h2>
          </div>
          <div class="jl-review-grid">
            <a href="/reviews/ai-coding-tools">AI Coding Tools</a>
            <a href="/reviews/llm-frameworks">LLM Frameworks</a>
            <a href="/reviews/model-apis">Model APIs</a>
            <a href="/reviews/vector-databases">Vector Databases</a>
            <a href="/reviews/workflow-automation-tools">Workflow Automation</a>
          </div>
        </section>

        <section class="jl-board" aria-labelledby="tags-title">
          <div class="jl-section-head">
            <p>Tags</p>
            <h2 id="tags-title">Topic Cloud</h2>
          </div>
          <div class="jl-tag-cloud">
            <span v-for="tag in tags" :key="tag">{{ tag }}</span>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
