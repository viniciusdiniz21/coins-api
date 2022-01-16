async function newApi(){
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json()
    console.log(data)
    const USDBRL = data.USDBRL.ask
    console.log(USDBRL)
    document.getElementById("dolar").innerHTML = USDBRL;
    return USDBRL
}

async function newApi_2(){
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL');
    const data = await response.json()
    console.log(data)
    const BTCBRL = data.BTCBRL.ask
    console.log(BTCBRL)
    document.getElementById("btc").innerHTML = BTCBRL;
    return BTCBRL
}

newApi()
newApi_2()





