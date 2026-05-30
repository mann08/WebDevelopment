function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";

}
function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}
function warning(){
    document.getElementById("bulb1").style.backgroundColor = "red";
}
function Success(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}
function Secondary(){
    document.getElementById("bulb1").style.backgroundColor = "blue";
}

document.getElementById("warning").addEventListener("click", warning());
document.getElementById("Success").addEventListener("click", Success());
document.getElementById("Secondary").addEventListener("click", Secondary());

document
.getElementById("bulb1Color")
.addEventListener("change", ChangeBulbColor);

function ChangeBulbColor(){
   const color = document.getElementById("bulb1Color").value;
    document.getElementById("bulb1").style.backgroundColor = color;
}