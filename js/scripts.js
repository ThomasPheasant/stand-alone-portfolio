// Randomize Header

// Store Images
var fabric0 = url("../img/fabric.png");
var fabric1 = url("../img/fabric1.png");
var fabric2 = url("../img/fabric2.png");

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
console.log(numRand);

// Show Images
$('body').addClass('bg' + numRand);










// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share: false,
});