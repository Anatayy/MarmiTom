let express = require('express');
let app =express();
let port=3000;

app.use(express.static(__dirname+'/www'));
app.use('/js', express.static( __dirname + '/node_modules/bootstrap/dist/js') ) ;
app.use('/js', express.static( __dirname + '/node_modules/jquery/dist') ) ;
app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css') ) ;

app.listen(port,()=>{
    console.log('le serveur est en route');
    console.log('Serveur listening at http://localhost:${port}');
})

/*
app.get('/',(req,res,next)=>{
    res.send('Bonjour totos !');
})
*/

/*
app.get('/',(req,res,next)=>{
    res.sendFile('www/index.html');
});

*/

app.set('view engine','ejs');
app.use('/views',express.static(__dirname + '/views'));


//passage d'un objet dans la vue de la page 2

let myObject = {
    nom : "monobjet" ,
    valeur : 10
}
    

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
// catégories : Viande, poisson, végé, vegan 

// ingrédients en gramme pour 1 personne

let recette1 = {
    nomRecette : "Courgettes rondes farcies au quinoa",
    photo:"images/recettes/courgette.jpg",
    categorie : "végan",
    ingredients : [["courgettes rondes",2],["carotte",1], ["quinoa cuit",75,"g"], ["oigon", 0.5], ["ail", 1, "gousse"], ["huile d'olive"], ["cumin"], ["poivre"], ["sel"]],
    preparation :"ÉTAPE 1 </br> Cuire le quinoa : Le quinoa cuit 20 min dans 2 fois son volume d'eau salée (jusqu'à absorption complète de l'eau). Il est conseillé de le rincer avant de le faire cuire.</br> ÉTAPE 2 </br> Préparer les légumes : </br> ÉTAPE 3 </br> Courgettes rondes : les laver, couper le chapeau, et les vider à la cuillère. (Réserver la chair récupéré). Cuire les courgettes vidées à la vapeur, environ 10 min, jusqu'à ce que la chair soit tendre. Réserver. </br> ÉTAPE 4 </br> Laver, gratter, et couper les carottes en rondelles. Les cuire à la vapeur également, environ 10 min. </br> ÉTAPE 5 </br> Emincer ail et oignons et les faire revenir dans l'huile d'olive. Y ajouter la chair de courgette, cuire doucement 10 min. </br> ÉTAPE 6 </br> Ajouter dans la poêle, les carottes cuites, le cumin, et finir en y ajoutant le quinoa. </br> ÉTAPE 7 </br> La farce est prête!! </br> ÉTAPE 8 </br> Rectifier l'assaisonnement, si besoin (l'eau salée du quinoa peut suffire...) </br> ÉTAPE 9 </br> Remplir les courgettes rondes de cette préparation, leur remettre le chapeau, c'est prêt, il ne reste plus qu'à servir!! </br> ÉTAPE 10 </br> Cette recette peut se préparer à l'avance, et se faire doucement réchauffer au four...    "
}





