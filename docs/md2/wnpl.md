# WebNowPlaying Plugin

WebNowPlaying Plugin is a Macro Deck 2 plugin that gets media information from web browsers.  

## Getting Started
::: tip
If you want to follow a video instead of reading this wall of text and images, you can follow this [YouTube video](https://www.youtube.com/watch?v=N9FIjn-z-W0).  
:::
::: info
This tutorial assumes that [Macro Deck](https://macro-deck.app) is already installed.
:::

### Macro Deck side
1. Open Macro Deck
2. Click Extensions > Online, click WebNowPlaying Plugin, and click Install.
3. Click Done.

### Browser-side
1. Open the browser of your choice *(well, it is already opened isn't it?)*
2. Install WebNowPlaying Redux.  
   [Chrome Web Store](https://chrome.google.com/webstore/detail/webnowplaying-redux/jfakgfcdgpghbbefmdfjkbdlibjgnbli)  
   [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/webnowplaying-redux/)  
   [Source](https://github.com/keifufu/WebNowPlaying-Redux)
3. Click the newly-installed extension, and tick the box where it says "**Macro Deck Adapter**".

## Variables
| Variable | Description | Type |
| --- | --- | --- |
| wnp_player | Shows the current player (e.g. YouTube) | String |
| wnp_is_playing | Shows when a supported site is playing | Boolean |
| wnp_state | Shows the playing state (0 = stopped, 1 = playing, 2 = paused) | Integer |
| wnp_title | Shows the title of the current track | String |
| wnp_artist | Shows the artist(s) of the current track | String |
| wnp_album | Shows the album of the current track | String |
| wnp_duration | Shows the duration of the current track | String |
| wnp_position | Shows the current position of the current track | String |
| wnp_volume | Shows the volume percentage | Float |
| wnp_repeat | Shows when the repeat is turned on or off | Boolean |
| wnp_repeatall | Shows when the repeat is on all tracks | Boolean |
| wnp_repeatone | Shows when the repeat is on single track mode | Boolean |
| wnp_shuffle | Shows when the shuffle is turned on or off | Boolean |
| wnp_position_percent | Shows the position percentage | Float |

## Actions
| Action | Description |
| --- | --- |
| Play/Pause | Play/Pauses the current track |
| Next | Next track |
| Previous | Previous track |
| Shuffle | Toggle shuffle |
| Repeat | Toggle repeat |