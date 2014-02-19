 var dropbox = document.getElementById("drop_zone")
 
// init event handlers
dropbox.addEventListener("dragenter", dragEnter, false);
dropbox.addEventListener("dragexit", dragExit, false);
dropbox.addEventListener("dragover", dragOver, false);
dropbox.addEventListener("drop", drop, false);

function dragExit(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function dragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
}

function Drop(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	calculate(evt);
}


