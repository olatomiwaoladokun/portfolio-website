// const restOfTheBodyButton = document.getElementById("open-rest");

// const openBody = () => {
//     const restOfThePage = document.querySelector(".others");
//     restOfTheBodyButton.classList.add("open-rest-clicked");
//     restOfThePage.classList.add("others-clicked");
// }
// restOfTheBodyButtton.addEventListener("click", openBody)

const restOfTheBodyButton = document.getElementById("open-rest");

function openbody (){
    const restOfThePage = document.querySelector(".others");
    restOfThePage.classList.add("others-clicked");
    restOfTheBodyButton.classList.add("open-rest-clicked");
}
restOfTheBodyButton.addEventListener("click", openbody);