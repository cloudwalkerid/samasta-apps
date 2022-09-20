function ambilTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}

function ambilDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = date + '_' + time;
    return dateTime;
}

function getGuid() {
    //create ID with something like GUID
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    // then to call it, plus stitch in '4' in the third group
    guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    return guid;
}

function tabindexFix() {
    $("input[tabindex], textarea[tabindex]").each(function () {
        $(this).on("keypress", function (e) {
            if (e.keyCode === 13) {
                var nextElement = $('[tabindex="' + (this.tabIndex + 1) + '"]');
                if (nextElement.length) {
                    $('[tabindex="' + (this.tabIndex + 1) + '"]').focus();
                    e.preventDefault();
                } else
                    $('[tabindex="1"]').focus();
            }
        });
    });
}

///////// samasta 1 ////////////////////
function getEntriSessionDataSamasta1() {
    const fs = require('fs');

    let data = fs.readFileSync(dlPathData + `entriSessionSamasta1.json`);
    let entriSessionData = JSON.parse(data);

    namaFile = entriSessionData.namaFile;
    statusEntrian = entriSessionData.statusEntrian;
}

function bacaIsiJsonSamasta1() {
    const fs = require('fs');

    let rawdata = fs.readFileSync(dlPathData + `entriSamasta1/${namaFile}.json`);
    dataDesa = JSON.parse(rawdata);

    kodeProv = dataDesa.kodeProv;
    kodeKab = dataDesa.kodeKab;
    kodeKec = dataDesa.kodeKec;
    kodeDesa = dataDesa.kodeDesa;
    tahun = dataDesa.tahun;
    b1r105 = dataDesa.b1r105;
    b2r201a = dataDesa.b2r201a;
    b2r201b = dataDesa.b2r201b;
    b2r202a_dd = dataDesa.b2r202a_dd;
    b2r202a_mm = dataDesa.b2r202a_mm;
    b2r202a_yy = dataDesa.b2r202a_yy;
    b2r202b_dd = dataDesa.b2r202b_dd;
    b2r202b_mm = dataDesa.b2r202b_mm;
    b2r202b_yy = dataDesa.b2r202b_yy;
    b2r203a = dataDesa.b2r203a;
    b2r203b = dataDesa.b2r203b;
    b3r301 = dataDesa.b3r301;
    b3r302_dd = dataDesa.b3r302_dd;
    b3r302_mm = dataDesa.b3r302_mm;
    b3r302_yy = dataDesa.b3r302_yy;
    b3r303 = dataDesa.b3r303;
    statusDok = dataDesa.statusDok;
    operatorCreated = dataDesa.operatorCreated;
    timeCreated = dataDesa.timeCreated;
    operatorLastMod = dataDesa.operatorLastMod;
    timeLastMod = dataDesa.timeLastMod;
    lamaEntri = dataDesa.lamaEntri;
    desaPage2 = dataDesa.desaPage2;
    desaPage3 = dataDesa.desaPage3;
    desaPage4 = dataDesa.desaPage4;
    desaPage5 = dataDesa.desaPage5;
    desaPage6 = dataDesa.desaPage6;
}

function joinLuas(a, b) {
    if (b.length == 1) return +a + +(b / 10);
    if (b.length == 2) return +a + +(b / 100);
}

async function simpanKeDatabaseSamasta1() {
    bacaIsiJsonSamasta1();

    //statusDok = "E";
    operatorLastMod = dlNamaUser;
    timeLastMod = ambilTime();
    lamaEntri = '0';

    await simpanSamasta1();

    async function simpanSamasta1() {
        // jika blm ada di db, insert
        // jika sudah ada di db, update
        b9r901 = joinLuas(desaPage5[0].b9r901_i, desaPage5[0].b9r901_ii);
        b9r902a = joinLuas(desaPage5[0].b9r902a_i, desaPage5[0].b9r902a_ii);
        b9r902a_1 = joinLuas(desaPage5[0].b9r902a_1_i, desaPage5[0].b9r902a_1_ii);
        b9r902a_2 = joinLuas(desaPage5[0].b9r902a_2_i, desaPage5[0].b9r902a_2_ii);
        b9r902b = joinLuas(desaPage5[0].b9r902b_i, desaPage5[0].b9r902b_ii);
        b9r902c = joinLuas(desaPage5[0].b9r902c_i, desaPage5[0].b9r902c_ii);

        s = `SELECT * FROM t_samasta1 WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND tahun = '${tahun}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `UPDATE t_samasta1 SET 
                b1r105 = '${b1r105}', b2r201a = '${b2r201a}', b2r201b = '${b2r201b}', b2r202a_dd = '${b2r202a_dd}', b2r202a_mm = '${b2r202a_mm}', b2r202a_yy = '${b2r202a_yy}', b2r202b_dd = '${b2r202b_dd}', b2r202b_mm = '${b2r202b_mm}', b2r202b_yy = '${b2r202b_yy}', b2r203a = '${b2r203a}', b2r203b = '${b2r203b}', b3r301 = '${b3r301}', b3r302_dd = '${b3r302_dd}', b3r302_mm = '${b3r302_mm}', b3r302_yy = '${b3r302_yy}', b3r303 = '${b3r303}', 
                b4r401 = '${desaPage2[0].b4r401}', b4r402a = '${desaPage2[0].b4r402a}', b4r402b = '${desaPage2[0].b4r402b}', b4r402c = '${desaPage2[0].b4r402c}', b4r403 = '${desaPage2[0].b4r403}', b4r404a = '${desaPage2[0].b4r404a}', b4r404b = '${desaPage2[0].b4r404b}', b4r404c = '${desaPage2[0].b4r404c}', b4r405a = '${desaPage2[0].b4r405a}', b4r405b = '${desaPage2[0].b4r405b}', b4r405c = '${desaPage2[0].b4r405c}', b4r405d = '${desaPage2[0].b4r405d}', b4r406 = '${desaPage2[0].b4r406}', b4r407a = '${desaPage2[0].b4r407a}', 
                b4r407b_a = '${desaPage2[0].b4r407b_a}', b4r407b_b = '${desaPage2[0].b4r407b_b}', b4r407b_c = '${desaPage2[0].b4r407b_c}', b4r407b_d = '${desaPage2[0].b4r407b_d}', b4r407b_e = '${desaPage2[0].b4r407b_e}', b4r407c = '${desaPage2[0].b4r407c}', b4r408a = '${desaPage2[0].b4r408a}', b4r408b = '${desaPage2[0].b4r408b}', b4r408c = '${desaPage2[0].b4r408c}', b5r501a = '${desaPage2[0].b5r501a}', b5r501b = '${desaPage2[0].b5r501b}', b5r502a = '${desaPage2[0].b5r502a}', b5r502b = '${desaPage2[0].b5r502b}', b5r502c_1 = '${desaPage2[0].b5r502c_1}', b5r502c_2 = '${desaPage2[0].b5r502c_2}', b5r502c_3 = '${desaPage2[0].b5r502c_3}', b5r503a = '${desaPage3[0].b5r503a}', b5r503b = '${desaPage3[0].b5r503b}', b5r504a = '${desaPage3[0].b5r504a}', b5r504b_1 = '${desaPage3[0].b5r504b_1}', b5r504b_2 = '${desaPage3[0].b5r504b_2}', b5r504b_3 = '${desaPage3[0].b5r504b_3}', b6r601a_2 = '${desaPage3[0].b6r601a_2}', b6r601a_3 = '${desaPage3[0].b6r601a_3}', b6r601a_4 = '${desaPage3[0].b6r601a_4}', b6r601a_5 = '${desaPage3[0].b6r601a_5}', b6r601a_6 = '${desaPage3[0].b6r601a_6}', b6r601a_7 = '${desaPage3[0].b6r601a_7}', b6r601b_2 = '${desaPage3[0].b6r601b_2}', b6r601b_3 = '${desaPage3[0].b6r601b_3}', b6r601b_4 = '${desaPage3[0].b6r601b_4}', b6r601b_5 = '${desaPage3[0].b6r601b_5}', 
                b6r601b_6 = '${desaPage3[0].b6r601b_6}', b6r601b_7 = '${desaPage3[0].b6r601b_7}', b6r601c_2 = '${desaPage3[0].b6r601c_2}', b6r601c_3 = '${desaPage3[0].b6r601c_3}', b6r601c_4 = '${desaPage3[0].b6r601c_4}', b6r601c_5 = '${desaPage3[0].b6r601c_5}', b6r601c_6 = '${desaPage3[0].b6r601c_6}', b6r601c_7 = '${desaPage3[0].b6r601c_7}', b6r601d_2 = '${desaPage3[0].b6r601d_2}', b6r601d_3 = '${desaPage3[0].b6r601d_3}', b6r601d_4 = '${desaPage3[0].b6r601d_4}', b6r601d_5 = '${desaPage3[0].b6r601d_5}', b6r601d_6 = '${desaPage3[0].b6r601d_6}', b6r601d_7 = '${desaPage3[0].b6r601d_7}', b6r601e_2 = '${desaPage3[0].b6r601e_2}', b6r601e_3 = '${desaPage3[0].b6r601e_3}', b6r601e_4 = '${desaPage3[0].b6r601e_4}', b6r601e_5 = '${desaPage3[0].b6r601e_5}', b6r601e_6 = '${desaPage3[0].b6r601e_6}', b6r601e_7 = '${desaPage3[0].b6r601e_7}', b6r601f_2 = '${desaPage3[0].b6r601f_2}', b6r601f_3 = '${desaPage3[0].b6r601f_3}', b6r601f_4 = '${desaPage3[0].b6r601f_4}', b6r601f_5 = '${desaPage3[0].b6r601f_5}', b6r601f_6 = '${desaPage3[0].b6r601f_6}', b6r601f_7 = '${desaPage3[0].b6r601f_7}', b6r601g_2 = '${desaPage3[0].b6r601g_2}', b6r601g_3 = '${desaPage3[0].b6r601g_3}', b6r601g_4 = '${desaPage3[0].b6r601g_4}', b6r601g_5 = '${desaPage3[0].b6r601g_5}', 
                b6r601g_6 = '${desaPage3[0].b6r601g_6}', b6r601g_7 = '${desaPage3[0].b6r601g_7}', b6r601h_2 = '${desaPage3[0].b6r601h_2}', b6r601h_3 = '${desaPage3[0].b6r601h_3}', b6r601h_4 = '${desaPage3[0].b6r601h_4}', b6r601h_5 = '${desaPage3[0].b6r601h_5}', b6r601h_6 = '${desaPage3[0].b6r601h_6}', b6r601h_7 = '${desaPage3[0].b6r601h_7}', b6r601i_2 = '${desaPage3[0].b6r601i_2}', b6r601i_3 = '${desaPage3[0].b6r601i_3}', b6r601i_4 = '${desaPage3[0].b6r601i_4}', b6r601i_5 = '${desaPage3[0].b6r601i_5}', b6r601i_6 = '${desaPage3[0].b6r601i_6}', b6r601i_7 = '${desaPage3[0].b6r601i_7}', b6r601j_2 = '${desaPage3[0].b6r601j_2}', b6r601j_3 = '${desaPage3[0].b6r601j_3}', b6r601j_4 = '${desaPage3[0].b6r601j_4}', b6r601j_5 = '${desaPage3[0].b6r601j_5}', b6r601j_6 = '${desaPage3[0].b6r601j_6}', b6r601j_7 = '${desaPage3[0].b6r601j_7}', b6r601k_2 = '${desaPage3[0].b6r601k_2}', b6r601k_3 = '${desaPage3[0].b6r601k_3}', b6r601k_4 = '${desaPage3[0].b6r601k_4}', b6r601k_5 = '${desaPage3[0].b6r601k_5}', b6r601k_6 = '${desaPage3[0].b6r601k_6}', b6r601k_7 = '${desaPage3[0].b6r601k_7}', b6r601l_2 = '${desaPage3[0].b6r601l_2}', b6r601l_3 = '${desaPage3[0].b6r601l_3}', b6r601l_4 = '${desaPage3[0].b6r601l_4}', b6r601l_5 = '${desaPage3[0].b6r601l_5}', 
                b6r601l_6 = '${desaPage3[0].b6r601l_6}', b6r601l_7 = '${desaPage3[0].b6r601l_7}', b6r601m_2 = '${desaPage3[0].b6r601m_2}', b6r601m_3 = '${desaPage3[0].b6r601m_3}', b6r601m_4 = '${desaPage3[0].b6r601m_4}', b6r601m_5 = '${desaPage3[0].b6r601m_5}', b6r601m_6 = '${desaPage3[0].b6r601m_6}', b6r601m_7 = '${desaPage3[0].b6r601m_7}', b6r602a = '${desaPage3[0].b6r602a}', b6r602b = '${desaPage3[0].b6r602b}', b6r602c = '${desaPage3[0].b6r602c}', b6r602d = '${desaPage3[0].b6r602d}', b6r602e = '${desaPage3[0].b6r602e}', b6r602f = '${desaPage3[0].b6r602f}', b6r602g = '${desaPage3[0].b6r602g}', b6r602h = '${desaPage3[0].b6r602h}', b6r602i = '${desaPage3[0].b6r602i}', b6r602j = '${desaPage3[0].b6r602j}', b6r602k = '${desaPage3[0].b6r602k}', b6r602l = '${desaPage3[0].b6r602l}', b6r602m = '${desaPage3[0].b6r602m}', b6r603a = '${desaPage3[0].b6r603a}', b6r603b = '${desaPage3[0].b6r603b}', b6r603c = '${desaPage3[0].b6r603c}', b6r604a = '${desaPage4[0].b6r604a}', b6r604b = '${desaPage4[0].b6r604b}', b6r604c = '${desaPage4[0].b6r604c}', b6r604d = '${desaPage4[0].b6r604d}', b6r605 = '${desaPage4[0].b6r605}', b6r606 = '${desaPage4[0].b6r606}', 
                b7r701a = '${desaPage4[0].b7r701a}', b7r701b = '${desaPage4[0].b7r701b}', b7r701c = '${desaPage4[0].b7r701c}', b7r701d = '${desaPage4[0].b7r701d}', b7r701e = '${desaPage4[0].b7r701e}', b7r701f = '${desaPage4[0].b7r701f}', b7r701g = '${desaPage4[0].b7r701g}', b7r701h = '${desaPage4[0].b7r701h}', b7r701i = '${desaPage4[0].b7r701i}', b7r701i_lainnya = '${desaPage4[0].b7r701i_lainnya}', b7r702a = '${desaPage4[0].b7r702a}', b7r702b = '${desaPage4[0].b7r702b}', b7r702c = '${desaPage4[0].b7r702c}', b7r702d = '${desaPage4[0].b7r702d}', b7r702e = '${desaPage4[0].b7r702e}', b7r702f = '${desaPage4[0].b7r702f}', 
                b8r801l_1_lainnya = '${desaPage4[0].b8r801l_1_lainnya}', b8r801a_2 = '${desaPage4[0].b8r801a_2}', b8r801b_2 = '${desaPage4[0].b8r801b_2}', b8r801c_2 = '${desaPage4[0].b8r801c_2}', b8r801d_2 = '${desaPage4[0].b8r801d_2}', b8r801e_2 = '${desaPage4[0].b8r801e_2}', b8r801f_2 = '${desaPage4[0].b8r801f_2}', b8r801g_2 = '${desaPage4[0].b8r801g_2}', b8r801h_2 = '${desaPage4[0].b8r801h_2}', b8r801i_2 = '${desaPage4[0].b8r801i_2}', b8r801j_2 = '${desaPage4[0].b8r801j_2}', b8r801k_2 = '${desaPage4[0].b8r801k_2}', b8r801l_2 = '${desaPage4[0].b8r801l_2}', b8r801a_3 = '${desaPage4[0].b8r801a_3}', 
                b8r801b_3 = '${desaPage4[0].b8r801b_3}', b8r801c_3 = '${desaPage4[0].b8r801c_3}', b8r801d_3 = '${desaPage4[0].b8r801d_3}', b8r801e_3 = '${desaPage4[0].b8r801e_3}', b8r801f_3 = '${desaPage4[0].b8r801f_3}', b8r801g_3 = '${desaPage4[0].b8r801g_3}', b8r801h_3 = '${desaPage4[0].b8r801h_3}', b8r801i_3 = '${desaPage4[0].b8r801i_3}', b8r801j_3 = '${desaPage4[0].b8r801j_3}', b8r801k_3 = '${desaPage4[0].b8r801k_3}', b8r801l_3 = '${desaPage4[0].b8r801l_3}', 
                b9r901 = '${b9r901}', b9r902a = '${b9r902a}', b9r902a_1 = '${b9r902a_1}', b9r902a_2 = '${b9r902a_2}', b9r902b = '${b9r902b}', b9r902c = '${b9r902c}', 
                b10r1001a = '${desaPage5[0].b10r1001a}', b10r1001b = '${desaPage5[0].b10r1001b}', b10r1001c = '${desaPage5[0].b10r1001c}', b10r1001d = '${desaPage5[0].b10r1001d}', b10r1001e = '${desaPage5[0].b10r1001e}', b10r1001f_1 = '${desaPage5[0].b10r1001f_1}', b10r1001f_2 = '${desaPage5[0].b10r1001f_2}', b10r1001g = '${desaPage5[0].b10r1001g}', b10r1001h = '${desaPage5[0].b10r1001h}', b10r1001i = '${desaPage5[0].b10r1001i}', b10r1001j = '${desaPage5[0].b10r1001j}', 
                b10r1002a = '${desaPage5[0].b10r1002a}', b10r1002b = '${desaPage5[0].b10r1002b}', b10r1002c = '${desaPage5[0].b10r1002c}', 
                b10r1003a = '${desaPage5[0].b10r1003a}', b10r1003b = '${desaPage5[0].b10r1003b}', b10r1003c = '${desaPage5[0].b10r1003c}', b10r1003d = '${desaPage5[0].b10r1003d}', b10r1003e = '${desaPage5[0].b10r1003e}', b10r1003f = '${desaPage5[0].b10r1003f}', b10r1003g = '${desaPage5[0].b10r1003g}', 
                b11catatan = '${desaPage6[0].b11catatan}', 
                statusDok = '${statusDok}', operatorCreated = '${operatorCreated}', timeCreated = '${timeCreated}', operatorLastMod = '${operatorLastMod}', timeLastMod = '${timeLastMod}', lamaEntri = '${lamaEntri}'
                WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND tahun = '${tahun}'`;
        } else {
            sql = `INSERT INTO t_samasta1 
              (
                kodeProv, kodeKab, kodeKec, kodeDesa, tahun, b1r105, b2r201a, b2r201b, b2r202a_dd, b2r202a_mm, b2r202a_yy, b2r202b_dd, b2r202b_mm, b2r202b_yy, b2r203a, b2r203b, b3r301, b3r302_dd, b3r302_mm, b3r302_yy, b3r303, b4r401, b4r402a, b4r402b, b4r402c, b4r403, b4r404a, b4r404b, b4r404c, b4r405a, b4r405b, b4r405c, b4r405d, b4r406, b4r407a, b4r407b_a, b4r407b_b, b4r407b_c, b4r407b_d, b4r407b_e, b4r407c, b4r408a, b4r408b, b4r408c, b5r501a, b5r501b, b5r502a, b5r502b, b5r502c_1, b5r502c_2, b5r502c_3, b5r503a, b5r503b, b5r504a, b5r504b_1, b5r504b_2, b5r504b_3, b6r601a_2, b6r601a_3, b6r601a_4, b6r601a_5, b6r601a_6, b6r601a_7, b6r601b_2, b6r601b_3, b6r601b_4, b6r601b_5, b6r601b_6, b6r601b_7, b6r601c_2, b6r601c_3, b6r601c_4, b6r601c_5, b6r601c_6, b6r601c_7, b6r601d_2, b6r601d_3, b6r601d_4, b6r601d_5, b6r601d_6, b6r601d_7, b6r601e_2, b6r601e_3, b6r601e_4, b6r601e_5, b6r601e_6, b6r601e_7, b6r601f_2, b6r601f_3, b6r601f_4, b6r601f_5, b6r601f_6, b6r601f_7, b6r601g_2, b6r601g_3, b6r601g_4, b6r601g_5, b6r601g_6, b6r601g_7, b6r601h_2, 
                b6r601h_3, b6r601h_4, b6r601h_5, b6r601h_6, b6r601h_7, b6r601i_2, b6r601i_3, b6r601i_4, b6r601i_5, b6r601i_6, b6r601i_7, b6r601j_2, b6r601j_3, b6r601j_4, b6r601j_5, b6r601j_6, b6r601j_7, b6r601k_2, b6r601k_3, b6r601k_4, b6r601k_5, b6r601k_6, b6r601k_7, b6r601l_2, b6r601l_3, b6r601l_4, b6r601l_5, b6r601l_6, b6r601l_7, b6r601m_2, b6r601m_3, b6r601m_4, b6r601m_5, b6r601m_6, b6r601m_7, b6r602a, b6r602b, b6r602c, b6r602d, b6r602e, b6r602f, b6r602g, b6r602h, b6r602i, b6r602j, b6r602k, b6r602l, b6r602m, b6r603a, b6r603b, b6r603c, b6r604a, b6r604b, b6r604c, b6r604d, b6r605, b6r606, b7r701a, b7r701b, b7r701c, b7r701d, b7r701e, b7r701f, b7r701g, b7r701h, b7r701i, b7r701i_lainnya, b7r702a, b7r702b, b7r702c, b7r702d, b7r702e, b7r702f, b8r801l_1_lainnya, b8r801a_2, b8r801b_2, b8r801c_2, b8r801d_2, b8r801e_2, b8r801f_2, b8r801g_2, b8r801h_2, b8r801i_2, b8r801j_2, b8r801k_2, b8r801l_2, b8r801a_3, b8r801b_3, b8r801c_3, b8r801d_3, 
                b8r801e_3, b8r801f_3, b8r801g_3, b8r801h_3, b8r801i_3, b8r801j_3, b8r801k_3, b8r801l_3, b9r901, b9r902a, b9r902a_1, b9r902a_2, b9r902b, b9r902c, b10r1001a, b10r1001b, b10r1001c, b10r1001d, b10r1001e, b10r1001f_1, b10r1001f_2, b10r1001g, b10r1001h, b10r1001i, b10r1001j, b10r1002a, b10r1002b, b10r1002c, b10r1003a, b10r1003b, b10r1003c, b10r1003d, b10r1003e, b10r1003f, b10r1003g, b11catatan, statusDok, operatorCreated, timeCreated, operatorLastMod, timeLastMod, lamaEntri                
              ) 
              VALUES 
              (
                '${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${tahun}','${b1r105}','${b2r201a}','${b2r201b}','${b2r202a_dd}','${b2r202a_mm}','${b2r202a_yy}','${b2r202b_dd}','${b2r202b_mm}','${b2r202b_yy}','${b2r203a}','${b2r203b}','${b3r301}','${b3r302_dd}','${b3r302_mm}','${b3r302_yy}','${b3r303}','${desaPage2[0].b4r401}','${desaPage2[0].b4r402a}','${desaPage2[0].b4r402b}','${desaPage2[0].b4r402c}','${desaPage2[0].b4r403}','${desaPage2[0].b4r404a}','${desaPage2[0].b4r404b}','${desaPage2[0].b4r404c}','${desaPage2[0].b4r405a}','${desaPage2[0].b4r405b}','${desaPage2[0].b4r405c}','${desaPage2[0].b4r405d}','${desaPage2[0].b4r406}','${desaPage2[0].b4r407a}','${desaPage2[0].b4r407b_a}','${desaPage2[0].b4r407b_b}','${desaPage2[0].b4r407b_c}','${desaPage2[0].b4r407b_d}','${desaPage2[0].b4r407b_e}','${desaPage2[0].b4r407c}','${desaPage2[0].b4r408a}','${desaPage2[0].b4r408b}','${desaPage2[0].b4r408c}','${desaPage2[0].b5r501a}','${desaPage2[0].b5r501b}','${desaPage2[0].b5r502a}','${desaPage2[0].b5r502b}','${desaPage2[0].b5r502c_1}','${desaPage2[0].b5r502c_2}','${desaPage2[0].b5r502c_3}',
                '${desaPage3[0].b5r503a}','${desaPage3[0].b5r503b}','${desaPage3[0].b5r504a}','${desaPage3[0].b5r504b_1}','${desaPage3[0].b5r504b_2}','${desaPage3[0].b5r504b_3}','${desaPage3[0].b6r601a_2}','${desaPage3[0].b6r601a_3}','${desaPage3[0].b6r601a_4}','${desaPage3[0].b6r601a_5}','${desaPage3[0].b6r601a_6}','${desaPage3[0].b6r601a_7}','${desaPage3[0].b6r601b_2}','${desaPage3[0].b6r601b_3}','${desaPage3[0].b6r601b_4}','${desaPage3[0].b6r601b_5}','${desaPage3[0].b6r601b_6}','${desaPage3[0].b6r601b_7}','${desaPage3[0].b6r601c_2}','${desaPage3[0].b6r601c_3}','${desaPage3[0].b6r601c_4}','${desaPage3[0].b6r601c_5}','${desaPage3[0].b6r601c_6}','${desaPage3[0].b6r601c_7}','${desaPage3[0].b6r601d_2}','${desaPage3[0].b6r601d_3}','${desaPage3[0].b6r601d_4}','${desaPage3[0].b6r601d_5}','${desaPage3[0].b6r601d_6}','${desaPage3[0].b6r601d_7}','${desaPage3[0].b6r601e_2}','${desaPage3[0].b6r601e_3}','${desaPage3[0].b6r601e_4}','${desaPage3[0].b6r601e_5}','${desaPage3[0].b6r601e_6}','${desaPage3[0].b6r601e_7}','${desaPage3[0].b6r601f_2}','${desaPage3[0].b6r601f_3}','${desaPage3[0].b6r601f_4}','${desaPage3[0].b6r601f_5}','${desaPage3[0].b6r601f_6}','${desaPage3[0].b6r601f_7}','${desaPage3[0].b6r601g_2}','${desaPage3[0].b6r601g_3}','${desaPage3[0].b6r601g_4}','${desaPage3[0].b6r601g_5}','${desaPage3[0].b6r601g_6}','${desaPage3[0].b6r601g_7}','${desaPage3[0].b6r601h_2}','${desaPage3[0].b6r601h_3}',
                '${desaPage3[0].b6r601h_4}','${desaPage3[0].b6r601h_5}','${desaPage3[0].b6r601h_6}','${desaPage3[0].b6r601h_7}','${desaPage3[0].b6r601i_2}','${desaPage3[0].b6r601i_3}','${desaPage3[0].b6r601i_4}','${desaPage3[0].b6r601i_5}','${desaPage3[0].b6r601i_6}','${desaPage3[0].b6r601i_7}','${desaPage3[0].b6r601j_2}','${desaPage3[0].b6r601j_3}','${desaPage3[0].b6r601j_4}','${desaPage3[0].b6r601j_5}','${desaPage3[0].b6r601j_6}','${desaPage3[0].b6r601j_7}','${desaPage3[0].b6r601k_2}','${desaPage3[0].b6r601k_3}','${desaPage3[0].b6r601k_4}','${desaPage3[0].b6r601k_5}','${desaPage3[0].b6r601k_6}','${desaPage3[0].b6r601k_7}','${desaPage3[0].b6r601l_2}','${desaPage3[0].b6r601l_3}','${desaPage3[0].b6r601l_4}','${desaPage3[0].b6r601l_5}','${desaPage3[0].b6r601l_6}','${desaPage3[0].b6r601l_7}','${desaPage3[0].b6r601m_2}','${desaPage3[0].b6r601m_3}','${desaPage3[0].b6r601m_4}','${desaPage3[0].b6r601m_5}','${desaPage3[0].b6r601m_6}','${desaPage3[0].b6r601m_7}','${desaPage3[0].b6r602a}','${desaPage3[0].b6r602b}','${desaPage3[0].b6r602c}','${desaPage3[0].b6r602d}','${desaPage3[0].b6r602e}','${desaPage3[0].b6r602f}','${desaPage3[0].b6r602g}','${desaPage3[0].b6r602h}','${desaPage3[0].b6r602i}','${desaPage3[0].b6r602j}','${desaPage3[0].b6r602k}','${desaPage3[0].b6r602l}','${desaPage3[0].b6r602m}','${desaPage3[0].b6r603a}','${desaPage3[0].b6r603b}','${desaPage3[0].b6r603c}',
                '${desaPage4[0].b6r604a}','${desaPage4[0].b6r604b}','${desaPage4[0].b6r604c}','${desaPage4[0].b6r604d}','${desaPage4[0].b6r605}','${desaPage4[0].b6r606}','${desaPage4[0].b7r701a}','${desaPage4[0].b7r701b}','${desaPage4[0].b7r701c}','${desaPage4[0].b7r701d}','${desaPage4[0].b7r701e}','${desaPage4[0].b7r701f}','${desaPage4[0].b7r701g}','${desaPage4[0].b7r701h}','${desaPage4[0].b7r701i}','${desaPage4[0].b7r701i_lainnya}','${desaPage4[0].b7r702a}','${desaPage4[0].b7r702b}','${desaPage4[0].b7r702c}','${desaPage4[0].b7r702d}','${desaPage4[0].b7r702e}','${desaPage4[0].b7r702f}','${desaPage4[0].b8r801l_1_lainnya}','${desaPage4[0].b8r801a_2}','${desaPage4[0].b8r801b_2}','${desaPage4[0].b8r801c_2}','${desaPage4[0].b8r801d_2}','${desaPage4[0].b8r801e_2}','${desaPage4[0].b8r801f_2}','${desaPage4[0].b8r801g_2}','${desaPage4[0].b8r801h_2}','${desaPage4[0].b8r801i_2}','${desaPage4[0].b8r801j_2}','${desaPage4[0].b8r801k_2}','${desaPage4[0].b8r801l_2}','${desaPage4[0].b8r801a_3}','${desaPage4[0].b8r801b_3}','${desaPage4[0].b8r801c_3}','${desaPage4[0].b8r801d_3}','${desaPage4[0].b8r801e_3}','${desaPage4[0].b8r801f_3}','${desaPage4[0].b8r801g_3}','${desaPage4[0].b8r801h_3}','${desaPage4[0].b8r801i_3}','${desaPage4[0].b8r801j_3}','${desaPage4[0].b8r801k_3}','${desaPage4[0].b8r801l_3}','${b9r901}','${b9r902a}',
                '${b9r902a_1}','${b9r902a_2}','${b9r902b}','${b9r902c}','${desaPage5[0].b10r1001a}','${desaPage5[0].b10r1001b}','${desaPage5[0].b10r1001c}','${desaPage5[0].b10r1001d}','${desaPage5[0].b10r1001e}','${desaPage5[0].b10r1001f_1}','${desaPage5[0].b10r1001f_2}','${desaPage5[0].b10r1001g}','${desaPage5[0].b10r1001h}','${desaPage5[0].b10r1001i}','${desaPage5[0].b10r1001j}','${desaPage5[0].b10r1002a}','${desaPage5[0].b10r1002b}','${desaPage5[0].b10r1002c}','${desaPage5[0].b10r1003a}','${desaPage5[0].b10r1003b}','${desaPage5[0].b10r1003c}','${desaPage5[0].b10r1003d}','${desaPage5[0].b10r1003e}','${desaPage5[0].b10r1003f}','${desaPage5[0].b10r1003g}','${desaPage6[0].b11catatan}','${statusDok}','${operatorCreated}','${timeCreated}','${operatorLastMod}','${timeLastMod}','${lamaEntri}'                    
              )`;
        }
        r = await sqlite.run(sql);
        if (r) console.log('Samasta1 tersimpan');
    }
}

async function simpanEntrianSamasta1() {
    await updateIsiJsonSamasta1();
    await validasi_samasta1();
    // bikin flash message 'saved'
    if (error_samasta1.length > 0) {
        statusDok = 'E';
    } else {
        statusDok = 'C';
        //if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
    }
    document.body.classList.add("aside-menu-show");
    await updateIsiJsonSamasta1();
    await simpanKeDatabaseSamasta1();
}

async function tutupEntrianSamasta1(konfirm) {
    //document.getElementById("loader").style.display = "block";
    $(".overlay").show();
    document.getElementById("btn-sidebar").style.display = "block";
    document.getElementById("btn-user-logout").style.pointerEvents = "auto";
    document.getElementById("sidebar").style.display = "block";
    if (konfirm == 'yes') {
        // update isi json RT
        await updateIsiJsonSamasta1();
        await simpanKeDatabaseSamasta1();
        // insert ke db tabel RT
        $('#tutupEntrianModal').modal('hide');
        // kembali ke halaman awal
        if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
        setTimeout(function () { location.href = `#/samasta1/`; }, 1000);
    } else if (konfirm == 'no') {
        // jika tidak, kembali ke halaman awal samasta2
        $('#tutupEntrianModal').modal('hide');
        if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
        setTimeout(function () { location.href = `#/samasta1/`; }, 1000);
    }
}


///////// samasta 2 ////////////////////
function getEntriSessionData() {
    const fs = require('fs');

    let data = fs.readFileSync(dlPathData + `entriSession.json`);
    entriSessionData = JSON.parse(data);

    namaFile = entriSessionData.namaFile;
    statusEntrian = entriSessionData.statusEntrian;
}

function bacaIsiJsonRT() {
    const fs = require('fs');

    let rawdata = fs.readFileSync(dlPathData + `entriSamasta2/${namaFile}.json`);
    RTdata = JSON.parse(rawdata);

    kodeProv = RTdata.kodeProv;
    kodeKab = RTdata.kodeKab;
    kodeKec = RTdata.kodeKec;
    kodeDesa = RTdata.kodeDesa;
    kodeSLS = RTdata.kodeSLS;
    tahun = RTdata.tahun;
    nurt = RTdata.nurt;
    nurtGuid = RTdata.nurtGuid;
    b1r106 = RTdata.b1r106;
    b1r107 = RTdata.b1r107;
    b1r108 = RTdata.b1r108;
    b1r109 = RTdata.b1r109;
    b2r201a = RTdata.b2r201a;
    b2r201b = RTdata.b2r201b;
    b2r202a_dd = RTdata.b2r202a_dd;
    b2r202a_mm = RTdata.b2r202a_mm;
    b2r202a_yy = RTdata.b2r202a_yy;
    b2r202b_dd = RTdata.b2r202b_dd;
    b2r202b_mm = RTdata.b2r202b_mm;
    b2r202b_yy = RTdata.b2r202b_yy;
    b3catatan = RTdata.b3catatan;
    set_kk = RTdata.set_kk;
    statusDok = RTdata.statusDok;
    operatorCreated = RTdata.operatorCreated;
    timeCreated = RTdata.timeCreated;
    operatorLastMod = RTdata.operatorLastMod;
    timeLastMod = RTdata.timeLastMod;
    lamaEntri = RTdata.lamaEntri;
    artPage2_kk = RTdata.artPage2_kk;
    artPage2 = RTdata.artPage2;
    artPage3 = RTdata.artPage3;
    artPage4 = RTdata.artPage4;
    artPage5 = RTdata.artPage5;
    artPage6 = RTdata.artPage6;
    kkPage7 = RTdata.kkPage7;
    kkPage8 = RTdata.kkPage8;
}

async function simpanKeDatabase() {
    getEntriSessionData()
    bacaIsiJsonRT();
    
    if (nurt == 99999 && statusEntrian == 'new') {
        sql = `SELECT MAX(nurt) AS maxNurt FROM t_rt WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${dlTahunSamasta2}'`;
        r = await sqlite.get(sql);
        if (r.maxNurt == null) {
            nurt = 1;
        } else {
            nurt = r.maxNurt + 1;
        }        
        entriSessionData.statusEntrian = 'edit';
        let data = JSON.stringify(entriSessionData);
        fs.writeFileSync(dlPathData + `entriSession.json`, data);
        RTdata.nurt = nurt;
        fs.writeFileSync(dlPathData + `entriSamasta2/${namaFile}.json`, JSON.stringify(RTdata));
    }

    //statusDok = "E";
    operatorLastMod = dlNamaUser;
    timeLastMod = ambilTime();
    lamaEntri = '0';

    await simpanRT();
    await simpanArt();
    await simpanKK();

    async function simpanRT() {
        // HALAMAN 1
        // jika blm ada di db, insert
        // jika sudah ada di db, update
        s = `SELECT * FROM t_rt WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `UPDATE t_rt
              SET b1r106 = '${b1r106}', b1r107 = '${b1r107}', b1r108 = '${b1r108}', b1r109 = '${b1r109}', 
              b2r201a = '${b2r201a}', b2r201b = '${b2r201b}', 
              b2r202a_dd = '${b2r202a_dd}', b2r202a_mm = '${b2r202a_mm}', b2r202a_yy = '${b2r202a_yy}', 
              b2r202b_dd = '${b2r202b_dd}', b2r202b_mm = '${b2r202b_mm}', b2r202b_yy = '${b2r202b_yy}', 
              b3catatan = '${b3catatan}', set_kk = '${set_kk}',
              statusDok = '${statusDok}', operatorCreated = '${operatorCreated}', timeCreated = '${timeCreated}', 
              operatorLastMod = '${operatorLastMod}', timeLastMod = '${timeLastMod}', lamaEntri = '${lamaEntri}'
              WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
        } else {
            sql = `INSERT INTO t_rt 
              (kodeProv, kodeKab, kodeKec, kodeDesa, kodeSLS, tahun, nurt, nurtGuid, 
              b1r106, b1r107, b1r108, b1r109, 
              b2r201a, b2r201b, b2r202a_dd, b2r202a_mm, b2r202a_yy, b2r202b_dd, b2r202b_mm, b2r202b_yy, 
              b3catatan, set_kk,
              statusDok, operatorCreated, timeCreated, operatorLastMod, timeLastMod, lamaEntri) 
              VALUES ('${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${kodeSLS}','${tahun}','${nurt}','${nurtGuid}',
              '${b1r106}','${b1r107}','${b1r108}','${b1r109}',
              '${b2r201a}','${b2r201b}','${b2r202a_dd}','${b2r202a_mm}','${b2r202a_yy}','${b2r202b_dd}','${b2r202b_mm}','${b2r202b_yy}',
              '${b3catatan}','${set_kk}',
              '${statusDok}','${operatorCreated}','${timeCreated}','${operatorLastMod}','${timeLastMod}','${lamaEntri}')`;
        }
        r = await sqlite.run(sql);
        if (r) console.log('RT tersimpan');
    }

    async function simpanArt() {
        // HALAMAN 2-6
        // hapus dulu seluruh ART di database untuk RT ybs
        s = `SELECT * FROM t_art WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `DELETE FROM t_art WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
            r = await sqlite.run(sql);
            if (r) console.log('ART deleted');
        }
        // kemudian INSERT
        for (i = 0; i < artPage2.length; i++) {
            sql = `INSERT INTO t_art 
            (kodeProv, kodeKab, kodeKec, kodeDesa, kodeSLS, tahun, nurt, nurtGuid, 
            nuArt, nuArtGuid, k402, k403, k404, k405, k406, k407, k408, k409, k410, k411, 
            k412_dd, k412_mm, k412_yy, k413, k414, k415, k416, k417, k418, k419, k420, k421, k422, k423, k424, k425, k426, k427, 
            k428, k429, k430, k431, k432, k433, k434, k435, k436, 
            k437, k438, k439, k440, k441, k442, k443, k444, k445, k446, k447, k448, k449, 
            k450, k451, k452, k453, k454, k455, k456, k457, k458, k459, k460, k461, k462, k463) 
            VALUES 
            ('${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${kodeSLS}','${tahun}','${nurt}','${nurtGuid}',
            '${artPage2[i].nuArt}','${artPage2[i].nuArtGuid}','${artPage2[i].k402}','${artPage2[i].k403}','${artPage2[i].k404}','${artPage2[i].k405}','${artPage2[i].k406}','${artPage2[i].k407}','${artPage2[i].k408}','${artPage2[i].k409}','${artPage2[i].k410}','${artPage2[i].k411}',
            '${artPage3[i].k412_dd}','${artPage3[i].k412_mm}','${artPage3[i].k412_yy}','${artPage3[i].k413}','${artPage3[i].k414}','${artPage3[i].k415}','${artPage3[i].k416}','${artPage3[i].k417}','${artPage3[i].k418}','${artPage3[i].k419}','${artPage3[i].k420}','${artPage3[i].k421}','${artPage3[i].k422}','${artPage3[i].k423}','${artPage3[i].k424}','${artPage3[i].k425}','${artPage3[i].k426}','${artPage3[i].k427}',
            '${artPage4[i].k428}','${artPage4[i].k429}','${artPage4[i].k430}','${artPage4[i].k431}','${artPage4[i].k432}','${artPage4[i].k433}','${artPage4[i].k434}','${artPage4[i].k435}','${artPage4[i].k436}',
            '${artPage5[i].k437}','${artPage5[i].k438}','${artPage5[i].k439}','${artPage5[i].k440}','${artPage5[i].k441}','${artPage5[i].k442}','${artPage5[i].k443}','${artPage5[i].k444}','${artPage5[i].k445}','${artPage5[i].k446}','${artPage5[i].k447}','${artPage5[i].k448}','${artPage5[i].k449}',
            '${artPage6[i].k450}','${artPage6[i].k451}','${artPage6[i].k452}','${artPage6[i].k453}','${artPage6[i].k454}','${artPage6[i].k455}','${artPage6[i].k456}','${artPage6[i].k457}','${artPage6[i].k458}','${artPage6[i].k459}','${artPage6[i].k460}','${artPage6[i].k461}','${artPage6[i].k462}','${artPage6[i].k463}'
            )`;
            
            r = await sqlite.run(sql);
            if (r) console.log(i + 'ART tersimpan');
        }
    }

    async function simpanKK() {
        // HALAMAN 7-8
        // hapus dulu seluruh kk di database untuk RT ybs
        s = `SELECT * FROM t_kk WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `DELETE FROM t_kk WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND nurt = '${nurt}'`;
            r = await sqlite.run(sql);
            if (r) console.log('KK deleted');
        }
        // kemudian INSERT
        for (i = 0; i < kkPage7.length; i++) {
            sql = `INSERT INTO t_kk
          (kodeProv, kodeKab, kodeKec, kodeDesa, kodeSLS, tahun, nurt, nurtGuid, 
          k501, nuArtGuid, k502, k503, k504, k505, k506, k507, k508, k509, k510, k511, k512, k513, k514, k515, k516, k517, k518, k519, k520, k521, k522, k523, k524, 
          k525, k526, k527, k528, k529, k530, k531, k532, k533, k534, k535, k536, k537, k538, k539, k540, k541, k542, k543, k544, k545, k546, k547, k548, k549, k550) 
          VALUES 
          ('${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${kodeSLS}','${tahun}','${nurt}','${nurtGuid}',
          '${kkPage7[i].k501}','${kkPage7[i].nuArtGuid}','${kkPage7[i].k502}','${kkPage7[i].k503}','${kkPage7[i].k504}','${kkPage7[i].k505}','${kkPage7[i].k506}','${kkPage7[i].k507}','${kkPage7[i].k508}','${kkPage7[i].k509}','${kkPage7[i].k510}',
          '${kkPage7[i].k511}','${kkPage7[i].k512}','${kkPage7[i].k513}','${kkPage7[i].k514}','${kkPage7[i].k515}','${kkPage7[i].k516}','${kkPage7[i].k517}','${kkPage7[i].k518}','${kkPage7[i].k519}','${kkPage7[i].k520}','${kkPage7[i].k521}','${kkPage7[i].k522}','${kkPage7[i].k523}','${kkPage7[i].k524}',
          '${kkPage8[i].k525}','${kkPage8[i].k526}','${kkPage8[i].k527}','${kkPage8[i].k528}','${kkPage8[i].k529}','${kkPage8[i].k530}','${kkPage8[i].k531}','${kkPage8[i].k532}','${kkPage8[i].k533}','${kkPage8[i].k534}','${kkPage8[i].k535}','${kkPage8[i].k536}','${kkPage8[i].k537}',
          '${kkPage8[i].k538}','${kkPage8[i].k539}','${kkPage8[i].k540}','${kkPage8[i].k541}','${kkPage8[i].k542}','${kkPage8[i].k543}','${kkPage8[i].k544}','${kkPage8[i].k545}','${kkPage8[i].k546}','${kkPage8[i].k547}','${kkPage8[i].k548}','${kkPage8[i].k549}','${kkPage8[i].k550}'
          )`;
            r = await sqlite.run(sql);
            if (r) console.log('KK tersimpan');
        }
    }
}

async function simpanEntrian() {
    await updateIsiJsonRT();
    await validasi_samasta2();
    // bikin flash message 'saved'
    if (error_samasta2.length > 0) {
        statusDok = 'E';
    } else {
        statusDok = 'C';
    }
    document.body.classList.add("aside-menu-show");
    await updateIsiJsonRT();
    await simpanKeDatabase();
}

async function tutupEntrian(konfirm) {
    //document.getElementById("loader").style.display = "block"; // mulai spinner loader
    $(".overlay").show();
    if (konfirm == 'yes') {
        // update isi json RT
        await updateIsiJsonRT();
        await runRuleValidasiSamasta2();
        
        if (error_samasta2.length > 0) {
            statusDok = 'E';
        } else {
            statusDok = 'C';
        }

        // update isi json RT lagi
        await updateIsiJsonRT();
        await simpanKeDatabase();
    } 
    
    // hilangkan modal dan error windows
    $('#tutupEntrianModal').modal('hide');
    if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
    // kembalikan menu-menu
    document.getElementById("btn-sidebar").style.display = "block";
    document.getElementById("btn-user-logout").style.pointerEvents = "auto";
    document.getElementById("sidebar").style.display = "block";
    // kembali ke samasta2 homescreen
    setTimeout(function () { location.href = `#/samasta2/`; }, 1000);
}


///////// samasta 3 ////////////////////
function getEntriSessionDataSamasta3() {
    const fs = require('fs');

    let data = fs.readFileSync(dlPathData + `entriSessionSamasta3.json`);
    let entriSessionData = JSON.parse(data);

    namaFile = entriSessionData.namaFile;
    statusEntrian = entriSessionData.statusEntrian;
}

function bacaIsiJsonSamasta3() {
    const fs = require('fs');

    let rawdata = fs.readFileSync(dlPathData + `entriSamasta3/${namaFile}.json`);
    dataSamasta3 = JSON.parse(rawdata);

    kodeProv = dataSamasta3.kodeProv;
    kodeKab = dataSamasta3.kodeKab;
    kodeKec = dataSamasta3.kodeKec;
    kodeDesa = dataSamasta3.kodeDesa;
    kodeSLS = dataSamasta3.kodeSLS;
    tahun = dataSamasta3.tahun;
    bulan = dataSamasta3.bulan;
    b2r201 = dataSamasta3.b2r201;
    b2r202 = dataSamasta3.b2r202;
    b2r203 = dataSamasta3.b2r203;
    b2r204 = dataSamasta3.b2r204;
    b2r205 = dataSamasta3.b2r205;
    b2r206 = dataSamasta3.b2r206;
    b3catatan = dataSamasta3.b3catatan;
    kepalaSLS = dataSamasta3.kepalaSLS;
    statusDok = dataSamasta3.statusDok;
    operatorCreated = dataSamasta3.operatorCreated;
    timeCreated = dataSamasta3.timeCreated;
    operatorLastMod = dataSamasta3.operatorLastMod;
    timeLastMod = dataSamasta3.timeLastMod;
    lamaEntri = dataSamasta3.lamaEntri;
    samasta3Page2 = dataSamasta3.samasta3Page2;
    samasta3SumBlok4 = dataSamasta3.samasta3SumBlok4;
}

async function simpanKeDatabaseSamasta3() {
    bacaIsiJsonSamasta3();

    //statusDok = "E";
    operatorLastMod = dlNamaUser;
    timeLastMod = ambilTime();
    lamaEntri = '0';

    await simpanPage1();
    await simpanPage2();

    async function simpanPage1() {
        // HALAMAN 1
        // jika blm ada di db, insert
        // jika sudah ada di db, update
        s = `SELECT * FROM t_samasta3 WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND bulan = '${bulan}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `UPDATE t_samasta3
              SET b2r201 = '${b2r201}', b2r202 = '${b2r202}', b2r203 = '${b2r203}', 
              b2r204 = '${b2r204}', b2r205 = '${b2r205}', b2r206 = '${b2r206}', 
              b3catatan = '${b3catatan}', kepalaSLS = '${kepalaSLS}',
              statusDok = '${statusDok}', operatorCreated = '${operatorCreated}', timeCreated = '${timeCreated}', 
              operatorLastMod = '${operatorLastMod}', timeLastMod = '${timeLastMod}', lamaEntri = '${lamaEntri}',
              sum_b4k4 = '${samasta3SumBlok4[0].sum_b4k4}', sum_b4k5 = '${samasta3SumBlok4[0].sum_b4k5}', sum_b4k6 = '${samasta3SumBlok4[0].sum_b4k6}', sum_b4k7 = '${samasta3SumBlok4[0].sum_b4k7}', sum_b4k8 = '${samasta3SumBlok4[0].sum_b4k8}', 
              sum_b4k9 = '${samasta3SumBlok4[0].sum_b4k9}', sum_b4k10 = '${samasta3SumBlok4[0].sum_b4k10}', sum_b4k11 = '${samasta3SumBlok4[0].sum_b4k11}', sum_b4k12 = '${samasta3SumBlok4[0].sum_b4k12}', sum_b4k13 = '${samasta3SumBlok4[0].sum_b4k13}',
              sum_b4k14 = '${samasta3SumBlok4[0].sum_b4k14}', sum_b4k15 = '${samasta3SumBlok4[0].sum_b4k15}', sum_b4k16 = '${samasta3SumBlok4[0].sum_b4k16}', sum_b4k17 = '${samasta3SumBlok4[0].sum_b4k17}', sum_b4k18 = '${samasta3SumBlok4[0].sum_b4k18}', 
              sum_b4k19 = '${samasta3SumBlok4[0].sum_b4k19}', sum_b4k20 = '${samasta3SumBlok4[0].sum_b4k20}', sum_b4k21 = '${samasta3SumBlok4[0].sum_b4k21}'
              WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND bulan = '${bulan}'`;
        } else {
            sql = `INSERT INTO t_samasta3 
              (kodeProv, kodeKab, kodeKec, kodeDesa, kodeSLS, tahun, bulan,  
              b2r201, b2r202, b2r203, b2r204, b2r205, b2r206,  
              b3catatan, kepalaSLS,
              statusDok, operatorCreated, timeCreated, operatorLastMod, timeLastMod, lamaEntri,
              sum_b4k4, sum_b4k5, sum_b4k6, sum_b4k7, sum_b4k8, sum_b4k9, sum_b4k10, sum_b4k11, sum_b4k12 ,
              sum_b4k13, sum_b4k14, sum_b4k15, sum_b4k16, sum_b4k17, sum_b4k18, sum_b4k19, sum_b4k20, sum_b4k21) 
              VALUES ('${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${kodeSLS}','${tahun}','${bulan}',
              '${b2r201}','${b2r202}','${b2r203}','${b2r204}','${b2r205}','${b2r206}',
              '${b3catatan}','${kepalaSLS}',
              '${statusDok}','${operatorCreated}','${timeCreated}','${operatorLastMod}','${timeLastMod}','${lamaEntri}',
              '${samasta3SumBlok4[0].sum_b4k4}', '${samasta3SumBlok4[0].sum_b4k5}', '${samasta3SumBlok4[0].sum_b4k6}', '${samasta3SumBlok4[0].sum_b4k7}', '${samasta3SumBlok4[0].sum_b4k8}', '${samasta3SumBlok4[0].sum_b4k9}', 
              '${samasta3SumBlok4[0].sum_b4k10}', '${samasta3SumBlok4[0].sum_b4k11}', '${samasta3SumBlok4[0].sum_b4k12}', '${samasta3SumBlok4[0].sum_b4k13}', '${samasta3SumBlok4[0].sum_b4k14}', '${samasta3SumBlok4[0].sum_b4k15}', 
              '${samasta3SumBlok4[0].sum_b4k16}', '${samasta3SumBlok4[0].sum_b4k17}', '${samasta3SumBlok4[0].sum_b4k18}', '${samasta3SumBlok4[0].sum_b4k19}', '${samasta3SumBlok4[0].sum_b4k20}', '${samasta3SumBlok4[0].sum_b4k21}')`;
        }
        r = await sqlite.run(sql);
        if (r) console.log('Page1 tersimpan');
    }

    async function simpanPage2() {
        // HALAMAN 2
        // hapus dulu seluruh baris
        s = `SELECT * FROM t_samasta3_blok4 WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND bulan = '${bulan}'`;
        r = await sqlite.get(s);
        if (r) {
            sql = `DELETE FROM t_samasta3_blok4 WHERE kodeProv = '${kodeProv}' AND kodeKab = '${kodeKab}' AND kodeKec = '${kodeKec}' AND kodeDesa = '${kodeDesa}' AND kodeSLS = '${kodeSLS}' AND tahun = '${tahun}' AND bulan = '${bulan}'`;
            r = await sqlite.run(sql);
            if (r) console.log('Page2 deleted');
        }
        // kemudian INSERT
        for (i = 0; i < samasta3Page2.length; i++) {
            sql = `INSERT INTO t_samasta3_blok4 
            (kodeProv, kodeKab, kodeKec, kodeDesa, kodeSLS, tahun, bulan,  
            b4k1, b4k2, b4k3, b4k4, b4k5, b4k6, b4k7, b4k8, b4k9, b4k10, b4k11,
            b4k12, b4k13, b4k14, b4k15, b4k16, b4k17, b4k18, b4k19, b4k20, b4k21) 
            VALUES 
            ('${kodeProv}','${kodeKab}','${kodeKec}','${kodeDesa}','${kodeSLS}','${tahun}','${bulan}',
            '${samasta3Page2[i].b4k1}','${samasta3Page2[i].b4k2}','${samasta3Page2[i].b4k3}','${samasta3Page2[i].b4k4}',
            '${samasta3Page2[i].b4k5}','${samasta3Page2[i].b4k6}','${samasta3Page2[i].b4k7}','${samasta3Page2[i].b4k8}',
            '${samasta3Page2[i].b4k9}','${samasta3Page2[i].b4k10}','${samasta3Page2[i].b4k11}','${samasta3Page2[i].b4k12}',
            '${samasta3Page2[i].b4k13}','${samasta3Page2[i].b4k14}','${samasta3Page2[i].b4k15}','${samasta3Page2[i].b4k16}',
            '${samasta3Page2[i].b4k17}','${samasta3Page2[i].b4k18}','${samasta3Page2[i].b4k19}','${samasta3Page2[i].b4k20}',
            '${samasta3Page2[i].b4k21}'
            )`;
            
            r = await sqlite.run(sql);
            if (r) console.log(i + 'Page2 tersimpan');
        }
    }
}

async function simpanEntrianSamasta3() {
    await updateIsiJsonSamasta3();
    await validasi_samasta3();
    // bikin flash message 'saved'
    if (error_samasta3.length > 0) {
        statusDok = 'E';
    } else {
        statusDok = 'C';
        //if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
    }
    document.body.classList.add("aside-menu-show");
    await updateIsiJsonSamasta3();
    await simpanKeDatabaseSamasta3();
}

async function tutupEntrianSamasta3(konfirm) {
    //document.getElementById("loader").style.display = "block";
    $(".overlay").show();
    document.getElementById("btn-sidebar").style.display = "block";
    document.getElementById("btn-user-logout").style.pointerEvents = "auto";
    document.getElementById("sidebar").style.display = "block";
    if (konfirm == 'yes') {
        // update isi json RT
        await updateIsiJsonSamasta3();
        await simpanKeDatabaseSamasta3();
        // insert ke db tabel RT
        $('#tutupEntrianModal').modal('hide');
        // kembali ke halaman awal
        if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
        setTimeout(function () { location.href = `#/samasta3/`; }, 1000);
    } else if (konfirm == 'no') {
        // jika tidak, kembali ke halaman awal samasta2
        $('#tutupEntrianModal').modal('hide');
        if (document.body.classList.contains("aside-menu-show")) document.body.classList.remove("aside-menu-show");
        setTimeout(function () { location.href = `#/samasta3/`; }, 1000);
    }
}


// Restricts input for each element in the set of matched elements to the given inputFilter.
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };
}(jQuery));


function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}