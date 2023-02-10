
$(document).ready(function () {

    const APIKEY = "63d376d73bc6b255ed0c4353";
   // getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  

    $(".contact-submit").on("click", function (e) {

      e.preventDefault();


      let contactEmail = $(".contact-email").val();

      let password = $(".password").val();
  

      let jsondata = {
        "Email": contactEmail,
        "Password": password
      };
      

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

