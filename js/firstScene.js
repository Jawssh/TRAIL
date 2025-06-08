const btnEl = document.getElementById("enterName")
const nameInput = document.getElementById("nameInput")
const contentContainer = document.getElementsByClassName("content-container")[0]
let dialogNumber = 0

nameInput.addEventListener("input", (e) => {
    if(e.target.value.length > 0 ){
        btnEl.disabled = false
    }else{
        btnEl.disabled = true
    }
});


btnEl.addEventListener("click", () => {
    sessionStorage.setItem("userName", nameInput.value)
    const emmanEl = document.getElementById("emman-img")
    updateDialog()
    emmanEl.className = "dialog"
})

function nextDialog() {
    dialogNumber++;
    updateDialog(); // You need to re-render the dialog
}

function updateDialog() {
    if(FIRST_SCENE[dialogNumber]){
        contentContainer.innerHTML = `
        <div class="dialog-container space-between">
            <p class="dialog">${FIRST_SCENE[dialogNumber]}</p>
            <div class="end-x">
                <button class="primary" onclick="nextDialog()">NEXT</button>
            </div>
        </div>`;
    }else{
        location.href = "/html/introduce.html"
    }
}
