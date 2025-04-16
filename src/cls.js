import { getRandomDelay } from "./utils";

setTimeout(() => {
  const container = document.getElementById("cls");
  const img = document.createElement("img");
  img.src = "/public/oleg-laptev-QRKJwE6yfJo-unsplash.jpg";
  container.appendChild(img);

  const text = document.createElement("div");
  text.textContent = "Simulated Cumulative Layout Shift (CLS)";
  container.appendChild(text);
}, getRandomDelay());
