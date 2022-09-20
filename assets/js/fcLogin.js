// Login Data Section

// fungsi untuk menyimpan informasi login user
// ambil informasi lengkap dari database sesuai username login
// simpan informasi ke file json
const fs = require("fs");
const remote = require('electron').remote;
const app = remote.app;
var pathData = app.getPath('userData') + "/data/";

if (!fs.existsSync(pathData)) {
    fs.mkdirSync(pathData);
}
if (!fs.existsSync(pathData + "entriSamasta1")) {
    fs.mkdirSync(pathData + "entriSamasta1");
}
if (!fs.existsSync(pathData + "entriSamasta2")) {
    fs.mkdirSync(pathData + "entriSamasta2");
}
if (!fs.existsSync(pathData + "entriSamasta3")) {
    fs.mkdirSync(pathData + "entriSamasta3");
}

async function createLoginData(vNamaUser) {
    let sql = `SELECT * FROM m_user WHERE namaUser  = '${vNamaUser}'`;
    r = await sqlite.get(sql);

    // first row only
    if (r) {
        sql2 = `SELECT * FROM t_setting WHERE id=1`;
        r2 = await sqlite.get(sql2);

        if (r2) {
            'use strict';
            const fs = require('fs');
            let userLogin = {
                slKodeUser: r.kodeUser,
                slKodeProv: r.kodeProv,
                slKodeKab: r.kodeKab,
                slKodeKec: r.kodeKec,
                slKodeDesa: r.kodeDesa,
                slKodeSLS: r.kodeSLS,
                slNamaUser: r.namaUser,
                slNamaLengkapUser: r.namaLengkapUser,
                slLevelUser: r.levelUser,
                slStatusUser: r.statusUser,
                slTahunSamasta1: r2.tahun_samasta1,
                slTahunSamasta2: r2.tahun_samasta2,
                slTahunSamasta3: r2.tahun_samasta3,
                slBulanSamasta3: r2.bulan_samasta3,
                slPathData: pathData
            };
            let data = JSON.stringify(userLogin);
            var namaFile = pathData + 'loginData.json';
            fs.writeFileSync(namaFile, data);
        }
    }
}

// fungsi untuk logout dari aplikasi
// menghapus informasi login dengan menghapus file json
// kembali ke halaman login
function logout() {
    // delete file json loginData. ganti delete ke empty saja
    //const fs = require('fs');
    //fs.unlinkSync(pathData+'loginData.json');

    const fs = require('fs');
    let userLogin = [];
    let data = JSON.stringify(userLogin);
    fs.writeFileSync(pathData + 'loginData.json', data);

    // kembali ke halaman login
    window.location = "login.html";
    sqlite.close();
}

// PR
// dialog box ketika klik tombol close
// ...

// fungsi untuk mengubah informasi login ke variabel html masing-masing
function getLoginData() {
    const fs = require('fs');

    let rawdata = fs.readFileSync(pathData + 'loginData.json');
    let loginData = JSON.parse(rawdata);
    dlKodeUser = loginData.slKodeUser;
    dlKodeProv = loginData.slKodeProv;
    dlKodeKab = loginData.slKodeKab;
    dlKodeKec = loginData.slKodeKec;
    dlKodeDesa = loginData.slKodeDesa;
    dlKodeSLS = loginData.slKodeSLS;
    dlNamaUser = loginData.slNamaUser;
    dlNamaLengkapUser = loginData.slNamaLengkapUser;
    dlLevelUser = loginData.slLevelUser;
    dlStatusUser = loginData.slStatusUser;
    dlTahunSamasta1 = loginData.slTahunSamasta1;
    dlTahunSamasta2 = loginData.slTahunSamasta2;
    dlTahunSamasta3 = loginData.slTahunSamasta3;
    dlBulanSamasta3 = loginData.slBulanSamasta3;
    dlPathData = loginData.slPathData;
}