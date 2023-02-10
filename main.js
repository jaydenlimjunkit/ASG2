


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

//search bar
function search() {

  let cards = document.querySelectorAll('.prod-card')
  // Locate the search input
  let search_query = document.getElementById("searching").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }


  }
}