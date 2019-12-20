var inputsHTML = document.querySelectorAll("input")

for (var i=0; i < inputsHTML.length; i++) {
    inputsHTML[i].addEventListener('keyup', handleInput)
}

function handleInput() {
    if (event.key == 'Enter') {
        checkIfAllFilled()
    }
}

function checkIfAllFilled() {
    var inputStatusArray = 0

    for (var i=0; i < inputsHTML.length; i++) {
        if (inputsHTML[i].value == "") {
            inputStatusArray += 1
        }
    }

    if (inputStatusArray == 0) {
        inputsHTML.disabled = true;
    }
}