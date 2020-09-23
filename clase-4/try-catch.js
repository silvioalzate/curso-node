try{
  const vodka = 120000
  vodka = 140000
}catch(e){
  console.log(e.message)
}finally{
  console.log('Pasé por acá')
}

try{
  const vodka = 120000
  if(vodka >= 120000){
    throw new Error('El vodka está Carísimo')
  }
}catch(e){
  console.log(e.name)
  console.log(e.message)
}finally{
  console.log('Pasé por Finally')
}