//data santri kelas-B dengan mentor mas alvin
class SantriAwal {
  constructor(nama, nis, kelas, asalDaerah, tanggalMasuk, saldoSyahriah) {
    this.nama = nama;
    this.nis = nis;
    this.kelas = kelas;
    this.asalDaerah = asalDaerah;
    this.tanggalMasuk = tanggalMasuk;
    this.saldoSyahriah = saldoSyahriah;
  }

  bayarSyahriah(jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `[PEMBAYARAN] ${this.nama} membayar Rp${jumlah}. Sisa tagihan: Rp${this.saldoSyahriah}`,
    );
  }

  tampilkanBiodata() {
    console.log(`-----------------------------------`);
    console.log(`Nama          : ${this.nama}`);
    console.log(`NIS           : ${this.nis}`);
    console.log(`Kelas         : ${this.kelas}`);
    console.log(`Asal Daerah   : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk : ${this.tanggalMasuk}`);
    console.log(`Saldo Syahriah: Rp${this.saldoSyahriah}`);
  }
}

const daftarSantriAwal = [
  new SantriAwal("revaldi", "00001", "B", "Garut", "04-07-2026", 2500000),
  new SantriAwal("hudzaifah", "00002", "B", "lampung", "30-06-2026", 2500000),
  new SantriAwal("rayhan", "00003", "B", "jakarta", "30-06-2026", 2500000),
  new SantriAwal("blaky", "00004", "B", "Jerman", "30-06-2026", 2500000),
];

console.log("biodata santri kelas-B mentor : mas alvin");
daftarSantriAwal.forEach((santri) => {
  santri.tampilkanBiodata();
});

console.log("Tansaksi pembayaran");
for (const santri of daftarSantriAwal) {
  santri.bayarSyahriah(2500000);
}

console.log("Akses properti dot nation dan braket nation");

// 1. Penggunaan Dot Notation
// Alasan: Digunakan karena  properti ('nama') sudah pasti dan memenuhi aturan penulisan variabel
const namaSantriPertama = daftarSantriAwal[0].nama;
console.log(`[Dot Notation] Nama santri pertama: ${namaSantriPertama}`);

// 2. Penggunaan Bracket Notation
// Alasan: Sangat berguna ketika nama properti disimpan di dalam variabel dan menurut saya juga lebih dinamis.
const propertiYangDicari = "asalDaerah";
const asalSantriPertama = daftarSantriAwal[0][propertiYangDicari];
console.log(
  `[Bracket Notation] Asal daerah santri pertama: ${asalSantriPertama}`,
);
console.log(
  `sebagai keterangan untuk penyelesaian tugas ini saya menggunakan loping dan beberapa bagian yang mungkin belum di pelajari jadi ini pada dasar ada bantuan dari ai`,
);

//2.menyimpan dan mengitegritas dsta

function Santri(nama, nis, kelas, asalDaerah, tanggalMasuk, saldoSyahriah) {
  this.nama = nama;
  this.nis = nis;
  this.kelas = kelas;
  this.asalDaerah = asalDaerah;
  this.tanggalMasuk = tanggalMasuk;
  this.saldoSyahriah = saldoSyahriah;

  this.bayarSyahriah = function (jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `[PEMBAYARAN] ${this.nama} membayar Rp${jumlah}. Sisa tagihan: Rp${this.saldoSyahriah}`,
    );
  };

  this.tampilkanBiodata = function () {
    console.log(`-----------------------------------`);
    console.log(`Nama          : ${this.nama}`);
    console.log(`NIS           : ${this.nis}`);
    console.log(`Kelas         : ${this.kelas}`);
    console.log(`Asal Daerah   : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk : ${this.tanggalMasuk}`);
    console.log(`Saldo Syahriah: Rp${this.saldoSyahriah}`);
  };
}

const revaldi = new Santri(
  "Revaldi",
  "00001",
  "B",
  "Garut",
  "2026-07-04",
  2500000,
);
const hudzaifah = new Santri(
  "Hudzaifah",
  "00002",
  "B",
  "Lampung",
  "2026-06-30",
  2500000,
);
const rayhan = new Santri(
  "Rayhan",
  "00003",
  "B",
  "Jakarta",
  "2026-06-30",
  2500000,
);
const blaky = new Santri(
  "Blaky",
  "00004",
  "B",
  "Jerman",
  "2026-07-01",
  2500000,
);

const daftarSantri = [revaldi, hudzaifah, rayhan, blaky];

console.log("metode for of");
for (const santri of daftarSantri) {
  santri.tampilkanBiodata();
}

console.log("metode for in");
for (const key in revaldi) {
  if (typeof revaldi[key] !== "function") {
    console.log(`${key}: ${revaldi[key]}`);
  }
}

// Array cocok memakai for...of karena Array bersifat iterable yang memiliki elemen berurutan berdasarkan indeks, sedangkan Object cocok memakai for...in karena Object menyimpan data berupa pasangan key-value tanpa urutan indeks tertentu sehingga for...in berguna untuk memeriksa setiap key properti di dalam objek tersebut.

//3.validasi dan format data
function validasiInputSantri(dataMentah) {
  let namaRapi = dataMentah.nama
    .trim()
    .toLowerCase()
    .split(" ")
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(" ");
  let emailBersih = dataMentah.email.trim().toLowerCase();
  let nisNumber = parseInt(dataMentah.nis, 10);
  let saldoNumber = parseFloat(dataMentah.saldo);

  if (!emailBersih.includes("@") || !emailBersih.endsWith(".com")) {
    console.log(`[VALIDASI] Email ${emailBersih} tidak valid!`);
  }

  if (!dataMentah.nis.startsWith("000")) {
    console.log(
      `[VALIDASI] Format NIS ${dataMentah.nis} tidak sesuai standar!`,
    );
  }

  return {
    nama: namaRapi,
    email: emailBersih,
    nis: nisNumber,
    saldo: saldoNumber,
  };
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

const inputDummy = {
  nama: "   revaldi   ",
  email: "Revaldi@GMAIL.COM",
  nis: "00001",
  saldo: "2500000",
};

const hasilValidasi = validasiInputSantri(inputDummy);
console.log("hasil validasi");
console.log(hasilValidasi);
console.log("Format Saldo:", formatRupiah(hasilValidasi.saldo));

//data privat dengan closure
function buatPresensi() {
  let jumlahHadir = 0;
  let jumlahAlpa = 0;

  return {
    catatHadir: function () {
      jumlahHadir++;
      console.log("Hadir dicatat.");
    },
    catatAlpa: function () {
      jumlahAlpa++;
      console.log("Alpa dicatat.");
    },
    lihatRekap: function () {
      return `Hadir: ${jumlahHadir}, Alpa: ${jumlahAlpa}`;
    },
  };
}

const presensiRevaldi = buatPresensi();
console.log("uji closure presensi");
presensiRevaldi.catatHadir();
presensiRevaldi.catatHadir();
presensiRevaldi.catatAlpa();
console.log("Rekap Presensi:", presensiRevaldi.lihatRekap());

console.log(
  "Coba akses variabel privat langsung:",
  presensiRevaldi.jumlahHadir,
);

// Konsep Lexical Scope di sini membuat fungsi di dalam return bisa mengakses variabel jumlahHadir dan jumlahAlpa karena dibuat di dalam lingkup lokal fungsi buatPresensi(), sedangkan pihak luar tidak memiliki akses langsung ke variabel tersebut karena terisolasi oleh scope lokalnya.

//data wakru dengan objeck
const tglRevaldi = new Date("2026-07-04");
const tglHudzaifah = new Date("2026-06-30");
const tglRayhan = new Date("2026-06-30");
const tglBlaky = new Date("2026-07-01");

function hitungLamaMondok(tanggalMasuk) {
  const hariIni = new Date();
  const selisihWaktu = hariIni.getTime() - tanggalMasuk.getTime();
  const selisihHari = Math.floor(selisihWaktu / (1000 * 3600 * 24));
  return selisihHari;
}

function formatTanggalLokal(tanggal) {
  const opsi = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return tanggal.toLocaleDateString("id-ID", opsi);
}

console.log("waktu mondok santri");
console.log(`Tanggal Masuk Revaldi : ${formatTanggalLokal(tglRevaldi)}`);
console.log(`Lama Mondok           : ${hitungLamaMondok(tglRevaldi)} hari`);

//menyusun dan meringkas data
function tambahSantriBaru(dataDasar, ...infoTambahan) {
  return {
    ...dataDasar,
    catatanMentor: "Mas Alvin",
    infoTambahan: infoTambahan,
  };
}

console.log("rest parameter");
const santriTambahan = tambahSantriBaru(
  { nama: "Revaldi", kelas: "B" },
  "Juara Tahfidz",
  "Hobi Menulis Kode",
  "Disiplin",
);
console.log(santriTambahan);

console.log("objek destruc");
const { nama, kelas, saldoSyahriah } = revaldi;
console.log(
  `Santri ${nama} dari Kelas ${kelas} dengan Saldo: ${formatRupiah(saldoSyahriah)}`,
);

console.log("\spread operator");
const salinanDaftarSantri = [...daftarSantri];
salinanDaftarSantri.push(
  new Santri("Baru", "00005", "B", "Solo", "2026-08-01", 2000000),
);
console.log("Jumlah Data Asli   :", daftarSantri.length);
console.log("Jumlah Data Salinan:", salinanDaftarSantri.length);

const santriPutraB = [revaldi, hudzaifah];
const santriPutraA = [rayhan, blaky];
const gabunganSantri = [...santriPutraB, ...santriPutraA];

console.log("Total Gabungan Santri:", gabunganSantri.length);
