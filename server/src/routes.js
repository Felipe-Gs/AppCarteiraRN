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
      const query2 = `SELECT * FROM usuario WHERE nome = '${nome}' AND email = '${email}' AND password = '${password}'`;

      const query = `INSERT INTO usuario (nome, email, password) VALUES ($1, $2, $3)`;
      const values = [nome, email, password];

      client.query(query2, (err, result) => {
         if (result.rows.length != 0) {
            return res.status(202).send({
               message: "usuario ja cadastrado",
            });
         } else {
            client.query(query, values, (err, result) => {
               if (err) {
                  return res.status(404).send({
                     message: "ja existe usuario com esse email",
                  });
               } else {
                  return res.status(200).send({
                     message: "estudante cadastrado com sucesso",
                  });
               }
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
            message: "dados invalidos, insira novamente",
         });
      } else {
         linguagens.push(name);
         return res.status(200).send(linguagens);
      }
   } catch (error) {
      console.log(error);
   }
});

router.get("/buscarDadoss/:id", (req, res) => {
   const id = req.params.id;
   try {
      const query = `SELECT * FROM usuario WHERE id = '${id}'`;
      client.query(query, (err, result) => {
         if (err) {
            return res.status(404).send({
               message: "erro nao conhecido",
            });
         } else {
            return res.status(200).send(result.rows);
         }
      });
   } catch (error) {
      console.log(error);
   }
});

router.post("/login", (req, res) => {
   try {
      const usuarioBody = Z.object({
         email: Z.string().email(),
         password: Z.string(),
      }).required();
      const validData = usuarioBody.parse(req.body);
      const { email, password } = validData;
      const query = `SELECT * FROM usuario WHERE email = '${email}' AND password = '${password}'`;
      client.query(query, (err, result) => {
         if (err) {
            return res.status(404).send({
               message: "erro inesperado",
            });
         } else if (result.rows.length === 0) {
            return res.status(202).send({
               message: "Usuario nao encontrado, faça o cadastro!",
            });
         } else {
            return res.status(200).send({
               dados: result.rows,
               message: "usuario pode logar!",
            });
         }
      });
   } catch (error) {
      console.log(error);
   }
});

router.post("/mudarSenha", (req, res) => {
   try {
   } catch (error) {}
});

module.exports = router;
