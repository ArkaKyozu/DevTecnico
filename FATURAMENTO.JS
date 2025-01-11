async function analiseFaturamento() {
  try {
    // Acessa o arquivo Json atraves de um servidor node
    const resposta = await fetch('http://192.168.100.11:8080/dadosFaturamento.json');
    if (!resposta.ok) {
      throw new Error(" Erro ao buscar dados: " + resposta.status);
    }
    const dados = await resposta.json();

     // atribui os dados buscados para a variavel faturamentos 
    const faturamentos = dados;
     
    //busca somente os valores do Json 
    const faturamentoValores = faturamentos.map(item => item.valor);

    // Total Faturamento mensal 
    let totalFaturamento = faturamentoValores.reduce((acumulador, atual) => acumulador + atual, 0);

    // Media Mesal 
    let diaSemZero = 0;
    faturamentoValores.forEach(element => {
        if(element  !== 0){
            diaSemZero += 1;
        }
    })
    let mediaMensal = totalFaturamento / diaSemZero;

    //menor Valor de faturamento 
    const menorValorObjeto = faturamentos.reduce((min, item) => Math.min(min, item.valor), 0);
    console.log( "Menor Valor Mesal: " + menorValorObjeto);

    // maior Faturamento do mes
    const maiorValorObjeto = faturamentos.reduce((max,item)=> Math.max(max, item.valor), 0);
    console.log("Maior Valor de Faturamento: " + maiorValorObjeto);


    // N° Dias em que ficou acima da media 

    let contagem = 0;
    
    faturamentoValores.forEach(element => {
        if(element > mediaMensal){
            contagem += 1;
        }
    });
    
    console.log( "contagem de Dias acima da Media: " + contagem); 
    
  } catch (erro) {
    console.log(erro);
  }
}

analiseFaturamento();
