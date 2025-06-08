// const progressLength = [1, 2]

// const progressbarContainer = document.getElementById("progress-container")

// const createProgressEl = (progressNum) => {
//     console.log(progressNum, progressLength.length)
//     if (progressNum % 2 === 0) {
//         return `<div class="path-${progressNum}-container">
//             <div class="container-${progressNum}">
//                 <div class="path-${progressNum}">
//                     <div id="progress-bar-${progressNum}" class="progress-bar-${progressNum % 2 === 0 ? "ver" : "hor"}"></div>
//                 </div>
//             </div>
//             ${progressNum === progressLength.length ? `<div class="indicator">
//                     <div class="indicator-color">
//                         <span>FINAL</span>
//                     </div>
//                 </div>` : ""}

//         </div>

//         `
//     } else {
//         return `<div class="path-${progressNum}-container">
//             <div class="container-${progressNum}">
//                 <div class="indicator">
//                     <div class="indicator-color">
//                         <span>${(progressNum - 3) % 4 === 0 && progressNum >= 3 ? progressNum === progressLength.length ? "FINAL" : progressNum + 1 : progressNum}</span>
//                     </div>
//                 </div>
//                 <div class="path-${progressNum}">
//                     <div id="progress-bar-${progressNum}" class="progress-bar-${progressNum % 2 === 0 ? "ver" : "hor"}"></div>
//                 </div>
//                 <div class="indicator">
//                     <div class="indicator-color">
//                         <span>${(progressNum - 3) % 4 === 0 && progressNum >= 3 ? progressNum : progressNum === progressLength.length ? "FINAL" : progressNum + 1}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//     }

// }

// for (const progressLengthNum of progressLength) {
//     const progressEl = createProgressEl(progressLengthNum)
//     progressbarContainer.innerHTML += progressEl
// }

let progress = Number(localStorage.getItem("progress")) || 1;
let stage1 = true;
let horLeft = localStorage.getItem("horLeft") || "true";
let initialLeft = Number(localStorage.getItem("left")) || 10;
let initialTop = Number(localStorage.getItem("top")) || 120;

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
  console.log("horLeft: ", horLeft)
  const charHead = document.getElementsByClassName("char-head");
  if (progress <= 5) {
    const progressBar = document.getElementById("progress-bar-" + progress);
    const indicator = document.getElementById(`indicator-color-${progress}`);
    if (progress % 2 === 0) {
      progressBar.setAttribute("class", "play-progress-ver");

      // Define keyframes
      const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            top: ${initialTop}px;
                        }

                        100% {
                            top: ${initialTop + 272}px;
                        }
                    }
            `;

      // Inject keyframes into a <style> tag
      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      charHead[0].style.left = `${initialLeft}px`;

      initialTop = initialTop + 272;
      charHead[0].classList.add("head-move-ver");
    } else {
      charHead[0].classList.remove("head-move-ver");
      progressBar.setAttribute("class", "play-progress-hor");

      if (horLeft === "true") {
        // Define keyframes
        const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            left: ${initialLeft}px;
                        }

                        100% {
                            left: ${initialLeft + 270}px;
                        }
                    }
            `;

        // Inject keyframes into a <style> tag
        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);
        charHead[0].style.top = `${initialTop}px`;
        horLeft = false;
        initialLeft += 270;
      } else {
        // Define keyframes
        const keyframes = `
            @keyframes headMoveVer-${progress}{
                        0% {
                            left: ${initialLeft}px;
                        }

                        100% {
                            left: ${initialLeft - 275}px;
                        }
                    }
            `;

        // Inject keyframes into a <style> tag
        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);
        charHead[0].style.top = `${initialTop}px`;
        horLeft = true;
        initialLeft -= 275;
        console.log("her")
      }
    }
    charHead[0].style.animation = `headMoveVer-${progress} 3.5s forwards`;
    indicator.classList.add("success-indicator");
    progress++;

    console.log("initialLeft: ", initialLeft)
    localStorage.setItem("left", initialLeft);
    console.log("initialTop: ", initialTop)
    localStorage.setItem("top", initialTop);
    localStorage.setItem("progress", progress);
    localStorage.setItem("horLeft", horLeft)
    
    setTimeout(() => {
      location.href = PROGRESS_DATA[progress]
    }, 3500);

  }

  // 
};
const headPopup = () => {
  const charHead = document.getElementsByClassName("char-head");

  const keyframes = `
    @keyframes headIntroPopup {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    `;

  const style = document.createElement("style");
  style.textContent = keyframes;
  document.head.appendChild(style);

  // Apply the intro popup animation
  charHead[0].style.animation = "headIntroPopup 1s ease-out";
  charHead[0].style.top = `${initialTop}px`
  charHead[0].style.left = `${initialLeft}px`
};
