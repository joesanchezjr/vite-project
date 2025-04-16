import { getRandomDelay } from "./utils";

import imageUrl from "../src/oleg-laptev-QRKJwE6yfJo-unsplash.jpg";

setTimeout(() => {
  const container = document.getElementById("cls");
  const img = document.createElement("img");
  img.src = imageUrl;
  container.appendChild(img);

  const text = document.createElement("div");
  text.textContent = "Simulated Cumulative Layout Shift (CLS)";
  container.appendChild(text);
}, getRandomDelay());
