function showText() {
   document.getElementById("hiddenText").style.display = "block";
   document.getElementById("clickButton").style.display = "none";
}

function sayHello() {
   const name = document.getElementById("nameInput").value;
   alert("Hello, " + name + "!");
   console.log("Hey ho!");
}