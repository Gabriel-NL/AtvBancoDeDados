const sqlite3= require("sqlite3").verbose();

const  db = new sqlite3.Database('./db.sqlite3',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err.message);
    console.log("Sucesso")
});

db.run("CREATE TABLE financeiro_tipo_despesa(seq_tipo_despesa SERIAL, nom_tipo_despesa VARCHAR NOT NULL, ind_status CHAR(1) DEFAULT 'A' NOT NULL, CONSTRAINT pk_tipo_despesa PRIMARY KEY(seq_tipo_despesa) CONSTRAINT uk_nom_tipo_despesa UNIQUE (nom_tipo_despesa) ) WITHOUT ROWID");

db.run("CREATE TABLE financeiro_centro_custo (  seq_centro_custo SERIAL,  nom_centro_custo VARCHAR NOT NULL,  ind_status CHAR(1) DEFAULT 'A',  CONSTRAINT pk_centro_custo PRIMARY KEY(seq_centro_custo),  CONSTRAINT uk_nom_centro_custo UNIQUE (nom_centro_custo)) WITHOUT ROWID")

db.run("CREATE TABLE financeiro_forma_pagamento (  seq_forma_pagamento SERIAL,  nom_forma_pagamento VARCHAR NOT NULL,  ind_status CHAR(1) DEFAULT 'A' NOT NULL, CONSTRAINT pk_forma_pagamento PRIMARY KEY(seq_forma_pagamento), CONSTRAINT uk_nom_forma_pagamento UNIQUE (nom_forma_pagamento)) WITHOUT ROWID")

db.run("CREATE TABLE financeiro_despesa (  seq_despesa SERIAL,  cod_centro_custo INTEGER NOT NULL,  cod_tipo_despesa INTEGER NOT NULL,  cod_forma_pagamento INTEGER NOT NULL,  num_nota_fiscal VARCHAR,  num_parcelas INTEGER NOT NULL,  ind_status VARCHAR(2) DEFAULT 'AA',  val_despesa DOUBLE PRECISION NOT NULL,  val_juros DOUBLE PRECISION,  val_total_despesa DOUBLE PRECISION,    dat_vencimento DATE NOT NULL,  CONSTRAINT pk_despesa PRIMARY KEY(seq_despesa),  CONSTRAINT positive_price CHECK (val_despesa > 0),  CONSTRAINT positive_price_total CHECK (val_total_despesa > 0),  CONSTRAINT fk_centro_custo FOREIGN KEY (cod_centro_custo)    REFERENCES financeiro_centro_custo(seq_centro_custo)    ON DELETE RESTRICT    ON UPDATE RESTRICT    NOT DEFERRABLE,  CONSTRAINT fk_forma_pagamento FOREIGN KEY (cod_forma_pagamento)    REFERENCES financeiro_forma_pagamento(seq_forma_pagamento)    ON DELETE RESTRICT    ON UPDATE RESTRICT    NOT DEFERRABLE,  CONSTRAINT fk_tipo_despesa FOREIGN KEY (cod_tipo_despesa)    REFERENCES financeiro_tipo_despesa(seq_tipo_despesa)    ON DELETE RESTRICT    ON UPDATE RESTRICT NOT DEFERRABLE) WITHOUT ROWID")

db.close((err)=>{
    if(err) return console.error(err.message);
})
