require("dotenv").config();
require("../db/config/dbConnection");
const supertest = require("supertest");
const users = require("./usersController.js");
const cors = require("cors");
const methodOverride = require("method-override");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../db/models/User")
const app = express();
const api = supertest(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride());

app.use("/api/users", users);

const initialUsers = [
  {
    nombre: "asdasd",
    email: "tomi@gmail.com",
    password: "$2b$10$NzioL03vGkLZDoTDk08RnOSpCXdMsVVJUKzuUXf7t0fzXRCblRcfG",
  },
  {
    nombre: "asdasd",
    email: "tomi@gmail.com",
    password: "$2b$10$NzioL03vGkLZDoTDk08RnOSpCXdMsVVJUKzuUXf7t0fzXRCblRcfG",
  },
];

beforeEach(async()=>{
    await User.deleteMany({})
    const user1 = new User(initialUsers[0])
    await user1.save()
}) //Borro los usuarios y los creo para tener control


test("me devuelve 1 nota", async ()=>{
    const usuarios = await api.get("/api/users/")
    expect(usuarios.body).toHaveLength(initialUsers.length)
})


test("notas se devuelven en json", async () => {
  await api
    .get("/api/users/")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
