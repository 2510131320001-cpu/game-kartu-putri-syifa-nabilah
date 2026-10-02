let daftarGambar = [
    { id: 1, nama: "Apel",     file: "apel.jpg" },
    { id: 2, nama: "Pisang",   file: "pisang.jpg" },
    { id: 3, nama: "Anggur",   file: "anggur.jpg" },
    { id: 4, nama: "Stroberi", file: "stroberry.jpg" },
    { id: 5, nama: "Jeruk",    file: "jeruk.jpg" },
    { id: 6, nama: "Kiwi",     file: "kiwi.jpg" },
    { id: 7, nama: "Semangka", file: "semangka.jpg" },
    { id: 8, nama: "Ceri",     file: "cherry.jpg" }
];

let papan = [];
let kartuPertama = null;
let kartuKedua = null;
let kunciPapan = false;
let percobaan = 0;
let pasanganDitemukan = 0;

const halamanHome = document.getElementById("halaman-awal");
const halamanGame = document.getElementById("halaman-game");
const halamanMenang = document.getElementById("halaman-menang");

const bentukpapan = document.getElementById("papan");
const hitungskor = document.getElementById("skor");
const temukanpasangan = document.getElementById("pasangan");
const skorAkhir = document.getElementById("skor-akhir");

const btnMulai = document.getElementById("btn-mulai");
const btnKembali = document.getElementById("btn-kembali");
const btnReset = document.getElementById("btn-reset");
const btnMainLagi = document.getElementById("btn-main-lagi");