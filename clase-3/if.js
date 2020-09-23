let marca = 'Renault'
let modelo = 'Logan'

if(marca === 'Renault'){
  console.log('Este vehículo es un Renault')
}else{
  console.log('Lo siento, el vehículo no es un Renault')
}

if(marca === 'Renault' && modelo === 'Logan'){
  console.log('Este vehículo es un Renault Logan')
}else{
  console.log('Este vehículo no es un Renault Logan')
}

let marcas = [
  'BMW',
  'Audi',
  'Renault'
]

if(marcas === ['BMW', 'Audi', 'Renault']){
  console.log('Son las mismas marcas')
}else{
  console.log('Las marcas son diferentes')
}

let partes = {
  nombre: 'Espejo retrovisor',
  serie: 2333233
}

if(partes === {nombre: 'Espejo retrovisor', serie: 2333233}){
  console.log('son la misma parte')
}else{
  console.log('No son la misma parte')
}

let partes2 = partes
if(partes === partes2){
  console.log('son la misma parte')
}else{
  console.log('No son la misma parte')
}

let partes3 = Object.assign({}, partes)
if(partes === partes3){
  console.log('son la misma parte')
}else{
  console.log('No son la misma parte')
}