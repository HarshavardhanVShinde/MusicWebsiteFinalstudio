import React from "react";

// The Logo component now renders an image located at /logo.png (place your provided image
// in the project's `public/` directory as `public/logo.png`).
// It accepts any standard <img> props (className, width, height, etc.) so existing usage
// in header/footer that passes Tailwind classes will continue to work.
export function Logo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { className, alt = "Arohi Rhythms", ...rest } = props;
  return <img src="/logo.png" alt={alt} className={className} {...rest} />;
}
