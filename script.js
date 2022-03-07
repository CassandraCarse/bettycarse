function toggle() {
  var x = document.getElementById('showHide');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function getImgID(param) {
  imgSrc = param.getAttribute('src');
  console.log(imgSrc);
  var imgID = imgSrc.slice(4, -4);
  console.log(imgID);
  dispayImageMod(imgSrc, imgID);
}

var img = document.createElement('img');

function dispayImageMod(imgSrc, imgID) {
  img.src = imgSrc;
  img.id = imgID;
  document.getElementById('modal-img').appendChild(img);
}

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('modal-img').removeChild();
}

// var slideIndex = 1000;
// showSlides();
// console.log(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide() {
//   showSlides();
// }

// function showSlides() {
//   var slides = document.getElementsByClassName('mySlides');
//   slides.style.display = 'block';
// }

function toggleGallery(gallery) {
  console.log(gallery);
  var all = document.getElementById('gallery-all');
  var corporate = document.getElementById('gallery-corporate');
  var lettering = document.getElementById('gallery-lettering');
  var home = document.getElementById('gallery-home');
  var galleryID = document.getElementById('galleryID');

  all.style.visibility = 'hidden';
  corporate.style.visibility = 'hidden';
  lettering.style.visibility = 'hidden';
  home.style.visibility = 'hidden';

  if (gallery === 'gallery-all') {
    all.style.visibility = 'visible';
  } else if (gallery === 'gallery-corporate') {
    console.log(gallery);
    corporate.style.visibility = 'visible';
  } else if (gallery === 'gallery-lettering') {
    console.log(gallery);
    lettering.style.visibility = 'visible';
  } else if (gallery === 'gallery-home') {
    console.log(gallery);
    home.style.visibility = 'visible';
  }
}
