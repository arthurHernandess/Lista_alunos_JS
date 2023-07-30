var aluno = document.querySelectorAll(".aluno");

for (var indice = 0; indice < 10; indice++)
{
		var media_aluno   = 0;
		var local_nota_01 = aluno[indice].querySelector(".info-prova1");
		var local_nota_02 = aluno[indice].querySelector(".info-prova2");
		var media         = aluno[indice].querySelector(".info-media");
		var situacao      = aluno[indice].querySelector(".info-situacao");

		media_aluno = CalcularMedia( local_nota_01.textContent , local_nota_02.textContent );
		media.textContent = FormatarNota(media_aluno);
		VerificaSituacao(media_aluno, situacao);
}

ColorirLinha();  