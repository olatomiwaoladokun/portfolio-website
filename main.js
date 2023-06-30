// const restOfTheBodyButton = document.getElementById("open-rest");

// const openBody = () => {
//     const restOfThePage = document.querySelector(".others");
//     restOfTheBodyButton.classList.add("open-rest-clicked");
//     restOfThePage.classList.add("others-clicked");
// }
// restOfTheBodyButtton.addEventListener("click", openBody)

const restOfTheBodyButton = document.getElementById("open-rest");
const welcomePortion = document.querySelector(".welcome");

function openbody (){
    const restOfThePage = document.querySelector(".others");
    restOfThePage.classList.add("others-clicked");
    // Make the button and the welcome page disappear
    welcomePortion.classList.add("welcome-diappear");
    restOfTheBodyButton.classList.add("open-rest-clicked");
    restOfThePage.focus();
}
restOfTheBodyButton.addEventListener("click", openbody);