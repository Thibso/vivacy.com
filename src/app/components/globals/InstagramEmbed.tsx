"use client";

import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/laboratoiresvivacy"
      data-instgrm-version="12"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
      }}
    >
      <a
        href="https://www.instagram.com/laboratoiresvivacy"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#3897f0" }}
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
};

export default InstagramEmbed;
