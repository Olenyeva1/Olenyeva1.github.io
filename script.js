function guessName() {
    var name = document.getElementById('nameInput').value;
    var result = document.getElementById('result');

    if (name) {
        result.textContent = "Nama Anda adalah " + name + "!";
    } else {
        result.textContent = "Silakan masukkan nama Anda.";
    }
}