console.log("Hello world");
console.log("conetent from dev branch");
const express = require("express")
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
res.send("Hello world")
});

app.listen(port, ()=> {
console.log("Hello world app listening on port 3000");
})
