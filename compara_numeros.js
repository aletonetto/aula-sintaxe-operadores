/*function comparaNumeros(num1, num2){
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if(saoIguais) {
        return "São Iguais";
    }
    return "Não são iguais";
}*/
function comparaNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase (num1, num2);
    const segundaFrase = criasegundafrase (num1, num2);

    return '${primeirafrase} ${segundaFrase}'
    }

    function criaPrimeiraFrase(num1, num2) {
        let saoIguais = '';

        if(num1 !== num2) {
            saoIguais ='não';

        }
        return 'Os numeros ${nu1} e ${num2} ${saoIguais} São Iguais.'
    };

    function criaSegundaFrase(num1, num2){
        const soma = num1 + num2;

        let resultado10 = 'menor';
        let resultado20 = 'menor';
        const compare10 = soma > 10;
        const compara20 = soma >20;

        if(compara10) {
            resultado10 = 'maior';
        }

        return 'Sua soma é ${soma}, qque é ${resultado10} que 10 e ${resultado20} que 20.'
    }

    console.log(comparaNumeros(20,20));