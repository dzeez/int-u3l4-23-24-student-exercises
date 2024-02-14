let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 David";
    // img.src = "https://media4.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/248px-The_Scream.jpg";
});


