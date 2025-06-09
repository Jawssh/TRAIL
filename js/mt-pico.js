let dialogNumber = 0;
const contentContainer = document.getElementsByClassName("content-container")[0]
const bodyEl = document.getElementsByClassName("introduce-content")[0]

localStorage.setItem("currentStage","mt-pico")

setTimeout(() => {
    bodyEl.style.visibility = "visible"
}, 4000);

setTimeout(() => {
    startDialog();
}, 5000);

const startDialog = () => {
    insertDialogMessage();
    startSpeaking();
    document.getElementById("back").disabled = true
}

const nextDialog = () => {
    dialogNumber++
    stopSpeaking();
    
    document.getElementById("back").disabled = false
    console.log(dialogNumber)
    // setTimeout(() => {
        if(dialogNumber + 1 === PICO_DIALOG.length){
            document.getElementById("next").disabled = true
        }
        insertDialogMessage();
        startSpeaking();
    // }, 500);
}

const backDialog = () => {
    dialogNumber--
    stopSpeaking();
    // setTimeout(() => {
        if(dialogNumber === 0){
            document.getElementById("back").disabled = true
            document.getElementById("next").disabled = false
        }else document.getElementById("next").disabled = false
        insertDialogMessage();
        startSpeaking();
    // }, 500);
}

const insertDialogMessage = () => {
    if(PICO_DIALOG[dialogNumber]){
        contentContainer.innerHTML = `
        <div class="dialog-container space-between">
            <p class="dialog">${PICO_DIALOG[dialogNumber]}</p>
            <div class="end-x">
                <button id="back" onclick="backDialog()">BACK</button>
                <button id="next" class="primary" onclick="nextDialog()">NEXT</button>
            </div>
        </div>`;
    }else{
        location.href = "/html/quiz.html"
    }
}

const startSpeaking = () => {
    const mouthEl = document.getElementById("mouth")
    mouthEl.classList.toggle("speaking")

    setTimeout(() => {
        stopSpeaking();
     }, 3000);
}

const stopSpeaking = () => {
    const mouthEl = document.getElementById("mouth")
    mouthEl.classList.remove("speaking")
}

