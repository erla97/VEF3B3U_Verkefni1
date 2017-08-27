document.write("Halló Heimur");

var word;
var number1;
var number2;

word = "Market";
number1 = 10;
number2 = 6;

var text = document.getElementById('text');
text.textContent = word;

var multiply = document.getElementById('total');
multiply.textContent = number1 * number2;

var shopping = ['apple', 'milk', 'cheese', 'bread', 'coffee'];

for (i = 0; i < shopping.length; i++) {
    document.getElementById("shopinglist").innerHTML += shopping[i] + "<br>";
}