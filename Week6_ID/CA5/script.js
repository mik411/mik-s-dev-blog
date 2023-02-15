let elements = document.getElementsByClassName('hot');

for (let i =0;i<elements.length;i++){
let input = elements[i]
input.className = 'cool';
console.log(input.className);
if (elements.length >= 3){
  console.log('true');
}
}
let third_el = document.getElementById('three')
third_el.className = 'cool'
console.log(third_el.className);


let li_element = document.getElementsByTagName('li');

for(let i = 0; i < li_element.length; i++){
  if(li_element[i].className == 'hot'){
    console.log('True');
    li_element[i].className = 'cool';
    console.log(li_element[i].className);
  }
}