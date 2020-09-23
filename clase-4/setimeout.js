function futuro(){
  setTimeout(()=>{
    console.log('Llegué al futuro')
  }, 3000)
}

function main(){
  console.log('Comencé mi programa')
  futuro()
  console.log('Terminé mi programa')
}

main()