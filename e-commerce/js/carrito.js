let productosEnCarrito=localStorage.getItem("productos-en-carrito")
   productosEnCarrito=JSON.parse(productosEnCarrito)
const contenedorCarritoVacio=document.querySelector("#carrito-vacio")
const contenedorCarritoProductos=document.querySelector("#carrito-productos")
const contenedorCarritoAcciones=document.querySelector("#carrito-acciones")
const contenedorCarritoComprado=document.querySelector("#carrito-comprado")
let productosEliminar= document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar=document.querySelector("#carrito-acciones-vaciar")
const botonComprar=document.querySelector("#carrito-acciones-comprar")
const contenedorTotal=document.querySelector("#total")

function cargarProductosCarrito(){
if(productosEnCarrito && productosEnCarrito.length>0){

 
    contenedorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.remove("disabled")
    contenedorCarritoAcciones.classList.remove("disabled")
    contenedorCarritoComprado.classList.add("disabled")
    
    contenedorCarritoProductos.innerHTML="";
    
    productosEnCarrito.forEach(producto=>{
         const div=document.createElement("div")
    div.classList.add("carrito-producto")
    div.innerHTML= `<img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="carrito-producto-titulo">
        <small>título</small>
        <h3>${producto.titulo}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>cantidad</small>
        <p>${producto.cantidad}</p>
    </div>
    <div class="carrito-producto-precio">
        <small>precio</small>
        <p>$${producto.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>subtotal</small>
        <p>$${producto.precio*producto.cantidad}</p>
    </div>
    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>`

    contenedorCarritoProductos.append(div)
    })
   
}else{
    contenedorCarritoVacio.classList.remove("disabled")
    contenedorCarritoProductos.classList.add("disabled")
    contenedorCarritoAcciones.classList.add("disabled")
    contenedorCarritoComprado.classList.add("disabled")

}actualizarBotonesEliminar();
actualizarTotal();
}
cargarProductosCarrito()



function actualizarBotonesEliminar(){
    botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton=>{
    boton.addEventListener("click",eliminarDelCarrito)
    })
}
function eliminarDelCarrito(e){
    Toastify({
        text: "producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius:"2rem",
          textTransform:"uppercase",
          fontSize:".8rem"
        },
        offset: {
          x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const idBoton=e.currentTarget.id;
    const index=productosEnCarrito.findIndex(producto=>producto.id===idBoton)
    productosEnCarrito.splice(index,1)
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))
}
botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    Swal.fire({
        title: "¿estas seguro?",
        icon: "question",
        html: `se van a eliminar ${productosEnCarrito.reduce((acc,producto)=>acc+producto.cantidad,0)} productos`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `si`,
        cancelButtonText: `no`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });;
  
}

function actualizarTotal(){
    const totalCalculado=productosEnCarrito.reduce((acc,producto)=>acc+(producto.precio*producto.cantidad),0);
    total.innerText=`$${totalCalculado}`
}
botonComprar.addEventListener("click",comprarCarrito)
function comprarCarrito(){
    productosEnCarrito.length=0
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))

    contenedorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.add("disabled")
    contenedorCarritoAcciones.classList.add("disabled")
    contenedorCarritoComprado.classList.remove("disabled")
}