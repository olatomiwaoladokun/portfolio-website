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
    welcomePortion.classList.add("welcome-disappear");
    restOfTheBodyButton.classList.add("open-rest-clicked");
    restOfThePage.focus();
}
restOfTheBodyButton.addEventListener("click", openbody);

// Make the nav bar sticky

windows.addEventListener("scroll", function(){
    const navBar = document.querySelector(".navigation-tabs");
    navBar.classList.toogle("sticky", window.scroolY > 0);
});