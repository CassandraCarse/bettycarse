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
  var young = document.getElementById('young');
  var marriage = document.getElementById('marriage');
  var family = document.getElementById('family');
  var children = document.getElementById('children');
  var grandchildren = document.getElementById('grandchildren');
  var work = document.getElementById('work');
  var friends = document.getElementById('friends');

  young.style.display = 'none';
  marriage.style.display = 'none';
  family.style.display = 'none';
  children.style.display = 'none';
  grandchildren.style.display = 'none';
  work.style.display = 'none';
  friends.style.display = 'none';

  if (gallery === 'young') {
    young.style.display = 'block';
  } else if (gallery === 'marriage') {
    marriage.style.display = 'block';
  } else if (gallery === 'family') {
    family.style.display = 'block';
  } else if (gallery === 'children') {
    children.style.display = 'block';
  } else if (gallery === 'grandchildren') {
    grandchildren.style.display = 'block';
  } else if (gallery === 'work') {
    work.style.display = 'block';
  } else if (gallery === 'friends') {
    friends.style.display = 'block';
  }
}
