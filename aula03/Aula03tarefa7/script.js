window.onload = function() {
    inserirNumeros();
};

function inserirNumeros() {
    const numerosPares = [];
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        if (!isNaN(numero)) {
            if (numero % 2 === 0) {
                numerosPares.push(numero);
            }
        }
    }

    // Mostra os números pares na tela
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Números Pares:</h2><ul>";

    for (let i = 0; i < numerosPares.length; i++) {
        resultadoDiv.innerHTML += `<li>${numerosPares[i]}</li>`;
    }

    resultadoDiv.innerHTML += "</ul>";
}
