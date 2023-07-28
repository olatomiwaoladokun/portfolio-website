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
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contacts = document.querySelector("#contacts");

const sendButton = document.querySelector("#send-button");
function openbody (){
    restOfThePage.classList.add("others-clicked");
    // Make the button and the welcome page disappear
    welcomePortion.replaceWith ();
    // restOfTheBodyButton.classList.add("open-rest-clicked");
   about.style.display = "block";
   projects.style.display = "block";
   contacts.style.display = "block";
};

function sendMail(){
    let email = document.querySelector("#mail").innerHTML;
    let message = document.querySelector ("#message").innerHTML;
    alert("Thanks, I hope that I got the message!🙂🙂");
    

}
restOfTheBodyButton.addEventListener("click", openbody);
sendButton.addEventListener("click", sendMail);