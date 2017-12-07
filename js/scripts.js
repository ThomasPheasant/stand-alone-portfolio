// Randomize Header
// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
console.log(numRand);

// Show Images
$('header').addClass('bg' + numRand);




// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share: false,
    zoom: false,
});