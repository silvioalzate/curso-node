const fs = require('fs')
const path = require('path')
const dirBase = path.join(__dirname, 'compras')

//Valida si el path que se le pasa es un directorio
const esDirectorio = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (e, stat) => {
      if(e){
        reject(e)
      }else if(stat.isDirectory()){
        resolve(path)
      }else{
        reject()
      }
    }) 
   })
}

//Recorre el path que se le pasa
const recorrerPath = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (e, paths) => {
      if(e){
        reject(e)
      }else{
        resolve(paths)
      }
    })
  })
}

//Lee un archivo pasado a traves de un path
const leerOrden = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (e, dataOrden) => {
      if(e){
        reject(e)
      }else{
        const dataString = dataOrden.toString()
      try{
        const jsonOrden = JSON.parse(dataString)
        resolve(jsonOrden.total)
      }catch(e){
        reject(e)
      }
      }
      
    })
  })
}

//main
//lee la carpeta compras
const main = recorrerPath(dirBase)


//ignora lo que no es una carpeta
.then((carpetas) => {
  if(carpetas && Array.isArray(carpetas) && carpetas.length){
    let prEsDirectorio = Promise.resolve()
    const ordenesPaths = []
    carpetas.forEach((carpeta) => {
      const carpetaPath = path.join(dirBase, carpeta)
      prEsDirectorio = prEsDirectorio.then(() => {
        return esDirectorio(carpetaPath)
      }).then((path) => {
        ordenesPaths.push(path)
      }).catch(() => {
        //No es un directorio
      })      
    })
    return prEsDirectorio.then(() => {
      return Promise.resolve(ordenesPaths)
    })
  }
})

//lee las ordenes de compra de cada carpeta
.then((ordenesPaths) => {
  const rutasOrdenes = []
  let prRecorrerOrdenes = Promise.resolve()
  ordenesPaths.forEach((ordenPath) => {
    prRecorrerOrdenes = prRecorrerOrdenes.then(() => {
      return recorrerPath(ordenPath)
    }).then((rutaOrden) => {
      rutaOrden.forEach((orden) => {
        if(orden.endsWith('.json')){
          const rutaCompletaOrden = path.join(ordenPath, orden)
          rutasOrdenes.push(rutaCompletaOrden)
        }
      })
    })
  })
  return prRecorrerOrdenes.then(() => {
    return Promise.resolve(rutasOrdenes)
  })
})


//lee las ordenes de compra y saca el total de cada una
.then((rutasOrdenes) => {
  let total = 0
  let prLeerOrden = Promise.resolve()
  rutasOrdenes.forEach((rutaOrden) => {
    prLeerOrden = prLeerOrden.then(() => {
      return leerOrden(rutaOrden)
    }).then((totalOrden) => {
      total += totalOrden
    }).catch((e) => {
      //Ignoro una orden invalida
    })
  })
  return prLeerOrden.then(() => {
    return Promise.resolve(total)
  })
})

//muestra el total de todas las ordenes
.then((total) => {
  console.log(`El total es ${total}`)
})


//catch global
.catch(() => {
  console.log('Tuve que para las ejecución')
})
