var inputHTMLs = document.getElementsByClassName("input")

for (var i = 0; i < inputHTMLs.length; i++) {
    var inputHTML = inputHTMLs[i];

    inputHTML.onkeypress = function (e) {
        if (e.keyCode == '13') { // only if enter clicked
            e.target.parentElement.innerHTML = e.target.value //replace input with asdf
        }
    }
}

var startButtonHtml = document.getElementById('start-button');

startButtonHtml.onclick = function(e) {
    var inputHTMLs = document.getElementsByClassName('input');

    if (inputHTMLs.length == 0) {
        startBingo();
    } else alert('fill up the grid first')
}
function startBingo() {
    var cells = document.getElementsByClassName('cell');
    console.log(cells);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        console.log(cell);
        cell.style.backgroundColor = "black";

        cell.addEventListener('click', function (e) {
            e.target.style.color = "red"
        });
    }
}