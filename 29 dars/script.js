let header = document.querySelector('header');

function changecolor(){
  header.style.background = rgb();
  document.getElementById('colorcode').value = rgb();
}

function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}