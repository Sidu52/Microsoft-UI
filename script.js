<<<<<<< HEAD
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dropdownbutton = document.querySelector('.dropbutoon');
const button = document.querySelector('.back-to-top');

let slideIndex = 1;
var temp = false;
showSlides()
next.onclick = () => {
  if (temp) {
    // add the contenets
    heading.innerText = "Microsoft 365";
    paragraph.innerText = "Everything you need to achieve more in less time";
    but.innerText = "For one Person";
    ancor.innerText = "For up to six people";
    heading.style.color="black";
    paragraph.style.color="black";
    temp=false;
  }
  else{
    heading.innerText = "Pc Game Pass";
    paragraph.innerText = "Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.";
    but.innerText = "join now";
    ancor.innerText = "";
    if(window.innerWidth>800){
      heading.style.color="white";
      paragraph.style.color="white";
    }
    else{
      heading.style.color="black";
      paragraph.style.color="black";
    }
    temp=true;
  }
  showSlides(slideIndex += 1)
}
prev.onclick = () => {
  if (temp) {
    // add the contenets
    heading.innerText = "Microsoft 365";
    paragraph.innerText = "Everything you need to achieve more in less time";
    but.innerText = "For one Person";
    ancor.innerText = "For up to six people";
    heading.style.color="black";
    paragraph.style.color="black";
    temp=false;
  }
  else{
    heading.innerText = "Pc Game Pass";
    paragraph.innerText = "Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.";
    but.innerText = "join now";
    ancor.innerText = "";
    if(window.innerWidth>800){
      heading.style.color="white";
      paragraph.style.color="white";
    }
    else{
      heading.style.color="black";
      paragraph.style.color="black";
    }
    
    temp=true;
  }
  showSlides(slideIndex -= 1)
}
// function contenet(temp) {
  
// }
/* <h1 id="addheading">Microsoft 365</h1>
        <p id="addpara">
          Everything you need to achieve more in less time
        </p>
        <button id="addbutton" class="btn">For one person</button>
        <a href="#">For up to six people<i class="uil uil-angle-right-b"></i>></a> */

//  create slideshow image test
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const but = document.createElement('button');
const ancor = document.createElement('a');
const icon = document.createElement('i');

// add class img class
heading.classList.add('addheading');
paragraph.classList.add('addpara');
but.classList.add('addbutton', 'btn');
ancor.classList.add('link')
ancor.setAttribute('href', "#");
icon.classList.add('uil','uil-angle-right-b');

// add the contenets
heading.innerText = "Microsoft 365";
paragraph.innerText = "Everything you need to achieve more in less time";
but.innerText = "For one Person";
ancor.innerText = `For up to six people`;

// make parents realtion

document.getElementById('slideshowimgtext').appendChild(heading)
document.getElementById('slideshowimgtext').appendChild(paragraph)
document.getElementById('slideshowimgtext').appendChild(but)
document.getElementById('slideshowimgtext').appendChild(ancor)
ancor.appendChild(icon);


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslide")
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}
// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
dropdownbutton.addEventListener('click', () => {
  let dropbox = document.querySelector('.dropdownbutton');
  if (dropbox.style.display == "flex") {
    dropbox.style.display = "none";
  }
  else {
    dropbox.style.display = "flex";
  }
})
document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
=======
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dropdownbutton = document.querySelector('.dropbutoon');
const button = document.querySelector('.back-to-top');

let slideIndex = 1;
var temp = false;
showSlides()
next.onclick = () => {
  if (temp) {
    // add the contenets
    heading.innerText = "Microsoft 365";
    paragraph.innerText = "Everything you need to achieve more in less time";
    but.innerText = "For one Person";
    ancor.innerText = "For up to six people";
    heading.style.color="black";
    paragraph.style.color="black";
    temp=false;
  }
  else{
    heading.innerText = "Pc Game Pass";
    paragraph.innerText = "Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.";
    but.innerText = "join now";
    ancor.innerText = "";
    if(window.innerWidth>800){
      heading.style.color="white";
      paragraph.style.color="white";
    }
    else{
      heading.style.color="black";
      paragraph.style.color="black";
    }
    temp=true;
  }
  showSlides(slideIndex += 1)
}
prev.onclick = () => {
  if (temp) {
    // add the contenets
    heading.innerText = "Microsoft 365";
    paragraph.innerText = "Everything you need to achieve more in less time";
    but.innerText = "For one Person";
    ancor.innerText = "For up to six people";
    heading.style.color="black";
    paragraph.style.color="black";
    temp=false;
  }
  else{
    heading.innerText = "Pc Game Pass";
    paragraph.innerText = "Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.";
    but.innerText = "join now";
    ancor.innerText = "";
    if(window.innerWidth>800){
      heading.style.color="white";
      paragraph.style.color="white";
    }
    else{
      heading.style.color="black";
      paragraph.style.color="black";
    }
    
    temp=true;
  }
  showSlides(slideIndex -= 1)
}
// function contenet(temp) {
  
// }
/* <h1 id="addheading">Microsoft 365</h1>
        <p id="addpara">
          Everything you need to achieve more in less time
        </p>
        <button id="addbutton" class="btn">For one person</button>
        <a href="#">For up to six people<i class="uil uil-angle-right-b"></i>></a> */

//  create slideshow image test
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const but = document.createElement('button');
const ancor = document.createElement('a');
const icon = document.createElement('i');

// add class img class
heading.classList.add('addheading');
paragraph.classList.add('addpara');
but.classList.add('addbutton', 'btn');
ancor.classList.add('link')
ancor.setAttribute('href', "#");
icon.classList.add('uil','uil-angle-right-b');

// add the contenets
heading.innerText = "Microsoft 365";
paragraph.innerText = "Everything you need to achieve more in less time";
but.innerText = "For one Person";
ancor.innerText = `For up to six people`;

// make parents realtion

document.getElementById('slideshowimgtext').appendChild(heading)
document.getElementById('slideshowimgtext').appendChild(paragraph)
document.getElementById('slideshowimgtext').appendChild(but)
document.getElementById('slideshowimgtext').appendChild(ancor)
ancor.appendChild(icon);


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslide")
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}
// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
dropdownbutton.addEventListener('click', () => {
  let dropbox = document.querySelector('.dropdownbutton');
  if (dropbox.style.display == "flex") {
    dropbox.style.display = "none";
  }
  else {
    dropbox.style.display = "flex";
  }
})
document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
>>>>>>> 2ef86dc7068b6258b9c57bf67d8d303d6ee16ed0
