const express = require('express');
const userRouter = require("./Routers/userRouter");
const filterRouter = require("./Routers/filterRouter");
const utilRouter = require("./Routers/utils");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}));

const port = 5000;
app.use(express.json());

app.use('/user', userRouter);
app.use('/filter', filterRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get("/", (req, res) => {
    // send() is used for string response
    res.send("Request accepted");
});

app.listen(port, () => {
    console.log("Express server started at port 5000");
})