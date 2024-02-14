// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
  myName.innerHTML = "David";
  myHobby.innerHTML = "play basketball";
  myLocation.innerHTML = "NYC";
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function() {
  image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/248px-The_Scream.jpg";
});




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function() {
  image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fitting_of_the_Coiled_Corset_%28cropped%29.jpg/234px-Fitting_of_the_Coiled_Corset_%28cropped%29.jpg";
});

let nameContent;// = document.querySelector(".name").innerHTML;
// BONUS
// 7. Try using different event types for your buttons.
image1Button.addEventListener('mouseover', function() {
  nameContent = document.querySelector(".name").innerHTML;
  myName.innerHTML = "mouse is over button 1";
});
image1Button.addEventListener('mouseout', function() {
  myName.innerHTML = nameContent;
});