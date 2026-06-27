# JiaLearn Technical Homepage

This repository contains the VitePress source for `jialearn.github.io`, a concise technical homepage for JiaLearn.

The site is intended for long-term notes, project reflections, tool reviews, and learning roadmaps around:

- LLM Application Development
- AI Agent Engineering
- Retrieval-Augmented Generation
- Data Analysis Automation
- AI Tools and Workflow Automation
- Practical Evaluation of LLM Applications

## Requirements

- Node.js 20 or later
- npm

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

VitePress will print a local preview URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The generated static site is written to:

```text
docs/.vitepress/dist
```

## Preview Production Build

```bash
npm run preview
```

## Deploy

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

After pushing to the `main` branch of `JiaLearn/jialearn.github.io`, GitHub Actions will:

1. Install dependencies.
2. Build the VitePress site.
3. Upload `docs/.vitepress/dist`.
4. Deploy it with GitHub Pages.

In the GitHub repository settings, set Pages to use **GitHub Actions** as the build and deployment source.

## Add a New Note

Create a new Markdown file under the relevant section, for example:

```text
docs/notes/my-new-note.md
```

Then link it from the section index:

```text
docs/notes/index.md
```

Keep notes reproducible, source-aware, and useful for future review.

## Content Structure

- `docs/index.md`: Home page
- `docs/notes/`: Learning notes
- `docs/projects/`: Project records
- `docs/reviews/`: Tool and framework reviews
- `docs/roadmap/`: Learning roadmap
- `docs/about/`: Technical focus and site purpose
- `docs/.vitepress/config.mts`: VitePress configuration
