/* 
3. Apertura y cierre de carrito 
4. Crear contador en el icono carrito
5. Crear Opcion de Eliminar producto o agregar
6. Crear un total de los productos en el carrito
7. Almacenar los productos aunque se actualice la pagina
 */

const contadorCount = document.querySelector("cart");

const contenedorCarrito = document.getElementById("cart-products");
const bodyCart = document.getElementById("body-cart");
const footerCart = document.getElementById("footer-cart");
const iconCart = document.getElementById("icon-cart")
const headerCart = document.getElementById("header-cart")
const productsList = document.getElementById("cart-products-list")


const boton = document.getElementById("btn-buy");

let carrito = [];

let contador = 0;


const conexion = fetch("JSON/productos.json")
  .then(datos => datos.json())
  .then(productos => {
    console.log(productos)


})


console.log(boton.toggleAttribute.arguments)
    //Funcion que obtiene el id pasado en la iteracion, para ser find dentro de datos y el que coincida ser agregado al array carrito.

    // const agregarCarrito = (prodId) => {
        
    // const elemento = datos.find((prod) => prod.id === prodId)
    // carrito.push(elemento);
  
    // };

    // const saveLocal = () => {
    //     localStorage.setItem("carrito" ,JSON.stringify(carrito))
    // };



iconCart.addEventListener('click', () => {

   

    productsList.classList.toggle("cart-list-products")
    
    const headerCarts = document.createElement("div")
    headerCarts.className = "header-carrito"
    headerCarts.innerHTML = `
        <h1>Carrito</h1>
        <box-icon name='exit'></box-icon>
    `
    headerCart.append(headerCarts)

    carrito.forEach((producto) => {
        const product = document.createElement("div")
        product.className = "cart-body"
        product.innerHTML = `
            <h1>${producto.nombre}</h1>
            <img src=${producto.imagen} class="img-productos-cart"></img>
        `;

    bodyCart.append(product)   
    })




  
