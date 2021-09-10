const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("It works!")
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});