var botaoRemover = document.querySelectorAll(".btnRemover");
console.log(botaoRemover);

	
for (var indice = 0; indice < botaoRemover.length; indice++)
{
	botaoRemover[indice].addEventListener("click", RemoverAluno);
}

function RemoverAluno(evento)
{
	evento.preventDefault();

	var saas = (this).parentNode.parentNode

	saas.remove();
	console.log(this);
}