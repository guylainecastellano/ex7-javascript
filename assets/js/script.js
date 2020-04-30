function clickFunction(){
  var age = document.getElementById('age').value;
  if (age ==0) {
    alert('vous etes mineur');
  } else {
    var result = age > 18;
    alert('vous etes majeur');
  }
}
