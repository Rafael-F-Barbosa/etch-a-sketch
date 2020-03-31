// Events Listeners
const buttonCreate = document.querySelector(".createButton");
buttonCreate.addEventListener('click', changeNumber);

const numberPassed = document.querySelector("#numberBoxes");
numberPassed.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        changeNumber();
    }
});

const button = document.querySelector('button');
button.addEventListener('click', clear);

changeNumber();

// apply the random color
function putColor() {
    this.style.backgroundColor = randomColor()
}

function enterPressed() {
    console.log(e.key);

}

// generates a random color
function randomColor() {
    const arrayHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let colorString = ""

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor((Math.random() * 16))
        colorString += arrayHex[randomNumber]
    }

    return ("#" + colorString);
}

// Creation of the boxes

function boxCreation(lin, col) {
    const container = document.querySelector('#container')
    for (i = 0; i < lin; i++) {
        let i, j;

        const newLine = document.createElement('div');
        newLine.classList.add('lines');
        container.appendChild(newLine);

        for (let j = 0; j < col; j++) {
            const element = document.createElement('div');
            element.setAttribute('id', 'element')
            newLine.appendChild(element);
        }

    }
}

function eraseBoxes() {
    const container = document.querySelector('#container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Changing the number of boxes
function changeNumber() {
    console.log('oi');

    eraseBoxes()

    const numberOfBoxes = document.querySelector("#numberBoxes")
    boxCreation(numberOfBoxes.value, numberOfBoxes.value)

    // Create the event listener for all of the boxes
    let boxes = document.querySelectorAll('#element');
    boxes.forEach(key => key.addEventListener('mouseover', putColor));
}

// Give the boxes the original color
function clear() {
    const boxes = document.querySelectorAll('#element');
    boxes.forEach(key => key.style.backgroundColor = '#AAAAAA');
}






