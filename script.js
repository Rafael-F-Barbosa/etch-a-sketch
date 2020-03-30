

const container = document.querySelector("#container")


// Creation of the boxes
let i, j;
for(i=0; i <16; i++)
{
    const newLine = document.createElement('div');
    newLine.classList.add('lines');
    container.appendChild(newLine);

    for (let j = 0; j < 16; j++) {
        const element = document.createElement('div');
        element.classList.add('element');
        newLine.appendChild(element);
    }
    
}

function putColor(){
    this.style.backgroundColor = randomColor()
}

const boxes = document.querySelectorAll('.element');
boxes.forEach(key => key.addEventListener('mouseover' , putColor));

function clear()
{
    const boxes = document.querySelectorAll('.element');
    boxes.forEach(key => key.style.backgroundColor = '#AAAAAA');
}
const button = document.querySelector('button');
button.addEventListener('click', clear);

function randomColor()
{
    const arrayHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let colorString = ""

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor((Math.random()*16))
        colorString += arrayHex[randomNumber]
    }

    return ("#"+ colorString);
}