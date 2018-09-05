
function preLoad() {
  a1 = new Image; a1.src = 'tshirt.png';  
  a2 = new Image; a2.src = 'tshirtblack.png';

}
function im(image) {
  document.getElementById(image[0]).src = eval(image + ".src")
}
    
       
    
function additem() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function subtractitem() {
   var value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : ' ';
   value--;
   document.getElementById('number').value = value;
}
    
