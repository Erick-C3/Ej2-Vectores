const selectOpcProdCompra = document.querySelector("select"); 
const divInfoProducto =  document.querySelector("#info-productos");

const CANT_INICIAL_PROD = 100;
const CANT_UNIDADES_COMPRA = 1;


const cantidadesProd = [CANT_INICIAL_PROD, CANT_INICIAL_PROD, CANT_INICIAL_PROD];



function comprar(){
    /* console.log(  cantidadesProd[  selectOpcProdCompra.value  ] -= CANT_UNIDADES_COMPRA  ); */
    
    //resta el stock del producto correspondiente en -CANT_UNIDADES_COMPRA 
    cantidadesProd[  selectOpcProdCompra.value  ] -= CANT_UNIDADES_COMPRA;

    //pequeño reto: modificar el codigo para que solamente actualice la
    // cantidad del producto correspondiente

    divInfoProducto.innerHTML = `
        <span>Producto 1</span>
        <span>Cantidad: ${cantidadesProd[0]  }</span>
        <span>Producto 2</span>
        <span>Cantidad: ${cantidadesProd[1] }</span>
        <span>Producto 3</span>
        <span>Cantidad: ${cantidadesProd[2] }</span>
    `;
}