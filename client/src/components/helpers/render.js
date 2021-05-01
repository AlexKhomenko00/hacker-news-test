import ReactHtmlParser from "react-html-parser";

export const formatTime = (time) =>
  new Date(time).toLocaleTimeString("us-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const formatLongTime = (time) =>
  new Date(time * 1000).toLocaleDateString("us-US", {
    minute: "2-digit",
    hour: "2-digit",
    day: "numeric",
    month: "long",
  });

export const parseParagraph = (text) =>
  ReactHtmlParser(
    `<p>${text.slice(0, 200)}${text.length > 200 ? "..." : ""}</p>`
  );
