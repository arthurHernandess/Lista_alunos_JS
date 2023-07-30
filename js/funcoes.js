function CalcularMedia (n1, n2)
{
	n1 = parseFloat(n1.replace(",","."));
	n2 = parseFloat(n2.replace(",","."));
	return (n1 + n2) /2;
}

function VerificaSituacao (notaFinal, local)
{
	if (notaFinal >= 5) 
		{
			local.textContent = "Aprovado(a)";
			local.classList.add("aprovado");
		}
		else 
		{
			local.textContent = "Reprovado(a)";
			local.classList.add("reprovado");
		}
}

function FormatarNota(nota)
{
	return nota.toFixed(2).toString().replace(".",",");
}

function btnNovoAluno(localbotao)
{
	var btn = document.createElement("button");
	var icone = document.createElement("img");
	icone.src = "images/lixeira.png";
	icone.classList.add("lixeira");
	btn.classList.add("btnRemover");
	localbotao.appendChild(btn).appendChild(icone);
	btn.addEventListener("click", RemoverAluno);
}

/* function ImgNovoAluno(localImagem)
{
	var btn = document.createElement("button");
	var icone = document.createElement("img");
	icone.src = "images/lixeira.png";
	icone.classList.add("lixeira");
	localImagem.appendChild(icone);
} */

function ColorirLinha()
{
	var aluno = document.querySelectorAll(".aluno");

	for (var i = 0; i < aluno.length; i++)
	{
		if( (i+1) %2 !=0 )
		{
			aluno[i].classList.add("LinhaImpar");
		}
		else
		{
			aluno[i].classList.add("LinhaPar");
		}
	}
}

ColorirLinha();
		/* essa % significa o resto da divisão, ou seja, 2/4 = 2 e a "sobra" da conta é 0 */
		/* e o != significa "diferente" */
		/* logo, o que essa operação faz é "sempre que o indice (somado 1) tiver o resto da divisão diferente de zero... faça tal coisa"*/