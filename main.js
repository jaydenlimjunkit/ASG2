
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
  

      let jsondata = {
        "Name": contactName,
        "Email": contactEmail,
        "Number": contactNumber
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
  

      //  getContacts();
      });
    });
  
  

    function getContacts(limit = 10, all = true) {
  

      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-b34c.restdb.io/rest/contact",
        "method": "GET", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;
  
        }

        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
   
  
    
  
   
  
  })

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

const header = doccument.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle ("sticky", this.window.scrollY > 0)
})
  
