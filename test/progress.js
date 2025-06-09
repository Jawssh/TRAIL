let progress = Number(localStorage.getItem("progress")) || 1;
let horLeft = localStorage.getItem("horLeft") || "true";
console.log("here")
// Determine scaling factor based on screen width
const screenScale = window.innerWidth < 480 ? 0.5 : window.innerWidth < 768 ? 0.75 : 1;
let initialLeft = Number(localStorage.getItem("left")) || 10 * screenScale;
let initialTop = Number(localStorage.getItem("top")) || 30 * screenScale;

setTimeout(() => {
  playProgress();
}, 1000);

for (let index = 1; index < progress; index++) {
  const progressBar = document.getElementById("progress-bar-" + index);
  const indicator = document.getElementById(`indicator-color-${index}`);
  progressBar.setAttribute("class", "progress-succeed");
  indicator.setAttribute("class", "indicator-succeed");
}

const playProgress = () => {
  const charHead = document.getElementsByClassName("char-head");
  if (progress <= 6) {
    const progressBar = document.getElementById("progress-bar-" + progress);
    const indicator = document.getElementById(`indicator-color-${progress}`);

    if (progress % 2 === 0) {
      progressBar.setAttribute("class", "play-progress-ver");
      const moveY = 234 * screenScale;
      const keyframes = `
        @keyframes headMoveVer-${progress} {
          0% { top: ${initialTop}px; }
          100% { top: ${initialTop + moveY}px; }
        }`;
      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      charHead[0].style.left = `${initialLeft}px`;
      initialTop += moveY;
      charHead[0].classList.add("head-move-ver");
    } else {
      charHead[0].classList.remove("head-move-ver");
      progressBar.setAttribute("class", "play-progress-hor");

      const moveX = 230 * screenScale;
      const direction = horLeft === "true" ? 1 : -1;
      const keyframes = `
        @keyframes headMoveVer-${progress} {
          0% { left: ${initialLeft}px; }
          100% { left: ${initialLeft + direction * moveX}px; }
        }`;
      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      charHead[0].style.top = `${initialTop}px`;
      horLeft = horLeft === "true" ? "false" : "true";
      initialLeft += direction * moveX;
    }

    charHead[0].style.animation = `headMoveVer-${progress} 3.5s forwards`;
    indicator.classList.add("success-indicator");
    progress++;

    setTimeout(() => {
      // location.href = PROGRESS_DATA[progress]
    }, 3500);
  } else {
    location.href = '/html/final.html';
  }
};

const headPopup = () => {
  const charHead = document.getElementsByClassName("char-head");
  const keyframes = `
    @keyframes headIntroPopup {
      0% { transform: scale(0); }
      100% { transform: scale(1); }
    }`;
  const style = document.createElement("style");
  style.textContent = keyframes;
  document.head.appendChild(style);
  charHead[0].style.animation = "headIntroPopup 1s ease-out";
  charHead[0].style.top = `${initialTop}px`;
  charHead[0].style.left = `${initialLeft}px`;
};
