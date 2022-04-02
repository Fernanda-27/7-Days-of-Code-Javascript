    //Se falando de comparação de variáveis de tipos diferentes, seria possível utilizar a comparação
    // "===" que compara até mesmo o tipo das variáveis. No entanto, para o caso acima, 
    // o comparador "==" funciona pois apesar do tipo ser diferente, o valor é o mesmo 
    // e é isso que se busca. 

    //para concatenar a variável dentro do console.log, pode ser feito: 
    //console.log ("A variável", +numeroUm, "e" , +stringUm, "possuem o mesmo valor, mas são de tipos diferentes")

    let numeroUm = 1; 
    let stringUm = '1';
    let numeroDez = 10;
    let stringDez = '10';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    
    if (numeroUm == stringUm) {
        console.log ("A variável 'numeroUm' e 'stringUm', possuem o mesmo valor, mas são de tipos diferentes")
    } else {
        console.log("As variáveis'numeroUm' e 'stringUm' são diferentes")
    }

    if (numeroDez == stringDez) {
        console.log ("A variável 'numeroDez' e 'stringDez' possuem o mesmo valor, mas são de tipos diferentes")
    } else {
        console.log("As variáveis'numeroDez' e 'stringDez' são diferentes")
    }

    if (numeroTrinta == stringTrinta) {
        console.log ("A variável 'numeroTrinta' e 'stringTrinta' possuem o mesmo valor, mas são de tipos diferentes")
    } else {
        console.log("As variáveis'numeroTrinta' e 'stringTrinta' são diferentes")
    }
