const objeto = {
  nombre: 'Cerveza',
  precio: 6000
}

const objetoString = JSON.stringify(objeto)
console.log(typeof objeto)
console.log(typeof objetoString)
console.log(objetoString)

console.log('============')

try{
  const string = '{"nombre":"Cerveza,"precio":6000}'
  const stringObjeto = JSON.parse(string)
  console.log(typeof stringObjeto)
  console.log(stringObjeto)
}catch(e){
  console.log('Tu JSON no es válido')
}