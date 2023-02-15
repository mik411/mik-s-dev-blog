$(document).ready(function() {           
    //@params settings           
    var params = {                
       // //YYYY-MM-DD[T]HH:mm:ss (SGT) 
       "date_time": "2016-06-27T23:00:00", 
       "date": "2016-06-27" //YYYY-MM-DD            
    };            
 
    $.ajax({               
        type: "GET",                
       dataType: 'json',                
       contentType: "text/plain",                
       url: "https://api.data.gov.sg/v1/environment/psi",                
       headers: {                  

       },             
       
 data: { "date_time": "2016-06-27T23:00:00",
 "date":"2016-06-27" },   
          
  //     crossDomain: true,               
  //@data returning JSON data                
 success: function(data) { 
   console.log(data);
     console.log("API status: " + data.api_info.status);     
     var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;                    
 var content = "";                   
  $.each(reading_twenty_four, function(key, obj) {                       
  console.log(key + ": " + obj);                        
 content += key + ": " + obj + "<br/>";
 $("#psi-twenty-four-hourly").html(content);
});   
 var reading_hourly = data.items[0].readings.no2_one_hour_max;                    
 var content2 = "";                   
  $.each(reading_hourly, function(key, obj) {                       
  console.log(key + ": " + obj);                        
 content2 += key + ": " + obj + "<br/>";
 $("#pm10-twenty-four-hourly").html(content2);  
  });                
               
          
 
 //store info as local storage                  
 localStorage.setItem("three_hourly",JSON.stringify(reading_twenty_four));                   
 }
 });
 }); 
 