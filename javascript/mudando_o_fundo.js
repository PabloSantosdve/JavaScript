let element = document.getElementById("header")
function modo_escuro(){
	let element = document.getElementById("header")
	document.getElementById("fundo").style.backgroundColor="black";
	document.getElementById("fundo").style.transition="0.5s all"
	document.getElementById("fundo").style.color="white";
	document.getElementById("myImage").src="../imagens/jordan_5.jpg";
	element.innerHTML= "Testando o modo escuro!!!"
}

function modo_daltonico(){
	let element = document.getElementById("header")
	document.getElementById("fundo").style.backgroundColor="violet"
	document.getElementById("fundo").style.color="lime";
	document.getElementById("myImage").src="../imagens/jordan4.jpg";
	element.innerHTML= "Testando o modo daltonico!!!"
}

function modo_baixa_visao(){
	let element = document.getElementById("header")
	document.getElementById("fundo").style.backgroundColor="white"
	document.getElementById("fundo").style.color="black";
	document.getElementById("fundo").style.fontSize="35px";
	document.getElementById("myImage").src="../imagens/jordan_5.jpg";
	element.innerHTML= "Testando o modo baixa visão !!!"

}

function modo_normal(){
	let element = document.getElementById("header")
	document.getElementById("fundo").style.backgroundColor="white"
	document.getElementById("fundo").style.color="black";
	document.getElementById("fundo").style.fontSize="16px";
	document.getElementById("myImage").src="../imagens/jordan_5.jpg";
	element.innerHTML= "Michael Jordan"
}