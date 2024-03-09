import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const app = express();
const port=3000;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", (req,res)=>
{
    res.render(__dirname + "/index.ejs");
});
app.get("/home", (req,res)=>
{
    res.render(__dirname + "/index.ejs");
});

app.get("/books", (req,res)=>
{
    res.render(__dirname + "/books.ejs");
});
app.get("/articles", (req,res)=>
{
    res.render(__dirname + "/Articles.ejs");
});
app.get("/products", (req,res)=>
{
    res.render(__dirname + "/products.ejs");
});

app.listen(port,()=>
{
 console.log("listening on port "+ port);
})