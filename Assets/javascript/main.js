var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://idasg2-b34c.restdb.io/rest/contact",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63d376d73bc6b255ed0c4353",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
})