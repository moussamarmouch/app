CREATE DATABASE IF NOT EXISTS db;
GRANT USAGE ON *.* TO 'moes'@'192.168.0.2' IDENTIFIED BY 'test';
USE db;

CREATE TABLE studenten(
    name VARCHAR(30) NOT NULL
    );

INSERT INTO studenten (name)
VALUES ("Moussa");
