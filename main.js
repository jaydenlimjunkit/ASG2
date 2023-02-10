
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

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle ("sticky", this.window.scrollY > 0)
})
  
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navmenu.classList.toggle('open')
}