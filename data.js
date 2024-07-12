const nama = 'Ramadhan';
let usia = 49 ;

let biodata = document.getElementById('biodata');


function generateBiodata () {
let gen

    if (usia > 14 && usia < 27) {
        // KONDISI PERTAMA
        gen = 'GENERASI Z';
    } else if ( usia > 28 && usia < 43) {
        gen = ' GENERASI Y';
    } else if (usia > 40 && usia < 55) {
        gen = 'GENERASI X';
    } else if ( usia > 0 && usia < 15 ) {
        gen = 'GENERASI ALPA';
    } else if (usia > 60 && usia < 100) {
        gen = 'BABY BOOMERS';
    } else {
        // kondisi tidak terpenuhini
        console.log ('wah lu jenis orang gimana sih?');
    }    
    return biodata.innerHTML = gen;
}

console.log (nama);
console.log (usia);
generateBiodata()

