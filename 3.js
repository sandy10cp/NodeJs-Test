function cekVocal() {
    var kata = 'i love javascript';
    var v = 'a,i,u,e,o';
    v = v.split(',')
    kata = kata.split('')
    kata.map(kata => {
        console.log(kata);
    })
}
cekVocal()