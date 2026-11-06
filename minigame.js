// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0))
let air = 0

function siramtanaman() {
  // Tambah porsi penyiraman +1
  air = air + 1
  
  // update angka air siram tanaman
  document.getElementById('teks-porsi').innerText = air
  
  if (air >= 20) {
    // ganti gambar benih menjadi tunas
    document.getElementById('foto-tanaman').src = "gambar/berbunga.jpg"
    
    // menampilkan tulisan berbunga
    document.getElementById('status-tanaman').innerText = "berbunga 🌸🌷"
  } else if (air >= 10) {
    // ganti gambar tunas menjadi berbunga
    document.getElementById('foto-tanaman').src = "gambar/tunas.jpg"
    
    // menampilkan tulisan tunas 
    document.getElementById('status-tanaman').innerText = "tunas 🌿"
  }
}