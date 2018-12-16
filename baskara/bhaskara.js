var a = document.querySelector("#a").nodeValue;
var b = document.querySelector("#b").nodeValue;
var c = document.querySelector("#c").nodeValue;
// var b = -5;
// var c = 6;

document.querySelector(".do").addEventListener("click", function () {
    console.log("clicou")
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;
    var c = document.querySelector("#c").value;
    
    var d = Math.sqrt(b * b - a * 4 * c);
    
    var x1 = (-b + d) / 2 * a;
    var x2 = (-b - d) / 2 * a;
    
    document.querySelector("#result").textContent = "x1 = " + x1 + " e x2 = " + x2;
});