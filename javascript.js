const contadorCount = document.getElementById("cart-count");
const iconCart = document.getElementById("icon-cart")
const productsList = document.getElementById("cart-products-list")
const cardsProductos = document.getElementById("box-2")

let carrito = [];
let cartOpen = false;

document.addEventListener('DOMContentLoaded', () => {

    const conexion = fetch("JSON/productos.json")
    .then(datos => datos.json())
    .then(productos => {mostrarProductos(productos)})

    function mostrarProductos(productos) {
        productos.forEach((producto) => {
            let elementoProducto = document.createElement("div");
            elementoProducto.className = "image"
            elementoProducto.innerHTML = `
            <image src=${producto.imagen} alt="card numero ${producto.id}">
            <h2 class="name-product"> ${producto.nombre}</h2>
            <h2>$ ${producto.precio}.00</h2>
            <button id="agregar${producto.id}">Buy</button>`
        
        cardsProductos.append(elementoProducto)

        const botonCompra = document.getElementById(`agregar${producto.id}`)
    
        botonCompra.addEventListener('click', () => {
            agregarCarrito(producto.id)
            alert("Se agrego correctamente al carrito")
            showCart();
        });

        const agregarCarrito = (prodId) => {
        
            let elemento = productos.find((prod) => prod.id === prodId)
            carrito.push(elemento);
          
        };
           
        })
    
    }
  
});


 function showCart() {
    
    productsList.innerHTML = '';
    carrito.forEach((producto) => {
        const product = document.createElement("div");
        product.className = "cart-body-2";
        product.innerHTML = 
        `   
            <h1 class="title-product">${producto.nombre}</h1>
            <img src=${producto.imagen} class="img-productos-cart"></img>
            <div class="botones"> 
                <button class="btn-cart" onclick="sumar('${producto.id}')" id="btn-sumar">+</button>
                <button class="btn-cart" onclick="restar('${producto.id}')"id="btn-restar">-</button>
            </div>
        `;
        
        productsList.append(product);
             
    });
    
    const header = document.createElement("div")
    header.className = "header-cart"
    header.innerHTML = `
        <h1>Lista</h1>
        
        <button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar carrito</button>
        
    `
    agregarContador()
    productsList.appendChild(header)
    cartOpen = true;
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function hiddenCart() {
    productsList.innerHTML = '';
    cartOpen = false;
}

iconCart.addEventListener('click', () => {
    cartOpen ? hiddenCart() : showCart();
})

const agregarContador = () => {
    contadorCount.innerHTML =  `${carrito.length}`
}

const vaciarCarrito = () => {
    localStorage.clear() & window.location.reload() 
    alert("Carrito vaciado correctamente") 
}

function restar(prodId) {
    
    //Obtenemos el elemento con el find
    let elemento = carrito.find((prod) => prod.id == prodId) 
    
    //Obtenemos la posicion de ese elemento
    let posicion = carrito.indexOf(elemento,0)
    
    //Borramos el elemento pasando la posicion
    carrito.splice(posicion, 1)
    showCart();  
}

function sumar(prodId) {
    let elemento = carrito.find((prod) => prod.id == prodId) 
    carrito.push(elemento)
    showCart()
}
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')) 
    }
})