
$(document).ready(function () {

    const APIKEY = "63d376d73bc6b255ed0c4353";
   // getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  

    $(".contact-submit").on("click", function (e) {

      e.preventDefault();


      let contactEmail = $(".contact-email").val();

      let password = $(".password").val();
      

  

        let settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://idasg2-b34c.restdb.io/rest/contact?q={"Email":"${contactEmail}"}`,
          "method": "GET", 
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
        }
    
        
        $.ajax(settings).done(function (response) {

    
            
            if (response[0].Password == password){
              alert("Logged in")
            }
            window.location.assign("cart.html");

        });
      

    });
     
 

  })


  //dropdown function for review page
  $(function() {
    var list = $('.js-dropdown-list');
    var link = $('.js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      var text = $(this).html();
      var icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
      if (text === '* Reset') {
        link.html('Select one option'+icon);
      }
    });
  });

const afterreview = document.getElementById("afterreview")

try{
  afterreview.onclick = function(){
    alert("You Have SuccessfulLy Submitted a Review")
    location.reload();
  }
}
catch{}