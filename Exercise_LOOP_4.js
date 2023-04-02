var jmlKlik = 0;
var konfirmasi = true;

while (konfirmasi) {
    var hasilKonfirmasi = confirm('Apakah anda mau mengulang?');

    if (hasilKonfirmasi) {
        jmlKlik++;
    } else {
        konfirmasi = false;
        alert('Perulangan sudah dilakukan sebanyak ' + jmlKlik + ' kali.');
    }
}