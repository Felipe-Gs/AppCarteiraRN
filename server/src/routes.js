const Z = require("zod");
const express = require("express");
const router = express.Router();
const { Client, Pool } = require("pg");
require("dotenv").config();

const client = new Client({
   host: process.env.HOST,
   port: process.env.PORT,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE,
});

client.connect();

router.post("/cadastrar", (req, res) => {
   try {
      const usuarioBody = Z.object({
         nome: Z.string(),
         email: Z.string().email(),
         password: Z.string(),
      }).required();
      const validData = usuarioBody.parse(req.body);
      const { nome, email, password } = validData;
      const query = `INSERT INTO usuario (nome, email, password) VALUES ($1, $2, $3)`;
      const values = [nome, email, password];
      client.query(query, values, (err, result) => {
         if (err) {
            return res.status(404).send({
               message: "erro inespedaro",
            });
         } else {
            return res.status(200).send({
               message: "estudante cadastrado com sucesso",
            });
         }
      });
   } catch (error) {
      console.log(error);
   }
});

router.get("/usuarios", (req, res) => {
   try {
      const query = `SELECT * FROM usuario`;
      client.query(query, (err, result) => {
         if (err) {
            return res.status(404).send({
               message: "erro inesperado",
            });
         } else {
            return res.status(200).send(result.rows);
         }
      });
   } catch (error) {
      console.log(error);
   }
});

router.post("/add", (req, res) => {
   const name = req.body.name;
   try {
      if (!name) {
         return res.status(404).send({
            message: "dados invalidos",
         });
      } else {
         linguagens.push(name);
         return res.status(200).send(linguagens);
      }
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
