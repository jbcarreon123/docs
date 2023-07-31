import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs for jb's projects",
  description: "Documentations for my various open-source projects",
  base: '/docs/',
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'MD2 Plugins', link: '/md2-intro' }
    ],

    sidebar: [
      {
        text: 'Macro Deck 2 Plugins',
        items: [
          { text: 'Introduction', link: '/md2-intro' },
          { text: 'WebNowPlaying Plugin', link: '/md2/wnpl' },
          { text: 'AutoHotkey Plugin', link: '/md2/ahkpl' },
          { text: 'ShareX Plugin', link: '/md2/shxpl' },
        ]
      },
      {
        text: 'Other projects',
        items: [
          { text: 'Introduction', link: '/other-projects' },
          { text: 'YTSCTD', link: '/other/ytsctd.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jbcarreon123/docs' },
      { icon: 'youtube', link: 'https://youtube.com/@jbcarreon123'},
      { icon: 'mastodon', link: 'https://fosstodon.org/@jbcarreon123'}
    ],

    editLink: {
      pattern: 'https://github.com/jbcarreon123/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    }
  }
})
