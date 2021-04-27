function ChangeColor(){
  let color = document.getElementById("ColorText").value;
  document.body.style.backgroundColor = color;
}
function ChooseColor(){
  let color = document.getElementById("InputColor").value;
  document.body.style.backgroundColor = color;
  document.getElementById("ColorText").value=color;
}