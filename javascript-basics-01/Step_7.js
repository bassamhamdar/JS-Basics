function shoes() {
    var shoeSize = document.getElementById('shoe_size').value;
    var birth = document.getElementById('year').value;
    var result = (shoeSize * 2 + 5)*50 - birth + 1766;
    alert(result);

}