const {leerJSON,escribirJSON} = require('../data');
const Producto = require('./Producto');

module.exports = {
  productos : leerJSON(),
  listar: require('../funciones/listar'),
  agregar: require('../funciones/agregar'),
  filtrar: require('../funciones/filtrar'),
  editar: require ('../funciones/editar'),
  buscar : require('../funciones/buscar')
};
