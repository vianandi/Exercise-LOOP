var jwbBenar = 'Impact Byte';
var jwbUser = '';

while (jwbUser !== jwbBenar) {
    jwbUser = prompt('Sebutkan kepanjangan dari nama IB (Impact Byte)?');

    if (jwbUser === jwbBenar) {
        alert('Selamat jawaban kamu benar!');
    } else {
        alert('Maaf, jawaban kamu salah. Silakan coba lagi.');
    }
}
