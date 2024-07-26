function obterMedias(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        const notas = atletas[i].notas;

        // Ordena as notas em ordem crescente
        notas.sort((a, b) => a - b);

        // Elimina a maior e a menor nota
        const notasComputadas = notas.slice(1, 4);

        // Calcula a média das notas restantes
        const media = notasComputadas.reduce((acc, nota) => acc + nota, 0) / notasComputadas.length;

        // Mostra os resultados
        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas Obtidas: ${notas.join(', ')}`);
        console.log(`Média Válida: ${media.toFixed(2)}\n`);
    }
}

// Exemplo de uso:
const atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernanda puntel",
        notas: [8, 10 ,10, 7, 9.33]
    },
    {
        nome: "Daniane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: " Buruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
    
];

obterMedias(atletas);




