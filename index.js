let allContainerCart = document.querySelector('.containersPrincipal');
let containerBuyCart = document.querySelector('.carritoContainer');
let priceTotal = document.querySelector('.precioTotal');

let buyThings = [];
let totalCard = 0;

loadEventListenrs ();
function loadEventListenrs (){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct)
}

function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('boton')){
        const selectProduct = e.target.parentElement
        readTheContet(selectProduct);
    }
}

function deleteProduct(e){
    if(e.target.classList.contains('delete-product')){
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value =>{
            if(value.id == deleteId){
                let priceReduce = value.price * value.amount
                totalCard = parseFloat(totalCard) - parseFloat(priceReduce)
                loadHtml();
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId )
    }
    loadHtml();
}

function readTheContet(product){
    const infoProduct = {
        title: product.querySelector('div h3').textContent,
        price: product.querySelector('div p').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);

    const exist = buyThings.some(product => product.id === infoProduct.id)
    if(exist){
        const pro = buyThings.map(product => {
            if(product.id === infoProduct.id){
                product.amount++;
                return product;
            }else {
                return product
            }
        })
        buyThings = [...pro];
    }else {
        buyThings = [...buyThings, infoProduct]
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {title,price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('contenido')
        row.innerHTML = `<h3>Producto ${title}</h3>
        <p>Precio Unidad ${price}</p>
        <h6>Cantidad ${amount}</h6>
        <span class="delete-product" data-id=${id}>X</span>
        `;
        containerBuyCart.appendChild(row);
        priceTotal.innerHTML = totalCard;
    });
}
function clearHtml(){
    containerBuyCart.innerHTML = "";
}