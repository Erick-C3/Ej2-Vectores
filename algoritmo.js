const selectOpcProdCompra = document.querySelector("select"); 
const divInfoProducto =  document.querySelector("#info-productos");

/* const spanCantidadProd1 = document.querySelector("#cant-prod-1");
const spanCantidadProd2 = document.querySelector("#cant-prod-2");
const spanCantidadProd3 = document.querySelector("#cant-prod-3"); */

const CANT_INICIAL_PROD = 100;
const CANT_UNIDADES_COMPRA = 1;


const cantidadesProd = [CANT_INICIAL_PROD, CANT_INICIAL_PROD, CANT_INICIAL_PROD];



function comprar(){
    /* console.log(  cantidadesProd[  selectOpcProdCompra.value  ] -= CANT_UNIDADES_COMPRA  ); */
    //resta el stock del producto correspondiente en -CANT_UNIDADES_COMPRA 
    actualizarCantidadProdComprar();

    //pequeño reto: modificar el codigo para que solamente actualice la
    // cantidad del producto correspondiente
    actualizarInfoProducto();
}






/**
 * Actualiza la cantidad del producto a comprar
 */
function actualizarCantidadProdComprar() {
    cantidadesProd[selectOpcProdCompra.value] -= CANT_UNIDADES_COMPRA;
}

/**
 * Actualiza la info de los productos en la pagina
 */
function actualizarInfoProducto() {
    let posProducto = parseInt(selectOpcProdCompra.value);
    let spanCantProdRequerido = document.querySelector(`#cant-prod-${posProducto+1}`);
    
    spanCantProdRequerido.innerHTML = `
        Cantidad: ${cantidadesProd[posProducto]}
    `;

    /* divInfoProducto.innerHTML = `
        <span>Producto 1</span>
        <span>Cantidad: ${cantidadesProd[0]}</span>
        <span>Producto 2</span>
        <span>Cantidad: ${cantidadesProd[1]}</span>
        <span>Producto 3</span>
        <span>Cantidad: ${cantidadesProd[2]}</span>
    `; */
}
