var student = {
  name : "",
  type : "student"
};

document.addEventListener('load',contentLoaded);

function contentLoaded() {
  document.getElementById("name").addEventListener("keyup",keyUp)
}
function keyUp(event){
  calculateNumericOutput();
}
function calculateNumericOutput(){
  student.name = document.getElementById("name").value;
  var totalName = 0;
  for(i=0;i<student.name.length;i++){
    totalName+=student.name.charCodeAt(i);
  }
  var output = "total numeric value is : " + totalName;
  document.getElementById("output").innerHtml = output;
}
