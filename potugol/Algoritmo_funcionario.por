programa
{
	
	funcao inicio()
	{
		 cadeia estado, nome
		 real salario
		 inteiro idade, filho, tempo

		 escreva("Digite seu nome: \n")
		 leia(nome)

		 escreva ("Seja bem vindo ao Proa " + nome +"\n")
		 
		 escreva("Digite sua idade: \n")
		 leia(idade)
		  se(idade >= 60){
		  	escreva("Apresentar plano de aposentadoria para o/a funcionario " + nome + "\n")
		  	}senao{
		  		escreva ("SEM plano de aposentadoria para o funcionario \n")
		  		}

		escreva("Qual o seu estado civil ? \n")
		leia(estado)

		escreva("Quantos filhos você tem ?  \n")
		leia(filho)
			se (filho >0){
				escreva("Funcionario com direito ao Auxilio Familia \n")
			}senao{
				escreva("Funcionario sem direito ao Auxilio Familia \n")
				}

		 escreva("Quanto tempo de empresa você tem ? \n")
		 	leia(tempo)
		 	se(tempo >= 5){
		 		escreva("Funcionario com direito ao Abone Salarial \n")
		 		}senao{
		 			escreva("Funcionario não tem direito ao Abono Salarial \n")
		 			}
		 escreva("Quanto você recebe de salario ? \n")
		 leia(salario)
		 	se(salario >= 4.300){
		 		escreva("Funcionario COM direito ao seguro de Vida e seguro Saúde \n")
		 		}senao{
		 			escreva("Funcionario SEM direito ao seguro de Vida e seguro Saúde \n")
		 			}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 194; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */