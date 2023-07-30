# AutoHotkey Plugin

AutoHotkey Plugin is a Macro Deck 2 plugin that uses AutoHotkey to automate tasks.  
Supports all things in AutoHotkey.

## Getting Started
::: tip
If you want to follow a video instead of reading this wall of text and images, you can follow this [YouTube video](https://www.youtube.com/watch?v=bgWrXzHLZd4).
:::
::: info
This tutorial assumes that [Macro Deck](https://macro-deck.app) and [AutoHotkey](https://autohotkey.com) is already installed.
:::

### Macro Deck side
1. Open Macro Deck
2. Click Extensions > Online, click AutoHotkey Plugin, and click Install.
3. If you see "**Do you want to configure AutoHotkey Plugin now?**", click Yes.
4. If you installed **1.1** and clicked Express, just press OK (-2.0.0), or enable 1.1 support (3.0.0+).  
   If you installed **2.0**, enable 2.0 support and press OK (-2.0.0), or just press OK (3.0.0+).  
   If you installed **1.1** alongside **2.0**, the path of 1.1 should be `v1.1*` in the install folder of AutoHotkey v2.  

## Actions
| **Action**         | **Description**         | **Status** |
| ------------------------ | -------------------------- | ---------- |
| **Run AHK Script**       | Run a AutoHotkey script    | Live       |
| **Write and Run AHK Script** | Write and run a AHK Script | Live       |
| **Window Spy**           | AHK's built-in Window Spy  | Live       |

## Variables [2.0.0+]
::: v-pre
Writing scripts within Macro-Deck allows using Variables. Since AHK makes use of `{` and `}` we use double `{{` and `}}` to indicate a Variable in AHK WriteScripts (example `{{my_variable}}`).
Example:
```
MsgBox, It is now {{time}} and the date is {{date}}.
```
Thanks [@Timoses](https://github.com/Timoses) for coding this feature!
:::

## AHKPLib (Websocket-based) [3.0.0+] <Badge type="danger" text="depectated" />
::: warning
This feature is now depectated. This will be replaced by AHKPLibv2 that uses StdOut instead of Websockets to ensure v1 and v2 compatibility.
:::

Using the WriteScript v1.1 action now allows you to make communication to AHK Plugin to create a variable, get variables, update variables, create a notification and more.
Example:
```
#Include AHKPLib.ahk
ExampleApp := new AHKPLib()
MsgBox % ExampleApp.GetVar("date")
```
Documentation is available on this [link](https://github.com/jbcarreon123/MacroDeck2-AHKPlugin/tree/AHKPLib).