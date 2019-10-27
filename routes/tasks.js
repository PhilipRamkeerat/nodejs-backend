module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .all((req, res) => {
            // Middleware pre-execution of routes
        })
        .get((req, res) => {
            // "/tasks": Task List
        })
        .post((req, res) => {
            // "/tasks": Insert a new task
        });

    app.route("/tasks/:id")
        .all((req, res) => {
            // Middle pre-execution of routes
        })
        .get((req, res) => {
            // "/tasks/1" : Find a task
        })
        .put((req, res) => {
            // "/tasks/1": Update a task
        })
        .delete((req, res) => {
            // "/tasks/1": Remove a task
        });
};