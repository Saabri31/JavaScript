let ps

window.onload = function () {
  ps = Array.from(document.getElementsByTagName('p'))
  for (let i = 0; i < ps.length; i++) {
    ps[i].onmouseenter = enter
    ps[i].onmouseleave = leave
  }
}

function enter(evt) {
  color(ps.indexOf(evt.target) % 2, 'white')
}

function leave(evt) {
  color(ps.indexOf(evt.target) % 2, 'grey')
}

function color(i, color) {
  for (i; i < ps.length; i += 2)
    ps[i].style.backgroundColor = color
}