// Orchid petal burst effect


const orchids = document.querySelectorAll(".orchid");


orchids.forEach((orchid)=>{


orchid.addEventListener("click",()=>{


for(let i = 0; i < 12; i++){


const petal = document.createElement("span");


petal.className = "petal";


petal.innerHTML = "🌸";


// Get orchid location

const rect = orchid.getBoundingClientRect();


petal.style.left = rect.left + "px";

petal.style.top = rect.top + "px";


// Create random burst movement

petal.style.setProperty(
"--x",
`${Math.random()*120-60}px`
);


petal.style.setProperty(
"--y",
`${Math.random()*120-60}px`
);



document.body.appendChild(petal);


// Remove petals after animation

setTimeout(()=>{

petal.remove();

},1000);


}


});

});



// Welcome message


function welcomemessage(){


alert(
"Welcome to Sierra's AI & Technology Portfolio 🌸"
);


}



// Welcome message


function welcomemessage(){


alert(
"Welcome to Sierra's AI & Technology Portfolio 🌸"
);


}
