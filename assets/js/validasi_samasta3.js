async function validasi_samasta3() {
    await bacaIsiJsonSamasta3();
    await runRuleValidasiSamasta3();

    // menampilkan Daftar Error
    if (error_samasta3.length > 0) {
        document.getElementById('daftarError').innerHTML =
            `<div class="card" style="margin-bottom: 0rem; border:0px">
                <div class="card-header"><strong>Daftar Error <span style="color:red">(${error_samasta3.length} error)</span></strong>        
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

    error_samasta3.forEach(error => {
        var daftarError = "";
        daftarError += `<div class="list-group-item list-group-item-accent-danger list-group-item-divider">`;
        //daftarError += `<div>${error.msg}. Cek >> <button class="btn btn-danger btn-sm" onclick="gotoErrorSamasta3('${error.page}','${error.variabel}','${error.id}')">${error.variabel}</button></div>`;
        daftarError += `<div><b>ID Error</b>: ${error.id}<br> ${error.msg}. <button class="btn btn-danger btn-sm" onclick="gotoErrorSamasta3('${error.page}','${error.variabel}','${error.id}')">Cek</button></div>`;
        daftarError += `</div>`;
        document.getElementById('daftarError').innerHTML += daftarError;
    });
}

async function gotoErrorSamasta3(page, variabel, id) {
    await updateIsiJsonSamasta3()
    location.href = `#/samasta-3/${page}/`;
    setTimeout(() => {
        document.getElementById(variabel).focus();
    }, 500);
}

async function runRuleValidasiSamasta3() {
    error_samasta3 = [];

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

    //page 2
    // tidak boleh kosong
    for (i = 0; i < samasta3Page2.length; i++) {
        if (samasta3Page2[i].b4k2 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k2[${i}]`, 'id': `b4k2[${i}]_1`, 'msg': 'Rincian <b>B4K2 Nama Kepala Keluarga</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k3 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k3[${i}]`, 'id': `b4k3[${i}]_1`, 'msg': 'Rincian <b>b4k3 Tanggal Pelaporan</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k4 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k4[${i}]`, 'id': `b4k4[${i}]_1`, 'msg': 'Rincian <b>b4k4 Jumlah Penduduk Awal - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k5 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k5[${i}]`, 'id': `b4k5[${i}]_1`, 'msg': 'Rincian <b>b4k5 Jumlah Penduduk Awal - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k6 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k6[${i}]`, 'id': `b4k6[${i}]_1`, 'msg': 'Rincian <b>b4k6 Jumlah Penduduk Awal - Total</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k7 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k7[${i}]`, 'id': `b4k7[${i}]_1`, 'msg': 'Rincian <b>b4k7 Jumlah Kelahiran - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k8 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k8[${i}]`, 'id': `b4k8[${i}]_1`, 'msg': 'Rincian <b>b4k8 Jumlah Kelahiran - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k9 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k9[${i}]`, 'id': `b4k9[${i}]_1`, 'msg': 'Rincian <b>b4k9 Jumlah Kelahiran - Total</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k10 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k10[${i}]`, 'id': `b4k10[${i}]_1`, 'msg': 'Rincian <b>b4k10 Jumlah Kematian - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k11 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k11[${i}]`, 'id': `b4k11[${i}]_1`, 'msg': 'Rincian <b>b4k11 Jumlah Kematian - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k12 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k12[${i}]`, 'id': `b4k12[${i}]_1`, 'msg': 'Rincian <b>b4k12 Jumlah Kematian - Total</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k13 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k13[${i}]`, 'id': `b4k13[${i}]_1`, 'msg': 'Rincian <b>b4k13 Jumlah Penduduk Masuk - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k14 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k14[${i}]`, 'id': `b4k14[${i}]_1`, 'msg': 'Rincian <b>b4k14 Jumlah Penduduk Masuk - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k15 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k15[${i}]`, 'id': `b4k15[${i}]_1`, 'msg': 'Rincian <b>b4k15 Jumlah Penduduk Masuk - Total</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k16 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k16[${i}]`, 'id': `b4k16[${i}]_1`, 'msg': 'Rincian <b>b4k16 Jumlah Penduduk Keluar - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k17 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k17[${i}]`, 'id': `b4k17[${i}]_1`, 'msg': 'Rincian <b>b4k17 Jumlah Penduduk Keluar - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k18 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k18[${i}]`, 'id': `b4k18[${i}]_1`, 'msg': 'Rincian <b>b4k18 Jumlah Penduduk Keluar - Total</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k19 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k19[${i}]`, 'id': `b4k19[${i}]_1`, 'msg': 'Rincian <b>b4k19 Jumlah Penduduk Akhir - L</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k20 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k20[${i}]`, 'id': `b4k20[${i}]_1`, 'msg': 'Rincian <b>b4k20 Jumlah Penduduk Akhir - P</b> tidak boleh kosong' });
        }
        if (samasta3Page2[i].b4k21 === '') {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k21[${i}]`, 'id': `b4k21[${i}]_1`, 'msg': 'Rincian <b>b4k21 Jumlah Penduduk Akhir - Total</b> tidak boleh kosong' });
        }
    }

    // penjumlahan total = l+p
    var jml_b4k4 = 0; var jml_b4k5 = 0; var jml_b4k6 = 0; var jml_b4k7 = 0; var jml_b4k8 = 0; var jml_b4k9 = 0; var jml_b4k10 = 0; var jml_b4k11 = 0; var jml_b4k12 = 0; var jml_b4k13 = 0; var jml_b4k14 = 0; var jml_b4k15 = 0; var jml_b4k16 = 0; var jml_b4k17 = 0; var jml_b4k18 = 0; var jml_b4k19 = 0; var jml_b4k20 = 0; var jml_b4k21 = 0;
    for (i = 0; i < samasta3Page2.length; i++) {
        if (+samasta3Page2[i].b4k6 != +samasta3Page2[i].b4k4 + +samasta3Page2[i].b4k5) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k6[${i}]`, 'id': `b4k6[${i}]_2`, 'msg': 'Rincian <b>b4k6 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k4 + b4k5)</b>' });
        }
        if (+samasta3Page2[i].b4k9 != +samasta3Page2[i].b4k7 + +samasta3Page2[i].b4k8) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k9[${i}]`, 'id': `b4k9[${i}]_2`, 'msg': 'Rincian <b>b4k9 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k7 + b4k8)</b>' });
        }
        if (+samasta3Page2[i].b4k12 != +samasta3Page2[i].b4k10 + +samasta3Page2[i].b4k11) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k12[${i}]`, 'id': `b4k12[${i}]_2`, 'msg': 'Rincian <b>b4k12 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k10 + b4k11)</b>' });
        }
        if (+samasta3Page2[i].b4k15 != +samasta3Page2[i].b4k13 + +samasta3Page2[i].b4k14) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k15[${i}]`, 'id': `b4k15[${i}]_2`, 'msg': 'Rincian <b>b4k15 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k13 + b4k14)</b>' });
        }
        if (+samasta3Page2[i].b4k18 != +samasta3Page2[i].b4k16 + +samasta3Page2[i].b4k17) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k18[${i}]`, 'id': `b4k18[${i}]_2`, 'msg': 'Rincian <b>b4k18 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k16 + b4k17)</b>' });
        }
        if (+samasta3Page2[i].b4k21 != +samasta3Page2[i].b4k19 + +samasta3Page2[i].b4k20) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k21[${i}]`, 'id': `b4k21[${i}]_2`, 'msg': 'Rincian <b>b4k21 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k19 + b4k20)</b>' });
        }
        if (+samasta3Page2[i].b4k19 != +samasta3Page2[i].b4k4 + +samasta3Page2[i].b4k7 - +samasta3Page2[i].b4k10 + +samasta3Page2[i].b4k13 - +samasta3Page2[i].b4k16) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k19[${i}]`, 'id': `b4k19[${i}]_3`, 'msg': 'Rincian <b>b4k19 Jumlah Penduduk Akhir - L</b> harus sama dengan kolom 4 + kolom 7 - kolom 10 + kolom 13 - kolom 16' });
        }
        if (+samasta3Page2[i].b4k20 != +samasta3Page2[i].b4k5 + +samasta3Page2[i].b4k8 - +samasta3Page2[i].b4k11 + +samasta3Page2[i].b4k14 - +samasta3Page2[i].b4k17) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k20[${i}]`, 'id': `b4k20[${i}]_3`, 'msg': 'Rincian <b>b4k20 Jumlah Penduduk Akhir - P</b> harus sama dengan kolom 5 + kolom 8 - kolom 11 + kolom 14 - kolom 17' });
        }
        if (+samasta3Page2[i].b4k21 != +samasta3Page2[i].b4k6 + +samasta3Page2[i].b4k9 - +samasta3Page2[i].b4k12 + +samasta3Page2[i].b4k15 - +samasta3Page2[i].b4k18) {
            error_samasta3.push({ 'page': 2, 'variabel': `b4k21[${i}]`, 'id': `b4k21[${i}]_3`, 'msg': 'Rincian <b>b4k21 Jumlah Penduduk Akhir - Total</b> harus sama dengan kolom 6 + kolom 9 - kolom 12 + kolom 15 - kolom 18' });
        }

        jml_b4k4 += +samasta3Page2[i].b4k4;
        jml_b4k5 += +samasta3Page2[i].b4k5;
        jml_b4k6 += +samasta3Page2[i].b4k6;
        jml_b4k7 += +samasta3Page2[i].b4k7;
        jml_b4k8 += +samasta3Page2[i].b4k8;
        jml_b4k9 += +samasta3Page2[i].b4k9;
        jml_b4k10 += +samasta3Page2[i].b4k10;
        jml_b4k11 += +samasta3Page2[i].b4k11;
        jml_b4k12 += +samasta3Page2[i].b4k12;
        jml_b4k13 += +samasta3Page2[i].b4k13;
        jml_b4k14 += +samasta3Page2[i].b4k14;
        jml_b4k15 += +samasta3Page2[i].b4k15;
        jml_b4k16 += +samasta3Page2[i].b4k16;
        jml_b4k17 += +samasta3Page2[i].b4k17;
        jml_b4k18 += +samasta3Page2[i].b4k18;
        jml_b4k19 += +samasta3Page2[i].b4k19;
        jml_b4k20 += +samasta3Page2[i].b4k20;
        jml_b4k21 += +samasta3Page2[i].b4k21;
    }

    // jumlah blok 4
    // tidak boleh kosong
    if (samasta3SumBlok4[0].sum_b4k4 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k4`, 'id': `jumlah_b4k4_1`, 'msg': 'Rincian <b>jumlah_b4k4 Jumlah Kolom Rincian b4k4</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k5 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k5`, 'id': `jumlah_b4k5_1`, 'msg': 'Rincian <b>jumlah_b4k5 Jumlah Kolom Rincian b4k5</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k6 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k6`, 'id': `jumlah_b4k6_1`, 'msg': 'Rincian <b>jumlah_b4k6 Jumlah Kolom Rincian b4k6</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k7 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k7`, 'id': `jumlah_b4k7_1`, 'msg': 'Rincian <b>jumlah_b4k7 Jumlah Kolom Rincian b4k7</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k8 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k8`, 'id': `jumlah_b4k8_1`, 'msg': 'Rincian <b>jumlah_b4k8 Jumlah Kolom Rincian b4k8</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k9 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k9`, 'id': `jumlah_b4k9_1`, 'msg': 'Rincian <b>jumlah_b4k9 Jumlah Kolom Rincian b4k9</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k10 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k10`, 'id': `jumlah_b4k10_1`, 'msg': 'Rincian <b>jumlah_b4k10 Jumlah Kolom Rincian b4k10</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k11 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k11`, 'id': `jumlah_b4k11_1`, 'msg': 'Rincian <b>jumlah_b4k11 Jumlah Kolom Rincian b4k11</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k12 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k12`, 'id': `jumlah_b4k12_1`, 'msg': 'Rincian <b>jumlah_b4k12 Jumlah Kolom Rincian b4k12</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k13 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k13`, 'id': `jumlah_b4k13_1`, 'msg': 'Rincian <b>jumlah_b4k13 Jumlah Kolom Rincian b4k13</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k14 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k14`, 'id': `jumlah_b4k14_1`, 'msg': 'Rincian <b>jumlah_b4k14 Jumlah Kolom Rincian b4k14</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k15 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k15`, 'id': `jumlah_b4k15_1`, 'msg': 'Rincian <b>jumlah_b4k15 Jumlah Kolom Rincian b4k15</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k16 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k16`, 'id': `jumlah_b4k16_1`, 'msg': 'Rincian <b>jumlah_b4k16 Jumlah Kolom Rincian b4k16</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k17 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k17`, 'id': `jumlah_b4k17_1`, 'msg': 'Rincian <b>jumlah_b4k17 Jumlah Kolom Rincian b4k17</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k18 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k18`, 'id': `jumlah_b4k18_1`, 'msg': 'Rincian <b>jumlah_b4k18 Jumlah Kolom Rincian b4k18</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k19 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k19`, 'id': `jumlah_b4k19_1`, 'msg': 'Rincian <b>jumlah_b4k19 Jumlah Kolom Rincian b4k19</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k20 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k20`, 'id': `jumlah_b4k20_1`, 'msg': 'Rincian <b>jumlah_b4k20 Jumlah Kolom Rincian b4k20</b> tidak boleh kosong' });
    }
    if (samasta3SumBlok4[0].sum_b4k21 === '') {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k21`, 'id': `jumlah_b4k21_1`, 'msg': 'Rincian <b>jumlah_b4k21 Jumlah Kolom Rincian b4k21</b> tidak boleh kosong' });
    }

    //penjumlahan vertikal
    if (samasta3SumBlok4[0].sum_b4k4 != jml_b4k4) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k4`, 'id': `jumlah_b4k4_2`, 'msg': 'Rincian <b>jumlah_b4k4 Jumlah Kolom Rincian b4k4</b> harus sama dengan penjumlahan seluruh baris pada kolom 4' });
    }
    if (samasta3SumBlok4[0].sum_b4k5 != jml_b4k5) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k5`, 'id': `jumlah_b4k5_2`, 'msg': 'Rincian <b>jumlah_b4k5 Jumlah Kolom Rincian b4k5</b> harus sama dengan penjumlahan seluruh baris pada kolom 5' });
    }
    if (samasta3SumBlok4[0].sum_b4k6 != jml_b4k6) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k6`, 'id': `jumlah_b4k6_2`, 'msg': 'Rincian <b>jumlah_b4k6 Jumlah Kolom Rincian b4k6</b> harus sama dengan penjumlahan seluruh baris pada kolom 6' });
    }
    if (samasta3SumBlok4[0].sum_b4k7 != jml_b4k7) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k7`, 'id': `jumlah_b4k7_2`, 'msg': 'Rincian <b>jumlah_b4k7 Jumlah Kolom Rincian b4k7</b> harus sama dengan penjumlahan seluruh baris pada kolom 7' });
    }
    if (samasta3SumBlok4[0].sum_b4k8 != jml_b4k8) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k8`, 'id': `jumlah_b4k8_2`, 'msg': 'Rincian <b>jumlah_b4k8 Jumlah Kolom Rincian b4k8</b> harus sama dengan penjumlahan seluruh baris pada kolom 8' });
    }
    if (samasta3SumBlok4[0].sum_b4k9 != jml_b4k9) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k9`, 'id': `jumlah_b4k9_2`, 'msg': 'Rincian <b>jumlah_b4k9 Jumlah Kolom Rincian b4k9</b> harus sama dengan penjumlahan seluruh baris pada kolom 9' });
    }
    if (samasta3SumBlok4[0].sum_b4k10 != jml_b4k10) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k10`, 'id': `jumlah_b4k10_2`, 'msg': 'Rincian <b>jumlah_b4k10 Jumlah Kolom Rincian b4k10</b> harus sama dengan penjumlahan seluruh baris pada kolom 10' });
    }
    if (samasta3SumBlok4[0].sum_b4k11 != jml_b4k11) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k11`, 'id': `jumlah_b4k11_2`, 'msg': 'Rincian <b>jumlah_b4k11 Jumlah Kolom Rincian b4k11</b> harus sama dengan penjumlahan seluruh baris pada kolom 11' });
    }
    if (samasta3SumBlok4[0].sum_b4k12 != jml_b4k12) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k12`, 'id': `jumlah_b4k12_2`, 'msg': 'Rincian <b>jumlah_b4k12 Jumlah Kolom Rincian b4k12</b> harus sama dengan penjumlahan seluruh baris pada kolom 12' });
    }
    if (samasta3SumBlok4[0].sum_b4k13 != jml_b4k13) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k13`, 'id': `jumlah_b4k13_2`, 'msg': 'Rincian <b>jumlah_b4k13 Jumlah Kolom Rincian b4k13</b> harus sama dengan penjumlahan seluruh baris pada kolom 13' });
    }
    if (samasta3SumBlok4[0].sum_b4k14 != jml_b4k14) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k14`, 'id': `jumlah_b4k14_2`, 'msg': 'Rincian <b>jumlah_b4k14 Jumlah Kolom Rincian b4k14</b> harus sama dengan penjumlahan seluruh baris pada kolom 14' });
    }
    if (samasta3SumBlok4[0].sum_b4k15 != jml_b4k15) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k15`, 'id': `jumlah_b4k15_2`, 'msg': 'Rincian <b>jumlah_b4k15 Jumlah Kolom Rincian b4k15</b> harus sama dengan penjumlahan seluruh baris pada kolom 15' });
    }
    if (samasta3SumBlok4[0].sum_b4k16 != jml_b4k16) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k16`, 'id': `jumlah_b4k16_2`, 'msg': 'Rincian <b>jumlah_b4k16 Jumlah Kolom Rincian b4k16</b> harus sama dengan penjumlahan seluruh baris pada kolom 16' });
    }
    if (samasta3SumBlok4[0].sum_b4k17 != jml_b4k17) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k17`, 'id': `jumlah_b4k17_2`, 'msg': 'Rincian <b>jumlah_b4k17 Jumlah Kolom Rincian b4k17</b> harus sama dengan penjumlahan seluruh baris pada kolom 17' });
    }
    if (samasta3SumBlok4[0].sum_b4k18 != jml_b4k18) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k18`, 'id': `jumlah_b4k18_2`, 'msg': 'Rincian <b>jumlah_b4k18 Jumlah Kolom Rincian b4k18</b> harus sama dengan penjumlahan seluruh baris pada kolom 18' });
    }
    if (samasta3SumBlok4[0].sum_b4k19 != jml_b4k19) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k19`, 'id': `jumlah_b4k19_2`, 'msg': 'Rincian <b>jumlah_b4k19 Jumlah Kolom Rincian b4k19</b> harus sama dengan penjumlahan seluruh baris pada kolom 19' });
    }
    if (samasta3SumBlok4[0].sum_b4k20 != jml_b4k20) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k20`, 'id': `jumlah_b4k20_2`, 'msg': 'Rincian <b>jumlah_b4k20 Jumlah Kolom Rincian b4k20</b> harus sama dengan penjumlahan seluruh baris pada kolom 20' });
    }
    if (samasta3SumBlok4[0].sum_b4k21 != jml_b4k21) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k21`, 'id': `jumlah_b4k21_2`, 'msg': 'Rincian <b>jumlah_b4k21 Jumlah Kolom Rincian b4k21</b> harus sama dengan penjumlahan seluruh baris pada kolom 21' });
    }

    // jumlah blok4 - penjumlahan total = l+p
    if (+samasta3SumBlok4[0].sum_b4k6 != +samasta3SumBlok4[0].sum_b4k4 + +samasta3SumBlok4[0].sum_b4k5) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k6`, 'id': `jumlah_b4k6[${i}]_3`, 'msg': 'Rincian <b>b4k6 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k4 + b4k5)</b>' });
    }
    if (+samasta3SumBlok4[0].sum_b4k9 != +samasta3SumBlok4[0].sum_b4k7 + +samasta3SumBlok4[0].sum_b4k8) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k9`, 'id': `jumlah_b4k9[${i}]_3`, 'msg': 'Rincian <b>b4k9 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k7 + b4k8)</b>' });
    }
    if (+samasta3SumBlok4[0].sum_b4k12 != +samasta3SumBlok4[0].sum_b4k10 + +samasta3SumBlok4[0].sum_b4k11) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k12`, 'id': `jumlah_b4k12[${i}]_3`, 'msg': 'Rincian <b>b4k12 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k10 + b4k11)</b>' });
    }
    if (+samasta3SumBlok4[0].sum_b4k15 != +samasta3SumBlok4[0].sum_b4k13 + +samasta3SumBlok4[0].sum_b4k14) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k15`, 'id': `jumlah_b4k15[${i}]_3`, 'msg': 'Rincian <b>b4k15 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k13 + b4k14)</b>' });
    }
    if (+samasta3SumBlok4[0].sum_b4k18 != +samasta3SumBlok4[0].sum_b4k16 + +samasta3SumBlok4[0].sum_b4k17) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k18`, 'id': `jumlah_b4k18[${i}]_3`, 'msg': 'Rincian <b>b4k18 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k16 + b4k17)</b>' });
    }
    if (+samasta3SumBlok4[0].sum_b4k21 != +samasta3SumBlok4[0].sum_b4k19 + +samasta3SumBlok4[0].sum_b4k20) {
        error_samasta3.push({ 'page': 2, 'variabel': `jumlah_b4k21`, 'id': `jumlah_b4k21[${i}]_3`, 'msg': 'Rincian <b>b4k21 Total</b> harus sama dengan penjumlahan rincian L dan P <b>(b4k19 + b4k20)</b>' });
    }


    ///////////////////////////////////////////////////////////////////////////////////////
    //page 1
    if (b2r201 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r201', 'id': 'b2r201_1', 'msg': 'Rincian <b>b2r201 Jumlah Penduduk Awal</b> tidak boleh kosong' });
    }
    if (b2r202 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r202', 'id': 'b2r202_1', 'msg': 'Rincian <b>b2r202 Jumlah Kelahiran</b> tidak boleh kosong' });
    }
    if (b2r203 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r203', 'id': 'b2r203_1', 'msg': 'Rincian <b>b2r203 Jumlah Kematian</b> tidak boleh kosong' });
    }
    if (b2r204 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r204', 'id': 'b2r204_1', 'msg': 'Rincian <b>b2r204 Jumlah Penduduk Masuk</b> tidak boleh kosong' });
    }
    if (b2r205 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r205', 'id': 'b2r205_1', 'msg': 'Rincian <b>b2r205 Jumlah Penduduk Keluar</b> tidak boleh kosong' });
    }
    if (b2r206 === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r206', 'id': 'b2r206_1', 'msg': 'Rincian <b>b2r206 Jumlah Penduduk Akhir</b> tidak boleh kosong' });
    }
    if (kepalaSLS === '') {
        error_samasta3.push({ 'page': 1, 'variabel': 'kepalaSLS', 'id': 'kepalaSLS_1', 'msg': 'Rincian <b>Kepala Dusun/Lingkungan</b> tidak boleh kosong' });
    }

    // konsistensi dengan jumlah blok 4
    if (+b2r201 != +samasta3SumBlok4[0].sum_b4k6) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r201', 'id': 'b2r201_2', 'msg': 'Rincian <b>b2r201 Jumlah Penduduk Awal</b> harus sama dengan Blok 4 Kolom 6 baris Jumlah' });
    }
    if (+b2r202 != +samasta3SumBlok4[0].sum_b4k9) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r202', 'id': 'b2r202_2', 'msg': 'Rincian <b>b2r202 Jumlah Kelahiran</b> harus sama dengan Blok 4 Kolom 9 baris Jumlah' });
    }
    if (+b2r203 != +samasta3SumBlok4[0].sum_b4k12) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r203', 'id': 'b2r203_2', 'msg': 'Rincian <b>b2r203 Jumlah Kematian</b> harus sama dengan Blok 4 Kolom 12 baris Jumlah' });
    }
    if (+b2r204 != +samasta3SumBlok4[0].sum_b4k15) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r204', 'id': 'b2r204_2', 'msg': 'Rincian <b>b2r204 Jumlah Penduduk Masuk</b> harus sama dengan Blok 4 Kolom 15 baris Jumlah' });
    }
    if (+b2r205 != +samasta3SumBlok4[0].sum_b4k18) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r205', 'id': 'b2r205_2', 'msg': 'Rincian <b>b2r205 Jumlah Penduduk Keluar</b> harus sama dengan Blok 4 Kolom 18 baris Jumlah' });
    }
    if (+b2r206 != +samasta3SumBlok4[0].sum_b4k21) {
        error_samasta3.push({ 'page': 1, 'variabel': 'b2r206', 'id': 'b2r206_2', 'msg': 'Rincian <b>b2r206 Jumlah Penduduk Akhir</b> harus sama dengan Blok 4 Kolom 21 baris Jumlah' });
    }
}