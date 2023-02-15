//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender ){
  this.name = name;
  this.specialty = specialty;
  this.power = power;
  this.hitpoints = hitpoints;
  this.level = level
  this.gender = gender;
  if (this.hitpoints <= 50){
    this.hitpointslevel = "Weak."
  }
  else if (this.hitpoints <= 70){
    this.hitpointslevel = "Strong."
  }
  else if (this.hitpoints <= 100){
    this.hitpointslevel = "Amazing."
  }

  this.Power = function(){
    return this.power * this.level - this.hitpoints
  }

  this.singerProfile = function(){
    return `${this.name} level ${this.level}, gender ${this.gender}, speciality ${this.specialty}. Power ${this.power}! Hitpoints: ${this.hitpointslevel}`
  }
  }
  

//Create the function objects momobae and minabae.
let momobae = new Singer("momobae","K-Pop",7,30,2,"M");
let minabae = new  Singer("minabae","K-Pop",67,89,17,"F");
let singers = [momobae,minabae]
for (let i = 0;i < singers.length; i++){
  console.log(singers[i].singerProfile())
}



//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);