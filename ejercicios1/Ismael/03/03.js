let ps

window.onload = function() {
    let radios = document.getElementsByName('txtRadio')
    ps = document.body.getElementsByTagName('p')

    for (let i = 0; i < radios.length; i++)
        radios[i].onclick = changeAlign
}

function changeAlign(evt) {
    for (let i = 0; i < ps.length; i++)
        ps[i].style.textAlign = evt.target.value
}