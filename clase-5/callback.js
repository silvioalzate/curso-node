const fs = require('fs')
const path = require('path')
const ordenes = path.join(__dirname, 'compras')

fs.readdir(ordenes, (e, carpetas)=>{
  if(e){
    console.log('Hubo un error al leer el FS')
  }else if(carpetas && Array.isArray(carpetas) && carpetas.length){
    console.log('Procesando carpetas')
    carpetas.forEach((carpeta) => {
      const orden = path.join(ordenes, carpeta)
      fs.stat(orden, (e, stats) => {
        if(e){
          console.log('Error al leer carpeta de órdenes')
        }else if(stats.isDirectory()){
          console.log(`Procesando carpeta ${carpeta}`)
          fs.readdir(orden, (e, files) => {
            if(e){
              console.log('Error al leer las ordenes de compra')
            }else if(files && Array.isArray(files) && files.length){
              files.forEach((file) => {
                const ordenPathFull = path.join(orden, file)
                console.log(ordenPathFull)
                fs.readFile(ordenPathFull, (e, data) => {
                  const stringData = data.toString()
                  try{
                    const jsonData = JSON.parse(stringData)
                    console.log(`Órden # ${jsonData.id}`)
                  }catch(e){
                    console.log('Algo salió mal')
                  }

                })
              })
            }
          })
        }else{
          console.log(`Saltando ${carpeta}`)
        }
      })
    })
    console.log('Terminé de procesar las carpetas')
  }else{
    console.log('La carpeta aparentemente está vacía')
  }
})