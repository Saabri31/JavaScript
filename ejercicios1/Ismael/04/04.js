let table

window.onload = function () {
    table = document.getElementById('tabla')
    table.style.visibility = 'hidden'
    
    let num
    do {
        num = prompt("Introduce un numero")
    } while (num === null || isNaN(num) || num === "")

    createTable(num)
}

function createTable(num) {
    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow(i - 1)
        row.insertCell(0).innerHTML = num
        row.insertCell(1).innerHTML = 'X'
        row.insertCell(2).innerHTML = i
        row.insertCell(3).innerHTML = num * i
    }
    table.style.visibility = 'visible'
}