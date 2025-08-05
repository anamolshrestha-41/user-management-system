const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
let { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: ""
})

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

//setting up route
app.get("/", (req, res) => {
    let q = `SELECT count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render("home.ejs", { count });
        })
    }
    catch (error) {
        res.send("Some error in db");
    }
})

//showing users
app.get("/users", (req, res) => {
    let q = `SELECT * from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render("users.ejs", { data });
        })
    }
    catch (error) {
        res.send("Some error in db");
    }
})

//edit
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `Select * from user where id=?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("editForm.ejs", { user })
        })
    }
    catch (error) {
        res.send("Some error in db");
    }
}
)
//updated
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `Select * from user where id=?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Password is not correct");
            }
            else {
                let q2 = `Update user set username=? where id=?`;
                connection.query(q2, [newUsername, id], (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                });
            }

        })
    }
    catch (error) {
        res.send("Some error in db");
    }

});



//add user form
app.get("/users/new", (req, res) => {
    res.render("Adduser.ejs");
});

//create user
app.post("/users", (req, res) => {
    let { username, email, password } = req.body;
    let id = faker.string.uuid();
    let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
    try {
        connection.query(q, [id, username, email, password], (err, result) => {
            if (err) throw err;
            res.redirect("/users");
        });
    }
    catch (error) {
        res.send("Some error in db");
    }
});

//delete user
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = `DELETE FROM user WHERE id=?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/users");
        });
    }
    catch (error) {
        res.send("Some error in db");
    }
});

app.listen(port, () => {
    console.log("Server is running...")
})