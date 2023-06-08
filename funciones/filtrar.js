
const filtrar = function(categoria){
    //const productosFiltrados = this.productos.filter(producto => producto.marca === marca);
    const productosFiltrados = this.productos.filter(producto => producto.categoria === categoria.toLowerCase());
    return productosFiltrados
  }


module.exports= filtrar