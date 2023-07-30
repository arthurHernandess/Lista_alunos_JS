var filtro = document.querySelector("#txtFiltro");
var aluno = "";
var names = "";

function declararVariaveis(){
	aluno = document.querySelectorAll(".aluno");
	names = document.querySelectorAll(".info-nome");
}

var botaoBusca = document.querySelector("#btnBuscar");
var botaoLimpa = document.querySelector("#btnLimpar");

botaoBusca.addEventListener('click', buscarAluno);
botaoLimpa.addEventListener('click', limparBusca);

function buscarAluno(evento)
{
	declararVariaveis();
	evento.preventDefault();
	var txtFiltro = filtro.value.toUpperCase().substring(length);
	var txtLength = txtFiltro.length;

	for (var indice = 0; indice < names.length; indice++)
	{
		var nome = names[indice].textContent;
		nome = nome.toUpperCase();

		if(txtFiltro.substring(length) != nome.substring(0, txtFiltro.length))
		{
			aluno[indice].classList.add("esconder");
		}
	}

	botaoLimpa.addEventListener('click', limparBusca);
}

function limparBusca(evento)
{
	declararVariaveis();
	for (var indice = 0; indice < names.length; indice++)
	{
	evento.preventDefault();
	filtro.value="";
	aluno[indice].classList.remove("esconder");
	}
}