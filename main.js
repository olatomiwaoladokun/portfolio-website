// const restOfTheBodyButton = document.getElementById("open-rest");

// const openBody = () => {
//     const restOfThePage = document.querySelector(".others");
//     restOfTheBodyButton.classList.add("open-rest-clicked");
//     restOfThePage.classList.add("others-clicked");
// }
// restOfTheBodyButtton.addEventListener("click", openBody)

const restOfTheBodyButton = document.getElementById("open-rest");
const welcomePortion = document.querySelector(".welcome");
const restOfThePage = document.querySelector(".others");
function openbody (){
    restOfThePage.classList.add("others-clicked");
    // Make the button and the welcome page disappear
    welcomePortion.replaceWith ();
    // restOfTheBodyButton.classList.add("open-rest-clicked");
    
};

restOfTheBodyButton.addEventListener("click", openbody);
