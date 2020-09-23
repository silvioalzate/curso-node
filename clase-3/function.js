let total = 0

function calcularSeguro(marca, modelo){
  let pago = 1000
  if(marca === 'Renault'){
    pago = 800
  }else if(marca === 'Citroen'){
    pago *= 0.7
  }
  total += pago
  return pago
}

let marca = 'Citroen'
let modelo = 'GT'
let seguro = calcularSeguro(marca, modelo)
console.log(`${marca} ${modelo}: $${seguro}`)

let marca2 = 'Renault'
let modelo2 = 4
let seguro2 = calcularSeguro(marca2, modelo2)
console.log(`${marca2} ${modelo2}: $${seguro2}`)

let marca3 = 'Audi'
let modelo3 = 'A4'
let seguro3 = calcularSeguro(marca3, modelo3)
console.log(`${marca3} ${modelo3}: $${seguro3}`)

console.log(`Total: $${total}`)