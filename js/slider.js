// alert("hello");

//get all the links of the images
var allImages = document.querySelectorAll ("#gallery img");

// console.log(allImages);

var imageSources = [];

for (var i = 0; i<allImages.length; i++) {
	imageSources.push(allImages[i].src); 
}

// console.log(imageSources);

//delete all the images on the page
var galleryContainer = document.querySelector("#gallery");

galleryContainer.innerHTML = "";

//create a slider container
var slider = document.createElement ("div");

//attach an ID to the container
slider.id = "slider";

//add the slider to the browser
galleryContainer.appendChild(slider);

//create come buttons
var next = document.createElement("button");
var prev = document.createElement("button");

next.id = "next";
prev.id = "prev";

//add text to the buttons
next.innerHTML = "Next";
prev.innerHTML = "Previous";

//add buttons to the slider
slider.appendChild(next);
slider.appendChild(prev);

//show the first image to the slider
slider.style.backgroundImage = "url("+ imageSources[0] + ")";

//listen for clicks on the buttons
next.onclick = changePicture;
prev.onclick = changePicture;

function changePicture() {
	//which image is in use?
	var imageInUse = slider.style.backgroundImage;

	//extract the url
	var bits = imageInUse.split('"');

	console.log(bits);
}


