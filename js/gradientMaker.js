import miniCSS from "./mini-css.min.js";

// create a new miniCSS instance and create a stylesheet
const css = new miniCSS().createStyleSheet();
// get 100 random light colors from the randomColor lib
const colors = randomColor({luminosity: 'light', count: 250});


// Generates a gradient by inputing two colors and the degree,
// adds the generated css to the stylesheet using miniCSS and displays
// the css inside the textbox
export const generateGradient = function(color1, color2, degree) {
    if(css.getRules().length > 0) {
        css.remove(0);      
    }
    const gradient = `background: ${color1}; /* fallback */\nbackground: linear-gradient(${degree}deg, ${color1}, ${color2});`;
    css.add('body', gradient);
    // display to textarea
    textArea.value = gradient.trim();
}


// Generate a random gradient using two random colors from randomColor lib
export const randomGenerate = function() {
    const startColor1 = randomFromArray(colors);
    const startColor2 = randomFromArray(colors);
    generateGradient(startColor1, startColor2, -45);
}


// helper function to get a random item from an array
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}