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

function tampilkanHalaman(tampilanhalaman) {
    halamanHome.style.display = "none";
    halamanGame.style.display = "none";
    halamanMenang.style.display = "none";
    document.getElementById(tampilanhalaman).style.display = "block";
}

function siapkanPapan() {
    papan = [];

    daftarGambar.forEach(function(gambar) {
        papan.push({ id: gambar.id, nama: gambar.nama, file: gambar.file });
        papan.push({ id: gambar.id, nama: gambar.nama, file: gambar.file });
    });

    for (let i = papan.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = papan[i];
        papan[i] = papan[j];
        papan[j] = temp;
    }
}

function tampilkanPapan() {
    bentukpapan.innerHTML = "";

    papan.forEach(function(kartu, objek) {
        const div = document.createElement("div");
        div.className = "kartu";
        div.dataset.objek = objek;
    
        const img = document.createElement("img");
        img.src = kartu.file;
        img.alt = kartu.nama;
        div.appendChild(img);

        div.addEventListener("click", function() {
            TekanKartu(div, objek);
        });
        bentukpapan.appendChild(div);
    });
}

function TekanKartu(elemen, objek) {
    if (kunciPapan === true) return;
    if (elemen.classList.contains("terbuka")) return;
    if (elemen.classList.contains("cocok")) return;

    elemen.classList.add("terbuka");

    if (kartuPertama === null) {
        kartuPertama = { elemen: elemen, objek: objek };
        return;
    }

    kartuKedua = { elemen: elemen, objek: objek };
    percobaan++;
    hitungskor.textContent = percobaan;

    cekPasangan();
}

function cekPasangan() {
    let pasangan1 = kartuPertama.objek;
    let pasangan2 = kartuKedua.objek;

    if (papan[pasangan1].id === papan[pasangan2].id) {
        kartuPertama.elemen.classList.add("cocok");
        kartuKedua.elemen.classList.add("cocok");
        pasanganDitemukan++;
        temukanpasangan.textContent = pasanganDitemukan;
        resetPilihan();

        if (pasanganDitemukan === 8) {
            setTimeout(function() {
                skorAkhir.textContent = percobaan;
                tampilkanHalaman("halaman-menang");
            },800);
        }
    } else {
        kunciPapan = true;
        setTimeout(function() {
            kartuPertama.elemen.classList.remove("terbuka");
            kartuKedua.elemen.classList.remove("terbuka");
            resetPilihan();
            kunciPapan = false;
        }, 1000);
    }
}