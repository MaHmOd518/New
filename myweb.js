var icon = document.getElementById('icon');
var menu = document.getElementById('menu');
var form = document.getElementById('form');
var text = document.getElementById('text');
var but = document.getElementById('but');
var re = document.getElementById('re');
var reset = document.getElementById('reset');

icon.onclick = function() {
  icon.classList.toggle('change');
  menu.classList.toggle('move');
};

var text0 = '';
var color = '';

but.onclick = function myclick() {
  if (re.value != '') {
    text0 += form.elements[0].value;
    text.innerHTML = text0;
    color += form.elements[1].value;
    if (color == '#ffffff') {
      text.style.color = color;
      text.style.background = 'black';
    }
    else {
      text.style.color = color;
      text.style.background = 'white';
    }
  text0 = '';
  color = '';
  }
};
reset.onclick = function reset() {
  text.innerHTML = 'Your text ...';
  text.style.color = 'gray';
  text.style.background = 'white';
  re.value = '';
};
