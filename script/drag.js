 var dropbox = document.getElementById("drop_zone")
 
// init event handlers
dropbox.addEventListener("dragenter", dragEnter, false);
dropbox.addEventListener("dragexit", dragExit, false);
dropbox.addEventListener("dragover", dragOver, false);
dropbox.addEventListener("drop", drop, false);

function noopHandler(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}
