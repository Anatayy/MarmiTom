let express = require('express');
let app =express();
let port=3000;

app.use(express.static(__dirname+'/www'));
app.use('/js', express.static( __dirname + '/node_modules/bootstrap/dist/js') ) ;
app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css') ) ;

app.listen(port,()=>{
    console.log('le serveur est en route');
    console.log('Serveur listening at http://localhost:${port}');
})




app.set('view engine','ejs');
app.use('/views',express.static(__dirname + '/views'));

    
// LIEN DES PAGES

app.get('/',(req,res,next)=>{
    res.render('index.ejs');
})

app.get('/page1',(req,res,next)=>{
    res.render('page2.ejs',{monobjet:myObject});
})
app.get('/page2',(req,res,next)=>{
    res.render('page3.ejs',{monobjet:myObject});
})



//RECETTES

let rec1 = {
    nomRecette : "monobjet" ,
    ingrédients : ["ingredient","ingredient"]
}