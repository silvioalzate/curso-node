const fs = require('fs')

const objeto = {
  nombre: 'Cerveza',
  precio: 6000,
  marcas: [
    'Aguila Light',
    'Andina',
    'Club Colombia'
  ]
}

objetoString = JSON.stringify(objeto, null, 2)
fs.writeFileSync('objeto.json', objetoString)

const object = fs.readFileSync('objeto.json')
const stringObjeto = JSON.parse(object)
console.log(stringObjeto)