// h1 {color: red}
// para las clases es .parrafito {color: red}
//para los id es #pid {color: red} 



const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');
const form = document.getElementById('form');

form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event) {
    //console.log({event})
    event.preventDefault();
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "El resultado es:" + sumaInput
}