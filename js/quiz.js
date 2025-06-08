let dialogNumber = 0;
const contentContainer =
  document.getElementsByClassName("content-container")[0];
const introduceContentEl = document.getElementsByClassName("introduce-content")[0];
const bodyEl = document.getElementsByTagName('html')[0]


const currentStage = localStorage.getItem("currentStage") || "bonifacio"
console.log(currentStage)

bodyEl.style.backgroundImage = `url('../assets/image/${currentStage}.jpg')`;
bodyEl.style.backgroundRepeat = 'no-repeat';
bodyEl.style.backgroundPosition = 'center';
bodyEl.style.backgroundSize = 'cover';
bodyEl.style.height = "100%";
bodyEl.style.display = "flex"
bodyEl.style.flexDirection = "column"
bodyEl.style.justifyContent = "center"
bodyEl.style.alignItems = "center"


setTimeout(() => {
    introduceContentEl.style.visibility = "visible";
}, 1000);

setTimeout(() => {
  startDialog();
}, 2000);

const startDialog = () => {
  insertDialogMessage();
  startSpeaking();
  document.getElementById("back").disabled = true;
};

const nextDialog = () => {
  dialogNumber++;
  stopSpeaking();

  document.getElementById("back").disabled = false;
  console.log(dialogNumber);
  // setTimeout(() => {
  if (dialogNumber + 1 === QUIZ_DIALOG.length) {
    document.getElementById("next").disabled = true;
  }
  insertDialogMessage();
  startSpeaking();
  // }, 500);
};

const backDialog = () => {
  dialogNumber--;
  stopSpeaking();
  // setTimeout(() => {
  if (dialogNumber === 0) {
    document.getElementById("back").disabled = true;
    document.getElementById("next").disabled = false;
  } else document.getElementById("next").disabled = false;
  insertDialogMessage();
  startSpeaking();
  // }, 500);
};

const insertDialogMessage = () => {
  if (QUIZ_DIALOG[dialogNumber]) {
    if (QUIZ_DIALOG[dialogNumber].startsWith("show_open")) {
      const mainEl = document.getElementById("main-container");
      mainEl.innerHTML = "";
      setTimeout(() => {
        bodyEl.style.backgroundImage =
          `url('../assets/image/${currentStage}_open_gate.jpg')`;
        bodyEl.style.backgroundRepeat = "no-repeat";
        bodyEl.style.backgroundPosition = "center center";
        bodyEl.style.backgroundSize = "cover";

        setTimeout(() => {
            location.href="/html/progress.html"
        }, 1000);
      }, 2000);
    } else {
      contentContainer.innerHTML = `
        <div class="dialog-container space-between">
            <p class="dialog">${QUIZ_DIALOG[dialogNumber]}</p>
            <div class="end-x">
                <button id="back" onclick="backDialog()">BACK</button>
                <button id="next" class="primary" onclick="nextDialog()">NEXT</button>
            </div>
        </div>`;
    }
  } else {
    location.href = "/html/lesson.html";
  }
};

const startSpeaking = () => {
  const mouthEl = document.getElementById("mouth");
  mouthEl.classList.toggle("speaking");

  setTimeout(() => {
    stopSpeaking();
  }, 3000);
};

const stopSpeaking = () => {
  const mouthEl = document.getElementById("mouth");
  mouthEl.classList.remove("speaking");
};
