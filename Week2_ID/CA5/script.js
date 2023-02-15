
    fetch(url)
    .then(response => {return response.json()})
    .then(loadedQuestions => console.log(loadedQuestions.results));
    /*function getContacts(limit = 10, all = true) {
      
        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET", //[cher] we will use GET to retrieve info
          "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
          },
        }
    
        //[STEP 8]: Make our AJAX calls
        //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
        //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
        $.ajax(settings).done(function (response) {
          
          let content = "";
    
          for (var i = 0; i < response.length && i < limit; i++) {
    
    
            //[METHOD 2]
            //using our template literal method using backticks
            //take note that we can't use += for template literal strings
            //we use ${content} because -> content += content 
            //we want to add on previous content at the same time
            content = `${content}<tr id='${response[i]._id}'><td>${response[i].question}</td>
            <td>${response[i].correct_answer}</td>
            <td>${response[i].incorrect_answer}</td>
            <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-question='${response[i].question}' data-correct-answer='${response[i].correct_answer}' data-incoreect-answer='${response[i].incorrect_answer}'  >Update</a></td></tr>`;
            console.log(content);
          }
    
        });
    
      }*/
    
      getContacts();
    
    
      })
    