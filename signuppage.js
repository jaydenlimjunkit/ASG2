
$(document).ready(function () {

    const APIKEY = "63d376d73bc6b255ed0c4353";
   // getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  

    $(".contact-submit").on("click", function (e) {

      e.preventDefault();

      let contactName = $(".contact-name").val();
      let contactEmail = $(".contact-email").val();
      let contactNumber = parseInt($(".contact-number").val());
      let password = $(".password").val();
  

      let jsondata = {
        "Name": contactName,
        "Email": contactEmail,
        "Number": contactNumber,
        "Password": password
      };
      

      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-b34c.restdb.io/rest/contact",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          console.log(jsondata)

          $("#contact-submit").prop( "disabled", true);

          $("#add-contact-form").trigger("reset");
        }
      }


      $.ajax(settings).done(function (response) {
        console.log(jsondata)
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        

        $("#add-update-msg").show().fadeOut(3000);
  
        window.location.assign("cart.html")

      //  getContacts();
      });
    });
  
  



  
  
    
  
   
  
    
  
  
  })