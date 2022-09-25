const sqlite3= require("sqlite3").verbose();

const  db = new sqlite3.Database('./db.sqlite3',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
    console.log("Sucesso")
});

let valor11,valor12,valor13

const sql = 'INSERT INTO users(seq_tipo_despesa, nom_tipo_despesa, ind_status)'

db.run(sql,[valor11,valor12,valor13])

db.close((err)=>{
    if(err) return console.error(err.message);
})