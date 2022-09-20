// -------------- path database 
var pathdb = '//10.76.0.232/dbsamasta/db2019.sqlite';
var sqlite3 = require('sqlite3').verbose();
const sqlite = require("aa-sqlite");

makeDBConnection(pathdb);

async function makeDBConnection(pathdb) {
    // -------------- for async connection
    var db = new sqlite3.Database(pathdb);
    // -------------- for sync connection
    const fs = require("fs");

    opendb();

    async function opendb() {
        try { // check if pathdb exist
            if (fs.existsSync(pathdb)) {
                console.log("pathdb exist");
                await sqlite.open(pathdb); // open db connection
            } else {
                alert("Error: file database tidak ditemukan");
            }
        } catch (err) {
            alert("Error: file database tidak ditemukan");
        }

        // test a query 
        sql = `SELECT * FROM m_prov WHERE kodeProv = '76'`;
        r = await sqlite.get(sql);
        if (r) {
            console.log("Path DB: " + pathdb)
        }
    }
}