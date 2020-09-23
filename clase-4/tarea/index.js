/* Programa que recibe un array desde un archivo JSON alojado en disco duro, 
calcula el valor del seguro de cada auto, el valor total de los seguros 
de todos los autos y guarda el resultado en disco duro */

// Importación de módulos
const fs = require('fs')
const path = require('path')

//Esta función carga los autos desde el disco duro y los pone en la variable autos
function cargarAutos (ruta){
  fs.readFile(ruta, (e, arrayAutos) =>{
    if(e){
      console.log('Error al abrir el archivo')
    }
      const objAutos = JSON.parse(arrayAutos)
      calcularSeguro(objAutos, ruta)
  })
  
}

//funcion que calcula el valor del seguro de cada auto y el total de todos los seguros
function calcularSeguro(file, ruta){
  let totalSeguros = 0
  let seguro = 0
  for(let i = 0; i < file.Autos.length; i++){
    if(file.Autos[i].Anio >= 2010){
      seguro = file.Autos[i].Valor * 0.02
      totalSeguros += seguro
      file.Autos[i].Seguro = seguro
    }else if(file.Autos[i].Anio >= 2000 && file.Autos[i].Anio < 2010){
      seguro = file.Autos[i].Valor * 0.03
      totalSeguros += seguro
      file.Autos[i].Seguro = seguro
    }else if(file.Autos[i].Anio < 2000){
      seguro = file.Autos[i].Valor * 0.05
      totalSeguros += seguro
      file.Autos[i].Seguro = seguro
    }
  }
  file.Seguro[0].Total = totalSeguros
  objSalida = JSON.stringify(file, null, 2)
  guardarAutos(ruta,objSalida)
}

//Esta funcion guarda el nuevo array en el archivo json
function guardarAutos(ruta, file){
  fs.writeFile(ruta, file, (e) =>{
    if(e){
      console.log('Error al guardar el archivo')
    }
  })
}

function main(){
  const ruta = path.join(__dirname, 'autos.json')
  cargarAutos(ruta)
  console.log('Calculando...')
}

main()

