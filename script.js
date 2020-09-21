let lastOperand = 0.0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

inputWindow.value = '0';
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

const clrzero = inputWindow => {
    if( inputWindow.value === '0'){
        inputWindow.value = '';
    }}
/*  number buttons */
document.getElementById('btn_1').addEventListener('click', function () {

    clrzero(inputWindow);
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    clrzero(inputWindow);
    inputWindow.value += '0';
})


/*  functions buttons  */
document.getElementById('btn_sum').addEventListener('click', function () {
    
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    
})

document.getElementById('btn_diff').addEventListener('click', function () {
    if (inputWindow.value === '0' || inputWindow.value === ''){
        inputWindow.value = '-';
    }else{
        lastOperand = parseFloat(inputWindow.value);
        operation = 'diff';
        inputWindow.value = '';
    }
})

document.getElementById('btn_mult').addEventListener('click', function () {
    
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
    
})

document.getElementById('btn_split').addEventListener('click', function () {
    
    lastOperand = parseFloat(inputWindow.value);
    operation = 'split';
    inputWindow.value = '';
    
})

document.getElementById('btn_sqrt').addEventListener('click', function () {

    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = ''; 
      
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})

/*  result button */
document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation === 'sum'){
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    
    if(operation === 'diff'){
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    
    if(operation === 'mult'){
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if(operation === 'split'){
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if(operation === 'sqrt'){
        const result = Math.sqrt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})
