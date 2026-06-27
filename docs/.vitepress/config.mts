import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JiaLearn',
  description: 'Personal technical homepage for AI application projects, notes, reviews, and learning records.',
  lang: 'en-US',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { property: 'og:title', content: 'JiaLearn' }],
    ['meta', { property: 'og:description', content: 'Personal technical homepage for AI application projects, notes, reviews, and learning records.' }]
  ],
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
