function upperM(mesS) {
    var upperM = mesS.toUpperCase();
    console.log(upperM);
}

function addN(n1, n2) {
    var sum = n1 + n2;
    console.log(sum);
}

function retS(n1, n2) {
    var sum = n1 + n2;
    return sum;
}
var foods = ['cheese', 'chicken', 'grapes', 'hamburgers'];

function randI(min, max) {
    /*   var numOV = max - min + 1;
      var randN = Math.random();
      var randV = randN * numOV;
      var roundRV = Math.floor(randV);
      var finN = min + roundRV; 
    return finN;*/
    return Math.floor((max - min + 1) * Math.random() + min)
}
console.log(foods[randI(0, 3)]);