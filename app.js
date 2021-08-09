function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function max(max){
    var x = document.querySelectorAll(".box");
    if(x==2){
        alert("two");
    }
}
max(max);

function func() {
    alert("Your burger is cooking...");
    document.getElementById("btn").innerHTML = "Cooking";
}