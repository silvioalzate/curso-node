const calcularSeguro = (params)=>{
  console.log(params)
}

const calcularSeguro2 = ()=>{
  console.log()
}

const calcularSeguro3 = _=>{
  console.log()
}

const calcularSeguro4 = (param)=> param * 1.21

console.log(calcularSeguro4(100))


const frutas = [
  'Manzana',
  'Banana',
  'Pera',
  'Durazno'
]
const iterador = function(fruta){
  console.log(fruta)
}

const iterador2 = fruta => console.log(fruta)

frutas.forEach(iterador)
frutas.forEach(iterador2)

frutas.forEach(fruta => console.log(fruta))


const filtFrutas = frutas.filter(function(fruta){
  if(fruta === 'Pera'){
    return false
  }
  return true
})

console.log(frutas)
console.log(filtFrutas)

const filtfruta = frutas.filter(fruta => fruta !== 'Durazno')
console.log(filtfruta)

