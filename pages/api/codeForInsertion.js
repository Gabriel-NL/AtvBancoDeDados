

function collectData(button){
    console.log("herroo")

}
export default collectData()

function addToTipoDespesa(seq_tipo_despesa,nom_tipo_despesa,ind_status) {

    const sqlite3= require("sqlite3").verbose();

    const  db = new sqlite3.Database('./db.sqlite3',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
    console.log("Sucesso")
    });
     
    const sql = 'INSERT INTO financeiro_tipo_despesa(seq_tipo_despesa, nom_tipo_despesa, ind_status) VALUES(?,?,?)';
    
    db.run(sql,[seq_tipo_despesa,nom_tipo_despesa,ind_status], (err)=>{
        if (err) return console.error(err.message);
        console.log("Nova linha adicionada!")
    })
    
    db.close((err)=>{
        if(err) return console.error(err.message);
    })
}