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
// catégories : Viande, poisson, végé, vegan 

// ingrédients en gramme pour 1 personne

let recette0 = {
    nomRecette : "monobjet" ,
    photo:"images/recettes/recette0",
    categorie : "viande",
    ingredients : [["ingredient",100,"g"],["ingredient2",150]],
    preparation :" voici comment préparer la recette"
}

let recette3 = {
    nomRecette : "Lasagne à la viande" ,
    categorie : "viande",
    ingredients : [["Plaques de lasagnes (précuites)",20,"plaques"],["Oignons",2],["Gousse d'ail",2],["Persil",0.5, "bouquet"],["Farine", 50,"g"],["Beurre",50,"g"],["Lait",0.5,"l"],["Parmesan rapé", 50, "g"],["poivre"],["Sel"],["Viande Hachée", 600,"g"],["Coulis de tomate", 70,"g"]],
    preparation :
    "Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée. <br> Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate. <br> Etape 3 : Faire une béchamel avec le beurre, la farine et le lait. <br> Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel. <br> Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé. <br> Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."
}


let recette7 = {
    nomRecette : "Poisson au curry express" ,
    photo:"images/recettes/recette7.jpeg",
    categorie : "poisson",
    ingredients : [["Curry",0.5,"Cuillère à soupe"],["gousse d'ail",0.5],["huile",0.75,"cuillère à soupe"],["filet de colin",1],["lait de coco",5,"cl"]],
    preparation :"ÉTAPE 1 <br/> Dans une sauteuse ou une poêle, faire chauffer à feu doux l'huile, l'ail pilé et les épices pendant 2 min. <br/> ÉTAPE 2 <br/> Déposer les filets de poisson congelés. Les retourner après 4 min, et verser le lait de coco. <br/>ÉTAPE 3 <br/>Remuer la sauce. <br/>ÉTAPE 4 <br/>C'est prêt !"
}

let recette8 = {
    nomRecette : "Poisson au lait de coco" ,
    photo:"images/recettes/recette8.jpg",
    categorie : "poisson",
    ingredients : [["tomate",1],["oignon",0.25],["oignon",0.25],["curcuma (facultatif)"],["fillet de poisson blanc",1],["boite de lait de coco",0.25]],
    preparation :"ÉTAPE 1 <br/> Faire revenir les oignons coupés fin dans une grande poêle antiadhésive. <br/> ÉTAPE 2 <br/> Ajouter les filets de poisson roulés sur eux-mêmes, les faire revenir doucement 5 à 6 minutes. Saler et poivrer. <br/>ÉTAPE 3 <br/>Ajouter les tomates coupées en petits dés. Cuire à feu doux 5 minutes. <br/>ÉTAPE 4 <br/>Ajouter le lait de coco et le curcuma (facultatif). Laisser mijoter doucement 10 à 15 minutes sans remuer."
}


