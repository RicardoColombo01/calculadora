// Adiciona números e operadores no display
function adicionarValor(valor) {
    document.getElementById("display").value += valor;
}

// Calcula o resultado da expressão no display
function calcularResultado() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Burro"; // Se houver erro na conta
    }
}

// Limpa o display
function limparDisplay() {
    document.getElementById("display").value = "";
}
