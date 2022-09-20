async function validasi_samasta2() {
    await bacaIsiJsonRT();
    await runRuleValidasiSamasta2();

    // menampilkan Daftar Error
    if (error_samasta2.length > 0) {
        document.getElementById('daftarError').innerHTML =
            `<div class="card" style="margin-bottom: 0rem; border:0px">
                <div class="card-header"><strong>Daftar Error <span style="color:red">(${error_samasta2.length} error)</span></strong>        
                    <div class="float-right">
                        <button class="btn btn-danger navbar-toggler aside-menu-toggler border-secondary" type="button"
                        data-toggle="aside-menu-lg-show" style="border: 1px solid; color:#c8ced3!important">x
                        </button>
                    </div>
                </div>
            </div>`;
    } else {
        document.getElementById('daftarError').innerHTML =
            `<div class="card" style="margin-bottom: 0rem; border:0px">
                <div class="card-header"><strong>Daftar Error <span style="color:green">(Clean)</span></strong>        
                    <div class="float-right">
                        <button class="btn btn-danger navbar-toggler aside-menu-toggler border-secondary" type="button"
                        data-toggle="aside-menu-lg-show" style="border: 1px solid; color:#c8ced3!important">x
                        </button>
                    </div>
                </div>
            </div>`;
    }

    error_samasta2.forEach(error => {
        var daftarError = "";
        daftarError += `<div class="list-group-item list-group-item-accent-danger list-group-item-divider">`;
        daftarError += `<div><b>ID Error</b>: ${error.id}<br> ${error.msg}. <button class="btn btn-danger btn-sm" onclick="gotoErrorSamasta2('${error.page}','${error.variabel}','${error.id}')">Cek</button></div>`;
        daftarError += `</div>`;
        document.getElementById('daftarError').innerHTML += daftarError;
    });
}

async function gotoErrorSamasta2(page, variabel, id) {
    await updateIsiJsonRT();
    location.href = `#/samasta-2/${page}/`;
    setTimeout(() => {
        document.getElementById(variabel).focus();
    }, 500);
}

async function runRuleValidasiSamasta2() {
    error_samasta2 = [];
    //await bacaIsiJsonRT();

    function isValidDate(dateString) {
        // First check for the pattern
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if (year < 1900 || year > 2100 || month == 0 || month > 12)
            return false;

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Adjust for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    };

    //page 1
    if (b1r106 === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r106', 'id': 'b1r106_1', 'msg': 'Rincian <b>B1R106 Nama Kepala Rumah Tangga</b> tidak boleh kosong' });
    }
    /* if (b1r109 === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r106', 'id': 'b1r106_1', 'msg': 'Rincian <b>B1R106 Nama Kepala Rumah Tangga</b> tidak boleh kosong' });
    } */
    if (b1r106.length < 3) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r106', 'id': 'b1r106_2', 'msg': 'Rincian <b>B1R106 Nama Kepala Rumah Tangga</b> minimal terdiri dari 3 karakter' });
    }

    if (b1r108 === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r108', 'id': 'b1r108_1', 'msg': 'Rincian <b>B1R108 Alamat</b> tidak boleh kosong' });
    }
    if (b1r108.length < 3) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r108', 'id': 'b1r108_2', 'msg': 'Rincian <b>B1R108 Alamat</b> minimal terdiri dari 3 karakter' });
    }

    if (b1r109 !== '' && b1r109.length < 10) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b1r109', 'id': 'b1r109_1', 'msg': 'Rincian <b>B1R109 Nomor Handphone</b> kurang dari 10 digit' });
    }

    if (b2r201a === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r201a', 'id': 'b2r201a_1', 'msg': 'Rincian <b>b2r201a Pendata</b> tidak boleh kosong' });
    }
    if (b2r201a.length < 3) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r201a', 'id': 'b2r201a_2', 'msg': 'Rincian <b>b2r201a Pendata</b> kurang dari 3 karakter' });
    }

    if (b2r201b === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r201b', 'id': 'b2r201b_1', 'msg': 'Rincian <b>b2r201b Pemeriksa</b> tidak boleh kosong' });
    }
    if (b2r201b.length < 3) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r201b', 'id': 'b2r201b_2', 'msg': 'Rincian <b>b2r201b Pemeriksa</b> kurang dari 3 karakter' });
    }

    if (b2r202a_dd === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_1', 'msg': 'Rincian <b>b2r202a_dd Tanggal Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    if (b2r202a_mm === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202a_mm', 'id': 'b2r202a_mm_1', 'msg': 'Rincian <b>b2r202a_mm Bulan Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    if (b2r202a_yy === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202a_yy', 'id': 'b2r202a_yy_1', 'msg': 'Rincian <b>b2r202a_yy Tahun Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    var b2r202a_date = b2r202a_mm + '/' + b2r202a_dd + '/' + b2r202a_yy;
    if (!isValidDate(b2r202a_date)) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_2', 'msg': 'Rincian <b>b2r202a_dd/b2r202a_mm/b2r202a_yy Tanggal Pelaksanaan Pendataan</b> bukan tanggal yang valid' });
    }

    if (b2r202b_dd === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202b_dd', 'id': 'b2r202b_dd_1', 'msg': 'Rincian <b>b2r202b_dd Tanggal Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    if (b2r202b_mm === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202b_mm', 'id': 'b2r202b_mm_1', 'msg': 'Rincian <b>b2r202b_mm Bulan Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    if (b2r202b_yy === '') {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202b_yy', 'id': 'b2r202b_yy_1', 'msg': 'Rincian <b>b2r202b_yy Tahun Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    var b2r202b_date = b2r202b_mm + '/' + b2r202b_dd + '/' + b2r202b_yy;
    if (!isValidDate(b2r202b_date)) {
        error_samasta2.push({ 'page': 1, 'variabel': 'b2r202b_dd', 'id': 'b2r202b_dd_2', 'msg': 'Rincian <b>b2r202b_dd/b2r202b_mm/b2r202b_yy Tanggal Pelaksanaan Pemeriksaan</b> bukan tanggal yang valid' });
    }
    if (isValidDate(b2r202a_date) && isValidDate(b2r202b_date)) {
        var dateCacah = new Date(b2r202a_date);
        var datePeriksa = new Date(b2r202b_date);
        if (dateCacah.getTime() > datePeriksa.getTime()) {
            error_samasta2.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_all', 'msg': 'Rincian <b>b2r202b_dd/b2r202b_mm/b2r202b_yy Tanggal Pelaksanaan Pendataan</b> tidak boleh lebih besar daripada <b>Tanggal Pelaksanaan Pendataan</b>' });
        }
    }

    //page 2
    for (i = 0; i < artPage2.length; i++) {
        if (artPage2[i].k402 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k402[${i}]`, 'id': `k402[${i}]_1`, 'msg': 'Rincian <b>B4K402 Nama Anggota Rumah Tangga</b> tidak boleh kosong' });
        }
    }

    if (artPage2[0].k403 != 1) {
        error_samasta2.push({ 'page': 2, 'variabel': `k403[0]`, 'id': `k403[0]_1`, 'msg': 'Baris pertama rincian <b>B4K403  Hubungan dengan Kepala Rumah Tangga</b> harus terisi 1' });
    }

    for (i = 0; i < artPage2.length; i++) {
        if (artPage2[i].k403 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k403[${i}]`, 'id': `k403[${i}]_2`, 'msg': 'Rincian <b>B4K403 Hubungan dengan Kepala Rumah Tangga</b> tidak boleh kosong' });
        }
        if (artPage2[i].k403 == 1 && (artPage2[i].k404 != artPage2[i].nuArt || artPage2[i].k405 != 1)) {
            error_samasta2.push({ 'page': 2, 'variabel': `k403[${i}]`, 'id': `k403[${i}]_3`, 'msg': 'Jika rincian B4K403 Hubungan dengan Kepala Rumah Tangga berkode 1, maka <b>B4K404 harus sama dengan B4K401</b> dan <b>B4K405 harus berkode 1</b>' });
        }
        if ((artPage2[i].k403 == 2 || artPage2[i].k403 == 5 || artPage2[i].k403 == 7) && artPage3[i].k414 == 1) {
            error_samasta2.push({ 'page': 2, 'variabel': `k403[${i}]`, 'id': `k403[${i}]_4`, 'msg': 'Jika rincian B4K403 Hubungan dengan Kepala Rumah Tangga berkode 2, 5 atau 7, maka <b>B4K414 Status perkawinan - belum kawin</b> tidak boleh berkode 1' });
        }
    }

    for (i = 0; i < artPage2.length; i++) {
        var match = 0;
        for (j = 0; j < artPage2.length; j++) {
            if (artPage2[i].k404 == artPage2[j].nuArt) {
                match = 1;
                if (artPage2[j].k404 != artPage2[j].nuArt) {
                    error_samasta2.push({ 'page': 2, 'variabel': `k404[${j}]`, 'id': `k404[${j}]_4`, 'msg': 'ART ini menjadi Kepala Keluarga ART yang lain, tapi <b>B4K404 ART ini tidak sama dengan B4K401 ART ini</b>' });
                }
            }
        }
        if (match == 0) {
            error_samasta2.push({ 'page': 2, 'variabel': `k404[${i}]`, 'id': `k404[${i}]_5`, 'msg': 'Rincian B4K404 Nomor Urut Kepala Keluarga tidak ada dalam B4K401 Nomor Urut Rumah Tangga' });
        }
    }

    for (i = 0; i < artPage2.length; i++) {
        if (artPage2[i].k404 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k404[${i}]`, 'id': `k404[${i}]_1`, 'msg': 'Rincian <b>B4K404 Nomor Urut Kepala Keluarga</b> tidak boleh kosong' });
        }
        if (artPage2[i].k404 == artPage2[i].nuArt && artPage2[i].k405 != 1) {
            error_samasta2.push({ 'page': 2, 'variabel': `k404[${i}]`, 'id': `k404[${i}]_2`, 'msg': 'Jika rincian B4K404 sama dengan B4K401, maka rincian <b>B4K405 Hubungan dengan Kepala Keluarga</b> harus berkode 1' });
        }
        if (artPage2[i].k404 != artPage2[i].nuArt && artPage2[i].k405 == 1) {
            error_samasta2.push({ 'page': 2, 'variabel': `k404[${i}]`, 'id': `k404[${i}]_3`, 'msg': 'Jika rincian B4K404 tidak sama dengan B4K401, maka rincian <b>B4K405 Hubungan dengan Kepala Keluarga</b> tidak boleh berkode 1' });
        }
    }

    for (i = 0; i < artPage2.length; i++) {
        if (artPage2[i].k405 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k405[${i}]`, 'id': `k405[${i}]_1`, 'msg': 'Rincian <b>B4K405 Hubungan dengan Kepala Keluarga</b> tidak boleh kosong' });
        }
        if ((artPage2[i].k405 == 2 || artPage2[i].k405 == 5 || artPage2[i].k405 == 7) && artPage3[i].k414 == 1) {
            error_samasta2.push({ 'page': 2, 'variabel': `k405[${i}]`, 'id': `k405[${i}]_2`, 'msg': 'Jika rincian B4K405 Hubungan dengan Kepala Keluarga berkode 2, 5 atau 7, maka <b>B4K414 Status perkawinan - belum kawin</b> tidak boleh berkode 1' });
        }

        if (artPage2[i].k406 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k406[${i}]`, 'id': `k406[${i}]_1`, 'msg': 'Rincian <b>B4K406 Apakah biasanya tinggal di rumah tangga ini</b> tidak boleh kosong' });
        }
        if (artPage2[i].k406 == 0 && (artPage2[i].k407 === '' || artPage2[i].k408 === '' || artPage2[i].k409 === '')) {
            error_samasta2.push({ 'page': 2, 'variabel': `k406[${i}]`, 'id': `k406[${i}]_2`, 'msg': 'Jika rincian B4K406 berkode 0, maka <b>rincian B4K407 sampai dengan B4K409</b> tidak boleh kosong' });
        }

        if (artPage2[i].k406 == 1 && artPage2[i].k407 !== '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k407[${i}]`, 'id': `k407[${i}]_1`, 'msg': 'Jika rincian B4K406 terisi 1, maka rincian <b>B4K407 Provinsi domisili saat ini</b> tidak boleh kosong' });
        }

        if (artPage2[i].k406 == 1 && artPage2[i].k408 !== '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k408[${i}]`, 'id': `k408[${i}]_1`, 'msg': 'Jika rincian B4K406 terisi 1, maka rincian <b>B4K408 Kabupaten domisili saat ini</b> tidak boleh kosong' });
        }

        if (artPage2[i].k406 == 1 && artPage2[i].k409 !== '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k409[${i}]`, 'id': `k409[${i}]_1`, 'msg': 'Jika rincian B4K406 terisi 1, maka rincian <b>B4K409 Alasan utama tidak tinggal di rumah tangga ini</b> tidak boleh kosong' });
        }

        if (+artPage2[i].k410 + +artPage2[i].k411 == 0) {
            error_samasta2.push({ 'page': 2, 'variabel': `k410[${i}]`, 'id': `k410[${i}]_1`, 'msg': 'Rincian <b>B4K410/B4K411 Jenis Kelamin</b> salah satu harus terisi kode 1 dan lainnya 0' });
        }

        if (+artPage2[i].k410 + +artPage2[i].k411 > 1) {
            error_samasta2.push({ 'page': 2, 'variabel': `k410[${i}]`, 'id': `k410[${i}]_2`, 'msg': 'Rincian <b>B4K410/B4K411 Jenis Kelamin</b> ada lebih dari satu kolom yang terisi kode 1' });
        }

        if (artPage2[i].k410 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k410[${i}]`, 'id': `k410[${i}]_3`, 'msg': 'Rincian <b>B4K410 Jenis Kelamin Laki-Laki</b> tidak boleh kosong' });
        }

        if (artPage2[i].k411 === '') {
            error_samasta2.push({ 'page': 2, 'variabel': `k411[${i}]`, 'id': `k411[${i}]_1`, 'msg': 'Rincian <b>B4K411 Jenis Kelamin Perempuan</b> tidak boleh kosong' });
        }
        for (a = 0; a < artPage2.length; a++) {
            if (artPage2[i].k403 == 1 && artPage2[a].k403 == 2) {
                if ((artPage2[i].k410 == 1 && artPage2[a].k410 == 1) || (artPage2[i].k411 == 1 && artPage2[a].k411 == 1)) {
                    error_samasta2.push({ 'page': 2, 'variabel': `k410[${i}]`, 'id': `k410[${i}]_all_1`, 'msg': 'ART ini suami istri dengan ART lainnya, namun keduanya berjenis kelamin sama' });
                }
            }
            if (artPage2[i].k405 == 1 && artPage2[a].k405 == 2 && (artPage2[i].k404 == artPage2[a].k404)) {
                if ((artPage2[i].k410 == 1 && artPage2[a].k410 == 1) || (artPage2[i].k411 == 1 && artPage2[a].k411 == 1)) {
                    error_samasta2.push({ 'page': 2, 'variabel': `k410[${i}]`, 'id': `k410[${i}]_all_2`, 'msg': 'ART ini suami istri dengan ART lainnya, namun keduanya berjenis kelamin sama' });
                }
            }
        }
    }

    if (set_kk == 0) {
        error_samasta2.push({ 'page': 2, 'variabel': `btnSetKK[0]`, 'id': `btnSetKK`, 'msg': 'Proses <b>Set Kepala Keluarga</b> belum dilakukan, atau ada perubahan isian terkait ART yang menjadi Kepala Keluarga' });
    }

    //page 3
    k412_date = [];

    for (i = 0; i < artPage2.length; i++) {
        var umur;
        if (+artPage3[i].k412_mm > +b2r202a_mm) {
            umur = +b2r202a_yy - +artPage3[i].k412_yy - 1;
        }
        if (+artPage3[i].k412_mm < +b2r202a_mm) {
            umur = +b2r202a_yy - +artPage3[i].k412_yy;
        }
        if (+artPage3[i].k412_mm == +b2r202a_mm) {
            if (+artPage3[i].k412_dd > +b2r202a_dd) {
                umur = +b2r202a_yy - +artPage3[i].k412_yy - 1;
            }
            if (+artPage3[i].k412_dd <= +b2r202a_dd) {
                umur = +b2r202a_yy - +artPage3[i].k412_yy;
            }
        }
        if (+artPage3[i].k413 != umur) {
            error_samasta2.push({ 'page': 3, 'variabel': `k413[${i}]`, 'id': `k413[${i}]_2`, 'msg': '<b>B4K413 Umur ART</b> tidak sesuai dengan perhitungan <b>B4K412 Kapan dilahirkan dikurangi B1R201a Tanggal Pendataan</b>' });
        }
    }

    for (i = 0; i < artPage2.length; i++) {
        if (artPage3[i].k412_dd === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k412_dd[${i}]`, 'id': `k412_dd[${i}]_1`, 'msg': 'Rincian <b>B4K412_dd Tanggal Dilahirkan</b> tidak boleh kosong' });
        }

        if (artPage3[i].k412_mm === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k412_mm[${i}]`, 'id': `k412_mm[${i}]_1`, 'msg': 'Rincian <b>B4K412_mm Bulan Dilahirkan</b> tidak boleh kosong' });
        }

        if (artPage3[i].k412_yy === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k412_yy[${i}]`, 'id': `k412_yy[${i}]_1`, 'msg': 'Rincian <b>B4K412_yy Tahun Dilahirkan</b> tidak boleh kosong' });
        }
        k412_date[i] = artPage3[i].k412_mm + '/' + artPage3[i].k412_dd + '/' + artPage3[i].k412_yy;
        if (!isValidDate(k412_date[i])) {
            error_samasta2.push({ 'page': 3, 'variabel': `k412_dd[${i}]`, 'id': `k412_dd[${i}]_2`, 'msg': 'Rincian <b>k412_dd/k412_mm/k412_yy Kapan Dilahirkan</b> bukan tanggal yang valid' });
        }

        if (artPage3[i].k413 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k413[${i}]`, 'id': `k413[${i}]_1`, 'msg': 'Rincian <b>B4K413 Umur</b> tidak boleh kosong' });
        }

        if (+artPage3[i].k414 + +artPage3[i].k415 + +artPage3[i].k416 + +artPage3[i].k417 == 0) {
            error_samasta2.push({ 'page': 3, 'variabel': `k414[${i}]`, 'id': `k414[${i}]_1`, 'msg': 'Rincian <b>B4K414/B4K415/B4K16/B4K17 Status Perkawinan</b> salah satu harus terisi kode 1 dan lainnya 0, tidak boleh kosong atau 0 semua' });
        }

        if (+artPage3[i].k414 + +artPage3[i].k415 + +artPage3[i].k416 + +artPage3[i].k417 > 1) {
            error_samasta2.push({ 'page': 3, 'variabel': `k414[${i}]`, 'id': `k414[${i}]_2`, 'msg': 'Rincian <b>B4K414/B4K415/B4K16/B4K17 Status Perkawinan</b> ada lebih dari satu kolom yang terisi kode 1' });
        }

        if (artPage3[i].k414 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k414[${i}]`, 'id': `k414[${i}]_3`, 'msg': 'Rincian <b>B4K414 Status Perkawinan Belum Kawin</b> tidak boleh kosong' });
        }

        if (artPage3[i].k415 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k415[${i}]`, 'id': `k415[${i}]_1`, 'msg': 'Rincian <b>B4K415 Status Perkawinan Kawin</b> tidak boleh kosong' });
        }

        if (artPage3[i].k416 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k416[${i}]`, 'id': `k416[${i}]_1`, 'msg': 'Rincian <b>B4K416 Status Perkawinan Cerai Hidup</b> tidak boleh kosong' });
        }

        if (artPage3[i].k417 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k417[${i}]`, 'id': `k417[${i}]_1`, 'msg': 'Rincian <b>B4K416 Status Perkawinan Cerai Mati</b> tidak boleh kosong' });
        }

        if (artPage3[i].k418 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k418[${i}]`, 'id': `k418[${i}]_1`, 'msg': 'Rincian <b>B4K418 Apakah tercantum dalam Kartu Keluarga di keluarga ini</b> tidak boleh kosong' });
        }

        if (artPage3[i].k419 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k419[${i}]`, 'id': `k419[${i}]_1`, 'msg': 'Rincian <b>B4K419 Apakah Kartu Keluarga beralamat di desa/kelurahan ini</b> tidak boleh kosong' });
        }

        if ((artPage2[i].nuArt != artPage2[i].k404) && artPage3[i].k420 != 0) {
            error_samasta2.push({ 'page': 3, 'variabel': `k420[${i}]`, 'id': `k420[${i}]_1`, 'msg': 'ART bukan Kepala Keluarga (K401 tidak sama dengan K404), maka rincian <b>B4K420 Apakah Kepala Keluarga memiliki buku nikah</b> harus terisi 0' });
        }

        if (artPage3[i].k421 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k421[${i}]`, 'id': `k421[${i}]_1`, 'msg': 'Rincian <b>B4K421 Apakah memiliki KTP</b> tidak boleh kosong' });
        }
        if (+artPage3[i].k413 < 17 && artPage3[i].k421 == 1) {
            error_samasta2.push({ 'page': 3, 'variabel': `k421[${i}]`, 'id': `k421[${i}]_2`, 'msg': 'Rincian b4k413 Umur kurang dari 17, maka rincian <b>B4K421 Apakah memiliki KTP</b> harus terisi 0' });
        }

        if (artPage3[i].k422 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k422[${i}]`, 'id': `k422[${i}]_1`, 'msg': 'Rincian <b>B4K422 Status warga negara</b> tidak boleh kosong' });
        }

        if (artPage3[i].k423 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k423[${i}]`, 'id': `k423[${i}]_1`, 'msg': 'Rincian <b>B4K423 Handphone yang dimiliki</b> tidak boleh kosong. Jika tidak memiliki, isikan 0' });
        }

        if (artPage3[i].k424 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k424[${i}]`, 'id': `k424[${i}]_1`, 'msg': 'Rincian <b>B4K424 PC yang dimiliki</b> tidak boleh kosong. Jika tidak memiliki, isikan 0' });
        }

        if (artPage3[i].k425 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k425[${i}]`, 'id': `k425[${i}]_1`, 'msg': 'Rincian <b>B4K425 Laptop/Notebook yang dimiliki</b> tidak boleh kosong. Jika tidak memiliki, isikan 0' });
        }

        if (artPage3[i].k426 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k426[${i}]`, 'id': `k426[${i}]_1`, 'msg': 'Rincian <b>B4K426 Tablet yang dimiliki</b> tidak boleh kosong. Jika tidak memiliki, isikan 0' });
        }

        if (artPage3[i].k427 === '') {
            error_samasta2.push({ 'page': 3, 'variabel': `k427[${i}]`, 'id': `k427[${i}]_1`, 'msg': 'Rincian <b>B4K427 Akses internet 3 bulan terakhir</b> tidak boleh kosong' });
        }
    }

    //page 4    
    for (i = 0; i < artPage2.length; i++) {
        if (+artPage4[i].k428 + +artPage4[i].k429 + +artPage4[i].k430 == 0) {
            error_samasta2.push({ 'page': 4, 'variabel': `k428[${i}]`, 'id': `k428[${i}]_1`, 'msg': 'Rincian <b>B4K428/B4K429/B4k430 Status Sekolah</b> salah satu harus terisi kode 1 dan lainnya 0, tidak boleh kosong atau 0 semua' });
        }

        if (+artPage4[i].k428 + +artPage4[i].k429 + +artPage4[i].k430 > 1) {
            error_samasta2.push({ 'page': 4, 'variabel': `k428[${i}]`, 'id': `k428[${i}]_2`, 'msg': 'Rincian <b>B4K428/B4K429/B4k430 Status Sekolah</b> ada lebih dari satu kolom yang terisi kode 1' });
        }

        if (artPage4[i].k428 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k428[${i}]`, 'id': `k428[${i}]_3`, 'msg': 'Rincian <b>B4K428 Status Sekolah Tidak/belum pernah sekolah</b> tidak boleh kosong' });
        }

        if (artPage4[i].k428 == 1 && (artPage4[i].k431 != 0 || artPage4[i].k432 != 0)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k428[${i}]`, 'id': `k428[${i}]_4`, 'msg': 'ART tidak/belum pernah sekolah, maka rincian <b>B4K431 Jenjang pendidikan terakhir dan B4K432 Ijazah tertinggi</b> harus terisi kode 0' });
        }

        if (artPage4[i].k429 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k429[${i}]`, 'id': `k429[${i}]_1`, 'msg': 'Rincian <b>B4K429 Status Sekolah Masih bersekolah</b> tidak boleh kosong' });
        }

        if (artPage4[i].k430 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k430[${i}]`, 'id': `k430[${i}]_1`, 'msg': 'Rincian <b>B4K430 Status Sekolah Tidak bersekolah lagi</b> tidak boleh kosong' });
        }

        if (artPage4[i].k431 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_1`, 'msg': 'Rincian <b>B4K431 Jenjang pendidikan yang sedang/terakhir dijalani</b> tidak boleh kosong' });
        }
        if ((artPage4[i].k429 == 1 || artPage4[i].k430 == 1) && artPage4[i].k431 == 0) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_2`, 'msg': 'ART masih bersekolah atau tidak bersekolah lagi, maka rincian <b>B4K431 Jenjang pendidikan terakhir</b> tidak boleh terisi kode 0' });
        }
        if (+artPage4[i].k413 < 6 && artPage4[i].k429 == 1 && (+artPage4[i].k431 >= 11 && +artPage4[i].k431 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_3`, 'msg': 'ART masih bersekolah di jenjang SLB, tapi umurnya kurang dari 6 tahun' });
        }
        if (+artPage4[i].k413 < 11 && artPage4[i].k429 == 1 && artPage4[i].k431 == 3) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_4`, 'msg': 'ART masih bersekolah di jenjang SLTP, tapi umurnya kurang dari 11 tahun' });
        }
        if (+artPage4[i].k413 < 11 && artPage4[i].k430 == 1 && artPage4[i].k431 == 3) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_5`, 'msg': 'ART tidak bersekolah lagi di jenjang SLTP, tapi umurnya kurang dari 11 tahun' });
        }
        if (+artPage4[i].k413 < 14 && artPage4[i].k429 == 1 && artPage4[i].k431 == 4) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_6`, 'msg': 'ART masih bersekolah di jenjang SLTA, tapi umurnya kurang dari 14 tahun' });
        }
        if (+artPage4[i].k413 < 14 && artPage4[i].k430 == 1 && artPage4[i].k431 == 4) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_7`, 'msg': 'ART tidak bersekolah lagi di jenjang SLTA, tapi umurnya kurang dari 14 tahun' });
        }
        if ((+artPage4[i].k431 >= 5 && +artPage4[i].k431 <= 8) && (artPage4[i].k429 == 1) && (+artPage4[i].k413 < 17 || +artPage4[i].k413 > 50)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_8`, 'msg': 'ART masih bersekolah di jenjang D1/D2/D3/S1, tapi umurnya kurang dari 17 tahun' });
        }
        if ((+artPage4[i].k431 >= 5 && +artPage4[i].k431 <= 8) && (artPage4[i].k430 == 1) && (+artPage4[i].k413 < 17)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_9`, 'msg': 'ART tidak bersekolah lagi di jenjang D1/D2/D3/S1, tapi umurnya kurang dari 17 tahun' });
        }
        if ((artPage4[i].k431 == 9) && (artPage4[i].k429 == 1) && (+artPage4[i].k413 < 20 || +artPage4[i].k413 > 65)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_10`, 'msg': 'ART masih bersekolah di jenjang S2, tapi umur kurang dari 20 tahun atau lebih dari 65 tahun.' });
        }
        if ((artPage4[i].k431 == 9) && (artPage4[i].k430 == 1) && (+artPage4[i].k413 < 20)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_11`, 'msg': 'ART tidak bersekolah lagi di jenjang S2, tapi umur kurang dari 20 tahun' });
        }
        if (artPage4[i].k431 == 10 && (artPage4[i].k429 == 1) && (+artPage4[i].k413 < 21 || +artPage4[i].k413 > 65)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_12`, 'msg': 'ART masih bersekolah di jenjang S3, tapi umur kurang dari 21 tahun atau lebih dari 65 tahun.' });
        }
        if ((artPage4[i].k431 == 10) && (artPage4[i].k430 == 1) && (+artPage4[i].k413 < 21)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_13`, 'msg': 'ART tidak bersekolah lagi di jenjang S3, tapi umur kurang dari 21 tahun' });
        }
        if ((artPage4[i].k429 == 1 || artPage4[i].k430 == 1) && (artPage4[i].k431 == 2) && (+artPage4[i].k413 < 5)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_14`, 'msg': 'ART masih bersekolah di jenjang SD atau tidak bersekolah lagi di jenjang SD, tapi umur kurang dari 5 tahun' });
        }
        if ((artPage4[i].k429 == 1 || artPage4[i].k430 == 1) && (artPage4[i].k431 == 3) && (+artPage4[i].k413 < 11)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_15`, 'msg': 'ART masih bersekolah di jenjang SLTP atau tidak bersekolah lagi di jenjang SLTP, tapi umur kurang dari 11 tahun' });
        }
        if ((artPage4[i].k429 == 1 || artPage4[i].k430 == 1) && (artPage4[i].k431 == 4) && (+artPage4[i].k413 < 14)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k431[${i}]`, 'id': `k431[${i}]_16`, 'msg': 'ART masih bersekolah di jenjang SLTA atau tidak bersekolah lagi di jenjang SLTA, tapi umur kurang dari 14 tahun' });
        }

        if (artPage4[i].k432 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_1`, 'msg': 'Rincian <b>B4K432 Ijazah tertinggi yang dimiliki</b> tidak boleh kosong' });
        }
        if (artPage4[i].k432 >= 2 && artPage4[i].k433 == 0) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_2`, 'msg': 'B4R432 Ijazah tertinggi SD atau jenjang lebih tinggi, tetapi rincian <b>B4K433 Apakah dapat membaca huruf dan angka latin</b> terisi kode 0' });
        }
        if (artPage4[i].k432 == 1) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_3`, 'msg': 'Rincian <b>B4K432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi kode 1' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 2 && (artPage4[i].k432 >= 2 && artPage4[i].k432 <= 10)) { // mulai ini
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_4`, 'msg': 'ART masih bersekolah di jenjang SD, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> harus Tidak punya ijazah' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 2 && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_5`, 'msg': 'ART masih bersekolah di jenjang SD, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 3 && (artPage4[i].k432 < 2 || (artPage4[i].k432 >= 3 && artPage4[i].k432 <= 10))) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_6`, 'msg': 'ART masih bersekolah di jenjang SLTP, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> harus jenjang SD' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 3 && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_7`, 'msg': 'ART masih bersekolah di jenjang SLTP, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 4 && (artPage4[i].k432 < 3 || (artPage4[i].k432 >= 4 && artPage4[i].k432 <= 10))) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_8`, 'msg': 'ART masih bersekolah di jenjang SLTA, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> harus jenjang SLTP' });
        }
        if (artPage4[i].k429 == 1 && artPage4[i].k431 == 4 && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_9`, 'msg': 'ART masih bersekolah di jenjang SLTA, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 >= 5 && artPage4[i].k431 <= 6) && (artPage4[i].k432 < 4)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_10`, 'msg': 'ART masih bersekolah di jenjang D1/D2, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kurang dari 4' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 >= 5 && artPage4[i].k431 <= 6) && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_11`, 'msg': 'ART masih bersekolah di jenjang D1/D2, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 7) && (artPage4[i].k432 < 4)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_12`, 'msg': 'ART masih bersekolah di jenjang D3, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kurang dari 4' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 7) && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_13`, 'msg': 'ART masih bersekolah di jenjang D3, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 8) && (artPage4[i].k432 < 4)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_14`, 'msg': 'ART masih bersekolah di jenjang S1, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kurang dari 4' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 8) && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_15`, 'msg': 'ART masih bersekolah di jenjang S1, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 9) && (artPage4[i].k432 < 8)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_16`, 'msg': 'ART masih bersekolah di jenjang S2, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kurang dari 8' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 9) && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_17`, 'msg': 'ART masih bersekolah di jenjang S2, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 10) && (artPage4[i].k432 < 9)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_18`, 'msg': 'ART masih bersekolah di jenjang S3, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kurang dari 9' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 == 10) && (artPage4[i].k432 >= 11 && artPage4[i].k432 <= 13)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_19`, 'msg': 'ART masih bersekolah di jenjang S3, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 11-13' });
        }
        if (artPage4[i].k429 == 1 && (artPage4[i].k431 >= 11 && artPage4[i].k431 <= 13) && (artPage4[i].k432 == 1 || (artPage4[i].k432 > 3 && artPage4[i].k432 <= 10))) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_20`, 'msg': 'ART masih bersekolah di jenjang SLB, maka rincian <b>b4k432 Ijazah tertinggi yang Dimiliki</b> tidak boleh terisi kode 4-10' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 1 && +artPage4[i].k432 > 0) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_21`, 'msg': 'ART jenjang sekolah tertinggi TK/playgroup, maka rincian <b>b4rk432 Ijazah tertinggi yang dimiliki</b> harus berkode 0' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 2 && (artPage4[i].k432 == 1 || +artPage4[i].k432 > 2)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_22`, 'msg': 'ART jenjang sekolah tertinggi SD, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain kode 0 atau 2' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 3 && (+artPage4[i].k432 < 2 || +artPage4[i].k432 > 3)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_23`, 'msg': 'ART jenjang sekolah tertinggi SLTP, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain kode 2 atau 3' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 4 && (+artPage4[i].k432 < 3 || +artPage4[i].k432 > 4)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_24`, 'msg': 'ART jenjang sekolah tertinggi SLTA, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain kode 3 atau 4' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 5 && (+artPage4[i].k432 < 4 || +artPage4[i].k432 > 7)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_25`, 'msg': 'ART jenjang sekolah tertinggi D1, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 4, 5, 6 atau 7' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 6 && (+artPage4[i].k432 < 4 || +artPage4[i].k432 > 7)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_26`, 'msg': 'ART jenjang sekolah tertinggi D2, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 4, 5, 6 atau 7' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 7 && (+artPage4[i].k432 < 4 || +artPage4[i].k432 > 7)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_27`, 'msg': 'ART jenjang sekolah tertinggi D3, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 4, 5, 6 atau 7' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 8 && (+artPage4[i].k432 < 4 || +artPage4[i].k432 > 10)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_28`, 'msg': 'ART jenjang sekolah tertinggi S1, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 4, 5, 6, 7, 8, 9 atau 10' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 9 && (+artPage4[i].k432 < 8 || +artPage4[i].k432 > 10)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_29`, 'msg': 'ART jenjang sekolah tertinggi S2, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 8, 9 atau 10' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 10 && (+artPage4[i].k432 < 9 || +artPage4[i].k432 > 10)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_30`, 'msg': 'ART jenjang sekolah tertinggi S3, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 9 atau 10' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 11 && (artPage4[i].k432 == 1 || +artPage4[i].k432 > 3)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_31`, 'msg': 'ART jenjang sekolah tertinggi SLB, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 0, 2, atau 3' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 12 && (artPage4[i].k432 == 1 || +artPage4[i].k432 > 3)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_32`, 'msg': 'ART jenjang sekolah tertinggi SLB, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 0, 2, atau 3' });
        }
        if (artPage4[i].k430 == 1 && artPage4[i].k431 == 13 && (artPage4[i].k432 == 1 || +artPage4[i].k432 > 3)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k432[${i}]`, 'id': `k432[${i}]_33`, 'msg': 'ART jenjang sekolah tertinggi SLB, maka rincian <b>b4k432 Ijazah tertinggi yang dimiliki</b> tidak boleh terisi selain 0, 2, atau 3' });
        }

        if (artPage4[i].k433 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k433[${i}]`, 'id': `k433[${i}]_1`, 'msg': 'Rincian <b>B4K433 Apakah dapat membaca huruf dan angka latin</b> tidak boleh kosong' });
        }

        if (artPage4[i].k434 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k434[${i}]`, 'id': `k434[${i}]_1`, 'msg': 'Rincian <b>B4K434 Apakah bekerja</b> tidak boleh kosong' });
        }

        if (artPage4[i].k434 == 1 && artPage4[i].k435 === '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k435[${i}]`, 'id': `k435[${i}]_1`, 'msg': 'Rincian B4K434 terisi 1, maka rincian <b>B4K435 Pekerjaan utama</b> tidak boleh kosong' });
        }

        if (artPage4[i].k434 == 0 && artPage4[i].k435 !== '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k435[${i}]`, 'id': `k435[${i}]_2`, 'msg': 'Rincian B4K434 terisi 0, maka rincian <b>B4K435 Pekerjaan utama</b> tidak boleh terisi' });
        }

        if (artPage4[i].k434 == 1 && (artPage4[i].k436 < 1 || artPage4[i].k436 > 27)) {
            error_samasta2.push({ 'page': 4, 'variabel': `k436[${i}]`, 'id': `k436[${i}]_1`, 'msg': 'Rincian B4K434 terisi 1, maka rincian <b>B4K436 Lapangan pekerjaan utama (kode)</b> tidak sesuai dengan Kode Lapangan Pekerjaan Utama' });
        }

        if (artPage4[i].k434 == 0 && artPage4[i].k436 !== '') {
            error_samasta2.push({ 'page': 4, 'variabel': `k436[${i}]`, 'id': `k436[${i}]_2`, 'msg': 'Rincian B4K434 terisi 0, maka rincian <b>B4K436 Lapangan pekerjaan utama (kode)</b> tidak boleh terisi' });
        }
    }

    //page 5  
    for (i = 0; i < artPage2.length; i++) {
        if (+artPage5[i].k437 + +artPage5[i].k438 + +artPage5[i].k439 == 0) {
            error_samasta2.push({ 'page': 5, 'variabel': `k437[${i}]`, 'id': `k437[${i}]_1`, 'msg': 'Rincian <b>B4K437/B4K438/B4k439 Apakah memiliki jaminan kesehatan BPJS Kesehatan</b> salah satu harus terisi kode 1 dan lainnya 0, tidak boleh kosong atau 0 semua' });
        }

        if (+artPage5[i].k437 + +artPage5[i].k438 + +artPage5[i].k439 > 1) {
            error_samasta2.push({ 'page': 5, 'variabel': `k437[${i}]`, 'id': `k437[${i}]_2`, 'msg': 'Rincian <b>B4K437/B4K438/B4k439 Apakah memiliki jaminan kesehatan BPJS Kesehatan</b> ada lebih dari satu kolom yang terisi kode 1' });
        }

        if (artPage5[i].k437 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k437[${i}]`, 'id': `k437[${i}]_3`, 'msg': 'Rincian <b>B4K437 Penerima Bantuan PBI</b> tidak boleh kosong' });
        }

        if (artPage5[i].k438 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k438[${i}]`, 'id': `k438[${i}]_1`, 'msg': 'Rincian <b>B4K438 Non PBI</b> tidak boleh kosong' });
        }

        if (artPage5[i].k439 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k439[${i}]`, 'id': `k439[${i}]_1`, 'msg': 'Rincian <b>B4K439 Tidak punya</b> tidak boleh kosong' });
        }

        if (artPage5[i].k440 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k440[${i}]`, 'id': `k440[${i}]_1`, 'msg': 'Rincian <b>B4K440 Ibu yang punya balita 0-4 tahun, apakah ikut posyandu</b> tidak boleh kosong' });
        }
        if (artPage2[i].k411 == 0 && artPage5[i].k440 == 1) {
            error_samasta2.push({ 'page': 5, 'variabel': `k440[${i}]`, 'id': `k440[${i}]_2`, 'msg': 'Jenis kelamin ART bukan perempuan, maka rincian <b>B4K440 Ibu yang punya balita 0-4 tahun, apakah ikut posyandu</b> harus terisi kode 0' });
        }
        if (artPage3[i].k414 == 1 && artPage5[i].k440 == 1) {
            error_samasta2.push({ 'page': 5, 'variabel': `k440[${i}]`, 'id': `k440[${i}]_3`, 'msg': 'Status perkawinan ART belum kawin, maka rincian <b>B4K440 Ibu yang punya balita 0-4 tahun, apakah ikut posyandu</b> harus terisi kode 0' });
        }

        if (artPage5[i].k441 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k441[${i}]`, 'id': `k441[${i}]_1`, 'msg': 'Rincian <b>B4K441 Apakah memiliki kecacatan tuna rungu</b> tidak boleh kosong' });
        }

        if (artPage5[i].k442 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k442[${i}]`, 'id': `k442[${i}]_1`, 'msg': 'Rincian <b>B4K442 Apakah memiliki kecacatan tuna wicara</b> tidak boleh kosong' });
        }

        if (artPage5[i].k443 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k443[${i}]`, 'id': `k443[${i}]_1`, 'msg': 'Rincian <b>B4K443 Apakah memiliki kecacatan tuna netra</b> tidak boleh kosong' });
        }

        if (artPage5[i].k444 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k444[${i}]`, 'id': `k444[${i}]_1`, 'msg': 'Rincian <b>B4K444 Apakah memiliki kecacatan lumpuh</b> tidak boleh kosong' });
        }

        if (artPage5[i].k445 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k445[${i}]`, 'id': `k445[${i}]_1`, 'msg': 'Rincian <b>B4K445 Apakah memiliki kecacatan sumbing</b> tidak boleh kosong' });
        }

        if (artPage5[i].k446 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k446[${i}]`, 'id': `k446[${i}]_1`, 'msg': 'Rincian <b>B4K446 Apakah memiliki kecacatan cacat kulit</b> tidak boleh kosong' });
        }

        if (artPage5[i].k447 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k447[${i}]`, 'id': `k447[${i}]_1`, 'msg': 'Rincian <b>B4K447 Apakah memiliki kecacatan cacat fisik/daksa</b> tidak boleh kosong' });
        }

        if (artPage5[i].k448 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k448[${i}]`, 'id': `k448[${i}]_1`, 'msg': 'Rincian <b>B4K448 Apakah memiliki kecacatan cacat mental/gila</b> tidak boleh kosong' });
        }

        if (artPage5[i].k449 === '') {
            error_samasta2.push({ 'page': 5, 'variabel': `k449[${i}]`, 'id': `k449[${i}]_1`, 'msg': 'Rincian <b>B4K449 Apakah memiliki kecacatan autis</b> tidak boleh kosong' });
        }
    }

    //page 6  
    for (i = 0; i < artPage2.length; i++) {
        if (artPage6[i].k450 === '' || artPage6[i].k451 === '' || artPage6[i].k452 === '' || artPage6[i].k453 === '' || artPage6[i].k454 === '' || artPage6[i].k455 === '' || artPage6[i].k456 === '' || artPage6[i].k457 === '' || artPage6[i].k458 === '' || artPage6[i].k459 === '' || artPage6[i].k460 === '' || artPage6[i].k461 === '' || artPage6[i].k462 === '' || artPage6[i].k463 === '') {
            error_samasta2.push({ 'page': 6, 'variabel': `k450[${i}]`, 'id': `page6_all_1`, 'msg': 'Seluruh rincian <b>B4K450 sampai dengan B4K463</b> tidak boleh kosong' });
        }

        if (artPage2[i].k410 == 1 && (artPage6[i].k450 != 0 || artPage6[i].k451 != 0 || artPage6[i].k452 != 0 || artPage6[i].k453 != 0 || artPage6[i].k454 != 0 || artPage6[i].k455 != 0 || artPage6[i].k456 != 0 || artPage6[i].k457 != 0 || artPage6[i].k458 != 0 || artPage6[i].k459 != 0 || artPage6[i].k460 != 0 || artPage6[i].k461 != 0 || artPage6[i].k462 != 0 || artPage6[i].k463 != 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k450[${i}]`, 'id': `page6_all_2`, 'msg': 'ART berjenis kelamin laki-laki, maka seluruh rincian <b>B4K450 sampai dengan B4K463</b> harus terisi kode 0' });
        }

        if (artPage2[i].k411 == 1 && artPage3[i].k414 == 1 && (artPage6[i].k450 != 0 || artPage6[i].k451 != 0 || artPage6[i].k452 != 0 || artPage6[i].k453 != 0 || artPage6[i].k454 != 0 || artPage6[i].k455 != 0 || artPage6[i].k456 != 0 || artPage6[i].k457 != 0 || artPage6[i].k458 != 0 || artPage6[i].k459 != 0 || artPage6[i].k460 != 0 || artPage6[i].k461 != 0 || artPage6[i].k462 != 0 || artPage6[i].k463 != 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k450[${i}]`, 'id': `page6_all_3`, 'msg': 'ART berjenis kelamin perempuan dan status perkawinan Belum Kawin, maka seluruh rincian <b>B4K450 sampai dengan B4K463</b> harus terisi kode 0' });
        }

        if (artPage2[i].k411 == 1 && (artPage3[i].k413 < 10 || artPage3[i].k413 > 54) && (artPage6[i].k450 != 0 || artPage6[i].k451 != 0 || artPage6[i].k452 != 0 || artPage6[i].k453 != 0 || artPage6[i].k454 != 0 || artPage6[i].k455 != 0 || artPage6[i].k456 != 0 || artPage6[i].k457 != 0 || artPage6[i].k458 != 0 || artPage6[i].k459 != 0 || artPage6[i].k460 != 0 || artPage6[i].k461 != 0 || artPage6[i].k462 != 0 || artPage6[i].k463 != 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k450[${i}]`, 'id': `page6_all_4`, 'msg': 'ART berjenis kelamin perempuan dan usia tidak antara 10-54 tahun, maka seluruh rincian <b>B4K450 sampai dengan B4K463</b> harus terisi kode 0' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 0) && (artPage6[i].k451 != 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k451[${i}]`, 'id': `k451[${i}]_1`, 'msg': 'ART adalah PUS dan bukan akseptor KB, maka rincian <b>B4K451 bulan mulai masuk KB</b> harus terisi kode 0' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 1) && (artPage6[i].k452 == 0 && artPage6[i].k453 == 0 && artPage6[i].k454 == 0 && artPage6[i].k455 == 0 && artPage6[i].k456 == 0 && artPage6[i].k457 == 0 && artPage6[i].k458 == 0 && artPage6[i].k459 == 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k452[${i}]`, 'id': `k452[${i}]_1`, 'msg': 'ART adalah PUS dan akseptor KB, maka rincian <b>B4K452 sampai dengan B4K459 Jika tidak KB</b> minimal salah satu harus terisi kode 1' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 0) && (artPage6[i].k452 == 1 || artPage6[i].k453 == 1 || artPage6[i].k454 == 1 || artPage6[i].k455 == 1 || artPage6[i].k456 == 1 || artPage6[i].k457 == 1 || artPage6[i].k458 == 1 || artPage6[i].k459 == 1)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k452[${i}]`, 'id': `k452[${i}]_2`, 'msg': 'ART adalah PUS dan bukan akseptor KB, maka rincian <b>B4K452 sampai dengan B4K459 Jika tidak KB</b> harus terisi 0' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 1) && (artPage6[i].k460 == 1 || artPage6[i].k461 == 1 || artPage6[i].k462 == 1 || artPage6[i].k463 == 1)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k460[${i}]`, 'id': `k460[${i}]_1`, 'msg': 'ART adalah PUS dan akseptor KB, maka rincian <b>B4K460 sampai dengan B4K463 Jika tidak KB</b> harus terisi kode 0' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 0) && (artPage6[i].k460 == 0 && artPage6[i].k461 == 0 && artPage6[i].k462 == 0 && artPage6[i].k463 == 0)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k460[${i}]`, 'id': `k460[${i}]_2`, 'msg': 'ART adalah PUS dan bukan akseptor KB, maka rincian <b>B4K460 sampai dengan B4K463 Jika tidak KB</b> salah satu harus terisi kode 1' });
        }

        if ((artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 == 0) && (+artPage6[i].k460 + +artPage6[i].k461 + +artPage6[i].k462 + +artPage6[i].k463 > 1)) {
            error_samasta2.push({ 'page': 6, 'variabel': `k460[${i}]`, 'id': `k460[${i}]_3`, 'msg': 'ART adalah PUS dan bukan akseptor KB, maka rincian <b>B4K460 sampai dengan B4K463 Jika tidak KB</b> ada lebih dari satu kolom yang terisi kode 1' });
        }

        /* if (artPage2[i].k411 == 1 && (artPage3[i].k413 >= 10 && artPage3[i].k413 <= 54) && artPage3[i].k415 == 1 && artPage6[i].k450 === '') {
            error_samasta2.push({ 'page': 6, 'variabel': `k450[${i}]`, 'id': `k450[${i}]_1`, 'msg': 'ART adalah PUS, maka rincian <b>B4K450 Apakah akseptor KB</b> tidak boleh kosong' });
        } */
    }

    //page 7
    for (i = 0; i < kkPage7.length; i++) {
        if (kkPage7[i].k503 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k503[${i}]`, 'id': `k503[${i}]_1`, 'msg': 'Rincian <b>B5K503 Jumlah Lahir</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k504 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k504[${i}]`, 'id': `k504[${i}]_1`, 'msg': 'Rincian <b>B5K504 Jumlah Mati</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k505 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k505[${i}]`, 'id': `k505[${i}]_1`, 'msg': 'Rincian <b>B5K505 Jumlah Datang</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k506 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k506[${i}]`, 'id': `k506[${i}]_1`, 'msg': 'Rincian <b>B5K506 Jumlah Pindah</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k507 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k507[${i}]`, 'id': `k507[${i}]_1`, 'msg': 'Rincian <b>B5K507 Jumlah kejadian Nikah</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k508 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k508[${i}]`, 'id': `k508[${i}]_1`, 'msg': 'Rincian <b>B5K508 Jumlah kejadian Talak</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k509 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k509[${i}]`, 'id': `k509[${i}]_1`, 'msg': 'Rincian <b>B5K509 Jumlah kejadian Cerai</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k510 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k510[${i}]`, 'id': `k510[${i}]_1`, 'msg': 'Rincian <b>B5K510 Jumlah kejadian Rujuk</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k511 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k511[${i}]`, 'id': `k511[${i}]_1`, 'msg': 'Rincian <b>B5K511 Jumlah Kendaraan yang Dimiliki - Sepeda</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k512 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k512[${i}]`, 'id': `k512[${i}]_1`, 'msg': 'Rincian <b>B5K512 Jumlah Kendaraan yang Dimiliki - Gerobak</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k513 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k513[${i}]`, 'id': `k513[${i}]_1`, 'msg': 'Rincian <b>B5K513 Jumlah Kendaraan yang Dimiliki - Kendaraan Roda Tiga (Tosa)</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k514 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k514[${i}]`, 'id': `k514[${i}]_1`, 'msg': 'Rincian <b>B5K514 Jumlah Kendaraan yang Dimiliki - Becak</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k515 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k515[${i}]`, 'id': `k515[${i}]_1`, 'msg': 'Rincian <b>B5K515 Jumlah Kendaraan yang Dimiliki - Becak Motor</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k516 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k516[${i}]`, 'id': `k516[${i}]_1`, 'msg': 'Rincian <b>B5K516 Sepeda Motor</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k517 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k517[${i}]`, 'id': `k517[${i}]_1`, 'msg': 'Rincian <b>B5K517 Oplet/Mikrolet</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k518 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k518[${i}]`, 'id': `k518[${i}]_1`, 'msg': 'Rincian <b>B5K518 Jumlah Kendaraan yang Dimiliki - Colt Bak</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k519 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k519[${i}]`, 'id': `k519[${i}]_1`, 'msg': 'Rincian <b>B5K519 Jumlah Kendaraan yang Dimiliki - Taksi</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k520 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k520[${i}]`, 'id': `k520[${i}]_1`, 'msg': 'Rincian <b>B5K520 Mobil/Sepeda Motor Dinas</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k521 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k521[${i}]`, 'id': `k521[${i}]_1`, 'msg': 'Rincian <b>B5K521 Mobil Pribadi</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k522 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k522[${i}]`, 'id': `k522[${i}]_1`, 'msg': 'Rincian <b>B5K522 Truk</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k523 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k523[${i}]`, 'id': `k523[${i}]_1`, 'msg': 'Rincian <b>B5K523 Perahu</b> tidak boleh kosong' });
        }

        if (kkPage7[i].k524 === '') {
            error_samasta2.push({ 'page': 7, 'variabel': `k524[${i}]`, 'id': `k524[${i}]_1`, 'msg': 'Rincian <b>B5K524 Lainnya</b> tidak boleh kosong' });
        }

    }

    //page8
    for (i = 0; i < kkPage8.length; i++) {
        if (kkPage8[i].k525 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k525[${i}]`, 'id': `k525[${i}]_1`, 'msg': 'Rincian <b>B5k525 Luas lahan yang dimiliki - Sawah</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k526 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k526[${i}]`, 'id': `k526[${i}]_1`, 'msg': 'Rincian <b>B5k526 Luas lahan yang dimiliki - Tegal kebun</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k527 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k527[${i}]`, 'id': `k527[${i}]_1`, 'msg': 'Rincian <b>B5k527 Luas lahan yang dimiliki - Ladang/huma</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k528 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k528[${i}]`, 'id': `k528[${i}]_1`, 'msg': 'Rincian <b>B5k528 Luas lahan yang dimiliki - Perkebunan</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k529 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k529[${i}]`, 'id': `k529[${i}]_1`, 'msg': 'Rincian <b>B5k529 Luas lahan yang dimiliki - Pohon/hutan rakyat</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k530 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k530[${i}]`, 'id': `k530[${i}]_1`, 'msg': 'Rincian <b>B5k530 Luas lahan yang dimiliki - Tambak</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k531 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k531[${i}]`, 'id': `k531[${i}]_1`, 'msg': 'Rincian <b>B5k531 Luas lahan yang dimiliki - Kolam/tebat/empang</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k532 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k532[${i}]`, 'id': `k532[${i}]_1`, 'msg': 'Rincian <b>B5k532 Luas lahan yang dimiliki - Padang penggembalaan/rumput</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k533 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k533[${i}]`, 'id': `k533[${i}]_1`, 'msg': 'Rincian <b>B5k533 Luas lahan yang dimiliki - Sementara tidak digunakan</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k534 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k534[${i}]`, 'id': `k534[${i}]_1`, 'msg': 'Rincian <b>B5k534 Luas lahan yang dimiliki - Rumah, bangunan, dan halaman sekitar</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k535 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k535[${i}]`, 'id': `k535[${i}]_1`, 'msg': 'Rincian <b>B5k535 Luas lahan yang dimiliki - Rawa-rawa</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k536 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k536[${i}]`, 'id': `k536[${i}]_1`, 'msg': 'Rincian <b>B5k536 Luas lahan yang dimiliki - Lainnya</b> tidak boleh kosong, minimal terisi 0' });
        }
        if (kkPage8[i].k537 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k537[${i}]`, 'id': `k537[${i}]_1`, 'msg': 'Rincian <b>B5k537 Luas lahan yang dimiliki - Lahan bengkok</b> tidak boleh kosong, minimal terisi 0' });
        }
    }

    for (i = 0; i < kkPage8.length; i++) {
        if (kkPage8[i].k538 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k538[${i}]`, 'id': `k538[${i}]_1`, 'msg': 'Rincian <b>B5k538 Jenis perumahan - Permanen</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k538 == 0 && kkPage8[i].k539 == 0 && kkPage8[i].k540 == 0) {
            error_samasta2.push({ 'page': 8, 'variabel': `k538[${i}]`, 'id': `k538[${i}]_all`, 'msg': 'Rincian <b>B5k538 sampai dengan B5K40 Jenis perumahan</b> salah satu harus terisi kode 0' });
        }

        if (kkPage8[i].k539 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k539[${i}]`, 'id': `k539[${i}]_1`, 'msg': 'Rincian <b>B5k539 Jenis perumahan - Semi permanen</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k540 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k540[${i}]`, 'id': `k540[${i}]_1`, 'msg': 'Rincian <b>B5k540 Jenis perumahan - Non permanen</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k541 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k541[${i}]`, 'id': `k541[${i}]_1`, 'msg': 'Rincian <b>B5k541 ORARI</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k542 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k542[${i}]`, 'id': `k542[${i}]_1`, 'msg': 'Rincian <b>B5k542 Telepon</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k543 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k543[${i}]`, 'id': `k543[${i}]_1`, 'msg': 'Rincian <b>B5k543 TV</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k544 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k544[${i}]`, 'id': `k544[${i}]_1`, 'msg': 'Rincian <b>B5k544 Radio</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k545 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k545[${i}]`, 'id': `k545[${i}]_1`, 'msg': 'Rincian <b>B5k545 TV Kabel</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k546 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k546[${i}]`, 'id': `k546[${i}]_1`, 'msg': 'Rincian <b>B5k546 Parabola</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k547 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k547[${i}]`, 'id': `k547[${i}]_1`, 'msg': 'Rincian <b>B5k547 Bantuan pemerintah - Rastra</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k548 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k548[${i}]`, 'id': `k548[${i}]_1`, 'msg': 'Rincian <b>B5k548 Bantuan pemerintah - PKH</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k549 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k549[${i}]`, 'id': `k549[${i}]_1`, 'msg': 'Rincian <b>B5k549 Bantuan pemerintah - PIP</b> tidak boleh kosong' });
        }
        if (kkPage8[i].k550 === '') {
            error_samasta2.push({ 'page': 8, 'variabel': `k550[${i}]`, 'id': `k550[${i}]_1`, 'msg': 'Rincian <b>B5k550 Bantuan pemerintah - Bantuan Sosial Pemda</b> tidak boleh kosong' });
        }
    }
    for (i = 1; i < kkPage8.length; i++) {
        if (kkPage8[i].k538 != kkPage8[0].k538) {
            error_samasta2.push({ 'page': 8, 'variabel': `k538[${i}]`, 'id': `k538[${i}]_2`, 'msg': 'Rincian <b>B5k538 Jenis perumahan - Permanen</b> harus sama dengan isian Jenis Perumahan KK pertama' });
        }
        if (kkPage8[i].k539 != kkPage8[0].k539) {
            error_samasta2.push({ 'page': 8, 'variabel': `k539[${i}]`, 'id': `k539[${i}]_2`, 'msg': 'Rincian <b>B5k539 Jenis perumahan - Semi Permanen</b> harus sama dengan isian Jenis Perumahan KK pertama' });
        }
        if (kkPage8[i].k540 != kkPage8[0].k540) {
            error_samasta2.push({ 'page': 8, 'variabel': `k540[${i}]`, 'id': `k540[${i}]_2`, 'msg': 'Rincian <b>B5k540 Jenis perumahan - Non Permanen</b> harus sama dengan isian Jenis Perumahan KK pertama' });
        }
    }
}