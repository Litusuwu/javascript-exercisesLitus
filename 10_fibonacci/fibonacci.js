const fibonacci = function(valor) {
    var num = parseInt(valor);
    if(num < 0) return "OOPS";
    else{
        var arreglo = [];
        arreglo[0] = 0;
        arreglo[1] = 1;
        for(let i = 2 ; i <= valor ; i++){
            arreglo.push(arreglo[i-1] + arreglo[i-2] );
        }
        return arreglo[valor];
    }
};

// Do not edit below this line
module.exports = fibonacci;
