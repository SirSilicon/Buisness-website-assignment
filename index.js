function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
/*let increment = 1;
function symbolCounter() {
  while (true){
    sleep(70);
    increment++
    if (increment < 10){
      document.getElementById("symbol").innerHTML = ">&#000" + increment;
      console.log(increment);
    }else{
    increment = 0
    }
  }
}*/
