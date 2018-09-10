
function preLoad() {
  a1 = new Image; a1.src = './media/tshirt.png';  
  a2 = new Image; a2.src = './media/tshirtblack.png';

}
function im(image) {
  document.getElementById(image[0]).src = eval(image + ".src")
}
      
function additem() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value + 1;
    document.getElementById('number').value = value;
}
function subtractitem() {
   var value = parseInt(document.getElementById('number').value, 10);
   value = isNaN(value) ? 0 : value;
   value < 1 ? value = 1 : ' ';
   value = value - 1;
   document.getElementById('number').value = value;
}

function quantityCheck(){

  var quantity= document.getElementById('number').value;

  if (quantity > 0){
    return true;
  }else{
   alert("Quantity of the product has to be at least 1");
    return false;
    
  }
}

//used the example from the lecture 
function clearErrors(){
      var allErrors = document.getElementsByClassName('error');
      for (var i = 0; i < allErrors.length; i++) {
        allErrors[i].innerHTML = "";
      }
      var allInputs = document.getElementsByTagName('input');
      for (i = 0; i < allInputs.length; i++) {
        allInputs[i].style.removeProperty("background-color");
      }
}

function formValidate(){


  clearErrors();
  var countErrors =0;

  if(!quantityCheck()) 
  countErrors++;

  console.log(countErrors);
  return (countErrors==0);


}



