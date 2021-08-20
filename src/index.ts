import type {
  EmbedAuthor,
  EmbedData,
  EmbedField,
  EmbedFooter,
  EmbedImage,
  EmbedThumbnail,
  EmbedVideo,
  HexColor,
} from "./types";

export default class EmbedBuilder {
  constructor(public data: EmbedData = {}) {}

  public setColor(color: HexColor | number): this {
    if (typeof color === "string") {
      if (color.substring(0, 1) === "#") {
        color = `0x${color.substring(1)}`;
      }

      color = parseInt(color, 16);
    }

    this.data.color = color;

    return this;
  }

  public setTitle(title: string): this {
    this.data.title = title;

    return this;
  }

  public setDescription(description: string): this {
    this.data.description = description;

    return this;
  }

  // "date" argument defaults to the current date
  public setTimestamp(date: Date | number | string = new Date()): this {
    if (typeof date !== "object") date = new Date(date);

    this.data.timestamp = date.toISOString();

    return this;
  }

  public addFields(...fields: EmbedField[]): this {
    if (!this.data.fields) this.data.fields = [];

    this.data.fields.push(...fields);

    return this;
  }

  public setImage(image: EmbedImage): this {
    this.data.image = image;

    return this;
  }

  public setThumbnail(thumbnail: EmbedThumbnail): this {
    this.data.thumbnail = thumbnail;

    return this;
  }

  public setVideo(video: EmbedVideo): this {
    this.data.video = video;
    return this;
  }

  public setAuthor(author: EmbedAuthor): this {
    this.data.author = author;

    return this;
  }

  public setFooter(footer: EmbedFooter): this {
    this.data.footer = footer;

    return this;
  }

  public getJSON(): EmbedData {
    return this.data;
  }
}
