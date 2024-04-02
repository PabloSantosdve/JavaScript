programa{
	funcao inicio(){
		real idade

	escreva("Qual a sua idade: \n")
	leia(idade)
  	se(idade >=18){
  		escreva("O voto pra você é obrigatorio")
  		}senao{
  	se(idade < 16){
  		escreva("Voce não pode votar")
  		}
  	se(idade >=16){
  			escreva("O voto pra você é opcional")
  			}senao{
	se (idade > 70){
	escreva("O voto pra você é opcional")	
				}	
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 383; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */