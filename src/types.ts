export type HexColor = `#${string}` | `0x${string}`;

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface EmbedUrlAsset {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedAuthor {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export interface EmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export type EmbedImage = EmbedUrlAsset;

export type EmbedThumbnail = EmbedUrlAsset;

export type EmbedVideo = EmbedUrlAsset;

export interface EmbedData {
  color?: number;
  footer?: EmbedFooter;
  title?: string;
  url?: string;
  description?: string;
  timestamp?: string;
  fields?: EmbedField[];
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  author?: EmbedAuthor;
}
