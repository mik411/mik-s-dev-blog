//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63b62eb9969f06502871a9bd";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
    $("#loading-bar").hide()
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
      let studentID = $("#student-id").val();
      let studentClass = $("#student-class").val();
      let studentMentor = $("#student-mentor").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": contactName,
        "email": contactEmail,
        "message": contactMessage,
        "sid" : studentID,
        "class" : studentClass,
        "mentor" : studentMentor
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-71ef.restdb.io/rest/contact",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#add-contact").hide()
          $("#loading-bar").show()
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
        $("#loading-bar").hide()
        $("#add-contact").show()
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-71ef.restdb.io/rest/contact",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          //console.log(response[i]);
          //[METHOD 1]
          //let's run our loop and slowly append content
          //we can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].email + "</td>" +
            "<td>" + response[i].message + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */
  
          //[METHOD 2]
          //using our template literal method using backticks
          //take note that we can't use += for template literal strings
          //we use ${content} because -> content += content 
          //we want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td>${response[i].sid}</td>
          <td>${response[i].class}</td>
          <td>${response[i].mentor}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}' data-sid='${response[i].sid}' data-class='${response[i].class}' data-mentor='${response[i].mentor}' >Update</a></td></tr>`;
  
        }
  
        //[STEP 9]: Update our HTML content
        //let's dump the content into our table body
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
    //[STEP 10]: Create our update listener
    //here we tap onto our previous table when we click on update
    //this is a delegation feature of jquery
    //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      //update our update form values
      let contactName = $(this).data("name");
      let contactEmail = $(this).data("email");
      let contactMsg = $(this).data("msg");
      let studentID = $(this).data("sid");
      let studentClass = $(this).data("class");
      let studentMentor = $(this).data("mentor");
      let contactId = $(this).data("id");
      console.log($(this).data("msg"));
  
      //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
      $("#update-contact-name").val(contactName);
      $("#update-contact-email").val(contactEmail);
      $("#update-contact-msg").val(contactMsg);
      $("#update-student-id").val(studentID);
      $("#update-student-class").val(studentClass);
      $("#update-student-mentor").val(studentMentor);
      $("#update-contact-id").val(contactId);
      $("#update-contact-container").show();
  
    });//end contact-list listener for update function
  

    $("#contact-list").on("click", ".delete", function (e) {
      e.preventDefault();
      let contactId = $(this).data("id");
      console.log($(this).data("msg"));

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-71ef.restdb.io/rest/contact/${contactId}`,
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
      let studentID = $("#student-id").val();
      let studentClass = $("#student-class").val();
      let studentMentor = $("#student-mentor").val();

      $.ajax(settings).done(function (response) {
        console.log(response);
      });

      $("#add-contact-form").trigger("reset");

      getContacts();
    })

    //[STEP 12]: Here we load in our contact form data
    //Update form listener
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      //retrieve all my update form values
      let contactName = $("#update-contact-name").val();
      let contactEmail = $("#update-contact-email").val();
      let contactMsg = $("#update-contact-msg").val();
      let studentID = $("#update-student-id").val();
      let studentClass = $("#update-student-class").val();
      let studentMentor = $("#update-student-mentor").val();
      let contactId = $("#update-contact-id").val();
  
      console.log($("#update-contact-msg").val());
      console.log(contactMsg);
  
      //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
      updateForm(contactId, contactName, contactEmail, contactMsg, studentID, studentClass, studentMentor);
    });//end updatecontactform listener
  
    //[STEP 13]: function that makes an AJAX call and process it 
    //UPDATE Based on the ID chosen
    function updateForm(id, contactName, contactEmail, contactMsg, studentID, studentClass, studentMentor) {
      //@TODO create validation methods for id etc. 
  
      var jsondata = {"name": contactName, "email": contactEmail, "message": contactMsg, "sid": studentID, "class": studentClass,"mentor": studentMentor };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-71ef.restdb.io/rest/contact/${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      //[STEP 13a]: send our AJAX request and hide the update contact form
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getContacts();
      });
    }//end updateform function
  
  })
  