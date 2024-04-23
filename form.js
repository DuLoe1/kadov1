// Mengambil elemen form
var form = document.querySelector('form');

// Menambahkan event listener untuk event 'submit' pada form
form.addEventListener('submit', function(event) {
    // Mencegah form dari submit default
    event.preventDefault();

    // Mengambil nilai dari input nama
    var nama = document.getElementById('nama').value;

    // Lakukan sesuatu dengan nilai nama
    localStorage.setItem('nama', nama)
    window.location.replace('buka.html')
});
