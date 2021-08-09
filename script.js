
function insert(num){
  document.getElementById("input").value += num;
    
}
function ClearInput(){
  document.getElementById("input").value = "";
}

function compter(){
document.getElementById("input").value = eval(document.getElementById("input").value);
}

function deleteCar(){
  document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
}