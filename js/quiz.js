let dialogNumber = 0;
let currentQuizNum = 0;
let hasWrongAns = 0;
const savedStage = Number(localStorage.getItem("progressBarStage")) || 1;
const CORRECT_DIALOG = [
  "Excellent work! You can now proceed to your next goal!",
  "Good job! I knew you could do this!",
  "You’re good at this!",
];

const contentContainer =
  document.getElementsByClassName("content-container")[0];
const introduceContentEl =
  document.getElementsByClassName("introduce-content")[0];
const bodyEl = document.getElementsByTagName("html")[0];

const mainEl = document.getElementById("main-container");
const modalContainer = document.getElementsByClassName("modal-container")[0];


const currentStage = localStorage.getItem("currentStage") || "bonifacio";

bodyEl.style.backgroundImage = `url('../assets/image/${currentStage}.jpg')`;
bodyEl.style.backgroundRepeat = "no-repeat";
bodyEl.style.backgroundPosition = "center";
bodyEl.style.backgroundSize = "cover";
bodyEl.style.height = "100%";
bodyEl.style.display = "flex";
bodyEl.style.flexDirection = "column";
bodyEl.style.justifyContent = "center";
bodyEl.style.alignItems = "center";

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
      mainEl.innerHTML = "";
      setTimeout(() => {
        bodyEl.style.backgroundImage = `url('../assets/image/${currentStage}_open_gate.jpg')`;
        bodyEl.style.backgroundRepeat = "no-repeat";
        bodyEl.style.backgroundPosition = "center center";
        bodyEl.style.backgroundSize = "cover";

        setTimeout(() => {
            location.href="/test/progress.html"
        }, 3000);
      }, 2500);
    } else if (QUIZ_DIALOG[dialogNumber] === "start_quiz") {
      console.log("start quiz", savedStage);
      const emman = document.getElementById("emman-img");
      const placename = document.getElementsByClassName(
        "placename-container"
      )[0];
      const container = document.getElementsByClassName("container")[0];
      emman.style.display = "none";
      placename.style.display = "none";
      container.style.height = "100vh";
      const quizType = QUIZ_TYPE[savedStage];
      quiz(quizType);
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
    console.log("No quiz dialog");
    // location.href = "/html/lesson.html";
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

const quiz = (type) => {
  if (type === "matching_type") {
    matchingTypeQuiz(QUIZES[savedStage]);
  }
};

const submitMatchingType = () => {
  const answerInput = document.getElementById("answer-input");
  const answer = answerInput.value.toLowerCase();
  const correctAns = QUIZES[savedStage].questions[currentQuizNum].answer;
  const randomNum = Math.floor(Math.random() * 3);
  console.log("randomNum: ", randomNum);
  if (answer === correctAns) {
    console.log("correct");
    showModal(CORRECT_DIALOG[randomNum]);
    currentQuizNum++;
    hasWrongAns = 0;
    if (currentQuizNum < QUIZES[savedStage].questions.length) {
      const questionContainer = contentContainer.querySelector(
        ".question-container"
      );
      questionContainer.innerHTML = `
          <div class="question">
            <p>${QUIZES[savedStage].questions[currentQuizNum].question}</p>
            <input type="text" id="answer-input"/>
          </div>
        `;
    } else {
      //open gate
      console.log("open gate");
      dialogNumber++;
      insertDialogMessage();
    }
  } else {
    console.log("wrong");
    hasWrongAns++;
    if (hasWrongAns > 1) {
      showModal("Do you want to review the lesson again?", true);
    } else {
      showModal("Try again!");
    }
  }
};

const matchingTypeQuiz = (quiz) => {
  contentContainer.innerHTML = `
  <div class="matching-container">
    <div class="instruction-container">${quiz.instruction}</div>
    <div class="choices-container"></div>
    <div class="question-container"></div>
  </div>
  <button onclick="submitMatchingType()">SUBMIT</button>
  `;
  const choicesContainer = contentContainer.querySelector(".choices-container");
  quiz.choices.forEach((choice) => {
    choicesContainer.innerHTML += `
      <p>${choice}</p>
    `;
  });

  const questionContainer = contentContainer.querySelector(
    ".question-container"
  );
  questionContainer.innerHTML += `
      <div class="question">
        <p>${quiz.questions[currentQuizNum].question}</p>
        <input type="text" id="answer-input"/>
      </div>
    `;
};

const hideModal = () => {
  modalContainer.style.display = "none";
  mainEl.style.display = "";
};

const backToLesson = () => {
  history.back();
}

const showModal = (dialog, stop = false) => {
  clearInterval()
  mainEl.style.display = "none";
  modalContainer.innerHTML = `
    <h3 style="text-align: center">${dialog}</h3>
  `;
  modalContainer.classList.add("modal-show");
  modalContainer.style.display = "flex";
  if (stop) {
    modalContainer.innerHTML += `
      <div class="end-x">
          <button onclick="hideModal()">NO</button>
          <button class="primary" onclick="backToLesson()">YES</button>
      </div>
    `;
  } else {
    setTimeout(() => {
      hideModal();
    }, 1500);
  }
};
