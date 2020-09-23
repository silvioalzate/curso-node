function futuro(){
  console.log('Comencé futuro')
  let i = 0
  const timer = setInterval(()=>{
    console.log(`Intervalo ${i}`)
    i++

    if(i > 10){
      clearInterval(timer)
    }
  }, 200)
}

function main(){
  console.log('Comencé main')
  futuro()
  console.log('Terminé main')
}

main()