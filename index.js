const test = document.getElementById('button');

function printAlert() {
    alert('Oh jeez, you pushed the button!')
}

function addingEventListener(){
    test.addEventListener('click', printAlert);
}
