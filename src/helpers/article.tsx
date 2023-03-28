import React, { FC } from "react";
import parse from "html-react-parser";

interface IProps {
  attrs?: any;
  contentHTML?: string;
  level?: number;
}

export const Heading: FC<IProps> = ({ attrs, contentHTML, level }) => {
  const HeadingTag:string = `h${level}`;
  return (
    <HeadingTag style={attrs} className={`block heading h${level}`}>
      {contentHTML && parse(contentHTML)}
    </HeadingTag>
  );
};

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

export const Media: FC<IProps> = ({ attrs, contentHTML }) => (
  <img style={attrs} className="block codex-media">
    {contentHTML && parse(contentHTML)}
  </img>
);
