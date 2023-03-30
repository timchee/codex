import React, { FC } from "react";
import parse from "html-react-parser";

interface IProps {
  attrs?: {
    media?: {
      id: string;
      type: string;
    }[];
    blockId?: string;
    src?: string;
    align?: string;
    caption?: string;
    width?: string;
  };
  contentHTML?: string;
  level?: number;
}

interface IMedia {
  id: string;
  type: string;
}

export const Paragraph: FC<IProps> = ({ attrs, contentHTML }) => (
  <p style={attrs} className="block paragraph">
    {contentHTML && parse(contentHTML)}
  </p>
);

export const BulletList: FC<IProps> = ({ attrs, contentHTML }) => (
  <div className="bullet-list">
    <ul style={attrs} className="block">
      {contentHTML && parse(contentHTML)}
    </ul>
  </div>
);

export const OrderedList: FC<IProps> = ({ attrs, contentHTML }) => (
  <div className="ordered-list">
    <ul style={attrs} className="block">
      {contentHTML && parse(contentHTML)}
    </ul>
  </div>

);

export const FactBox: FC<IProps> = ({ attrs, contentHTML }) => (
  <div style={attrs} className="block factbox">
    <div className="factbox__note">
      <span></span> <span>NOTE</span>
    </div>
    <div className="factbox__content">
    {contentHTML && parse(contentHTML)}
    </div>
  </div>
);

export const Heading: FC<IProps> = ({ attrs, contentHTML, level }) => {
  const HeadingTag: string = `h${level}`;

  return (
    <HeadingTag style={attrs} className={`block heading h${level}`}>
      {contentHTML && parse(contentHTML)}
    </HeadingTag>
  );
};

export const CodexImage: FC<IProps> = ({ attrs }) => {
  let mediaArray: IMedia[] = [];

  if (attrs && attrs.media) {
    mediaArray = attrs.media;
  }
  
  return (
      <div className="codex-media" style={{ textAlign: attrs?.align ?? undefined }} >
      {mediaArray.map((media) => (
        <img
          key={media.id}
          src={`https://codex-dev.codexcdn.net/assets/${media.id}.jpg?width=560&r=fill`}
          alt={attrs?.caption}
        />
      ))}
      </div>
  );
};
