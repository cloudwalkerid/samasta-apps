async function validasi_samasta1() {
    await bacaIsiJsonSamasta1();
    await runRuleValidasiSamasta1();

    // menampilkan Daftar Error
    if (error_samasta1.length > 0) {
        document.getElementById('daftarError').innerHTML =
            `<div class="card" style="margin-bottom: 0rem; border:0px">
                <div class="card-header"><strong>Daftar Error <span style="color:red">(${error_samasta1.length} error)</span></strong>        
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

    error_samasta1.forEach(error => {
        var daftarError = "";
        daftarError += `<div class="list-group-item list-group-item-accent-danger list-group-item-divider">`;
        //daftarError += `<div>${error.msg}. Cek >> <button class="btn btn-danger btn-sm" onclick="gotoErrorsamasta1('${error.page}','${error.variabel}','${error.id}')">${error.variabel}</button></div>`;
        daftarError += `<div><b>ID Error</b>: ${error.id}<br> ${error.msg}. <button class="btn btn-danger btn-sm" onclick="gotoErrorsamasta1('${error.page}','${error.variabel}','${error.id}')">Cek</button></div>`;
        daftarError += `</div>`;
        document.getElementById('daftarError').innerHTML += daftarError;
    });
}

async function gotoErrorsamasta1(page, variabel, id) {
    await updateIsiJsonSamasta1();
    location.href = `#/samasta-1/${page}/`;
    setTimeout(() => {
        document.getElementById(variabel).focus();
    }, 500);
}

async function runRuleValidasiSamasta1() {
    error_samasta1 = [];

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
    if (b1r105 === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b1r105', 'id': 'b1r105_1', 'msg': 'Rincian <b>B1R105 Alamat Kantor Desa/Kelurahan</b> tidak boleh kosong' });
    }
    if (b1r105.length < 3) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b1r105', 'id': 'b1r105_2', 'msg': 'Rincian <b>B1R105 Alamat Kantor Desa/Kelurahan</b> minimal terdiri dari 3 karakter' });
    }

    if (b2r201a === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r201a', 'id': 'b2r201a_1', 'msg': 'Rincian <b>b2r201a Pendata</b> tidak boleh kosong' });
    }
    if (b2r201a.length < 3) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r201a', 'id': 'b2r201a_2', 'msg': 'Rincian <b>b2r201a Pendata</b> kurang dari 3 karakter' });
    }

    if (b2r201b === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r201b', 'id': 'b2r201b_1', 'msg': 'Rincian <b>b2r201b Pemeriksa</b> tidak boleh kosong' });
    }
    if (b2r201b.length < 3) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r201b', 'id': 'b2r201b_2', 'msg': 'Rincian <b>b2r201b Pemeriksa</b> kurang dari 3 karakter' });
    }

    if (b2r202a_dd === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_1', 'msg': 'Rincian <b>b2r202a_dd Tanggal Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    if (b2r202a_mm === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202a_mm', 'id': 'b2r202a_mm_1', 'msg': 'Rincian <b>b2r202a_mm Bulan Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    if (b2r202a_yy === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202a_yy', 'id': 'b2r202a_yy_1', 'msg': 'Rincian <b>b2r202a_yy Tahun Pelaksanaan Pendataan</b> tidak boleh kosong' });
    }
    var b2r202a_date = b2r202a_mm + '/' + b2r202a_dd + '/' + b2r202a_yy;
    if (!isValidDate(b2r202a_date)) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_2', 'msg': 'Rincian <b>b2r202a_dd/b2r202a_mm/b2r202a_yy Tanggal Pelaksanaan Pendataan</b> bukan tanggal yang valid' });
    }

    if (b2r202b_dd === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202b_dd', 'id': 'b2r202b_dd_1', 'msg': 'Rincian <b>b2r202b_dd Tanggal Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    if (b2r202b_mm === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202b_mm', 'id': 'b2r202b_mm_1', 'msg': 'Rincian <b>b2r202b_mm Bulan Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    if (b2r202b_yy === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202b_yy', 'id': 'b2r202b_yy_1', 'msg': 'Rincian <b>b2r202b_yy Tahun Pelaksanaan Pemeriksaan</b> tidak boleh kosong' });
    }
    var b2r202b_date = b2r202b_mm + '/' + b2r202b_dd + '/' + b2r202b_yy;
    if (!isValidDate(b2r202b_date)) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r202b_dd', 'id': 'b2r202b_dd_2', 'msg': 'Rincian <b>b2r202b_dd/b2r202b_mm/b2r202b_yy Tanggal Pelaksanaan Pemeriksaan</b> bukan tanggal yang valid' });
    }
    if (isValidDate(b2r202a_date) && isValidDate(b2r202b_date)) {
        var dateCacah = new Date(b2r202a_date);
        var datePeriksa = new Date(b2r202b_date);
        if (dateCacah.getTime() > datePeriksa.getTime()) {
            error_samasta1.push({ 'page': 1, 'variabel': 'b2r202a_dd', 'id': 'b2r202a_dd_all', 'msg': 'Rincian <b>b2r202b_dd/b2r202b_mm/b2r202b_yy Tanggal Pelaksanaan Pendataan</b> tidak boleh lebih besar daripada <b>Tanggal Pelaksanaan Pendataan</b>' });
        }
    }

    if (b2r203a !== '' && b2r203a.length < 10) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r203a', 'id': 'b2r203a_1', 'msg': 'Rincian <b>b2r203a Nomor Handphone Pendata</b> kurang dari 10 digit' });
    }
    if (b2r203b !== '' && b2r203b.length < 10) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b2r203b', 'id': 'b2r203b_1', 'msg': 'Rincian <b>b2r203b Nomor Handphone Pemeriksa</b> kurang dari 10 digit' });
    }

    if (b3r301 === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r301', 'id': 'b3r301_1', 'msg': 'Rincian <b>b3r301 Nama Kepala Desa/Lurah</b> tidak boleh kosong' });
    }
    if (b3r301.length < 3) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r301', 'id': 'b3r301_2', 'msg': 'Rincian <b>b3r301 Nama Kepala Desa/Lurah</b> kurang dari 3 karakter' });
    }
    if (b3r302_dd === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r302_dd', 'id': 'b3r302_dd_1', 'msg': 'Rincian <b>b3r302_dd Tanggal Pengesahan Kepala Desa/Kelurahan</b> tidak boleh kosong' });
    }
    if (b3r302_mm === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r302_mm', 'id': 'b3r302_mm_1', 'msg': 'Rincian <b>b3r302_mm Bulan Pengesahan Kepala Desa/Kelurahan</b> tidak boleh kosong' });
    }
    if (b3r302_yy === '') {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r302_yy', 'id': 'b3r302_yy_1', 'msg': 'Rincian <b>b3r302_yy Tahun Pengesahan Kepala Desa/Kelurahan</b> tidak boleh kosong' });
    }
    var b3r302_date = b3r302_mm + '/' + b3r302_dd + '/' + b3r302_yy;
    if (!isValidDate(b3r302_date)) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r302_dd', 'id': 'b3r302_dd_2', 'msg': 'Rincian <b>b3r302_dd/b3r302_mm/b3r302_yy Tanggal Pengesahan Kepala Desa/Kelurahan</b> bukan tanggal yang valid' });
    }
    if (b3r303 !== '' && b3r303.length < 10) {
        error_samasta1.push({ 'page': 1, 'variabel': 'b3r303', 'id': 'b3r303_1', 'msg': 'Rincian <b>b3r303 Nomor Handphone Kepala Desa/Lurah</b> kurang dari 10 digit' });
    }

    //page 2
    if (desaPage2[0].b4r401 === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r401', 'id': 'b4r401_1', 'msg': 'Rincian <b>b4r401 Status pemerintahan</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r402a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r402a', 'id': 'b4r402a_1', 'msg': 'Rincian <b>b4r402a Badan Permusyawaratan Desa/Lembaga Musyawarah Kelurahan</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r402a == 1) {
        if (desaPage2[0].b4r402b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r402b', 'id': 'b4r402b_1', 'msg': 'Rincian b4r402a berkode 1, maka rincian <b>b4r402b Jumlah anggota Badan Permusyawaratan Desa (BPD)/Lembaga Musyawarah Kelurahan (LMK)</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r402b == 0) {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r402b', 'id': 'b4r402b_2', 'msg': 'Rincian b4r402a berkode 1, maka rincian <b>b4r402b Jumlah anggota Badan Permusyawaratan Desa (BPD)/Lembaga Musyawarah Kelurahan (LMK)</b> harus terisi lebih dari 0' });
        }
        if (desaPage2[0].b4r402c === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r402c', 'id': 'b4r402c_1', 'msg': 'Rincian b4r402a berkode 1, maka rincian <b>b4r402c Jumlah kegiatan musyawarah desa/kelurahan yang dilakukan selama tahun 2018</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b4r402a == 2) {
        if (desaPage2[0].b4r402b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r402a', 'id': 'b4r402b_3', 'msg': 'Rincian b4r402a berkode 2, maka rincian <b>b4r402b Jumlah anggota Badan Permusyawaratan Desa (BPD)/Lembaga Musyawarah Kelurahan (LMK)</b> harus kosong' });
        }
        if (desaPage2[0].b4r402c != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r402a', 'id': 'b4r402c_2', 'msg': 'Rincian b4r402a berkode 2, maka rincian <b>b4r402c Jumlah kegiatan musyawarah desa/kelurahan yang dilakukan selama tahun 2018</b> harus kosong' });
        }
    }
    if (desaPage2[0].b4r403 === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r403', 'id': 'b4r403_1', 'msg': 'Rincian <b>b4r403 Peta desa/kelurahan yang ditetapkan dalam Peraturan Bupati/Walikota atau Gubernur</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r404a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r404a', 'id': 'b4r404a_1', 'msg': 'Rincian <b>b4r404a Jumlah dusun/lingkungan</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r404b === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r404b', 'id': 'b4r404b_1', 'msg': 'Rincian <b>b4r404b Jumlah RW</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r404c === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r404c', 'id': 'b4r404c_1', 'msg': 'Rincian <b>b4r404c Jumlah RT</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r405a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r405a', 'id': 'b4r405a_1', 'msg': 'Rincian <b>b4r405a Keberadaan kantor kepala desa/lurah</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r405a == 1) {
        if (desaPage2[0].b4r405b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405b', 'id': 'b4r405b_1', 'msg': 'Rincian b4r405a berkode 1, maka rincian <b>b4r405b Status kantor kepala desa/lurah</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r405c === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405c', 'id': 'b4r405c_1', 'msg': 'Rincian b4r405a berkode 1, maka rincian <b>b4r405c Kondisi kantor kepala desa/lurah:</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r405d === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405d', 'id': 'b4r405d_1', 'msg': 'Rincian b4r405a berkode 1, maka rincian <b>b4r405d Lokasi kantor kepala desa/lurah</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b4r405a == 2) {
        if (desaPage2[0].b4r405b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405a', 'id': 'b4r405b_2', 'msg': 'Rincian b4r405a berkode 2, maka rincian <b>b4r405b Status kantor kepala desa/lurah</b> harus kosong' });
        }
        if (desaPage2[0].b4r405c != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405a', 'id': 'b4r405c_2', 'msg': 'Rincian b4r405a berkode 2, maka rincian <b>b4r405c Kondisi kantor kepala desa/lurah:</b> harus kosong' });
        }
        if (desaPage2[0].b4r405d != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r405a', 'id': 'b4r405d_2', 'msg': 'Rincian b4r405a berkode 2, maka rincian <b>b4r405d Lokasi kantor kepala desa/lurah</b> harus kosong' });
        }
    }
    if (desaPage2[0].b4r406 === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r406', 'id': 'b4r406_1', 'msg': 'Rincian <b>b4r406 Kegiatan pemerintahan desa/kelurahan utamanya dilaksanakan di</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r407a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407a_1', 'msg': 'Rincian <b>b4r407a Apakah ada wilayah desa/kelurahan yang berbatasan langsung dengan laut</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r407a == 1) {
        if (desaPage2[0].b4r407b_a === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407b_a', 'id': 'b4r407b_a_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407b_a Pemanfaatan laut untuk - Perikanan tangkap</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r407b_b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407b_b', 'id': 'b4r407b_b_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407b_b Pemanfaatan laut untuk - Perikanan budidaya </b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r407b_c === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407b_c', 'id': 'b4r407b_c_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407b_c Pemanfaatan laut untuk - Tambak garam</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r407b_d === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407b_d', 'id': 'b4r407b_d_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407b_d Pemanfaatan laut untuk - Wisata bahari</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r407b_e === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407b_e', 'id': 'b4r407b_e_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407b_e Pemanfaatan laut untuk - Transportasi umum</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r407c === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407c', 'id': 'b4r407c_1', 'msg': 'Rincian b4r407a berkode 1, maka rincian <b>b4r407c Keberadaan dan kondisi tanaman mangrove</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b4r407a == 2) {
        if (desaPage2[0].b4r407b_a != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407b_a_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407b_a Pemanfaatan laut untuk - Perikanan tangkap</b> harus kosong' });
        }
        if (desaPage2[0].b4r407b_b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407b_b_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407b_b Pemanfaatan laut untuk - Perikanan budidaya </b> harus kosong' });
        }
        if (desaPage2[0].b4r407b_c != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407b_c_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407b_c Pemanfaatan laut untuk - Tambak garam</b> harus kosong' });
        }
        if (desaPage2[0].b4r407b_d != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407b_d_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407b_d Pemanfaatan laut untuk - Wisata bahari</b> harus kosong' });
        }
        if (desaPage2[0].b4r407b_e != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407b_e_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407b_e Pemanfaatan laut untuk - Transportasi umum</b> harus kosong' });
        }
        if (desaPage2[0].b4r407c != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r407a', 'id': 'b4r407c_2', 'msg': 'Rincian b4r407a berkode 2, maka rincian <b>b4r407c Keberadaan dan kondisi tanaman mangrove</b> harus kosong' });
        }
    }
    if (desaPage2[0].b4r408a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b4r408a', 'id': 'b4r408a_1', 'msg': 'Rincian <b>b4r408a Lokasi wilayah desa/kelurahan terhadap kawasan hutan</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b4r408a == 1 || desaPage2[0].b4r408a == 2) {
        if (desaPage2[0].b4r408b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r408b', 'id': 'b4r408b_1', 'msg': 'Rincian b4r408a berkode 1 atau 2, maka rincian <b>b4r408b Fungsi kawasan hutan/hutan</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b4r408c === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r408c', 'id': 'b4r408c_1', 'msg': 'Rincian b4r408a berkode 1 atau 2, maka rincian <b>b4r408c Ketergantungan penduduk terhadap kawasan hutan/hutan</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b4r408a == 3) {
        if (desaPage2[0].b4r408b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r408a', 'id': 'b4r408b_2', 'msg': 'Rincian b4r408a berkode 3, maka rincian <b>b4r408b Fungsi kawasan hutan/hutan</b> harus kosong' });
        }
        if (desaPage2[0].b4r408c != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b4r408a', 'id': 'b4r408c_2', 'msg': 'Rincian b4r408a berkode 3, maka rincian <b>b4r408c Ketergantungan penduduk terhadap kawasan hutan/hutan</b> harus kosong' });
        }
    }

    if (desaPage2[0].b5r501a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b5r501a', 'id': 'b5r501a_1', 'msg': 'Rincian <b>b5r501a Penerangan di jalan utama desa/kelurahan</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b5r501a == 1 || desaPage2[0].b5r501a == 2) {
        if (desaPage2[0].b5r501b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r501b', 'id': 'b5r501b_1', 'msg': 'Rincian b5r501a berkode 1 atau 2, maka rincian <b>b5r501b Jenis penerangan di jalan utama desa/kelurahan</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b5r501a == 3) {
        if (desaPage2[0].b5r501b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r501a', 'id': 'b5r501b_2', 'msg': 'Rincian b5r501a berkode 3, maka rincian <b>b5r501b Jenis penerangan di jalan utama desa/kelurahan</b> harus kosong' });
        }
    }
    if (desaPage2[0].b5r502a === '') {
        error_samasta1.push({ 'page': 2, 'variabel': 'b5r502a', 'id': 'b5r502a_1', 'msg': 'Rincian <b>b5r502a Wilayah desa/kelurahan dilalui Saluran Udara Tegangan Ekstra Tinggi (SUTET)/Saluran Udara Tegangan Tinggi (SUTT)/Saluran Udara Tegangan Tinggi Arus Searah (SUTTAS)</b> tidak boleh kosong' });
    }
    if (desaPage2[0].b5r502a == 1) {
        if (desaPage2[0].b5r502b === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502b', 'id': 'b5r502b_1', 'msg': 'Rincian b5r502a berkode 1, maka rincian <b>b5r502b Keberadaan permukiman di bawah SUTET/SUTT/SUTTAS</b> tidak boleh kosong' });
        }
    }
    if (desaPage2[0].b5r502a == 2) {
        if (desaPage2[0].b5r502b != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502a', 'id': 'b5r502b_2', 'msg': 'Rincian b5r502a berkode 2, maka rincian <b>b5r502b Keberadaan permukiman di bawah SUTET/SUTT/SUTTAS</b> harus kosong' });
        }
    }
    if (desaPage2[0].b5r502b == 1) {
        if (desaPage2[0].b5r502c_1 === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_1', 'id': 'b5r502c_1_1', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_1 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah lokasi</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b5r502c_1 == 0) {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_1', 'id': 'b5r502c_1_2', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_1 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah lokasi</b> harus lebih dari 0' });
        }
        if (desaPage2[0].b5r502c_2 === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_2', 'id': 'b5r502c_2_1', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_2 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah bangunan rumah</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b5r502c_2 == 0) {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_2', 'id': 'b5r502c_2_2', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_2 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah bangunan rumah</b> harus lebih dari 0' });
        }
        if (desaPage2[0].b5r502c_3 === '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_3', 'id': 'b5r502c_3_1', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_3 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah keluarga</b> tidak boleh kosong' });
        }
        if (desaPage2[0].b5r502c_3 == 0) {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502c_3', 'id': 'b5r502c_3_2', 'msg': 'Rincian b5r502b berkode 1, maka rincian <b>b5r502c_3 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah keluarga</b> harus lebih dari 0' });
        }
    }
    if (desaPage2[0].b5r502b == 2) {
        if (desaPage2[0].b5r502c_1 != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502b', 'id': 'b5r502c_1_2', 'msg': 'Rincian b5r502b berkode 2, maka rincian <b>b5r502c_1 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah lokasi</b> harus kosong' });
        }
        if (desaPage2[0].b5r502c_2 != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502b', 'id': 'b5r502c_2_2', 'msg': 'Rincian b5r502b berkode 2, maka rincian <b>b5r502c_2 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah bangunan rumah</b> harus kosong' });
        }
        if (desaPage2[0].b5r502c_3 != '') {
            error_samasta1.push({ 'page': 2, 'variabel': 'b5r502b', 'id': 'b5r502c_3_2', 'msg': 'Rincian b5r502b berkode 2, maka rincian <b>b5r502c_3 Jika ada permukiman di bawah SUTET/SUTT/SUTTAS - Jumlah keluarga</b> harus kosong' });
        }
    }


    //page 3
    if (desaPage3[0].b5r503a === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b5r503a', 'id': 'b5r503a_1', 'msg': 'Rincian <b>b5r503a Keberadaan mata air di desa/kelurahan</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b5r503b === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b5r503b', 'id': 'b5r503b_1', 'msg': 'Rincian <b>b5r503b Jumlah embung di desa/kelurahan</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b5r504a === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b5r504a', 'id': 'b5r504a_1', 'msg': 'Rincian <b>b5r504a Keberadaan permukiman kumuh</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b5r504a == 1) {
        if (desaPage3[0].b5r504b_1 === '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_1', 'id': 'b5r504b_1_1', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_1 Jika ada permukiman kumuh - Jumlah lokasi</b> tidak boleh kosong' });
        }
        if (desaPage3[0].b5r504b_1 == 0) {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_1', 'id': 'b5r504b_1_2', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_1 Jika ada permukiman kumuh - Jumlah lokasi</b> harus terisi lebih dari 0' });
        }
        if (desaPage3[0].b5r504b_2 === '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_2', 'id': 'b5r504b_2_1', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_2 Jika ada permukiman kumuh - Jumlah bangunan</b> tidak boleh kosong' });
        }
        if (desaPage3[0].b5r504b_2 == 0) {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_2', 'id': 'b5r504b_2_2', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_2 Jika ada permukiman kumuh - Jumlah bangunan</b> harus terisi lebih dari 0' });
        }
        if (desaPage3[0].b5r504b_3 === '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_3', 'id': 'b5r504b_3_1', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_3 Jika ada permukiman kumuh - Jumlah keluarga</b> tidak boleh kosong' });
        }
        if (desaPage3[0].b5r504b_3 == 0) {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504b_3', 'id': 'b5r504b_3_2', 'msg': 'Rincian b5r504a berkode 1, maka rincian <b>b5r504b_3 Jika ada permukiman kumuh - Jumlah keluarga</b> harus terisi lebih dari 0' });
        }
    }
    if (desaPage3[0].b5r504a == 2) {
        if (desaPage3[0].b5r504b_1 != '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504a', 'id': 'b5r504b_1_3', 'msg': 'Rincian b5r504a berkode 2, maka rincian <b>b5r504b_1 Jika ada permukiman kumuh - Jumlah lokasi</b> harus kosong' });
        }
        if (desaPage3[0].b5r504b_2 != '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504a', 'id': 'b5r504b_2_3', 'msg': 'Rincian b5r504a berkode 2, maka rincian <b>b5r504b_2 Jika ada permukiman kumuh - Jumlah bangunan</b> harus kosong' });
        }
        if (desaPage3[0].b5r504b_3 != '') {
            error_samasta1.push({ 'page': 3, 'variabel': 'b5r504a', 'id': 'b5r504b_3_3', 'msg': 'Rincian b5r504a berkode 2, maka rincian <b>b5r504b_3 Jika ada permukiman kumuh - Jumlah keluarga</b> harus kosong' });
        }
    }

    if (desaPage3[0].b6r601a_2 === '' || desaPage3[0].b6r601a_3 === '' || desaPage3[0].b6r601a_4 === '' || desaPage3[0].b6r601a_5 === '' || desaPage3[0].b6r601a_6 === '' || desaPage3[0].b6r601a_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601a_2', 'id': 'b6r601a_all', 'msg': 'Rincian <b>b6r601a Pos Pendidikan Anak Usia Dini(Pos PAUD) kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601b_2 === '' || desaPage3[0].b6r601b_3 === '' || desaPage3[0].b6r601b_4 === '' || desaPage3[0].b6r601b_5 === '' || desaPage3[0].b6r601b_6 === '' || desaPage3[0].b6r601b_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601b_2', 'id': 'b6r601b_all', 'msg': 'Rincian <b>b6r601b TK/RA/BA kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601c_2 === '' || desaPage3[0].b6r601c_3 === '' || desaPage3[0].b6r601c_4 === '' || desaPage3[0].b6r601c_5 === '' || desaPage3[0].b6r601c_6 === '' || desaPage3[0].b6r601c_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601c_2', 'id': 'b6r601c_all', 'msg': 'Rincian <b>b6r601c SD/MI kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601d_2 === '' || desaPage3[0].b6r601d_3 === '' || desaPage3[0].b6r601d_4 === '' || desaPage3[0].b6r601d_5 === '' || desaPage3[0].b6r601d_6 === '' || desaPage3[0].b6r601d_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601d_2', 'id': 'b6r601d_all', 'msg': 'Rincian <b>b6r601d SMP/MTs kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601e_2 === '' || desaPage3[0].b6r601e_3 === '' || desaPage3[0].b6r601e_4 === '' || desaPage3[0].b6r601e_5 === '' || desaPage3[0].b6r601e_6 === '' || desaPage3[0].b6r601e_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601e_2', 'id': 'b6r601e_all', 'msg': 'Rincian <b>b6r601e SMU/MA kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601f_2 === '' || desaPage3[0].b6r601f_3 === '' || desaPage3[0].b6r601f_4 === '' || desaPage3[0].b6r601f_5 === '' || desaPage3[0].b6r601f_6 === '' || desaPage3[0].b6r601f_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601f_2', 'id': 'b6r601f_all', 'msg': 'Rincian <b>b6r601f SMK kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601g_2 === '' || desaPage3[0].b6r601g_3 === '' || desaPage3[0].b6r601g_4 === '' || desaPage3[0].b6r601g_5 === '' || desaPage3[0].b6r601g_6 === '' || desaPage3[0].b6r601g_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601g_2', 'id': 'b6r601g_all', 'msg': 'Rincian <b>b6r601g Akademi/Perguruan Tinggi kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601h_2 === '' || desaPage3[0].b6r601h_3 === '' || desaPage3[0].b6r601h_4 === '' || desaPage3[0].b6r601h_5 === '' || desaPage3[0].b6r601h_6 === '' || desaPage3[0].b6r601h_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601h_2', 'id': 'b6r601h_all', 'msg': 'Rincian <b>b6r601h SDLB kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601i_2 === '' || desaPage3[0].b6r601i_3 === '' || desaPage3[0].b6r601i_4 === '' || desaPage3[0].b6r601i_5 === '' || desaPage3[0].b6r601i_6 === '' || desaPage3[0].b6r601i_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601i_2', 'id': 'b6r601i_all', 'msg': 'Rincian <b>b6r601i SMPLB kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601j_2 === '' || desaPage3[0].b6r601j_3 === '' || desaPage3[0].b6r601j_4 === '' || desaPage3[0].b6r601j_5 === '' || desaPage3[0].b6r601j_6 === '' || desaPage3[0].b6r601j_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601j_2', 'id': 'b6r601j_all', 'msg': 'Rincian <b>b6r601j SMALB kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601k_2 === '' || desaPage3[0].b6r601k_3 === '' || desaPage3[0].b6r601k_4 === '' || desaPage3[0].b6r601k_5 === '' || desaPage3[0].b6r601k_6 === '' || desaPage3[0].b6r601k_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601k_2', 'id': 'b6r601k_all', 'msg': 'Rincian <b>b6r601k Pondok Pesantren kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601l_2 === '' || desaPage3[0].b6r601l_3 === '' || desaPage3[0].b6r601l_4 === '' || desaPage3[0].b6r601l_5 === '' || desaPage3[0].b6r601l_6 === '' || desaPage3[0].b6r601l_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601l_2', 'id': 'b6r601l_all', 'msg': 'Rincian <b>b6r601l Madrasah Diniyah kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r601m_2 === '' || desaPage3[0].b6r601m_3 === '' || desaPage3[0].b6r601m_4 === '' || desaPage3[0].b6r601m_5 === '' || desaPage3[0].b6r601m_6 === '' || desaPage3[0].b6r601m_7 === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601m_2', 'id': 'b6r601m_all', 'msg': 'Rincian <b>b6r601m Seminari/sejenisnya kolom 2 sampai dengan 7</b> tidak boleh kosong' });
    }

    // kolom 4 dan 5
    if ((+desaPage3[0].b6r601a_2 > 0 || +desaPage3[0].b6r601a_3 > 0) && ((+desaPage3[0].b6r601a_4 + +desaPage3[0].b6r601a_5) < (+desaPage3[0].b6r601a_2 + +desaPage3[0].b6r601a_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601a_4', 'id': 'b6r601a_4_all_1', 'msg': 'Rincian b6r601a kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601a kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601b_2 > 0 || +desaPage3[0].b6r601b_3 > 0) && ((+desaPage3[0].b6r601b_4 + +desaPage3[0].b6r601b_5) < (+desaPage3[0].b6r601b_2 + +desaPage3[0].b6r601b_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601b_4', 'id': 'b6r601b_4_all_1', 'msg': 'Rincian b6r601b kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601b kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601c_2 > 0 || +desaPage3[0].b6r601c_3 > 0) && ((+desaPage3[0].b6r601c_4 + +desaPage3[0].b6r601c_5) < (+desaPage3[0].b6r601c_2 + +desaPage3[0].b6r601c_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601c_4', 'id': 'b6r601c_4_all_1', 'msg': 'Rincian b6r601c kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601c kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601d_2 > 0 || +desaPage3[0].b6r601d_3 > 0) && ((+desaPage3[0].b6r601d_4 + +desaPage3[0].b6r601d_5) < (+desaPage3[0].b6r601d_2 + +desaPage3[0].b6r601d_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601d_4', 'id': 'b6r601d_4_all_1', 'msg': 'Rincian b6r601d kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601d kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601e_2 > 0 || +desaPage3[0].b6r601e_3 > 0) && ((+desaPage3[0].b6r601e_4 + +desaPage3[0].b6r601e_5) < (+desaPage3[0].b6r601e_2 + +desaPage3[0].b6r601e_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601e_4', 'id': 'b6r601e_4_all_1', 'msg': 'Rincian b6r601e kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601e kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601f_2 > 0 || +desaPage3[0].b6r601f_3 > 0) && ((+desaPage3[0].b6r601f_4 + +desaPage3[0].b6r601f_5) < (+desaPage3[0].b6r601f_2 + +desaPage3[0].b6r601f_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601f_4', 'id': 'b6r601f_4_all_1', 'msg': 'Rincian b6r601f kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601f kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601g_2 > 0 || +desaPage3[0].b6r601g_3 > 0) && ((+desaPage3[0].b6r601g_4 + +desaPage3[0].b6r601g_5) < (+desaPage3[0].b6r601g_2 + +desaPage3[0].b6r601g_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601g_4', 'id': 'b6r601g_4_all_1', 'msg': 'Rincian b6r601g kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601g kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601h_2 > 0 || +desaPage3[0].b6r601h_3 > 0) && ((+desaPage3[0].b6r601h_4 + +desaPage3[0].b6r601h_5) < (+desaPage3[0].b6r601h_2 + +desaPage3[0].b6r601h_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601h_4', 'id': 'b6r601h_4_all_1', 'msg': 'Rincian b6r601h kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601h kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601i_2 > 0 || +desaPage3[0].b6r601i_3 > 0) && ((+desaPage3[0].b6r601i_4 + +desaPage3[0].b6r601i_5) < (+desaPage3[0].b6r601i_2 + +desaPage3[0].b6r601i_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601i_4', 'id': 'b6r601i_4_all_1', 'msg': 'Rincian b6r601i kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601i kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601j_2 > 0 || +desaPage3[0].b6r601j_3 > 0) && ((+desaPage3[0].b6r601j_4 + +desaPage3[0].b6r601j_5) < (+desaPage3[0].b6r601j_2 + +desaPage3[0].b6r601j_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601j_4', 'id': 'b6r601j_4_all_1', 'msg': 'Rincian b6r601j kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601j kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601k_2 > 0 || +desaPage3[0].b6r601k_3 > 0) && ((+desaPage3[0].b6r601k_4 + +desaPage3[0].b6r601k_5) < (+desaPage3[0].b6r601k_2 + +desaPage3[0].b6r601k_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601k_4', 'id': 'b6r601k_4_all_1', 'msg': 'Rincian b6r601k kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601k kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601l_2 > 0 || +desaPage3[0].b6r601l_3 > 0) && ((+desaPage3[0].b6r601l_4 + +desaPage3[0].b6r601l_5) < (+desaPage3[0].b6r601l_2 + +desaPage3[0].b6r601l_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601l_4', 'id': 'b6r601l_4_all_1', 'msg': 'Rincian b6r601l kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601l kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601m_2 > 0 || +desaPage3[0].b6r601m_3 > 0) && ((+desaPage3[0].b6r601m_4 + +desaPage3[0].b6r601m_5) < (+desaPage3[0].b6r601m_2 + +desaPage3[0].b6r601m_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601m_4', 'id': 'b6r601m_4_all_1', 'msg': 'Rincian b6r601m kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601m kolom Jumlah Siswa</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }

    if ((+desaPage3[0].b6r601a_2 + +desaPage3[0].b6r601a_3 == 0) && ((+desaPage3[0].b6r601a_4 + +desaPage3[0].b6r601a_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601a_4', 'id': 'b6r601a_4_all_2', 'msg': 'Rincian b6r601a kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601a kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601b_2 + +desaPage3[0].b6r601b_3 == 0) && ((+desaPage3[0].b6r601b_4 + +desaPage3[0].b6r601b_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601b_4', 'id': 'b6r601b_4_all_2', 'msg': 'Rincian b6r601b kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601b kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601c_2 + +desaPage3[0].b6r601c_3 == 0) && ((+desaPage3[0].b6r601c_4 + +desaPage3[0].b6r601c_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601c_4', 'id': 'b6r601c_4_all_2', 'msg': 'Rincian b6r601c kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601c kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601d_2 + +desaPage3[0].b6r601d_3 == 0) && ((+desaPage3[0].b6r601d_4 + +desaPage3[0].b6r601d_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601d_4', 'id': 'b6r601d_4_all_2', 'msg': 'Rincian b6r601d kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601d kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601e_2 + +desaPage3[0].b6r601e_3 == 0) && ((+desaPage3[0].b6r601e_4 + +desaPage3[0].b6r601e_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601e_4', 'id': 'b6r601e_4_all_2', 'msg': 'Rincian b6r601e kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601e kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601f_2 + +desaPage3[0].b6r601f_3 == 0) && ((+desaPage3[0].b6r601f_4 + +desaPage3[0].b6r601f_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601f_4', 'id': 'b6r601f_4_all_2', 'msg': 'Rincian b6r601f kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601f kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601g_2 + +desaPage3[0].b6r601g_3 == 0) && ((+desaPage3[0].b6r601g_4 + +desaPage3[0].b6r601g_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601g_4', 'id': 'b6r601g_4_all_2', 'msg': 'Rincian b6r601g kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601g kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601h_2 + +desaPage3[0].b6r601h_3 == 0) && ((+desaPage3[0].b6r601h_4 + +desaPage3[0].b6r601h_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601h_4', 'id': 'b6r601h_4_all_2', 'msg': 'Rincian b6r601h kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601h kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601i_2 + +desaPage3[0].b6r601i_3 == 0) && ((+desaPage3[0].b6r601i_4 + +desaPage3[0].b6r601i_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601i_4', 'id': 'b6r601i_4_all_2', 'msg': 'Rincian b6r601i kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601i kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601j_2 + +desaPage3[0].b6r601j_3 == 0) && ((+desaPage3[0].b6r601j_4 + +desaPage3[0].b6r601j_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601j_4', 'id': 'b6r601j_4_all_2', 'msg': 'Rincian b6r601j kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601j kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601k_2 + +desaPage3[0].b6r601k_3 == 0) && ((+desaPage3[0].b6r601k_4 + +desaPage3[0].b6r601k_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601k_4', 'id': 'b6r601k_4_all_2', 'msg': 'Rincian b6r601k kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601k kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601l_2 + +desaPage3[0].b6r601l_3 == 0) && ((+desaPage3[0].b6r601l_4 + +desaPage3[0].b6r601l_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601l_4', 'id': 'b6r601l_4_all_2', 'msg': 'Rincian b6r601l kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601l kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601m_2 + +desaPage3[0].b6r601m_3 == 0) && ((+desaPage3[0].b6r601m_4 + +desaPage3[0].b6r601m_5) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601m_4', 'id': 'b6r601m_4_all_2', 'msg': 'Rincian b6r601m kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601m kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }

    // kolom 6 dan 7
    if ((+desaPage3[0].b6r601a_2 > 0 || +desaPage3[0].b6r601a_3 > 0) && ((+desaPage3[0].b6r601a_6 + +desaPage3[0].b6r601a_7) < (+desaPage3[0].b6r601a_2 + +desaPage3[0].b6r601a_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601a_6', 'id': 'b6r601a_6_all', 'msg': 'Rincian b6r601a kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601a kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601b_2 > 0 || +desaPage3[0].b6r601b_3 > 0) && ((+desaPage3[0].b6r601b_6 + +desaPage3[0].b6r601b_7) < (+desaPage3[0].b6r601b_2 + +desaPage3[0].b6r601b_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601b_6', 'id': 'b6r601b_6_all', 'msg': 'Rincian b6r601b kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601b kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601c_2 > 0 || +desaPage3[0].b6r601c_3 > 0) && ((+desaPage3[0].b6r601c_6 + +desaPage3[0].b6r601c_7) < (+desaPage3[0].b6r601c_2 + +desaPage3[0].b6r601c_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601c_6', 'id': 'b6r601c_6_all', 'msg': 'Rincian b6r601c kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601c kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601d_2 > 0 || +desaPage3[0].b6r601d_3 > 0) && ((+desaPage3[0].b6r601d_6 + +desaPage3[0].b6r601d_7) < (+desaPage3[0].b6r601d_2 + +desaPage3[0].b6r601d_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601d_6', 'id': 'b6r601d_6_all', 'msg': 'Rincian b6r601d kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601d kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601e_2 > 0 || +desaPage3[0].b6r601e_3 > 0) && ((+desaPage3[0].b6r601e_6 + +desaPage3[0].b6r601e_7) < (+desaPage3[0].b6r601e_2 + +desaPage3[0].b6r601e_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601e_6', 'id': 'b6r601e_6_all', 'msg': 'Rincian b6r601e kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601e kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601f_2 > 0 || +desaPage3[0].b6r601f_3 > 0) && ((+desaPage3[0].b6r601f_6 + +desaPage3[0].b6r601f_7) < (+desaPage3[0].b6r601f_2 + +desaPage3[0].b6r601f_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601f_6', 'id': 'b6r601f_6_all', 'msg': 'Rincian b6r601f kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601f kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601g_2 > 0 || +desaPage3[0].b6r601g_3 > 0) && ((+desaPage3[0].b6r601g_6 + +desaPage3[0].b6r601g_7) < (+desaPage3[0].b6r601g_2 + +desaPage3[0].b6r601g_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601g_6', 'id': 'b6r601g_6_all', 'msg': 'Rincian b6r601g kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601g kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601h_2 > 0 || +desaPage3[0].b6r601h_3 > 0) && ((+desaPage3[0].b6r601h_6 + +desaPage3[0].b6r601h_7) < (+desaPage3[0].b6r601h_2 + +desaPage3[0].b6r601h_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601h_6', 'id': 'b6r601h_6_all', 'msg': 'Rincian b6r601h kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601h kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601i_2 > 0 || +desaPage3[0].b6r601i_3 > 0) && ((+desaPage3[0].b6r601i_6 + +desaPage3[0].b6r601i_7) < (+desaPage3[0].b6r601i_2 + +desaPage3[0].b6r601i_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601i_6', 'id': 'b6r601i_6_all', 'msg': 'Rincian b6r601i kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601i kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601j_2 > 0 || +desaPage3[0].b6r601j_3 > 0) && ((+desaPage3[0].b6r601j_6 + +desaPage3[0].b6r601j_7) < (+desaPage3[0].b6r601j_2 + +desaPage3[0].b6r601j_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601j_6', 'id': 'b6r601j_6_all', 'msg': 'Rincian b6r601j kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601j kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601k_2 > 0 || +desaPage3[0].b6r601k_3 > 0) && ((+desaPage3[0].b6r601k_6 + +desaPage3[0].b6r601k_7) < (+desaPage3[0].b6r601k_2 + +desaPage3[0].b6r601k_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601k_6', 'id': 'b6r601k_6_all', 'msg': 'Rincian b6r601k kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601k kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601l_2 > 0 || +desaPage3[0].b6r601l_3 > 0) && ((+desaPage3[0].b6r601l_6 + +desaPage3[0].b6r601l_7) < (+desaPage3[0].b6r601l_2 + +desaPage3[0].b6r601l_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601l_6', 'id': 'b6r601l_6_all', 'msg': 'Rincian b6r601l kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601l kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }
    if ((+desaPage3[0].b6r601m_2 > 0 || +desaPage3[0].b6r601m_3 > 0) && ((+desaPage3[0].b6r601m_6 + +desaPage3[0].b6r601m_7) < (+desaPage3[0].b6r601m_2 + +desaPage3[0].b6r601m_3))) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601m_6', 'id': 'b6r601m_6_all', 'msg': 'Rincian b6r601m kolom Jumlah Lembaga Pendidikan terisi lebih dari 0, maka rincian <b>b6r601m kolom Jumlah Guru</b> minimal terisi sebesar Jumlah Lembaga Pendidikan' });
    }

    if ((+desaPage3[0].b6r601a_2 + +desaPage3[0].b6r601a_3 == 0) && ((+desaPage3[0].b6r601a_6 + +desaPage3[0].b6r601a_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601a_6', 'id': 'b6r601a_6_all_2', 'msg': 'Rincian b6r601a kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601a kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601b_2 + +desaPage3[0].b6r601b_3 == 0) && ((+desaPage3[0].b6r601b_6 + +desaPage3[0].b6r601b_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601b_6', 'id': 'b6r601b_6_all_2', 'msg': 'Rincian b6r601b kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601b kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601c_2 + +desaPage3[0].b6r601c_3 == 0) && ((+desaPage3[0].b6r601c_6 + +desaPage3[0].b6r601c_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601c_6', 'id': 'b6r601c_6_all_2', 'msg': 'Rincian b6r601c kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601c kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601d_2 + +desaPage3[0].b6r601d_3 == 0) && ((+desaPage3[0].b6r601d_6 + +desaPage3[0].b6r601d_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601d_6', 'id': 'b6r601d_6_all_2', 'msg': 'Rincian b6r601d kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601d kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601e_2 + +desaPage3[0].b6r601e_3 == 0) && ((+desaPage3[0].b6r601e_6 + +desaPage3[0].b6r601e_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601e_6', 'id': 'b6r601e_6_all_2', 'msg': 'Rincian b6r601e kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601e kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601f_2 + +desaPage3[0].b6r601f_3 == 0) && ((+desaPage3[0].b6r601f_6 + +desaPage3[0].b6r601f_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601f_6', 'id': 'b6r601f_6_all_2', 'msg': 'Rincian b6r601f kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601f kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601g_2 + +desaPage3[0].b6r601g_3 == 0) && ((+desaPage3[0].b6r601g_6 + +desaPage3[0].b6r601g_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601g_6', 'id': 'b6r601g_6_all_2', 'msg': 'Rincian b6r601g kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601g kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601h_2 + +desaPage3[0].b6r601h_3 == 0) && ((+desaPage3[0].b6r601h_6 + +desaPage3[0].b6r601h_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601h_6', 'id': 'b6r601h_6_all_2', 'msg': 'Rincian b6r601h kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601h kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601i_2 + +desaPage3[0].b6r601i_3 == 0) && ((+desaPage3[0].b6r601i_6 + +desaPage3[0].b6r601i_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601i_6', 'id': 'b6r601i_6_all_2', 'msg': 'Rincian b6r601i kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601i kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601j_2 + +desaPage3[0].b6r601j_3 == 0) && ((+desaPage3[0].b6r601j_6 + +desaPage3[0].b6r601j_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601j_6', 'id': 'b6r601j_6_all_2', 'msg': 'Rincian b6r601j kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601j kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601k_2 + +desaPage3[0].b6r601k_3 == 0) && ((+desaPage3[0].b6r601k_6 + +desaPage3[0].b6r601k_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601k_6', 'id': 'b6r601k_6_all_2', 'msg': 'Rincian b6r601k kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601k kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601l_2 + +desaPage3[0].b6r601l_3 == 0) && ((+desaPage3[0].b6r601l_6 + +desaPage3[0].b6r601l_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601l_6', 'id': 'b6r601l_6_all_2', 'msg': 'Rincian b6r601l kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601l kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }
    if ((+desaPage3[0].b6r601m_2 + +desaPage3[0].b6r601m_3 == 0) && ((+desaPage3[0].b6r601m_6 + +desaPage3[0].b6r601m_7) > 0)) {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r601m_6', 'id': 'b6r601m_6_all_2', 'msg': 'Rincian b6r601m kolom Jumlah Lembaga Pendidikan jumlahnya 0, maka rincian <b>b6r601m kolom Jumlah Siswa</b> jumlahnya harus 0' });
    }


    if (desaPage3[0].b6r602a === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602a', 'id': 'b6r602a_1', 'msg': 'Rincian <b>b6r602a Rumah sakit</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602b === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602b', 'id': 'b6r602b_1', 'msg': 'Rincian <b>b6r602b Rumah sakit bersalin</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602c === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602c', 'id': 'b6r602c_1', 'msg': 'Rincian <b>b6r602c Puskesmas dengan rawat inap</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602d === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602d', 'id': 'b6r602d_1', 'msg': 'Rincian <b>b6r602d Puskesmas tanpa rawat inap</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602e === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602e', 'id': 'b6r602e_1', 'msg': 'Rincian <b>b6r602e Puskesmas pembantu</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602f === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602f', 'id': 'b6r602f_1', 'msg': 'Rincian <b>b6r602f Poliklinik/balai pengobatan</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602g === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602g', 'id': 'b6r602g_1', 'msg': 'Rincian <b>b6r602g Tempat praktik dokter</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602h === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602h', 'id': 'b6r602h_1', 'msg': 'Rincian <b>b6r602h Rumah bersalin</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602i === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602i', 'id': 'b6r602i_1', 'msg': 'Rincian <b>b6r602i Tempat praktik bidan</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602j === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602j', 'id': 'b6r602j_1', 'msg': 'Rincian <b>b6r602j Poskesdes (pos kesehatan desa)</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602k === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602k', 'id': 'b6r602k_1', 'msg': 'Rincian <b>b6r602k Polindes (pondok bersalin desa)</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602l === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602l', 'id': 'b6r602l_1', 'msg': 'Rincian <b>b6r602l Apotek</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r602m === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r602m', 'id': 'b6r602m_1', 'msg': 'Rincian <b>b6r602m Toko khusus obat/jamu</b> tidak boleh kosong' });
    }

    if (desaPage3[0].b6r603a === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r603a', 'id': 'b6r603a_1', 'msg': 'Rincian <b>b6r603a Jumlah posyandu/posbindu - Posyandu dengan kegiatan/pelayanan setiap sebulan sekali</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r603b === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r603b', 'id': 'b6r603b_1', 'msg': 'Rincian <b>b6r603b Jumlah posyandu/posbindu - Posyandu dengan kegiatan/pelayanan setiap 2 bulan sekali atau lebih</b> tidak boleh kosong' });
    }
    if (desaPage3[0].b6r603c === '') {
        error_samasta1.push({ 'page': 3, 'variabel': 'b6r603c', 'id': 'b6r603c_1', 'msg': 'Rincian <b>b6r603c Jumlah posyandu/posbindu - Jumlah posbindu selama setahun terakhir</b> tidak boleh kosong' });
    }

    //page4
    if (desaPage4[0].b6r604a === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r604a', 'id': 'b6r604a_1', 'msg': 'Rincian <b>b6r604a Dokter umum/spesialis</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b6r604b === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r604b', 'id': 'b6r604b_1', 'msg': 'Rincian <b>b6r604b Dokter gigi (tidak termasuk tukang gigi)</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b6r604c === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r604c', 'id': 'b6r604c_1', 'msg': 'Rincian <b>b6r604c Bidan</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b6r604d === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r604d', 'id': 'b6r604d_1', 'msg': 'Rincian <b>b6r604d Tenaga kesehatan lainnya</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b6r605 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r605', 'id': 'b6r605_1', 'msg': 'Rincian <b>b6r605 Keberadaan bidan desa (BDD)</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b6r606 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b6r606', 'id': 'b6r606_1', 'msg': 'Rincian <b>b6r606 Keberadaan bidan desa (BDD)</b> tidak boleh kosong' });
    }

    if (desaPage4[0].b7r701a === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701a', 'id': 'b7r701a_1', 'msg': 'Rincian <b>b7r701a Masjid</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701b === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701b', 'id': 'b7r701b_1', 'msg': 'Rincian <b>b7r701b Surau/Langgar/Musala</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701c === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701c', 'id': 'b7r701c_1', 'msg': 'Rincian <b>b7r701c Gereja Kristen</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701d === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701d', 'id': 'b7r701d_1', 'msg': 'Rincian <b>b7r701d Gereja Katolik</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701e === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701e', 'id': 'b7r701e_1', 'msg': 'Rincian <b>b7r701e Kapel</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701f === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701f', 'id': 'b7r701f_1', 'msg': 'Rincian <b>b7r701f Pura</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701g === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701g', 'id': 'b7r701g_1', 'msg': 'Rincian <b>b7r701g Wihara</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701h === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701h', 'id': 'b7r701h_1', 'msg': 'Rincian <b>b7r701h Kelenteng</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701i === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701i', 'id': 'b7r701i_1', 'msg': 'Rincian <b>b7r701i Lainnya</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r701i > 0 && desaPage4[0].b7r701i_lainnya === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701i_lainnya', 'id': 'b7r701i_lainnya_1', 'msg': 'Rincian <b>b7r701i Lainnya</b> harus terisi' });
    }
    if (desaPage4[0].b7r701i == 0 && desaPage4[0].b7r701i_lainnya != '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r701i_lainnya', 'id': 'b7r701i_lainnya_2', 'msg': 'Jumlah rincian b7r701i Lainnya 0, maka rincian <b>b7r701i Lainnya</b> harus kosong' });
    }

    if (desaPage4[0].b7r702a === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702a', 'id': 'b7r702a_1', 'msg': 'Rincian <b>b7r702a PKK</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r702b === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702b', 'id': 'b7r702b_1', 'msg': 'Rincian <b>b7r702b Karang taruna</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r702c === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702c', 'id': 'b7r702c_1', 'msg': 'Rincian <b>b7r702c Lembaga adat</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r702d === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702d', 'id': 'b7r702d_1', 'msg': 'Rincian <b>b7r702d Kelompok tani</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r702e === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702e', 'id': 'b7r702e_1', 'msg': 'Rincian <b>b7r702e Lembaga pengelolaan air</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b7r702f === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b7r702f', 'id': 'b7r702f_1', 'msg': 'Rincian <b>b7r702f Kelompok masyarakat (pokmas)</b> tidak boleh kosong' });
    }

    if (desaPage4[0].b8r801a_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801a_2', 'id': 'b8r801a_2_1', 'msg': 'Rincian <b>b8r801a kolom 2 Sepak bola</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801a_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801a_3', 'id': 'b8r801a_3_1', 'msg': 'Rincian <b>b8r801a kolom 3 Sepak bola</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801b_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801b_2', 'id': 'b8r801b_2_1', 'msg': 'Rincian <b>b8r801b kolom 2 Bola voli</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801b_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801b_3', 'id': 'b8r801b_3_1', 'msg': 'Rincian <b>b8r801b kolom 3 Bola voli</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801c_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801c_2', 'id': 'b8r801c_2_1', 'msg': 'Rincian <b>b8r801c kolom 2 Bulu tangkis</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801c_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801c_3', 'id': 'b8r801c_3_1', 'msg': 'Rincian <b>b8r801c kolom 3 Bulu tangkis</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801d_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801d_2', 'id': 'b8r801d_2_1', 'msg': 'Rincian <b>b8r801d kolom 2 Bola basket</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801d_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801d_3', 'id': 'b8r801d_3_1', 'msg': 'Rincian <b>b8r801d kolom 3 Bola basket</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801e_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801e_2', 'id': 'b8r801e_2_1', 'msg': 'Rincian <b>b8r801e kolom 2 Tenis lapangan</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801e_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801e_3', 'id': 'b8r801e_3_1', 'msg': 'Rincian <b>b8r801e kolom 3 Tenis lapangan</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801f_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801f_2', 'id': 'b8r801f_2_1', 'msg': 'Rincian <b>b8r801f kolom 2 Tenis meja</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801f_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801f_3', 'id': 'b8r801f_3_1', 'msg': 'Rincian <b>b8r801f kolom 3 Tenis meja</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801g_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801g_2', 'id': 'b8r801g_2_1', 'msg': 'Rincian <b>b8r801g kolom 2 Futsal</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801g_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801g_3', 'id': 'b8r801g_3_1', 'msg': 'Rincian <b>b8r801g kolom 3 Futsal</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801h_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801h_2', 'id': 'b8r801h_2_1', 'msg': 'Rincian <b>b8r801h kolom 2 Renang</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801h_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801h_3', 'id': 'b8r801h_3_1', 'msg': 'Rincian <b>b8r801h kolom 3 Renang</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801i_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801i_2', 'id': 'b8r801i_2_1', 'msg': 'Rincian <b>b8r801i kolom 2 Bela diri (pencak silat, karate, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801i_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801i_3', 'id': 'b8r801i_3_1', 'msg': 'Rincian <b>b8r801i kolom 3 Bela diri (pencak silat, karate, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801j_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801j_2', 'id': 'b8r801j_2_1', 'msg': 'Rincian <b>b8r801j kolom 2 Bilyard</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801j_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801j_3', 'id': 'b8r801j_3_1', 'msg': 'Rincian <b>b8r801j kolom 3 Bilyard</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801k_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801k_2', 'id': 'b8r801k_2_1', 'msg': 'Rincian <b>b8r801k kolom 2 Fitnes, aerobik, dll.</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801k_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801k_3', 'id': 'b8r801k_3_1', 'msg': 'Rincian <b>b8r801k kolom 3 Fitnes, aerobik, dll.</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801l_2 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801l_2', 'id': 'b8r801l_2_1', 'msg': 'Rincian <b>b8r801l kolom 2 Lainnya</b> tidak boleh kosong' });
    }
    if (desaPage4[0].b8r801l_3 === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801l_3', 'id': 'b8r801l_3_1', 'msg': 'Rincian <b>b8r801l kolom 3 Lainnya</b> tidak boleh kosong' });
    }
    if ((+desaPage4[0].b8r801l_2 + +desaPage4[0].b8r801l_3 <= 3) && desaPage4[0].b8r801l_1_lainnya === '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801l_1_lainnya', 'id': 'b8r801l_1_lainnya_1', 'msg': 'Rincian b8r801l Lainnya kolom 2 dan atau kolom 3 ada yang berkode 1, maka rincian <b>b8r801l Lainnya kolom 1</b> harus terisi' });
    }
    if ((+desaPage4[0].b8r801l_2 + +desaPage4[0].b8r801l_3 <= 3) && desaPage4[0].b8r801l_1_lainnya.length < 3) {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801l_1_lainnya', 'id': 'b8r801l_1_lainnya_2', 'msg': 'Rincian b8r801l Lainnya kolom 2 dan atau kolom 3 ada yang berkode 1, maka rincian <b>b8r801l Lainnya kolom 1</b> minimal 3 karakter' });
    }
    if ((+desaPage4[0].b8r801l_2 + +desaPage4[0].b8r801l_3 == 4) && desaPage4[0].b8r801l_1_lainnya != '') {
        error_samasta1.push({ 'page': 4, 'variabel': 'b8r801l_1_lainnya', 'id': 'b8r801l_1_lainnya_3', 'msg': 'Rincian b8r801l Lainnya kolom 2 dan kolom 3 berkode 2, maka rincian <b>b8r801l Lainnya</b> harus kosong' });
    }

    //page5
    b9r901 = joinLuas(desaPage5[0].b9r901_i, desaPage5[0].b9r901_ii);
    b9r902a = joinLuas(desaPage5[0].b9r902a_i, desaPage5[0].b9r902a_ii);
    b9r902a_1 = joinLuas(desaPage5[0].b9r902a_1_i, desaPage5[0].b9r902a_1_ii);
    b9r902a_2 = joinLuas(desaPage5[0].b9r902a_2_i, desaPage5[0].b9r902a_2_ii);
    b9r902b = joinLuas(desaPage5[0].b9r902b_i, desaPage5[0].b9r902b_ii);
    b9r902c = joinLuas(desaPage5[0].b9r902c_i, desaPage5[0].b9r902c_ii);

    if (desaPage5[0].b9r901_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r901_i', 'id': 'b9r901_i_1', 'msg': 'Rincian <b>b9r901_i Luas wilayah desa/kelurahan</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r901_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r901_ii', 'id': 'b9r901_ii_1', 'msg': 'Rincian <b>b9r901_ii Luas wilayah desa/kelurahan</b> tidak boleh kosong' });
    }
    if (b9r901 != b9r902a + b9r902b + b9r902c) {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r901_i', 'id': 'b9r901_i_2', 'msg': 'Rincian <b>b9r901 Luas wilayah desa/kelurahan</b> harus sama dengan penjumlahan Lahan pertanian sawah, Lahan pertanian nonsawah dan Lahan nonpertanian<b>(b9r902a + b9r902b + b9r902c)</b>' });
    }
    if (desaPage5[0].b9r902a_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_i', 'id': 'b9r902a_i_1', 'msg': 'Rincian <b>b9r902a_i Lahan pertanian sawah</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902a_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_ii', 'id': 'b9r902a_ii_1', 'msg': 'Rincian <b>b9r902a_ii Lahan pertanian sawah</b> tidak boleh kosong' });
    }
    if (b9r902a != b9r902a_1 + b9r902a_2) {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_i', 'id': 'b9r902a_i_2', 'msg': 'Rincian <b>b9r902a Lahan pertanian sawah</b> harus sama dengan penjumlahan Lahan sawah irigasi dan Lahan sawah nonirigasi <b>(b9r902a_1 + b9r902a_2)</b>' });
    }
    if (desaPage5[0].b9r902a_1_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_1_i', 'id': 'b9r902a_1_i_1', 'msg': 'Rincian <b>b9r902a_1_i Lahan sawah irigasi</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902a_1_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_1_ii', 'id': 'b9r902a_1_ii_1', 'msg': 'Rincian <b>b9r902a_1_ii Lahan sawah irigasi</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902a_2_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_2_i', 'id': 'b9r902a_2_i_1', 'msg': 'Rincian <b>b9r902a_2_i Lahan sawah nonirigasi (tadah hujan, pasang surut, rawa)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902a_2_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902a_2_ii', 'id': 'b9r902a_2_ii_1', 'msg': 'Rincian <b>b9r902a_2_ii Lahan sawah nonirigasi (tadah hujan, pasang surut, rawa)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902b_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902b_i', 'id': 'b9r902b_i_1', 'msg': 'Rincian <b>b9r902b_i Lahan pertanian nonsawah (tegal/kebun, ladang/huma, tambak, kolam/tebat/empang, perkebunan, peternakan, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902b_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902b_ii', 'id': 'b9r902b_ii_1', 'msg': 'Rincian <b>b9r902b_ii Lahan pertanian nonsawah (tegal/kebun, ladang/huma, tambak, kolam/tebat/empang, perkebunan, peternakan, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902c_i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902c_i', 'id': 'b9r902c_i_1', 'msg': 'Rincian <b>b9r902c_i Lahan nonpertanian (perumahan, industri, perkantoran, pertokoan, jalan, prasarana umum, lapangan, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b9r902c_ii === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b9r902c_ii', 'id': 'b9r902c_ii_1', 'msg': 'Rincian <b>b9r902c_ii Lahan nonpertanian (perumahan, industri, perkantoran, pertokoan, jalan, prasarana umum, lapangan, dll.)</b> tidak boleh kosong' });
    }

    if (desaPage5[0].b10r1001a === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001a', 'id': 'b10r1001a_1', 'msg': 'Rincian <b>b10r1001a Kelompok pertokoan (minimal 10 toko dan mengelompok dalam satu lokasi)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001b === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001b', 'id': 'b10r1001b_1', 'msg': 'Rincian <b>b10r1001b Pasar dengan bangunan permanen (memiliki atap, lantai, dan dinding)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001c === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001c', 'id': 'b10r1001c_1', 'msg': 'Rincian <b>b10r1001c Pasar dengan bangunan semi permanen (memiliki atap dan lantai, tanpa dinding)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001d === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001d', 'id': 'b10r1001d_1', 'msg': 'Rincian <b>b10r1001d Pasar tanpa bangunan (misalnya: pasar subuh, pasar terapung, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001e === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001e', 'id': 'b10r1001e_1', 'msg': 'Rincian <b>b10r1001e Jumlah minimarket/swalayan (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang secara eceran dengan label harga, sistem pelayanan mandiri, luas lantai < 400 m2)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001f_1 === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001f_1', 'id': 'b10r1001f_1_1', 'msg': 'Rincian <b>b10r1001f_1 Toko/warung kelontong (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang keperluan sehari– hari secara eceran, tanpa ada sistem pelayanan mandiri)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001f_2 === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001f_2', 'id': 'b10r1001f_2_1', 'msg': 'Rincian <b>b10r1001f_2 Toko/warung kelontong yang menjual bahan pangan (sembako)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001g === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001g', 'id': 'b10r1001g_1', 'msg': 'Rincian <b>b10r1001g Restoran/rumah makan (usaha pangan siap saji di bangunan tetap, pembeli biasanya dikenai pajak)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001h === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001h', 'id': 'b10r1001h_1', 'msg': 'Rincian <b>b10r1001h Warung/kedai makanan minuman (usaha pangan siap saji di bangunan tetap, pembeli biasanya tidak dikenai pajak)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001i === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001i', 'id': 'b10r1001i_1', 'msg': 'Rincian <b>b10r1001i Hotel (menyediakan jasa akomodasi dan ada restoran, penginapan dengan izin usaha sebagai hotel)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1001j === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1001j', 'id': 'b10r1001j_1', 'msg': 'Rincian <b>b10r1001j Penginapan: hostel/motel/losmen/wisma (menyediakan akomodasi, penginapan dengan izin usaha bukan sebagai hotel)</b> tidak boleh kosong' });
    }

    if (desaPage5[0].b10r1002a === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1002a', 'id': 'b10r1002a_1', 'msg': 'Rincian <b>b10r1002a Bank Umum Pemerintah (BRI, BNI, Mandiri, BPD, BTN)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1002b === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1002b', 'id': 'b10r1002b_1', 'msg': 'Rincian <b>b10r1002b Bank Umum Swasta (BCA, Permata, Sinarmas, CIMB, dll.)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1002c === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1002c', 'id': 'b10r1002c_1', 'msg': 'Rincian <b>b10r1002c Bank Perkreditan Rakyat (BPR)</b> tidak boleh kosong' });
    }

    if (desaPage5[0].b10r1003a === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003a', 'id': 'b10r1003a_1', 'msg': 'Rincian <b>b10r1003a Baitul Maal Wa Tamwil (BMT)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003b === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003b', 'id': 'b10r1003b_1', 'msg': 'Rincian <b>b10r1003b Pegadaian</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003c === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003c', 'id': 'b10r1003c_1', 'msg': 'Rincian <b>b10r1003c njungan Tunai Mandiri (ATM)</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003d === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003d', 'id': 'b10r1003d_1', 'msg': 'Rincian <b>b10r1003d Bengkel mobil/motor</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003e === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003e', 'id': 'b10r1003e_1', 'msg': 'Rincian <b>b10r1003e Salon Kecantikan</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003f === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003f', 'id': 'b10r1003f_1', 'msg': 'Rincian <b>b10r1003f Agen Tiket/Travel/Biro Perjalanan</b> tidak boleh kosong' });
    }
    if (desaPage5[0].b10r1003g === '') {
        error_samasta1.push({ 'page': 5, 'variabel': 'b10r1003g', 'id': 'b10r1003g_1', 'msg': 'Rincian <b>b10r1003g Agen Bank</b> tidak boleh kosong' });
    }
}