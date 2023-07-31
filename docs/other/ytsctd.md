# YouTube Subscriber Count to Discord
is a program that gets subscriber data and many others using YouTube Data API, and sends it to Discord using webhooks.

## Getting started
::: tip
If you want to follow a video instead of reading this wall of text and images, you can follow this [YouTube video](https://www.youtube.com/watch?v=BT2Y8DAEKMk).  
The application is already have **.NET 7.0** self-contained.
:::
### Required things
 - a [latest version of YTSCTD](https://github.com/jbcarreon123/YTSCTD/releases/latest) (based on your operating system and architecture)
 - a YouTube Data API key ([learn how to enable the api](https://developers.google.com/youtube/v3/getting-started), [learn how to get the API Key](https://support.google.com/googleapi/answer/6158862?hl=en))
 - a Discord Webhook URL ([learn how to get that](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks))
 - and a positive attitude

::: tip
If you don't know JSON, use the [YTSCTD JSON Config generator](https://jbcarreon123.github.io/YTSCTD-JSONGenerator.html) tool. Copy the output, paste it to a text editor and save it as `appsettings.json` on the folder of YTSCTD.  
If you do know JSON, but don't know where to find the syntax, [click here](ytsctd?id=json-syntax). Save it as `appsettings.json` on the folder of YTSCTD.
:::

### After you saved the file:
1. Run the file.
  - In Linux or Mac, if it said `Permission denied`, type `chmod +x ./SubscriberWebhook` and run the file again.
  - In Windows, if you shown a Windows Smartscreen, press More Info > Run Anyway. That shows because YTSCTD has no signed certificate.

## JSON syntax
```json
{
  // Embed Mode. Default: "SIMPLE"
  // BASIC = Only 1 embed, and shows only the channel name, and the subscriber count.
  // SIMPLE = 1 embed each channel, and shows the channel name, the statistics (subscribers, videos, and views),
  // and the latest video and it's statistics.
  // VERBOSE = Like simple mode, but with description, and images of both the channel, and the latest video.
  // Note that both SIMPLE and VERBOSE mode also costs (aside from the interval quota cost of 1 per interval)
  // 2 quota units per channel per interval to get the latest video, and it's statistics.
  "Mode": "VERBOSE",

  // Your YouTube API key. For security purposes, I won't add my API key here.
  // https://developers.google.com/youtube/v3/getting-started
  "YtApiKey": "[INSERT API KEY HERE]",

  // The application name you specified on Google Developer Console.
  "YtApiName": "[INSERT APP NAME HERE]",

  // Your Discord webhook URL.
  // The name of the bot does not matter.
  // https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
  "DiscordWebhookToken": "[INSERT WEBHOOK URL HERE]",

  // What channels you want to get the subscriber count?
  // Uses channel IDs. Accepts multiple channel IDs using a comma-separated list.
  // https://support.google.com/youtube/answer/3250431?hl=en.
  // This also accepts channels that you don't own.
  "Channels": "[CHANNEL 1 ID HERE],[CHANNEL 2 ID HERE]",

  // What is the delay of updating the channels? Default: 300 seconds (5 minutes, 388 requests on BASIC).
  // Accepts seconds. 1 minute = 60 seconds.
  // On SIMPLE and VERBOSE mode, it costs 1 unit per interval (to get the channel's info) + 2 units per channel per interval (to get the latest video).
  // Please note that YouTube API has a quota limit of 10000 per day, and each request of this program costs 1 quota.
  "UpdateInterval": 300,

  // If you want the webhook to not create a new message for every reboot, add a message ID here. Default: 0 (disabled).
  // To make it work and make sure the program won't crash, use an ID of a message that the webhook created.
  // To get the message ID, enable Developer Mode on advanced settings in Discord, right-click the webhook's message, and click Copy Message ID.
  // https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
  "WebhookMessageIdOverride": 0,

  // Destination of the CSV file. Default: "" (disabled)
  // NOTE: This will only update the file once per interval.
  "CSVFileDestination": "",

  // Forcely assume that the file exists and the data only needs to be appended?
  "ForceAppendCSV": false
}
```

## Embed modes
### Basic Mode
<img src="/imgs/BasicModeExample.png" />

In Basic mode, the thing shown is only the channel name, and the subscriber count.  
Useful for subscriber comparisons, or like shown in the example (subscribe to [Netherverse](https://youtube.com/@netherverseyt), [Zenith](https://youtube.com/@zenithjj), and [Mongoose](https://youtube.com/@mongoose.). First one to reach 10k wins.), for subscriber races.

### Simple Mode
::: warning
This costs another 2 quota units!
:::

<img src="/imgs/SimpleModeExample.png" />

In Simple Mode, each channel now gets it's own embed, and it now shows their latest video.  
Also, the statistics is now extended, with videos, and views.  It now also have clickable links.

### Verbose Mode
::: warning
This costs another 2 quota units!
:::

<img src="/imgs/VerboseModeExample2.png" /> 

In Verbose mode, it now shows the channel's image, the latest video's thumbnail, and the channel's description.