let valores = [ 8, 1, 7, 4, 2, 9]

/*for(var pos = 0; pos < valores.length; pos++ ){
	console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//Jeito mais simples de fazer

for(let pos in valores){
	console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.indexOf(4)
