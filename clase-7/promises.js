const generarTarea = (numTarea, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const finish = new Date().toISOString()
      console.log(`TAREA ${numTarea}: DONE ${finish}`)
      resolve(`Resultado: Tarea ${numTarea}`)
    }, delay)
  })
}

const tarea1 = generarTarea(1, 1000)


tarea1.then(() => {
  const tarea2 = generarTarea(2, 1000)
  return tarea2
})

//EL THEN GENERA UN TRY/CATCH INVISIBLE
generarTarea(1, 500).then(() => {
  JSON.parse('hola = true')
}).catch((e) => {
  console.log(e.message)
}).then(() => {
  console.log('No pasó nada. Continuemos')
  JSON.parse('hola = true')
}).catch(() => {
  console.log('Falló de nuevo')
})


Promise.resolve({marca: 'Ford'}).then((auto) => {
  auto.seguro = 1000
  return Promise.resolve(auto)
}).then((auto) => {
  console.log(auto)
})

const t1 = generarTarea(1, 1000)
const t2 = generarTarea(2, 500)
const t3 = generarTarea(3, 2000)
const t4 = generarTarea(4, 500)
const t5 = generarTarea(5, 3000)

const all = Promise.all([
  t1,
  t2,
  t3,
  t4,
  t5
])

all.then((res) => {
  console.log(res)
  const finish = new Date().toISOString()
  console.log(`Done: ${finish}`)
})