/* OBJETOS
		objetos são basicamente variáveias com muitos valores dentro 

		os valores dentro de um objeto são chamados propriedades.

		Objetos ytambem podem ter métodos. um metodo é uma funçao colocadas dentro de uma propriedade

  */

	// Cria um objeto chamado 'carro' com várias propriedades e métodos
const carro = {
    // Propriedades do carro
	marca: "Hyundai",               // A marca do carro é 'Hyundai'
	modelo: "HB20",                 // O modelo do carro é 'HB20'
	ano: 2018,                      // O carro foi fabricado no ano de 2018
	placa: "ABC-3214",              // A placa do carro é 'ABC-3214'
	proprietario: "Pablo Henrique",  // O dono do carro é 'Pablo Henrique'

	// Métodos (ações que o carro pode realizar)
	
	// Método 'buzina' faz um alerta com o som da buzina
	buzina: function(){ 
		alert("biiiiiiiiiiiiiiiiiiiiiiii");  // Mostra um alerta com a mensagem "biiiiii"
	},

	// Método 'completo' retorna uma frase com informações completas sobre o carro
	completo: function(){
		// Usa 'this' para acessar as propriedades do próprio objeto 'carro'
		return "A marca é " + this.marca + " o modelo é " + this.modelo + " e o proprietario do veiculo é " + this.proprietario;
	}
}
