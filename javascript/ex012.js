var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são ${hora} horas.`)
if (hora < 12) {
	console.log ('Bom diaaa')
	
} else if (hora >= 12){
   console.log('Boa tardee')
} else if(hora >= 18) {
	console.log ('Boa noiteee')
}