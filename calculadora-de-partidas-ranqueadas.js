let jogadores = [
    ["Ragnar Lothbrok", 200, 102],
    ["Lagherta", 50, 20]
];

function pointCalculation(jogador) {
    let vitorias = jogador[1];
    let derrotas = jogador[2];
    return levelRank(jogador[0], vitorias, derrotas); // Passa o nome do jogador para levelRank
}

for (let jogador of jogadores) {
    let resultado = pointCalculation(jogador);
    console.log(resultado);
}

function levelRank(nome, vitorias, derrotas) { 

    let saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 20) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O jogador ${nome} tem um saldo de ${saldo} e está no nível ${nivel}`;

}