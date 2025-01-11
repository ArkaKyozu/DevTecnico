let estados = {SP : 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, OUTROS: 19849.53};
let valorMensal = 0;

Object.values(estados).forEach(valor => {
    let valores = valor
    valorMensal += valores;
});

console.log(valorMensal);
Object.entries(estados).forEach(([estado, valor]) => {
    let porcentagem = (valor / valorMensal) * 100;

    console.log(`A representação de ${estado} é ${porcentagem.toFixed(2)}% do total`);
});


