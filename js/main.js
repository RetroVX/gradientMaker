import {generateGradient, randomGenerate} from "./gradientMaker.js"

// get all ids
const textArea = document.getElementById('textArea');


// on space bar press, generate a random gradient
document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        randomGenerate();
    }
})

// random gradient on startup
randomGenerate();

// randomly generate a gradient on button press
const randomBtn = document.getElementById('btn');
randomBtn.addEventListener('click', function(){
    randomGenerate();
});

