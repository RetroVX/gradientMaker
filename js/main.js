import {generateGradient, randomGenerate} from "./gradientMaker.js"

// get all ids
const textArea = document.getElementById('textArea');
const userColor1 = document.getElementById('color1');
const userColor2 = document.getElementById('color2');
const userDegree = document.getElementById('degree');
userDegree.value = 0;

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

// generate custom gradient depending on user inputs on form
const customBtn = document.getElementById('executeFormBtn');
customBtn.addEventListener('click', function(){
    generateGradient(userColor1.value, userColor2.value, userDegree.value);
    userDegree.value = 0;

});
