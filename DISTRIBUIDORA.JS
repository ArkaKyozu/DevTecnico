let estados = {SP : 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, OUTROS: 19849.53};
let valorMensal = 0;

// Lista os valores e atribui o total para a variavel ValorMensal
Object.values(estados).forEach(valor => {
    let valores = valor
    valorMensal += valores;
});


//Define a porcetagem de cada estado, levando em conta o total 
Object.entries(estados).forEach(([estado, valor]) => {
    let porcentagem = (valor / valorMensal) * 100;

    console.log(`A representação de ${estado} é ${porcentagem.toFixed(2)}% do total`);
});


