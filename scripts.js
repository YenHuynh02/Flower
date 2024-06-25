var lip = document.getElementById("lip");
var content = document.getElementById("content");
var mode = document.getElementById("mode");
var petal = ["petal1", "petal2", "petal3", "petal4"];
var cir = ["cir1", "cir2", "cir3", "cir4", "cir5"];

function displayDark() {
    if (mode.classList.contains("fa-sun")) {
        setTimeout(function() {
            mode.classList.remove("fa-sun");
            mode.classList.add("fa-moon");
            content.style.background = "linear-gradient(to top, #757abf 0%,#8583be 60%,#eab0d1 100%)";
            lip.style.background = "linear-gradient(to top left, yellow, white)";
            for (let i = 0; i < cir.length; i++) {
                document.getElementById(cir[i]).style.background = "yellow";
            }

            for (let i = 0; i < petal.length; i++) {
                document.getElementById(petal[i]).style.background = "linear-gradient(rgb(255, 57, 90), white)"; 
            }
        }, 50);
        
    }

    else {
        setTimeout(function() {
            mode.classList.remove("fa-moon");
            mode.classList.add("fa-sun");
            content.style.background = "linear-gradient(to bottom, #020111 10%,#3a3a52 100%)";
            lip.style.background = "cyan";
            for (let i = 0; i < cir.length; i++) {
                document.getElementById(cir[i]).style.background = "cyan";
            }

            for (let i = 0; i < petal.length; i++) {
                document.getElementById(petal[i]).style.background = "linear-gradient(yellow, white 80%)"; 
            }
        }, 50);
    }
}
