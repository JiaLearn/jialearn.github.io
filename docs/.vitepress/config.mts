import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JiaLearn',
  description: 'Technical notes on LLM applications, AI agents, RAG, and automation.',
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Reviews', link: '/reviews/' },
      { text: 'Roadmap', link: '/roadmap/' },
      { text: 'About', link: '/about/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiaLearn' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Built with VitePress.',
      copyright: 'JiaLearn'
    }
  }
})
