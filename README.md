# discord-embed-builder
Basic and Efficient Builder for Discord Embeds

# Installation
```sh
$ yarn add @saucesteals/discord-embed-builder
OR
$ npm install @saucesteals/discord-embed-builder
```
# Usage
```ts
import EmbedBuilder from "@saucesteals/discord-embed-builder"

const embed = new EmbedBuilder(data?: EmbedData)
.setColor(color: HexColor | number)
.setTitle(title: string)
.setDescription(description: string)
.setTimestamp(date: Date | number | string = new Date())
.addFields(...fields: EmbedField[])
.setImage(image: EmbedImage)
.setThumbnail(thumbnail: EmbedThumbnail)
.setVideo(video: EmbedVideo)
.setAuthor(author: EmbedAuthor)
.setFooter(footer: EmbedFooter)

embed.getJSON(): EmbedData

embed.data: EmbedData
```