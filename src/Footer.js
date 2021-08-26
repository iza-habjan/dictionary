import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      💻 & 🎨 with ❤️ in Berlin by{" "}
      <a
        className="portfolio-git"
        href="https://elegant-almeida-1182c1.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Iza Habjan
      </a>{" "}
      <a
        href="https://github.com/iza-habjan/dictionary"
        target="_blank"
        rel="noreferrer"
      >
        <span className="slash">/</span>{" "}
        <span className="portfolio-git"> GitHub</span>{" "}
      </a>{" "}
    </div>
  );
}
