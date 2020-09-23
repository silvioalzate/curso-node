const seguro = ()=>{
  return 1000
}

const seguro2 = ()=>{
  return 2000
}

const imprimir = (nombre, funcal)=>{
  console.log(`${nombre} paga $${funcal()}`)
}

imprimir('Silvio', seguro)
imprimir('Ricardo', seguro2)