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
    photo : "images/recettes/recette3",
    categorie : "viande",
    ingredients : [["Plaques de lasagnes (précuites)",3.5,"plaques"],["Oignons",0.30],["Gousse d'ail",0.25],["Persil",1, "bouquet"],["Farine", 8.5,"g"],["Beurre",8.5,"g"],["Lait",0.5,"l"],["Parmesan rapé", 8.5, "g"],["poivre"],["Sel"],["Viande Hachée", 100,"g"],["Coulis de tomate", 11.5,"g"]],
    preparation : "Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée. <br> Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate. <br> Etape 3 : Faire une béchamel avec le beurre, la farine et le lait. <br> Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel. <br> Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé. <br> Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."
}

let recette4 = {
    nomRecette : "Lasagne à la viande" ,
    photo : "images/recettes/recette4",
    categorie : "viande",
    ingredients : [["Moutarde de Dijon",0.5,"c.à.s"],["Beurre",5,"g"],["Huile végétale",0.25,"c.à.s"],["Filet de poulet"],["Echalote",  0.25],["Crème fraiche épaisse",20,"cl"]],
    preparation : "Etape 1 : Dans une sauteuse, mettre le beurre et l'huile, ajouter l'échalote, faire revenir ajouter les filets de poulet coupés en dés, les laisser revenir 5 min. <br> Etape 2 : Pendant ce temps la mélanger la moutarde et la crème fraîche. <br> Etape 3 : Lorsque le poulet est doré ajouter le mélange et laisser cuire 15 min à feu doux. <br> Etape 4 : Servir avec du riz sauvage."
}





