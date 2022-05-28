const experss = require('express');
const { accessControl } = require('./middleware');
const users = [
    {
        id: 1,
        name: 'Volkan',
        place: "Samsun"
    },
    {
        id: 2,
        name: 'Ahmet',
        place: "İstanbul"
    }
]
const app = experss();

const PORT = 5000;
app.use(experss.json());
// app.use(accessControl);

// app.get("/users",accessControl, (req, res, next) => {
//     // res.send("<h1>Hello Express</h1>");
//     res.json(users);
// });

// app.get("/products",(req,res,next)=>{
//     // res.send("<h1>Hello Express</h1>");
//     res.json("products");
// });

app.get("/users",(req,res,next)=>{
    res.json({
        succsess: true,
        message: users
    });
});

app.post("/users", (req, res, next) => {
    // console.log(req.body);
    // users.push(req.body);
    const user = req.body;
    users.push(user);
    res.json({
        succsess: true,
        message: users
    });
});

app.put("/users/:id", (req, res, next) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        succsess: true,
        message: users
    });
});

app.delete("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
        }
    }
    res.json({
        succsess: true,
        message: users
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});