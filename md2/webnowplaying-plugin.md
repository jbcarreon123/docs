# WebNowPlaying Plugin

WebNowPlaying Plugin is a Macro Deck 2 plugin that gets media information from web browsers.

## Getting Started

> :notebook: If you want to follow a video instead of reading this wall of text and images, you can follow this [YouTube video](https://www.youtube.com/watch?v=N9FIjn-z-W0).\
> This tutorial also assumes that [Macro Deck](https://macro-deck.app) is already installed.

### Macro Deck side

1. Open Macro Deck
2. Click Extensions > Online, click WebNowPlaying Plugin, and click Install.
3. Click Done.

### Browser-side

1. Open the browser of your choice _(well, it is already opened isn't it?)_
2. Install WebNowPlaying Redux.\
   [Chrome Web Store](https://chrome.google.com/webstore/detail/webnowplaying-redux/jfakgfcdgpghbbefmdfjkbdlibjgnbli)\
   [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/webnowplaying-redux/)\
   [Source](https://github.com/keifufu/WebNowPlaying-Redux)
3. Click the newly-installed extension, and tick the box where it says "**Macro Deck Adapter**".

## Variables

| Variable               | Description                                                    | Type    |
| ---------------------- | -------------------------------------------------------------- | ------- |
| wnp\_player            | Shows the current player (e.g. YouTube)                        | String  |
| wnp\_is\_playing       | Shows when a supported site is playing                         | Boolean |
| wnp\_state             | Shows the playing state (0 = stopped, 1 = playing, 2 = paused) | Integer |
| wnp\_title             | Shows the title of the current track                           | String  |
| wnp\_artist            | Shows the artist(s) of the current track                       | String  |
| wnp\_album             | Shows the album of the current track                           | String  |
| wnp\_duration          | Shows the duration of the current track                        | String  |
| wnp\_position          | Shows the current position of the current track                | String  |
| wnp\_volume            | Shows the volume percentage                                    | Float   |
| wnp\_repeat            | Shows when the repeat is turned on or off                      | Boolean |
| wnp\_repeatall         | Shows when the repeat is on all tracks                         | Boolean |
| wnp\_repeatone         | Shows when the repeat is on single track mode                  | Boolean |
| wnp\_shuffle           | Shows when the shuffle is turned on or off                     | Boolean |
| wnp\_position\_percent | Shows the position percentage                                  | Float   |

## Actions

| Action     | Description                   |
| ---------- | ----------------------------- |
| Play/Pause | Play/Pauses the current track |
| Next       | Next track                    |
| Previous   | Previous track                |
| Shuffle    | Toggle shuffle                |
| Repeat     | Toggle repeat                 |
