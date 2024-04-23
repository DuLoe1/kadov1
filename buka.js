onload = () => {
let nama = document.getElementById('namaLocal')
nama.innerText = localStorage.getItem('nama')
}