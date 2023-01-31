const button1 = document.getElementById('button'); 

function getClicked() {
    alert('WHOA nice button click!');
}

function addingEventListener() {
    button1.addEventListener('click', getClicked);;
}

