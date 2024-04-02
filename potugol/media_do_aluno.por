programa{ 
 funcao inicio(){
	 real nota1, nota2, nota3, media

	escreva("Entre com a nota 1: \n")
	leia(nota1)

	escreva("Entre com a nota 2: \n")
	leia(nota2)

	escreva("Entre com a nota 3: \n")
	leia(nota3)


	media = (nota1 + nota2 + nota3) /3

	escreva("A media do aluno é:" + media + "\n")

	se(media >= 6){
		escreva("O aluno está aprovado!! :)")
	}senao{
		se(media >= 5){
		escreva("O aluno está de Recuperação!!")	
		}
	
	senao{
		escreva("O aluno está reprovado!! :(")
		}
	}
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 489; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */