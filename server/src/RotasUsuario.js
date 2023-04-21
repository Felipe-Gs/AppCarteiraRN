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

router.post("/UsuarioCadastrar", (req, res) => {
   try {
      return res.status(200).send({
         message: "rota ok",
      });
   } catch (error) {}
});

router.get("/UsuarioTeste", (req, res) => {
   try {
      const query = `SELECT * FROM usuario`;
      client.query(query, (err, result) => {
         if (err) {
            return res.status(500).send({
               message: "erro interno no servidor",
            });
         } else {
            return res.status(200).send(result.rows);
         }
      });
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
