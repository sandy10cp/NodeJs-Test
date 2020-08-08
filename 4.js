function halfPrimid() {
    var kata = 'javascript'
    var total = kata.length;
    kata = kata.split('')

    var hasil = "";
    for (var i = 0; i < total; i++) {
        for (var j = 0; j <= i; j++) {
            hasil += kata[j];
        }
        console.log(hasil);
        hasil = "";
    }
}

halfPrimid()