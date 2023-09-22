// Função para gerar a tabuada
function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const tabuadaDiv = document.getElementById("tabuada");
    tabuadaDiv.innerHTML = ""; // Limpa a div antes de gerar a tabuada

    if (isNaN(numero) || numero < 1 || numero > 10) {
        tabuadaDiv.innerHTML = "<p>Por favor, digite um número válido entre 1 e 10.</p>";
        return;
    }

    tabuadaDiv.innerHTML = `<h2>Tabuada de ${numero}:</h2>`;
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabuadaDiv.innerHTML += `<p>${numero} X ${i} = ${resultado}</p>`;
    }
}

// Event listener para o botão de gerar tabuada
const botaoGerar = document.getElementById("gerarTabuada");
botaoGerar.addEventListener("click", gerarTabuada);
