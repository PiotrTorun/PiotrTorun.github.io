function stworzParagraf() {
  var para = document.createElement('p');
  para.textContent = 'Kliknąales przycisk!';
  document.body.appendChild(para);
}

var przyciski = document.querySelectorAll('button');

for (var i = 0; i < przyciski.length ; i++) {
  przyciski[i].addEventListener('click', stworzParagraf);
}
