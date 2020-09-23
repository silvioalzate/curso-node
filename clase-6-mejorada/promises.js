const fs = require('fs').promises
const path = require('path')



const recorrerDirectorio = (pathDir) => {
  return fs.readdir(pathDir).then((paths) => {
    paths.forEach((pathRel) => {
      const pathAbs = path.join(pathDir, pathRel)
      procesarPath(pathAbs)
    })
  })
}

const procesarPath = (pathAbs) => {
  return fs.stat(pathAbs).then((stats) => {
    if(stats.isDirectory()){
      return recorrerDirectorio(pathAbs)
    }else if(stats.isFile()){
      return procesarOrden(pathAbs)
    }
  }).catch((e) => {
    console.log(`Tuve un problema con ${pathAbs}: ${e.message}`)
  })
}

const validarOrden = (pathAbs) => {
  if(pathAbs.endsWith('.json')){
    return fs.readFile(pathAbs).then((data) => {
      const orden = JSON.parse(data)
      if(orden.hasOwnProperty('id') && orden.producto && orden.hasOwnProperty('total')){
        return procesarOrden(orden)
      } 
    })
  }
  return Promise.resolve()
}

const procesarOrden = (orden) => {
  console.log(`Orden de compra: ${JSON.stringify(orden)}`)
}

//TODO como pasar por parametro de consola
const dirBase = path.join(__dirname, 'compras')
procesarPath(dirBase)