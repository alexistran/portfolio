function navResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }

    // opens nav
    document.getElementById("myNav").style.height = "100%"; 
}


function closeNav() {
	var x = document.getElementById("myTopnav");
	x.className = "topnav";
    document.getElementById("myNav").style.height = "0%";
}