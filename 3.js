function cekVocal() {
    var kata = 'i love javascript';
    var v = 'a,i,u,e,o';
    v = v.split(',')
    kata = kata.split('')
    kata.map((kata, index) => {
        if (kata == v[1]) {
            console.log('$');
        } else if (kata == v[4]) {
            console.log('#');
        } else if (kata == v[3]) {
            console.log('$');
        }
        else if (kata == v[0]) {
            console.log('#');
        }
        else {
            console.log(kata);
        }
    })
}
cekVocal()