


function myBubbles() {

  document.getElementById("myBubbles").innerHTML = "<iframe class=\"responsive-iframe\" src=\"bubbles.html\" ></iframe>";
  document.getElementById("myBubbles").style.visibility = "visible";
  document.getElementById("myCarousel").style.visibility = "hidden";
  document.getElementById("myCalculus").style.visibility = "hidden";


}


function myCarousel() {

  document.getElementById("myCarousel").innerHTML = "<iframe class=\"responsive-iframe\" src=\"carousel.html\" ></iframe>";
  document.getElementById("myCarousel").style.visibility = "visible";
  document.getElementById("myBubbles").style.visibility = "hidden";
  document.getElementById("myCalculus").style.visibility = "hidden";

}

function myCalculus() {

  document.getElementById("myCalculus").innerHTML = "<iframe class=\"responsive-iframe\" src=\"myCalculus.html\" ></iframe>";
  document.getElementById("myCalculus").style.visibility = "visible";
  
  document.getElementById("myBubbles").style.visibility = "hidden";
  document.getElementById("myCarousel").style.visibility = "hidden";

  
}


function my3D() {


  var P1;
  var P2;
  var P3;
  var Q1;
  var Q2;
  var Q3;

  P1 = parseInt(document.getElementById("P1").value);
  P2 = parseInt(document.getElementById("P2").value);
  P3 = parseInt(document.getElementById("P3").value);
  Q1 = parseInt(document.getElementById("Q1").value);
  Q2 = parseInt(document.getElementById("Q2").value);
  Q3 = parseInt(document.getElementById("Q3").value);

  //var a = Q1 - P1;
  //var b = Q2 - P2;
  //var c = Q3 - P3;

  var a = Math.pow(Q1 - P1, 2);
  var b = Math.pow(Q2 - P2, 2);
  var c = Math.pow(Q3 - P3, 2);


  var total = Math.sqrt(a + b + c);
  //var total = P1;

  document.getElementById("total").innerHTML = "The distance between the points PQ = " + total;


  //document.getElementById("a").innerHTML = a; Support elements for testing data values
  //document.getElementById("b").innerHTML = b;
  //document.getElementById("c").innerHTML = c;


}


/*function myNumber() {


  var P1;
  let P2 = 0.0;
  let P3 = 0.0;
  let Q1 = 0.0;
  let Q2 = 0.0;
  let Q3 = 0.0;


  P1 = parseInt(document.getElementById("P1").value);


  var total = Math.sqrt(P1);

  document.getElementById("total").innerHTML = total;


}*/

/*
function add() {
  var num1, num2, sum;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  sum = num1 + num2;
  document.getElementById("answer").value = sum;
}
*/
