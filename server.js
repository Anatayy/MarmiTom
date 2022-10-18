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