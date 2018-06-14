var text = ["I've also graduated from the #1 public university in the world.", "I've also paddleboarded with sharks.", "I've also pitched a startup idea to VC's in SF.", "I've also DJ-ed for a Fortune 500 company.", "I've also attained Yelp Elite status.", "I've also accidentally applied to art school when I was 8 years old."];
var counter = 1;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);
elem.innerHTML = text[0];

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
