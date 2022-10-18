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
let recette3 = {
    nomRecette : "Lasagne à la viande" ,
    categorie : "viande",
    ingredients : [["Plaques de lasagnes (précuites)",20,"plaques"],["Oignons",2],["Gousse d'ail",2],["Persil",0.5, "bouquet"],["Farine", 50,"g"],["Beurre",50,"g"],["Lait",0.5,"l"],["Parmesan rapé", 50, "g"],["poivre"],["Sel"],["Viande Hachée", 600,"g"],["Coulis de tomate", 70,"g"]],
    preparation :
    "Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée. <br> Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate. <br> Etape 3 : Faire une béchamel avec le beurre, la farine et le lait. <br> Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel. <br> Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé. <br> Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."
}

let recette5 = {
    nomRecette : "Pâtes au basilic, tomates séchées et feta" ,
    photo:"images/recettes/recette0",
    categorie : "végé",
    ingredients : [["Tomates séchées",0.25,"poignée(s)"],["Pâtes fraîches ou normales",0.25,"sachet(s)"],["Basilic frais",0.25,"bouquet(s)"],["Crème liquide",0.25,"pot(s)"],["Feta émiéttée"]],
    preparation :"ÉTAPE 1<br/>Mélanger la crème et le basilic couper en petits morceaux. Saler, poivrer, et si possible, mais pas nécessaire, laisser macérer 30 mn.<br/>ÉTAPE 2<br/>Passer la préparation au mixeur jusqu'à ce que la crème soit bien aérée. Ajouter les tomates séchées et laissez-les macérer quelques minutes. Porter la sauce à ébullition.<br/>ÉTAPE 3<br/>Faire cuire les pâtes, ajouter la sauce et saupoudrer avec la feta émiettée."
}

let recette6 = {
    nomRecette : "Parmentier de patates douces aux champignons au cresson" ,
    photo:"images/recettes/recette0",
    categorie : "végé",
    ingredients : [["Champignons",50,"g"],["Beurre",0.5,"c.à.s"],["Beurre",0.25,"noix"],["Muscade"],["Lait (facultatif)"],["Patate douce",1.25],["Cresson",0.5,"sachet(s)"],["Chapelure"]],
    preparation :"ÉTAPE 1<br/>Emincer les champignons.<br/>ÉTAPE 2<br/>Effeuiller le cresson.<br/>ÉTAPE 3<br/>Peler les patates douces et les couper en morceaux.<br/>ÉTAPE 4<br/>Faire cuire les patates douces dans de l'eau bouillante légèrement salée pendant environ 20 minutes.<br/>ÉTAPE 5<br/>Réduire les patates cuites en purée avec 1 cuillère à soupe de beurre.<br/>ÉTAPE 6<br/>Verser éventuellement un peu de lait jusqu'à obtention d'une purée bien onctueuse.<br/>ÉTAPE 7<br/>Saler, poivrer et épicer de noix de muscade.<br/>ÉTAPE 8<br/>Préchauffer le four à 180°C.<br/>ÉTAPE 9<br/>Faire fondre 1 cuillère à soupe de beurre dans une poêle et y faire rissoler les champignons émincés à feu modéré pendant 5 minutes? Il ne doit plus y avoir de jus de cuisson; augmenter le feu si nécessaire.<br/>ÉTAPE 10<br/>Mélanger régulièrement.<br/>ÉTAPE 11<br/>Intégrer les feuilles de cresson, mélanger et réserver hors du feu.<br/>ÉTAPE 12<br/>Dans des ramequins individuels très légèrement beurrés, déposer une couche de purée puis une couche de champignons au cresson et couvrir avec une couche de purée.<br/>ÉTAPE 13<br/>Saupoudrer de chapelure.<br/>ÉTAPE 14<br/>Glisser les ramequins dans le four préchauffé.<br/>ÉTAPE 15<br/>Laisser cuire environ 25 minutes.<br/>ÉTAPE 16<br/>Démouler le Parmentier.<br/>ÉTAPE 17<br/>Bon appétit.<br/>"
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


