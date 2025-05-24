
function BackgroundChange() {

  const element = document.getElementsByClassName('detailstophead') 
  const color1 = "#ffffff";
  const textColor = "#391400";

  for (let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = color1;
   element[i].style.color = textColor; 
  }
  
}    