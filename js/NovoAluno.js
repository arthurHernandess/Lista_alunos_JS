var botaoNovo = document.querySelector("#btnNovo");
var botaoCancelar = document.querySelector("#btnCancelar");
var botaoAdicionar = document.querySelector("#btnAdicionar");
var telaBloqueio = document.querySelector(".bloquear");
var telaForms = document.querySelector("#pnlNovo");
var formulario = document.querySelector("#formNovoAluno");
var tabela = document.querySelector("#tblAlunos");
var msg = document.querySelector("#erro");
var lixo = document.querySelector(".remover");
// var button = document.querySelector(".btnRemover");


botaoNovo.addEventListener('click', exibirTelaNovoAluno);
botaoCancelar.addEventListener('click', cancelarTela);
botaoAdicionar.addEventListener('click', adicionarNovoAluno);

function exibirTelaNovoAluno(evento)
{
	evento.preventDefault();
	
	telaBloqueio.classList.remove("esconder");
	telaForms.classList.remove("esconder");
}

function cancelarTela(evento)
{
	evento.preventDefault();
	fecharFormulario();
}

function fecharFormulario()
{
	formulario.txtNome.value="";
	formulario.txtRM.value="";
	formulario.txtNota1.value="";
	formulario.txtNota2.value="";
	telaBloqueio.classList.add("esconder");
	telaForms.classList.add("esconder");
}

function adicionarNovoAluno(evento)
{
	evento.preventDefault();

	var rm = formulario.txtRM.value;
	var nome = formulario.txtNome.value;
	var nota1 = formulario.txtNota1.value;
	var nota2 = formulario.txtNota2.value;
	
	if(rm == "")
	{
		msg.textContent = "RM inválido";
		return;
	}

	if(nome == "")
	{
		msg.textContent = "nome inválido";
		return;
	}

	if(nota1 == "")
	{
		msg.textContent = "1° nota inválida";
		return;
	}
	nota1 = parseFloat(nota1);
	if (nota1 < 0 || nota1 >10) 
	{
		msg.textContent = "Notas devem ser de 0 a 10!";
		return;
	}

	if(nota2 == "")
	{
		msg.textContent = "2° nota inválida";
		return;
	}
	nota2 = parseFloat(nota2);
	/* if (nota2 < 0 || nota2 >10);
	{
		msg.textContent = "Notas devem ser de 0 a 10!";
		return;
	} */


	var mediaNovoAluno = CalcularMedia(nota1.toString().replace(".",","), nota2.toString().replace(".",","));

	var novaLinha = document.createElement("tr");
	novaLinha.classList.add("aluno");

	var celulaRM = document.createElement("td");
	celulaRM.classList.add("info-rm");
	celulaRM.textContent = rm;

	var celulaNome = document.createElement("td");
	celulaNome.classList.add("info-nome");
	celulaNome.textContent = nome;
	celulaNome.classList.add("maiuscula");

	var celulaN1 = document.createElement("td");
	celulaN1.classList.add("info-prova1");
	celulaN1.textContent = nota1;

	var celulaN2 = document.createElement("td");
	celulaN2.classList.add("info-prova2");
	celulaN2.textContent = nota2;

	var celulaMedia = document.createElement("td");
	celulaMedia.classList.add("info-media");
	celulaMedia.textContent = mediaNovoAluno.toString().replace(".",",");

	var celulaSituacao = document.createElement("td");
	celulaSituacao.classList.add("info-situacao"); 
	VerificaSituacao(mediaNovoAluno, celulaSituacao);

	var celulaRemove = document.createElement("td");
	celulaRemove.classList.add("remover");
	// celulaRemove.textContent = lixo.lastChild;

	novaLinha.appendChild(celulaRM);
	novaLinha.appendChild(celulaNome);
	novaLinha.appendChild(celulaN1);
	novaLinha.appendChild(celulaN2);
	novaLinha.appendChild(celulaMedia);
	novaLinha.appendChild(celulaSituacao);
	novaLinha.appendChild(celulaRemove);

	btnNovoAluno(celulaRemove);
	// ImgNovoAluno(celulaRemove);

	tabela.appendChild(novaLinha);
	fecharFormulario();

	ColorirLinha();
}