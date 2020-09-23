const start = new Date().toISOString()
console.log(start)

const tarea1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Tarea 1: Done')
    const finish = new Date().toISOString()
    console.log(finish)
    resolve()
  }, 1000)
})

const tarea2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Tarea 2: Done')
    const finish = new Date().toISOString()
    console.log(finish)
    resolve()
  }, 1000)
})

tarea1.then(() => {
  console.log('Tarea 1: Finish')
  return tarea2
})

tarea2.then(() => {
  console.log('Tarea 2: Finish')
})



