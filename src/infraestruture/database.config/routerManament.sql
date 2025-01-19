
CREATE TABLE edifice(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name_edifice TEXT NOT NULL UNIQUE,
    adress_edifice TEXT NOT NULL,
    qtd_floors TEXT NOT NULL,
    passage_floors TEXT DEFAULT ('0') NOT NULL
);

CREATE TABLE salas(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    num_name_room TEXT NOT NULL DEFAULT ('sala generica'),
    type_room TEXT NOT NULL,
    transmission BOOLEAN,
    edifice_id TEXT NOT NULL,
    FOREIGN KEY (edifice_id) REFERENCES edifice(id)
);

CREATE TABLE user(
    id TEXT NOT NULL UNIQUE,
    name_user TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    type_user TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO user VALUES ("001", "Juliana", "ju@email.com", "adm", "1234")


