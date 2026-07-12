// Orchid interaction


const orchids = document.querySelectorAll(".orchid");


orchids.forEach((orchid)=>{


orchid.addEventListener("click",()=>{


orchid.style.transform="scale(1.5)";


setTimeout(()=>{


orchid.style.transform="scale(1)";


},500);



});


});



// Welcome message


function welcomemessage(){


alert(
"Welcome to Sierra's AI & Technology Portfolio 🌸"
);


}
