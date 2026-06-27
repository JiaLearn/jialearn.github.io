<script setup lang="ts">
const focusAreas = [
  'LLM Application Development',
  'AI Agent Engineering',
  'Retrieval-Augmented Generation',
  'Data Analysis Automation',
  'AI Tools and Workflow Automation',
  'Practical Evaluation'
]

const highlights = [
  {
    title: 'Projects',
    eyebrow: 'Showcase',
    text: 'A place for reproducible AI application, agent, RAG, and automation work once each project is documented enough to share.',
    link: '/projects/'
  },
  {
    title: 'Notes',
    eyebrow: 'Writing',
    text: 'Structured technical notes for implementation details, concepts, and project lessons worth revisiting.',
    link: '/notes/'
  },
  {
    title: 'Reviews',
    eyebrow: 'Evaluation',
    text: 'Practical reviews of AI coding tools, frameworks, model APIs, vector databases, and workflow tools.',
    link: '/reviews/'
  }
]

const projectTracks = [
  {
    title: 'LLM Applications',
    status: 'Preparing',
    text: 'Small applications that connect prompts, UI, APIs, data flow, and evaluation into usable workflows.'
  },
  {
    title: 'Agent and Tool Workflows',
    status: 'Preparing',
    text: 'Experiments around tool calling, task decomposition, memory, approval flows, and reliability checks.'
  },
  {
    title: 'RAG and Knowledge Systems',
    status: 'Preparing',
    text: 'Retrieval pipelines, indexing choices, grounding strategies, and answer-quality review.'
  },
  {
    title: 'Automation Utilities',
    status: 'Preparing',
    text: 'Data analysis, reporting, and workflow automation scripts that are clear enough to reproduce.'
  }
]

const categories = [
  { title: 'Agent Engineering', link: '/notes/agent-engineering', note: 'Planning, tools, memory' },
  { title: 'RAG', link: '/notes/rag', note: 'Retrieval and grounding' },
  { title: 'LLM Application', link: '/notes/llm-application', note: 'Patterns and interfaces' },
  { title: 'Engineering Basics', link: '/notes/engineering-basics', note: 'Reliable foundations' },
  { title: 'Data Automation', link: '/notes/data-analysis-automation', note: 'Repeatable analysis' }
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
          <p class="jl-kicker">JiaLearn</p>
          <h1 id="home-title">Personal homepage for AI application projects and technical writing.</h1>
          <p class="jl-lead">
            JiaLearn focuses on LLM applications, AI agent engineering, RAG systems,
            data analysis automation, workflow tools, and practical evaluation. This site
            collects project showcases, technical notes, reviews, and learning milestones.
          </p>
          <div class="jl-actions">
            <a class="jl-button jl-button--primary" href="/projects/">View Projects</a>
            <a class="jl-button" href="/notes/">Read Notes</a>
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
            <p>AI application projects, technical writing, tool reviews, and stage-by-stage learning records.</p>
          </div>
          <div class="jl-profile__links">
            <a href="/about/">About</a>
            <a href="https://github.com/JiaLearn" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <section class="jl-card jl-note-card">
          <p class="jl-card-label">Site Purpose</p>
          <p>
            This homepage is designed for long-term public display: projects first, supported by notes,
            reviews, and a transparent learning roadmap.
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

        <section class="jl-board jl-project-showcase" aria-labelledby="project-title">
          <div class="jl-section-head jl-section-head--split">
            <div>
              <p>Projects</p>
              <h2 id="project-title">Project Showcase</h2>
            </div>
            <a href="/projects/">Open Projects</a>
          </div>
          <p class="jl-board-intro">
            Projects will be added after they are reproducible, documented, and meaningful enough to share.
            The showcase is prepared around these tracks.
          </p>
          <div class="jl-project-grid">
            <article v-for="project in projectTracks" :key="project.title" class="jl-project-card">
              <div>
                <span>{{ project.status }}</span>
                <h3>{{ project.title }}</h3>
              </div>
              <p>{{ project.text }}</p>
            </article>
          </div>
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
