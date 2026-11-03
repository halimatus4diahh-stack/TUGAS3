// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0))
let porsi = 0

function siramtanaman() {
  // Tambah porsi makan +1
  porsi = porsi + 1
  
  // update angka porsi siram tanaman
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 20) {
    // ganti gambar benih menjadi tunas
    document.getElementById('foto-tanaman').src = "gambar/berbunga.jpg"
    
    // menampilkan tulisan berbunga
    document.getElementById('status-tanaman').innerText = "berbunga 🌸🌷"
  } else if (porsi >= 10) {
    // ganti gambar tunas menjadi berbunga
    document.getElementById('foto-tanaman').src = "gambar/tunas.jpg"
    
    // menampilkan tulisan tunas 
    document.getElementById('status-tanaman').innerText = "tunas 🌿"
  }
}