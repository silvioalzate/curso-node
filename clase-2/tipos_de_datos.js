let nombre = 'silvio'
console.log(nombre, typeof nombre)

//comprobar que nombre no es un Array
console.log(Array.isArray(nombre))

let edad = 37
console.log(edad, typeof edad)

let educador = true
console.log(educador, typeof educador)

let titulos
console.log(titulos, typeof titulos)

let estudiantes = null
console.log(estudiantes, typeof estudiantes)

const nombres = [
    'Silvio',
    'Katherine'
]
console.log(nombres, typeof nombres, Array.isArray(nombres))

const frutas = []
frutas.push('Manzana')
frutas.push('Banana')
frutas.push('Kiwi')
frutas.push('Orange')
const fruta = frutas.pop()
console.log(frutas)
console.log(fruta)

const frutas2 = [].concat(frutas)
frutas.push('Papaya')
console.log(frutas2)

frutas.forEach((fruta)=>{
    console.log(fruta)
})

const frutaColor = frutas.map((fruta)=>{
    return fruta + ' roja'
})
console.log(frutaColor)

const colegios = [
    'Deogracias',
    'Diocesano',
    'Manuel Elkin'
]

const barrios = [
    'Providencia',
    'La Graciela',
    'Cesar Augusto'
]

const colegiosYBarrios = colegios.concat(barrios)
console.log(colegiosYBarrios)

const comidas = {
    nombre: 'Hamburguesa',
    calorias: 500
}
console.log(comidas)

comidas.nombre = 'Pizza'
comidas.calorias = 400
console.log(comidas)

const props = Object.keys(comidas)
console.log(props)

props.forEach((prop)=>{
    //console.log(prop)
    //console.log(comidas[prop])
    console.log(`${prop}: ${comidas[prop]}`)
})

const gustos = [
    'Programar',
    'Diseñar'
]
const parientes = {
    madre: 'María Noema',
    padre: 'Alberto',
    hermano: 'Freddy Humberto',
    hermana: 'Luz Adriana'
}
const persona = {
    nombre: 'Silvio',
    apellido: 'Alzate',
    edad: 37,
    email: 'silvio@libery.com.co',
    gustos,
    parientes
}

const ps = Object.keys(persona)
ps.forEach((p)=>{
    console.log(`${p}: ${persona[p]}`)
})

const persona2 = Object.assign({}, persona)
persona.nombre = 'Ricardo'
console.log(persona2)