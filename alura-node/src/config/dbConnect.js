import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://Cadu:123@alura.s1wzgim.mongodb.net/alura-node")

//mongoose.connect("mongodb+srv://Cadu:123@cluster0.s3t0kok.mongodb.net/alura-node.livros")

let db = mongoose.connection

export default db