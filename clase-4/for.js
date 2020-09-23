const bebidas = [
  'Vino',
  'Vodka',
  'Cerveza'
]

console.log('==== For ====')
for(let i = 0; i < bebidas.length; i++){
  const bebida = bebidas[i]
  console.log(bebida)
}

console.log('==== For INVERSO ====')
for(let i = bebidas.length -1; i >= 0; i--){
  const bebida = bebidas[i]
  console.log(bebida)
}

console.log('==== WHILE ====')
let i=0
while(i < bebidas.length){
  const bebida = bebidas[i]
  console.log(bebida)
  i++
}

console.log('==== WHILE & VARIABLE DE CONTROL ====')
let j = 0
let e = false
while(j < bebidas.length && !e){
  const bebida = bebidas[j]
  if(bebida === 'Vodka'){
    e = true
  }
  console.log(bebida)
  j++
}

console.log('==== DO WHILE ====')
let k = 0
do{
  const bebida = bebidas[k]
  console.log(bebida)
  k++
}while(k < bebidas.length)

console.log('==== For OF ====')
for(const bebida of bebidas){
  
  console.log(bebida)
}


const bebidaPrecio = {
  Vino: 30000,
  Cerveza: 6000,
  Vodka: 120000
}

console.log('==== For IN ====')
for(const nomBebida in bebidaPrecio){
  
  console.log(`${nomBebida}: $${bebidaPrecio[nomBebida]}`)
}