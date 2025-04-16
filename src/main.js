window.addEventListener("DOMContentLoaded", function () {
  var delay = Math.random() * (5 - 3) + 3; // seconds

  // Create and append the skeleton loader
  var skeletonDiv = document.createElement("div");
  skeletonDiv.style.width = "100%"; // Smaller width
  skeletonDiv.style.height = "50px"; // Smaller height
  skeletonDiv.style.background = "hsl(0, 0%, 90%)";
  skeletonDiv.style.display = "flex";
  skeletonDiv.style.alignItems = "center";
  skeletonDiv.style.justifyContent = "center";

  // Create spinner element
  var spinner = document.createElement("div");
  spinner.style.width = "30px";
  spinner.style.height = "30px";
  spinner.style.border = "4px solid hsl(0, 0%, 80%)";
  spinner.style.borderTop = "4px solid hsl(0, 0%, 50%)";
  spinner.style.borderRadius = "50%";
  spinner.style.animation = "spin 1s linear infinite";

  skeletonDiv.appendChild(spinner);
  document.getElementById("shift").appendChild(skeletonDiv);

  // Add spinner animation
  var style = document.createElement("style");
  style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  document.head.appendChild(style);

  setTimeout(function () {
    // Replace skeleton loader with final content
    skeletonDiv.style.height = "300px"; // Expand to full height
    skeletonDiv.style.background = "rebeccapurple";
    skeletonDiv.style.color = "white";
    skeletonDiv.style.fontSize = "2rem"; // Increase font size
    skeletonDiv.textContent = "📣";
  }, delay * 1000);
});
