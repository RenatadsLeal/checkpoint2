function microondas(comida, tempo) {
    switch (comida) {
        case "Pipoca":
            tempoPadrao = 10
            break;
        case "Macarrão":
            tempoPadrao = 8
            break;
        case "Brigadeiro":
            tempoPadrao = 8
            break;
        case "Carne":
            tempoPadrao = 15
            break;
        case "Feijão":
            tempoPadrao = 12
            break;
        default:
            console.log("Prato inexistente")
            return
    }
    if(tempo < tempoPadrao) {
        console.log("Tempo insuficiente!")
    }
    if(tempo >= tempoPadrao*2 && tempo < tempoPadrao*3) {
        console.log("Sua comida queimou!")
    }
    if(tempo >= tempoPadrao*3) {
        console.log("KABUMM")
    }
    else if(tempo >= tempoPadrao && tempo < tempoPadrao*2 ) {
        console.log("Prato pronto, bom apetite!")
    }
};

microondas("Carne", 30);
microondas("Pipoca",12);
microondas("Brigadeiro", 3);
microondas("Feijão", 50);
microondas("Arroz", 15);