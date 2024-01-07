const express=require("express");
const app=express();
const response=require("./routes/response")

app.set('view engine', 'ejs');
app.set('views', 'views'); // Set the directory for your views

app.use(express.json())
app.use(express.static("public"));

app.use('/api/v1/response',response)


app.listen(3000);