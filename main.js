
  function searchbutton (){
    let input = document.getElementById('searchright').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('product');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
  
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[1].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';