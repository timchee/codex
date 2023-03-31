import React, { FC, useEffect } from "react";
import parse from "html-react-parser";

export const Paragraph: FC<{ attrs: any; contentHTML: string }> = ({ attrs, contentHTML }) => (
  <p style={attrs} className="block paragraph">
    {contentHTML && parse(contentHTML)}
  </p>
);

export const BulletList: FC<{ attrs: any; contentHTML: string }> = ({ attrs, contentHTML }) => (
  <div className="bullet-list">
    <ul style={attrs} className="block">
      {contentHTML && parse(contentHTML)}
    </ul>
  </div>
);

export const OrderedList: FC<{ attrs: any; contentHTML: string }> = ({ attrs, contentHTML }) => (
  <div className="ordered-list">
    <ul style={attrs} className="block">
      {contentHTML && parse(contentHTML)}
    </ul>
  </div>
);

export const FactBox: FC<{ attrs: any; contentHTML: string }> = ({ attrs, contentHTML }) => (
  <div style={attrs} className="block factbox">
    <div className="factbox__note">
      <span></span> <span>NOTE</span>
    </div>
    <div className="factbox__content">
      {contentHTML && parse(contentHTML)}
    </div>
  </div>
);

export const Heading: FC<{ attrs: any; contentHTML: string; level: number; onHeadingClick?: (blockId: string) => void }> = ({ attrs, contentHTML, level, onHeadingClick }) => {
  const HeadingTag: string = `h${level}`;

  useEffect(() => {
    if (window.location.hash === `#${attrs?.blockId}`) {
      const element = document.getElementById(attrs?.blockId!);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [attrs?.blockId]);

  function handleClick() {
    if (onHeadingClick) {
      onHeadingClick(attrs?.blockId || "");
    }
  }

  return (
    <HeadingTag id={attrs?.blockId} className={`block heading h${level}`} onClick={handleClick}>
      {contentHTML && parse(contentHTML)}
    </HeadingTag>
  );
};

export const CodexImage: FC<{ attrs: any }> = ({ attrs }) => {
  let mediaArray: any[] = [];

  if (attrs && attrs.media) {
    mediaArray = attrs.media;
  }

  return (
    <div className="codex-media" style={{ textAlign: attrs?.align ?? undefined }}>
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

export const CodexMediaOne: FC<{ asset: { url: string } }> = ({ asset }) => {
  return (
    <div>
      <img src={asset.url} alt="Asset" />
    </div>
  );
};
