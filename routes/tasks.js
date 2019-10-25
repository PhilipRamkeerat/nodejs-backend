module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.json({
            tasks: [
                { title: "Comprar livro Javascript" },
                { title: "Comprar livro Node" }
            ]
        });
    });
};