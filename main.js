var text = ["I've also graduated from the #1 public university in the world.", "I've also paddleboarded with sharks.", "I've also pitched a startup idea to VC's in SF.", "I've also DJ-ed for a Fortune 500 company.", "I've also sold my soul and attained Yelp Elite status.", "I've also designed for Innovative Design, Cal's premier creative agency.", "I've also gotten really good at baking salmon (375 degrees for 15 mins)."];
var counter = 1;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);
elem.innerHTML = text[0];

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

function navResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

    // opens nav
    document.getElementById("myNav").style.height = "100%"; 
}


function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
