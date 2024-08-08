function calculadora (vitoria, derrota) {
    let saldoVitorias = vitoria - derrota;

    let nivel;
    if (vitoria < 10 ){
        nivel = "Ferro";
    } else if ( vitoria >= 11 && vitoria <= 20) {
         nivel = "Bronze";
    } else if ( vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if ( vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if ( vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if ( vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário"
    } else if ( vitoria >= 101) {
        nivel = "Vitória"
    }

    console.log(`"O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}"`)
}

calculadora(85, 20)