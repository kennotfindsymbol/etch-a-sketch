const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');
const cleanButton = document.getElementById('clean');

resetButton.addEventListener('click', () => {
    let size = 16;
    while (true) {
        size = +prompt('input a size between 16 and 100')
        if (16 <= size && size <= 100) {
            break;
        }
    }
    resetDrawboard(size);
});

clean.addEventListener('click', () => {
    cleanDrawboard();
});

function initDrawboard(size) {
    const square = document.createElement('div');
    square.className = 'sqaure';
    square.style.width = '500px';
    square.style.height = '500px';
    square.style.backgroundColor = 'white';
    square.style.display = 'flex';
    square.style.flexDirection = 'column';
    for (let i = 0; i < size; i++) {
        const divs = document.createElement('div');
        divs.style.display = 'flex';
        divs.style.flex = '1 0 0';
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.flex = '1 0 0';
            div.onmouseover = () => {div.style.backgroundColor = 'black'};
            divs.appendChild(div);
        }
        square.appendChild(divs);
    }
    container.appendChild(square);
}

function resetDrawboard(size) {
    const child = container.firstChild;
    container.removeChild(child);
    initDrawboard(size);
}

function cleanDrawboard() {
    const child = container.firstChild;
    for(const divs of child.childNodes){
        for(const div of divs.childNodes){
            div.style.backgroundColor = 'white';
        }
    }
}

initDrawboard(16);
