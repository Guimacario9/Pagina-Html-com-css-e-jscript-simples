function Expandir(img,id) {
var div = document.getElementById(id);
if(div.style.display == 'none') {
div.style.display = 'block';
img.src = "img/RemoveItem_16x16.png";
} else {
div.style.display = 'none';
img.src = "img/Add_16x16.png";
}
}