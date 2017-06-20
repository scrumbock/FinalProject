

var modal = document.getElementsByClassName('photo-modal')[0];
var img = document.getElementsByClassName('pic')[0];
var modalOne = document.getElementsByClassName('modal-content')[0];
var one = document.getElementsByClassName('one')[0];
var span = document.getElementsByClassName('close-modal')[0];

img.onclick = function(){
    modal.style.display = "block";
    modalOne.src = one;
}

span.onclick = function() {
  modal.style.display = "none";
}
