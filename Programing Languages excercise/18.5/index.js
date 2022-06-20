// create array of images paths, further "images"

let images = [
    "./assets/1.jpeg",
    "./assets/2.jpeg",
    "./assets/3.jpeg",
    "./assets/4.jpeg",
    "./assets/5.jpeg",
    "./assets/6.jpeg",
]

// create a global variable "currentImage" and assign to it 0

let currentImage = 0;

// select with document.querySelector element with class "image"

let image = document.querySelector('.image');

// select with document.getElementById element with id "next-button" and element with id "prev-button"  

let nextButton = document.querySelector('#next-button')
let prevButton = document.querySelector('#prev-button')

// create function to go to next image: 
// if statement: check if current image equals to "images" length - 1 and, if so, assign to "currentImage" value of -1
// set image src to the "images[++currentImage]"

function nextImage (){
    if (currentImage ===(images.length - 1)){
        currentImage = -1;
    }
    image.src = images [++currentImage];
    console.log(currentImage)
}

// create function to go to prev image: 
// if statement: check if current image equals to 0 and, if so, assign to "currentImage value" of length of "images"
// set image src to the "images[--currentImage]"

function prevImage() {
    if (currentImage === 0) {
        currentImage = images.length;
    }
    image.src = images[--currentImage];
    console.log(currentImage)
}

// add event listener to the next button for click event and to it the corresponding function 
nextButton.addEventListener('click', nextImage);

// add event listener to the prev button for click event and to it the corresponding function 
prevButton.addEventListener('click', prevImage);

