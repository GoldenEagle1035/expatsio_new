"use client";

import ReactDOM from "react-dom";

const preloads = [
  "https://expatsio.b-cdn.net/e_1.png",
  "https://expatsio.b-cdn.net/e_2.png",
  "https://expatsio.b-cdn.net/e_3.png",
  "https://expatsio.b-cdn.net/e_4.png",
  "https://expatsio.b-cdn.net/e_5.png",
  "https://expatsio.b-cdn.net/e_6.png",
  "https://expatsio.b-cdn.net/e_7.png",
  "https://expatsio.b-cdn.net/trailer-v.png",
  "https://expatsio.b-cdn.net/e_6_1.png",
  "https://expatsio.b-cdn.net/team2.png",
  "https://expatsio.b-cdn.net/confirm.png",
];

export function PreloadResources() {
  preloads.forEach((preload) => {
    ReactDOM.preload(preload, {
      as: "image",
      fetchPriority: "high",
    });
  });
  return null;
}
