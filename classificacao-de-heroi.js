let champions = [["Riven", 0],["Yasuo", 0],["Zed", 500]]

champions[0][1] = 2500 * 3 - 3500

while(champions[1][1] < 9000){
    champions[1][1] += 1000
}


switch(champions[2][1]){
    case 3000:
        console.log("Ganhar mais XP")
        break

    case 500:
        do{
            champions[2][1] = 7000
            break
            

        }while(champions[2][1] = 7000)
        
        break

    default:
    console.log("Necessário ganhar XP para avançar de fase!")
    break
}

for (let i = 0; i < champions.length; i++) {
    let nome = champions[i][0];
    let xp = champions[i][1];
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) { 
        nivel = "Bronze";
    } else if (xp > 2000 && xp <= 5000) { 
        nivel = "Prata";
    } else if (xp > 5000 && xp <= 7000) { 
        nivel = "Ouro";
    } else if (xp > 7000 && xp <= 8000) { 
        nivel = "Platina";
    } else if (xp > 8000 && xp <= 9000) { 
        nivel = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) { 
        nivel = "Imortal";
    } else { 
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}