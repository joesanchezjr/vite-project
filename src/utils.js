export function getRandomDelay(min = 1000, max = 5000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
