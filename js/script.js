// Welcome Message
console.log("Welcome to Sierra's Portfolio!");

// Button Message
function welcomeMessage() {
    alert("Thank you for visiting my portfolio! I'm currently learning HTML, CSS, JavaScript, Git, AI, and Cybersecurity.");
}
// ==========================
// ORCHID TECH THEME SWITCH
// ==========================


const themeButton =
document.getElementById("themeToggle");


if(themeButton){


themeButton.addEventListener("click",()=>{


document.body.classList.toggle("dark-mode");


});

}
