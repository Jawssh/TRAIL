let slide = 0
let imageArr = [];

const progress = localStorage.getItem("progress") || "1";
const lessons = LESSON_DATA[progress]
const nextImage = () => {
    console.log(slide + 1)
    if (slide + 1 < imageArr.length) {
        slide++
        imageArr.forEach((lesson, key) => {
            if (slide === key) {
                lesson.style.display = "block"
                lesson.classList.add("slide")
            } else {
                lesson.style.display = "none"
                lesson.classList.remove("slide")
            }

        })
    }

}

const prevImage = () => {
    console.log(slide - 1)
    if (slide - 1 >= 0) {
        slide--
        imageArr.forEach((lesson, key) => {
            if (slide === key) {
                lesson.style.display = "block"
                lesson.classList.add("slide")
            } else {
                lesson.style.display = "none"
                lesson.classList.remove("slide")
            }

        })
    }

}

const skipLesson = () => {
    console.log("hey")
    location.href = "/html/quiz.html"
}

window.addEventListener("load", () => {
    createImageDiv()
})

const createImageDiv = () => {
    const imageContainer = document.getElementById("image-container")
    lessons.forEach((lesson, key) => {
        if (key === 0) {
            imageContainer.innerHTML += `<img id="image${key}" class="image-slide" src="${lesson.image}" alt="">`
        } else {
            imageContainer.innerHTML += `<img id="image${key}" class="image-slide" style="display:none" src="${lesson.image}" alt="">`
        }
    })

    const imageSlides = document.getElementsByClassName(`image-slide`)
    imageArr = Array.from(imageSlides)
}

