

var modal = document.getElementsByClassName('photo-modal')[0];
var img = document.getElementsByClassName('pic');
var modalOne = document.getElementsByClassName('modal-content')[0];
var one = document.getElementsByClassName('one')[0];
var span = document.getElementsByClassName('close-modal')[0];
var imgArray = ["/images/baby-elephant.JPG", "/images/beach-wheat.JPG", "/images/between-porches.JPG", "/images/blue-buoy.JPG", "/images/blue-canoe.JPG", "/images/boat-ripple.JPG", "/images/carter-sail.JPG", "/images/carter-snow.JPG", "/images/down-stairs.JPG", "/images/fence-grass.JPG", "/images/grass-boat.JPG", "/images/low-water.JPG"];

// img.onclick = function(){
//     modal.style.display = "block";
//     modalOne.src = one;
// }


for(let i=0;i<img.length;i++){
  img[i].addEventListener("click", function (){openModal(i)})
}

span.onclick = function() {
  modal.style.display = "none";
}


function openModal(x) {
  modal.style.display = "block";
  modalOne.style.backgroundImage = "url('" + imgArray[x] + "')";

}

console.log(imgArray[0])
