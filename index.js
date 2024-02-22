const agregarAlCarroCompra = document.querySelectorAll("#comprar");
agregarAlCarroCompra.forEach(agregarAlCarro => {
    agregarAlCarro.addEventListener('click', agregarAlcarroClicked);
});

function agregarAlcarroClicked(event){
    const button = event.target;
    const item = button.closest('#card');

    const nombreItem = item.querySelector('#nombreProducto').textContent;
    const precioItem = item.querySelector('#precioProducto').textContent;

    agregarItemAlcarroClicked(nombreItem, precioItem);
}

function agregarItemAlcarroClicked(nombreItem, precioItem){
    const carrito = document.createElement('div');
    document.querySelector()
}