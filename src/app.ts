import express from "express";
import path from "path";

function createapp() {
  // Cria uma instância do aplicativo Express
  const app = express();

  // Habilita o middleware do Express para parsear corpos de requisições em JSON
  app.use(express.json());

  app.use(express.static(path.join(__dirname, "..", "public")));

  return app;
}

export default createapp;
