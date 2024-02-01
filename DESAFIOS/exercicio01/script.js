function carregar() {
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('img')
 var data = new Date()
 //var hora = data.getHours()
 var hora = 10
 msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0 && hora < 12 ){
	msg.innerHTML = `Agora são ${hora}hrs, BOM DIA!!!`
	img.src = 'manha.png'
	document.body.style.backgroundColor = '#e2cd9f'
   } else if (hora >= 12 && hora <= 18){
	msg.innerHTML = `Agora são ${hora}hrs, BOA TARDE !!!`
	img.src = 'tarde.png'
	document.body.style.backgroundColor = '#b9846f'
   } else {
	msg.innerHTML = `Agora são ${hora}hrs, BOA NOITE !!!`
	img.src = 'noite.png'
	document.body.style.backgroundColor = '#515154'
   }
}


