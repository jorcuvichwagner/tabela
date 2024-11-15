function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const parcelas = parseInt(document.getElementById('parcelas').value);
    
    const valorParcela = (valor * (taxa * Math.pow((1 + taxa), parcelas))) / (Math.pow((1 + taxa), parcelas) - 1);
    let saldoDevedor = valor;

    const tabelaBody = document.querySelector("#tabela tbody");
    tabelaBody.innerHTML = ''; // Limpa a tabela antes de preencher

    for (let i = 1; i <= parcelas; i++) {
        const juros = saldoDevedor * taxa;
        const amortizacao = valorParcela - juros;
        saldoDevedor -= amortizacao;

        const linha = `
            <tr>
                <td>${i}</td>
                <td>R$ ${valorParcela.toFixed(2)}</td>
                <td>R$ ${amortizacao.toFixed(2)}</td>
                <td>R$ ${juros.toFixed(2)}</td>
                <td>R$ ${saldoDevedor.toFixed(2)}</td>
            </tr>
        `;

        tabelaBody.innerHTML += linha;
    }
}
