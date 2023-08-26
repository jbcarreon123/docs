# Frequently asked questions for Y2DL

## Can I invite the bot found in jbcarreon123 (the lead developer)'s server to my Discord server?
TLDR: No. The bot is invite-only by jbcarreon123.  
The bot on there is running on a server that can't handle many Discord servers. For stability of the bot, I won't make the bot be able to invite to other servers.  
Other than that, there is also some other things like YouTube API's quota limits, and the only possible thing to configure it is the YAML file.  
If you need help to self-host the bot, join his Discord server and create a help thread.  
If you don't need the customisability of this bot, and don't have the resources to self-host it, just use other solutions.  

## What does this thing support OS-wise?
Technically speaking, every modern operating system is supported, albeit some of them isn't tested yet:  
> Windows 10 and 11 [x64, aarch64/arm64]  
>> If you see the Windows Smartscreen when it is starts up, click "More info" then "Run Anyway". This is only one-time.  

> Mac OS [x64, aarch64/arm64 (M1/M2)]  
>> Note: Starting with Mac OS 10.15, 32-bit apps aren't supported.  
>> Note that it supports native Apple Silicon if you run the appropriate executable, and it should not run in Rosetta.  

> Linux [x64, aarch64/arm64]  
>> If it says `Permission denied`, run `$ chmod +x ./Y2DL` then run Y2DL again.  
> Also, it supports Docker. [Click here](/y2dl/getting-started#docker) for more info.  
>> If you use Docker, don't forget to configure it before starting the image!

## What are the dependencies used?
> Discord.NET [3.12.0]
> Google.Apis.YouTube.v3 [1.61.0.3]
> SmartFormat [3.2.2]
> System.Data.SQLite [1.0.118]
> YamlDotNet [13.2.0]

## Why starting with Y2DL {insert version here}, it's not tested on Windows?
The lead developer, jbcarreon123 just recently switched to Linux for his daily-driving PC.  
> Note: The CI/CD workflow of Y2DL already has Windows in mind, so testing if it builds successfully isn't a problem.  

## Why the releases is published by "github-actions"?
After the CI/CD workflow, the GitHub Actions workflow builds the application, zips it, and publishes it.  

## Why does thing need a CI/CD workflow?
Because to avoid headaches along the line, I've decided to make it have a CI/CD workflow.  
Note that I'm only the person developing this, so I really need that.  
> :info: Did you know that Y2DL is the first jbcarreon123's personal project that has a CI/CD workflow?  
> Note that this is mentioning personal projects, so Macro-Deck related projects is out of the book.  

## What is the license of this thing? Can I package it on my program?
Starting with 2.0.0, Y2DL's license switched from MIT License to LGPL v3.  
Yes, you have the rights to fork this, package this on another program, or anything, assuming that it abides with LGPLv3's terms.  
Note that I'll appreciate if you made changes that can be beneficial to Y2DL, to create a PR to Y2DL's repo.  
For more information, check the LICENSE file on Y2DL's GitHub repository.  
Please note that if Y2DL is packaged on another program, jbcarreon123 can't provide support the program that is packaged by Y2DL.  

## I'm tired of seeing the "Y2DL has a update and you should update" in the console. How do I disable it?
Disabling update checks is generally not recommended, but you can put this on the config file:  
> ```yaml
>Main:
>  DisableUpdateChecks = true
> ```  
That should disable it. Note that the latest version may fix issues you have, and I generally recommend people to update Y2DL to the latest version.  

## Can I self-host it on my own PC (without any VPS or servers)?
Technically, it is possible and if you don't have the budget to have a VPS, you can do it.  
Alternatively, if you have a old PC lying around, you can install Linux on the PC and follow the steps of how to use Y2DL on Linux.  
> *Psst. You don't need to enable Port forwarding or have a static IP.*

## If I use Bot Mode, what permissions do I need to give to the bot?
These are the things that are needed by the bot:  

> Universal:  
> `SEND_MESSAGES`  
> `EMBED_LINKS`  
> `MENTION_EVERYONE`¹ ²  

> LinkedSubRoles:  
> `MANAGE_ROLES`

> DynamicVoiceChannels:  
> `MANAGE_CHANNELS`

*¹ If you don't need to ping people, you can disable it.*  
*² I would recommend to just enable this permission on channel-by-channel basis so abuse of this can be minimal.*  

For security sake, please don't add unnecessary permissions to the bot. If you do and your bot's token is leaked, the attacker may do some things on your server(s).  
> I (jbcarreon123) is not responsible for issues like that. If your bot is acting suspiciously, reset your bot's token, change your password, and enable 2FA.

## What Privileged Intents does the bot need?
None! The bot just needs the `GUILD` and `GUILD_MESSAGES` unprivileged intents.  
> Note: This is already configured in the code. If you don't understand it, do not modify them! Doing it will cause a `NullReferenceException` and will crash the bot.  
It does not need `GUILD_MEMBERS`, `MESSAGE_CONTENT` and `GUILD_PRESENCES`.  
For security sake, please don't enable any of the privileged intents, because it can be weaponized by the attacker.

## Can I use Y2DL as a base or using Y2DL entirely unmodified for my YouTube linking Discord bot?
Absolutely.  
If you want to have the bot featured in the public bots using/based on Y2DL list, create a thread on my Discord server.  
> Note that if you made changes to Y2DL, because of LGPLv3, you need to make it open-source.  

## Why some people says Y2DL is really tedious to set up?
Well, I don't blame them.  
Y2DL isn't designed for people who just need is a simple bot that can send their freaking video in their Discord. It is designed with customisability in mind.  
Yes, it can be tedious to set up, but if you set it up, you can just leave it as-is and don't worry about it.

## I don't need Y2DL's features. Can you recommend me alternative bots?
Generally, any bots that can publish YouTube information can be used.  

**Honorable Mentions**:  
> __Sapphire__ (sapph.xyz)  
> I've used this bot a long time now, and I really liked it's features. Alongside of YouTube video releases, it is a really powerful moderation bot, without any payments (if you are enough with the free limits)  
> Note that Sapphire has limit of 5 for YouTube channels, but you can remove the limit entirely for €2/month, or if you just needed to add some channels, you can request a limit on the bot's support server increase **entirely for FREE** on one feature albeit with some delays.  
> Please don't hate with this practice, bots need servers, and servers costs money.

**Don't recommend**:  
> __MEE6__  
> Please **don't, DON'T** use this bot, unless if you want your member's DMs to be a freaking advertising billboard.  
> It is just the surface of what's the problem with MEE6.  
> If you are wondering, *Heck, it is a violation of Discord's Developer Guidelines, why does it still exist?*, well Discord is just being Discord.  
> If you want to learn more about MEE6's shady practices, watch [this YouTube playlist](https://www.youtube.com/playlist?list=PLEqYobHF0_Nk9W30QIri1QxwGByx91tsr) by NTTS featuring ~~2~~ **9!** videos.

## Does this work with Linux's `nohup`?
Yes. Use `nohup ./y2dl &` to run Y2DL on the background that is not held by the console.  
To see the logs, use `cat ./nohup.out`.  

## Why when I ran Y2DL, it says to not run as admin or root?
In Windows, Linux or other operating systems, admin/root is unnecessary for Y2DL to run.  
Please don't do this:  
```
$ sudo ./y2dl
doas (jbcarreon123@jb-archpc) password: 
08/26/23 12:28:29 PM | Info | Y2DL | Y2DL v2.0.0 (formerly as YTSCTD)
08/26/23 1:41:35 PM | Warning | Y2DL | Y2DL shouldn't be ran as root! Please don't run Y2DL as root in either sudo or doas or anything.
08/26/23 12:28:29 PM | Info | Y2DL | This program comes with ABSOLUTELY NO WARRANTY!
08/26/23 12:28:29 PM | Info | Y2DL |   > https://github.com/jbcarreon123/YTSCTD/blob/main/LICENSE
```
or on Windows:  
```
[Admin] D:\Y2DL\> y2dl.exe
08/26/23 12:28:29 PM | Info | Y2DL | Y2DL v2.0.0 (formerly as YTSCTD)
08/26/23 12:28:29 PM | Warning | Y2DL | Y2DL shouldn't be ran as admin! Please don't run Y2DL as administrator, it is unnecessary.
08/26/23 12:28:29 PM | Info | Y2DL | This program comes with ABSOLUTELY NO WARRANTY!
08/26/23 12:28:29 PM | Info | Y2DL |   > https://github.com/jbcarreon123/YTSCTD/blob/main/LICENSE
```
Also for Windows users, please, **PLEASE** don't disable User Account Control, it opens a can of worms on your PC.  

## Does the config supports other paths for the config file like `~/.config/y2dl` (Linux default dotconfig directory)?
Yes. But, to use other paths than `(Y2DL binary path)/Config`, you must put this on the config in `(Y2DL binary path)/Config/Y2DLConfig.yaml`:  
```
ConfigPath: ~/.config/y2dl/Y2DLConfig.yaml
```  
Or, use `--path=~/.config/y2dl/Y2DLConfig.yaml` in the arguments of Y2DL executable file.  
Also, if you use Linux, Y2DL also supports dotfile config with the filename `.y2dl.yaml`.

## Config profiles?
If you use Linux, you can put all the config profiles in a `.y2dl` directory on your home directory like:  
```
.y2dl
  > profile1.yaml
  > profile2.yaml
  > profile3.yaml
```  
Then, use the `--profile=(profile filename without the yaml part)` argument like:
```
## Launch Profile 2
./y2dl --profile=profile2
```

If you're not using Linux, use `Profiles` in `(Y2DL binary path)/Config/Y2DLConfig.yaml` like this:  
```yaml
Profiles:
  - Path: D:\Y2DL\Profiles\profile1.yaml
    Name: Profile1
  - Path: D:\Y2DL\Profiles\profile2.yaml
    Name: Profile2
  - Path: D:\Y2DL\Profiles\profile2.yaml
    Name: Profile2
```  
Then, use the `--profile=(profile filename without the yaml part)` argument like:  
```
## Launch Profile 2 (PowerShell)
./y2dl.exe --profile=Profile2
## Launch Profile 1 (CMD)
y2dl.exe --profile=Profile1
```
Note: Don't put spaces!

## Log4Shell???
WHAT? This thing is a **C#** application, not a **Java** application. If you are thinking that this is a Java app, it's not, even if C# code is really similar to Java.  
Also worth mentioning that the CVE is from 2021, and it's 2023!  
I think all Java applications (that are still maintained) is not suspectible for such attacks, I hope.  

## Only one question: Can I be a moderator on your server?
**No.**