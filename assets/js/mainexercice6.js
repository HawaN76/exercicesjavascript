function sendData() {
    var shoesSize = document.getElementById('shoeSize').value;
    var Birth = document.getElementById('Birth').value;
    var result = (((((shoesSize * 2) + 5) * 50) - Birth) + 1769); 
    alert ('résultat:' + result);
}
