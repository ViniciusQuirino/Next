import express from "express";
import database from "./database";

const app = express()

app.use(express.json())

app.get("/books", (req, res) => {
    const books = database.map((book) => {
        return {id:book.id, title:book.title}
    })

    return res.status(200).json(books)
})

app.get("/books/:id", (req, res) => {
    const book = database.find(book => book.id === Number(req.params.id))
    if(!book) {
        return res.status(404).json({message:"book not found !"})
    }
    return res.status(200).json(book)
})

app.listen(3001, () => {
    console.log("server is running")
})

