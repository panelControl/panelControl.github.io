let openModal = document.getElementById('openModal');
let modalBitcoin = document.getElementById('modal');
let closeModal = document.getElementById('close');

// Abri modal

openModal.onclick = function(){
    modalBitcoin.style.visibility = "visible";
}

// Cerrar Modal Btn

closeModal.onclick = function(){
    modalBitcoin.style.visibility = "hidden";
}

// Cerrar en ventana 

modalBitcoin.onclick = function(){
    modalBitcoin.style.visibility = "hidden";
}