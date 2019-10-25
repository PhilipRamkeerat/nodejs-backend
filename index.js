const express = require('express');
const PORT = 3000;

const app = express();

app.set("json spaces", 4);

app.get("/", (req, res) => res.json({ status: "Task Manager API" }));

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            { title: "Comprar um livro de Javascript" },
            { title: "Comprar um livro de NodeJS" },
        ]
    });
});

app.listen(PORT, () => console.log(`Task Manager API = Porta ${PORT}`));