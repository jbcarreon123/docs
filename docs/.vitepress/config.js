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
        text: 'YouTube2DiscordLink',
        items: [
          { text: 'Getting started', link: '/y2dl/getting-started' },
          { 
            text: 'Configuration',
            items: [
              {
                text: 'Main',
                items: [
                  { text: 'Main', link: '/y2dl/config/main/main' },
                  { text: 'BotConfig', link: '/y2dl/config/main/botconfig' }
                ]
              },
              {
                text: 'Services',
                items: [
                  { text: 'DynamicChannelInfo', link: '/y2dl/config/services/dynamicchannelinfo' },
                  { text: 'ChannelReleases', link: '/y2dl/config/services/channelreleases' },
                  { text: 'DynamicChannelInfoForVoiceChannels', link: '/y2dl/config/services/dynamicvoicechannelinfo' },
                  { text: 'Commands', link: '/y2dl/config/services/commands' }
                ]
              }
            ]
          }, 
          { text: 'Variables', link: '/y2dl/variables' },
          { text: 'Commands', link: '/y2dl/commands' },
          { text: 'Message and Voice Channels', link: '/y2dl/channels' },
          { text: 'FAQ', link: '/y2dl/faq' }
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
