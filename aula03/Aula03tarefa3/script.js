function calcularNotasWhile() {
    let contador = 0;
    let soma = 0;

    while (contador < 10) {
        const nota = parseFloat(prompt(`Digite a nota ${contador + 1}:`));

        if (!isNaN(nota)) {
            soma += nota;
            contador++;
        } else {
            alert("Por favor, digite uma nota válida.");
        }
    }

    const media = soma / 10;
    document.getElementById("resultadoWhile").textContent = `Média: ${media.toFixed(2)} | Soma: ${soma.toFixed(2)}`;
}

function calcularNotasDoWhile() {
    let contador = 0;
    let soma = 0;

    do {
        const nota = parseFloat(prompt(`Digite a nota ${contador + 1}:`));

        if (!isNaN(nota)) {
            soma += nota;
            contador++;
        } else {
            alert("Por favor, digite uma nota válida.");
        }
    } while (contador < 10);

    const media = soma / 10;
    document.getElementById("resultadoDoWhile").textContent = `Média: ${media.toFixed(2)} | Soma: ${soma.toFixed(2)}`;
}
