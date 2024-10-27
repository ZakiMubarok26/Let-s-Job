// Tambahkan event listener untuk button "Tambah Kursus"
document.getElementById("tambah-kursus").addEventListener("click", function() {
  // Tampilkan form tambah kursus
  document.getElementById("form-tambah-kursus").style.display = "block";
});

// Tambahkan event listener untuk button "Simpan"
document.getElementById("simpan-kursus").addEventListener("click", function() {
  // Simpan data kursus baru
  var namaKursus = document.getElementById("nama-kursus").value;
  var kategoriKursus = document.getElementById("kategori-kursus").value;
  
  // Tambahkan kode untuk menyimpan data kursus baru ke database atau API
  
  // Tutup form tambah kursus
  document.getElementById("form-tambah-kursus").style.display = "none";
});