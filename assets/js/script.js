function clickFunction(){
  var age = document.getElementById('age').value;
  if (age <=17 && age >0) {
    alert('vous etes mineur');
  } else if (age >=18 && age <120) {
    alert('vous etes majeur');
  }
  else {
    alert('mal saisi votre age');
  }
}
//mettre des comparateurs else if avec des AND &&
