# Bookshelf App Starter Project

Ini adalah starter project untuk siswa yang sedang mengerjakan tugas akhir kelas Belajar Membuat Front-End Web untuk Pemula.

## Ketentuan Pengerjaan Tugas

Untuk mempermudah penilaian submission yang dikirim, Anda perlu memahami ketentuan-ketentuan berikut dalam mengerjakan tugas ini.

- Anda dilarang mengedit atau menghapus atribut `data-testid` pada elemen-elemen HTML.
- Ini masih berkaitan dengan poin sebelumnya. Jika Anda memiliki kebutuhan seperti styling elemen dan perlu menambahkan atribut seperti class, itu tidak dilarang selama atribut `data-testid` beserta nilainya tidak diubah atau dihapus.
- Dalam menampilkan data-data buku, Anda wajib memberikan beberapa atribut pada setiap elemennya.
  - `data-bookid`: menampung nilai ID masing-masing buku.
  - `data-testid`: penanda jenis data buku yang ditampilkan. Berikut daftarnya.
    - `bookItem`: elemen kontainer yang menampung data-data buku.
    - `bookItemTitle`: judul buku
    - `bookItemAuthor`: penulis buku
    - `bookItemYear`: tahun rilis buku
    - `bookItemIsCompleteButton`: tombol untuk mengubah kondisi buku dari “Belum selesai dibaca” menjadi “Selesai dibaca” atau sebaliknya.
    - `bookItemDeleteButton`: tombol untuk menghapus buku.
    - `bookItemEditButton`: tombol untuk mengubah data buku.

  Agar pengerjaan tugas lebih mudah, Anda dapat mengikuti templat buku berikut.

```html
<div data-bookid="{{ ID_buku }}" data-testid="bookItem">
  <h3 data-testid="bookItemTitle">{{ judul_buku }}</h3>
  <p data-testid="bookItemAuthor">Penulis: {{ penulis_buku }}</p>
  <p data-testid="bookItemYear">Tahun: {{ tahun_rilis_buku }}</p>
  <div>
    <button data-testid="bookItemIsCompleteButton">
      {{ tombol_untuk_ubah_kondisi }}
    </button>
    <button data-testid="bookItemDeleteButton">{{ tombol_untuk_hapus }}</button>
    <button data-testid="bookItemEditButton">{{ tombol_untuk_edit }}</button>
  </div>
</div>
```

Selamat mengerjakan dan sukses selalu!

# KRITERIA WAJIB

Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak.

Untuk lebih jelasnya, ada lima kriteria wajib yang harus Anda penuhi.

Kriteria Wajib 1: Gunakan localStorage sebagai Penyimpanan
Data buku yang ditampilkan pada rak-rak harus dapat bertahan walaupun halaman web ditutup. Dengan begitu, Anda harus menyimpan data buku pada localStorage.
Setiap buku harus berupa objek JavaScript yang membawa beberapa data berikut. Pastikan nama properti beserta tipe data value-nya juga sesuai.
Format objek beserta tipe data nilainya.

{
id: string | number,
title: string,
author: string,
year: number,
isComplete: boolean,
}
Berikut contoh implementasi data buku riilnya.

{
id: 3657848524,
title: 'Harry Potter and the Philosopher\'s Stone',
author: 'J.K Rowling',
year: 1997,
isComplete: false,
}

Kriteria Wajib 2: Mampu Menambahkan Buku
Aplikasi harus mampu menyimpan buku baru menggunakan formulir yang telah disediakan dalam starter project.
ID buku harus dihasilkan secara otomatis dan unik. Tipsnya, Anda dapat memanfaatkan timestamp sebagai nilainya. Nilai timestamp dapat diperoleh dengan kode new Date().getTime() atau Number(new Date()).
Formulir setidaknya bisa menghasilkan empat data berikut.
title: judul buku.
author: penulis buku.
year: tahun rilis buku bertipe number.
isComplete: kondisi apakah sudah selesai dibaca atau belum.

Kriteria Wajib 3: Memiliki Dua Rak Buku
Aplikasi wajib memiliki 2 Rak buku, yakni “Belum selesai dibaca” dan “Selesai dibaca”.
Rak "Belum selesai dibaca" hanya menyimpan buku-buku dengan isComplete bernilai false.
Rak "Selesai dibaca" hanya menyimpan buku-buku dengan isComplete bernilai true.

Kriteria Wajib 4: Dapat Memindahkan Buku Antar Rak
Buku-buku dalam rak harus dapat dipindahkan ke rak lainnya, baik "Belum selesai dibaca" maupun "Selesai dibaca". Pastikan perubahan ini juga tersimpan dalam localStorage.

Kriteria Wajib 5: Dapat Menghapus Data Buku
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dihapus. Selain menghilang dari halaman, data buku dalam localStorage juga harus terhapus.

# KRITERIA OPSIONAL

Kriteria Opsional 1: Menambahkan Fitur Pencarian Buku
Memiliki fitur pencarian buku yang telah disimpan dan ditampilkan pada rak sesuai dengan title buku yang dituliskan pada kolom pencarian.

Kriteria Opsional 2: Menambahkan Fitur Edit Buku
Selain dapat menambahkan baru, buku-buku yang telah tersimpan diharapkan dapat diedit.
