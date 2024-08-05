const palindromes = function (string) {
    var indMed = (string.length / 2), stringR = string.split('').reverse().join('');
    for(let i = 0 ; i < indMed ; i++){
        if(string[i] != stringR[i])return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
