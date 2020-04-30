function clickFunction(){
  var age = document.getElementById('age').value;
  if (age ==0) {
    alert('calcul impossible de diviser par zéro');
  } else {
    var result = age > 18;
    alert(result);
  }
}
