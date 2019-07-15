let calculateTip = function() { 
    let valores = getFieldValues();

    let valorPago = valores.fullPrice;
    let porcentagem = valores.tipPercentage / 100;

    let resultado = porcentagem * valorPago;

    $('#tipPrice').text(resultado);
}

let calculatePersonPrice = function() {
    let valores = getFieldValues();

    let quantidadePessoas = valores.person;
    let valorPago = valores.fullPrice;
    
    let resultado = valorPago / quantidadePessoas;

    $('#personPrice').text(resultado);
}

let getFieldValues = function() {
    return {
        person: $('#person').val(),
        fullPrice: $('#fullPrice').val(),
        tipPercentage: $('#tipPercentage').val()
    }
}

let calculate = function(){
    calculateTip();
    calculatePersonPrice();
}

jQuery(function($){
    $("#fullPrice").mask("000.00", {placeholder:"R$ 000,00"})
});

