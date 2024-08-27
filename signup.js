require(dotenv).config();
const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
const app=express();
const PORT=process.env.PORT || 3500;
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology:true});
app.use(express.urlencoded({extended:false}));
app.use(expess.json());
app.use(session({
    scret:"my secret key ",
    saveUninitialized:true,
    resave:false,
}));
app.use((req,res, next) => {
res.local.message=req.session.message;
delete req.session.message;
next();
});
app.set("view engine","ejs");
const db =mongoose.connection;
db.on('error',(error)=> console.log(error));
db.once('open',()=>console.log('Connected to the databases!'))
app.get("/",(req,res)=>{
    res.send("Wait");
});
app.listen(PORT, ()=>{
console.log('Server started at https://localhost:${PORT}');
});
document.getElementById('signup').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});