# JiaLearn

Personal technical homepage for AI application projects, technical writing, tool reviews, and learning records.

Live site:

```text
https://jialearn.github.io
```

## Site Purpose

This site is used to present JiaLearn's public technical work in a concise and maintainable format. It is not a full resume; it focuses on projects, writing, reviews, and learning progress.

The homepage is organized around:

- Project showcase space
- Technical notes
- AI tool and framework reviews
- Learning roadmap
- AI engineering focus areas

## Focus Areas

- LLM Application Development
- AI Agent Engineering
- Retrieval-Augmented Generation
- Data Analysis Automation
- AI Tools and Workflow Automation
- Practical Evaluation of LLM Applications

## Content Sections

- `Home`: personal technical homepage and main entry points
- `Projects`: reproducible projects and project documentation
- `Notes`: structured learning notes
- `Reviews`: practical reviews of tools, frameworks, model APIs, and workflows
- `Roadmap`: staged learning plan
- `About`: technical interests and site purpose

## Project Standard

Projects are added only after they are:

- Reproducible
- Documented
- Meaningful enough to share
- Honest about limitations
- Supported by examples, screenshots, or evaluation notes when useful

## Tech Stack

- VitePress
- Markdown
- GitHub Pages
- GitHub Actions

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The site is deployed through GitHub Actions.

After pushing to `main`, the workflow in `.github/workflows/deploy.yml` builds the VitePress site and publishes `docs/.vitepress/dist` to GitHub Pages.

## Add Content

Add notes under:

```text
docs/notes/
```

Add project documentation under:

```text
docs/projects/
```

Add reviews under:

```text
docs/reviews/
```

Then link new pages from the relevant section index.
