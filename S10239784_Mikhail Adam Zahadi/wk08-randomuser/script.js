// https://randomuser.me/api/
//@TODO use only the fetch web api 

let url = 'https://randomuser.me/api/';


//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/


//insert and modify to your needs
fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    console.log(data)
    console.log(data.results[0].email)
    $("#email").html(data.results[0].email);
    $("#fullname").html((data.results[0].name.first) +' ' + (data.results[0].name.last));
    $("#username").html(data.results[0].login.username);  
    $("#city").html(data.results[0].location.city); 
    $("#avatar").attr('src',data.results[0].picture.large); 
    console.log(data.results[0].picture.thumbnail)
  });