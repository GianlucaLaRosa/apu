let count = 1;

function createRectangle(event) {
  let x1 = event.clientX; //mouse position x axis
  let y1 = event.clientY; //mouse position y axis
  let x2 = Math.floor(Math.random() * 351 + 50); //div random width 50px/400px
  let y2 = Math.floor(Math.random() * 351 + 50); //div random height 50px/400px
  const COLORS = ["red", "yellow", "green", "purple", "brown", "black"];
  let randColorNumber = Math.floor(Math.random() * 5); //random index for COLORS array
  let rect = document.createElement("div");
  rect.setAttribute("id", count);
  rect.onclick = function () {
    //self remove
    this.remove();
  };
  if (+event.srcElement.id !== 0) {
    //if the pointer clicks on a div, it doesn't create a new div
    return;
  }
  let content = document.createTextNode(count);
  rect.appendChild(content);
  let currentRect = document.getElementById(count);
  document.body.insertBefore(rect, currentRect);
  document.getElementById(
    count
  ).style.cssText = `z-index:${count};width:${x2}px; height:${y2}px;background-color:${COLORS[randColorNumber]};top:${y1}px;left:${x1}px`;
  count++; //increase the counter to give every click a different id, printed number and z-index
}

window.addEventListener("click", createRectangle);
