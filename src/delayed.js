function simulateSlowInteraction(durationMs = 3000) {
  const start = performance.now();
  while (performance.now() - start < durationMs) {
    // Block the main thread with a no-op loop
    Math.sqrt(Math.random() * 1000);
  }

  console.log(`Simulated a slow interaction for ${durationMs}ms.`);
}

document
  .getElementById("large-interaction-btn")
  .addEventListener("click", async function () {
    var target = document.getElementById("interaction-target");
    var delay = Math.random() * (3 - 1) + 1; // Random delay between 1 and 3 seconds

    simulateSlowInteraction(delay * 1000);

    target.textContent = `Simulated INP of ${(delay * 1000).toPrecision(4)}ms`;
  });
