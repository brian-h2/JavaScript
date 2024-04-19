/*  
4. Crear contador en el icono carrito
5. Crear Opcion de Eliminar producto o agregar
6. Crear un total de los productos en el carrito
    (Crear funcionalidad de restar para que reste la cantidad del carrito);
7. Almacenar los productos aunque se actualice la pagina
 */

const contadorCount = document.querySelector("cart");

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
            <h2>${producto.nombre}</h2>
            <h2>${producto.precio}</h2>
            <button id="agregar${producto.id}">Comprar</button>`
        
        cardsProductos.append(elementoProducto)

        const botonCompra = document.getElementById(`agregar${producto.id}`)
    
        botonCompra.addEventListener('click', () => {
            agregarCarrito(producto.id)
        });

        const agregarCarrito = (prodId) => {
        
            let elemento = productos.find((prod) => prod.id === prodId)
            carrito.push(elemento);
   
        };
        })
    }
});
    
//Organizar la interfaz del carrito
 function showCart() {
    
    productsList.innerHTML = '';
    carrito.forEach((producto) => {
        const product = document.createElement("div");
        product.className = "cart-body-2";
        product.innerHTML = 
        `
            
            <h1 class="title-product">${producto.nombre}</h1>
            <img src=${producto.imagen} class="img-productos-cart"></img>
            <button class="btn-cart" id="btn-sumar">+</button>
            <button class="btn-cart" onclick="restar('${producto.id}')"id="btn-restar">-</button>
           
        `;
        
        productsList.append(product);
   
    });
    
    const header = document.createElement("div")
    header.className = "header-cart"
    header.innerHTML = `
        <h1>Your Cart</h1>
        <p>cantidad + ${carrito.length}<p>
    `
    productsList.appendChild(header)
   
    cartOpen = true;
    
}

function hiddenCart() {
    productsList.innerHTML = '';
    cartOpen = false;
}

iconCart.addEventListener('click', () => {
    if(cartOpen) {
        hiddenCart();
    } else {
        showCart();
        
    }
})

function restar(prodId) {
    
    //Obtenemos el elemento con el find
    let elemento = carrito.find((prod) => prod.id == prodId) 
    
    //Obtenemos la posicion de ese elemento
    let posicion = carrito.indexOf(elemento,0)
    
    //Borramos el elemento pasando la posicion
    carrito.splice(posicion, 1)
    
}

