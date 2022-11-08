let express = require('express');
let app =express();
let port=3000;

app.use(express.static(__dirname+'/www'));
app.use('/js', express.static( __dirname + '/node_modules/bootstrap/dist/js') ) ;
app.use('/js', express.static( __dirname + '/node_modules/jquery/dist') ) ;
app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css') ) ;
app.use('/img', express.static( __dirname + '/www/img') ) ;


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
    res.render('index.ejs',{recettes:[recettes]});
})


app.get('/liste_recettes',(req,res,next)=>{
    res.render('liste_recettes.ejs',{marecette:recettes});
})



//RECETTES
// catégories : Viande, poisson, végé, vegan 

// ingrédients en gramme pour 1 personne

let recette1 = {
    nomRecette : "Courgettes rondes farcies au quinoa",
    photo:"/img/recettes/recette1.jpg",
    categorie : "végan",
    ingredients : [[2,"courgettes rondes"],[1,"carotte"], [75,"g","quinoa cuit"], [0.5,"oignon"], [1, "gousse","ail"], ["huile d'olive"], ["cumin"], ["poivre"], ["sel"]],
    preparation :[["ÉTAPE 1  Cuire le quinoa : Le quinoa cuit 20 min dans 2 fois son volume d'eau salée (jusqu'à absorption complète de l'eau). Il est conseillé de le rincer avant de le faire cuire."],["ÉTAPE 2 Préparer les légumes"],["ÉTAPE 3 Courgettes rondes : les laver, couper le chapeau, et les vider à la cuillère. (Réserver la chair récupéré). Cuire les courgettes vidées à la vapeur, environ 10 min, jusqu'à ce que la chair soit tendre. Réserver."],["ÉTAPE 4 Laver, gratter, et couper les carottes en rondelles. Les cuire à la vapeur également, environ 10 min. "],["ÉTAPE 5 Emincer ail et oignons et les faire revenir dans l'huile d'olive. Y ajouter la chair de courgette, cuire doucement 10 min. "],["ÉTAPE 6 Ajouter dans la poêle, les carottes cuites, le cumin, et finir en y ajoutant le quinoa."],["ÉTAPE 7 La farce est prête!!"],["ÉTAPE 8 Rectifier l'assaisonnement, si besoin (l'eau salée du quinoa peut suffire...)"],["ÉTAPE 9 Remplir les courgettes rondes de cette préparation, leur remettre le chapeau, c'est prêt, il ne reste plus qu'à servir!!"],["ÉTAPE 10 Cette recette peut se préparer à l'avance, et se faire doucement réchauffer au four...    "]]
}

let recette2 = {
    nomRecette : "Chili con tofu et légumes",
    photo:"img/recettes/recette2.jpg",
    categorie : "végan",
    ingredients : [[100, "g","tomates"],[50,"g","haricots rouges"], [0.25,"poivron vert"], [0.25,"poivron rouge"], [0.25,"poivron jaune"], [0.25,"oignon jaune"], [0.5, "gousse","ail"], ["piment de cayenne"], [0.25, "c à c","cumin"], ["sésame"], ["persil"]],
    preparation :[["ÉTAPE 1 Si vous utilisez des haricots rouges secs, faites les tremper 12h la veille, et faites les précuire environ 1h30 dans de l'eau légèrement salée. Ils doivent être encore un peu fermes à l'extérieur."],["ÉTAPE 2 Si vous utilisez des haricots rouges en boite (beaucoup plus rapide mais moins intéressant au niveau texture), rincez-les abondamment et égouttez-les."],["ÉTAPE 3 Si vous utilisez des tomates fraîches (fortement conseillé), coupez-les en petits dés, et passez-en la moitié au mixeur pour obtenir un coulis. Si vous utilisez de la pulpe de tomates en boite, faites de même (une moitié en pulpe, l'autre en coulis)."],["ÉTAPE 4 PRÉPARATION DU RIZ "],["ÉTAPE 5 Dans une casserole, déposez un peu de matière grasse végétale (huile d'olive par exemple). A feu fort, faites-y revenir 2 minutes l'oignon jaune finement émincé avec le riz et le curcuma, en mélangeant bien tout le temps. Versez du bouillon de légumes de manière à immerger complétement le riz. Baissez légèrement le feu. Au fur et à mesure de l'absorption du liquide, en ajouter un peu. La cuisson du riz se teste chaque minute et ne doit pas excéder 15 minutes. Le riz doit rester un peu ferme, bien que le type de riz choisi ait la particularité d'être très riche en amidon, et donc d'avoir un petit côté pâteux (ou crémeux). Lorsque le riz est cuit, rincez-le à l'eau froide pour arrêter le cuisson, égouttez-le et réservez-le."],["ÉTAPE 6 LE CHILI"],["ÉTAPE 7 Émincez l'oignon et les piments. Coupez les poivrons en dès. Hachez les gousses d'ail. Émiettez le tofu à la main."],["ÉTAPE 8 Dans une grande poêle (30 cm) ou une grande sauteuse, versez un peu d'huile d'olive. Mettez sur feu fort."],["ÉTAPE 9 Faites revenir pendant 1 minute les oignons en remuant."],["ÉTAPE 10 Ajoutez le tofu, l'ail, les poivrons et les piments, et faites revenir pendant encore 2 minutes en remuant. Si vous utilisez des tomates fraîches, ajoutez également les dès de tomate."],["ÉTAPE 11 Incorporez les graines de sésame, le cumin, la coriandre. Baissez le feu à moyen."],["ÉTAPE 12 Incorporez le mais, les haricots rouges et le piment. Mélangez bien le tout. Mouillez avec le vin rouge."],["ÉTAPE 13 Versez le coulis de tomates. Salez, sucrez, poivrez, ajoutez le piment de Cayenne. Baissez le feu à doux."],["ÉTAPE 14 Laissez mijoter pendant encore 20 minutes environ."]]
}

let recette3 = {
    nomRecette : "Lasagne à la viande" ,
    photo : "img/recettes/recette3.jpeg",
    categorie : "viande",
    ingredients : [[3.5,"plaques","Plaques de lasagnes (précuites)"],[0.30,"Oignons"],[0.25,"Gousse d'ail"],[1, "bouquet","Persil"],[8.5,"g","Farine"],[8.5,"g","Beurre"],[0.5,"l","Lait"],[8.5, "g","Parmesan rapé"],["poivre"],["Sel"],[100,"g","Viande Hachée"],[11.5,"g","Coulis de tomate"]],
    preparation : [["Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée."],["Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate."],["Etape 3 : Faire une béchamel avec le beurre, la farine et le lait."],["Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel."],["Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé."],["Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."]]
}

let recette4 = {
    nomRecette : "Poulet au riz et à la crème de curry " ,
    photo : "img/recettes/recette4.jpeg",
    categorie : "viande",
    ingredients : [[0.5,"c.à.s","Moutarde de Dijon"],[5,"g","Beurre"],[0.25,"c.à.s","Huile végétale"],["Filet de poulet"],[0.25,"Echalote"],[20,"cl","Crème fraiche épaisse"]],
    preparation : [["Etape 1 : Dans une sauteuse, mettre le beurre et l'huile, ajouter l'échalote, faire revenir ajouter les filets de poulet coupés en dés, les laisser revenir 5 min."],["Etape 2 : Pendant ce temps la mélanger la moutarde et la crème fraîche."],["Etape 3 : Lorsque le poulet est doré ajouter le mélange et laisser cuire 15 min à feu doux."],["Etape 4 : Servir avec du riz sauvage."]]
}

let recette5 = {
    nomRecette : "Pâtes au basilic, tomates séchées et feta" ,
    photo:"img/recettes/recette5.jpeg",
    categorie : "végé",
    ingredients : [[0.25,"Tomates séchées","poignée(s)"],[0.25,"Pâtes fraîches ou normales","sachet(s)"],[0.25,"Basilic frais","bouquet(s)"],[0.25,"Crème liquide","pot(s)"],["Feta émiéttée"]],
    preparation :[["ÉTAPE 1 Mélanger la crème et le basilic couper en petits morceaux. Saler, poivrer, et si possible, mais pas nécessaire, laisser macérer 30 mn."],["ÉTAPE 2 Passer la préparation au mixeur jusqu'à ce que la crème soit bien aérée. Ajouter les tomates séchées et laissez-les macérer quelques minutes. Porter la sauce à ébullition."],["ÉTAPE 3 Faire cuire les pâtes, ajouter la sauce et saupoudrer avec la feta émiettée."]]
}

let recette6 = {
    nomRecette : "Parmentier de patates douces aux champignons au cresson" ,
    photo:"img/recettes/recette6.jpeg",
    categorie : "végé",
    ingredients : [[50,"Champignons","g"],[0.5,"Beurre","c.à.s"],[0.25,"Beurre","noix"],["Muscade"],["Lait (facultatif)"],[1.25,"Patate douce"],[0.5,"Cresson","sachet(s)"],["Chapelure"]],
    preparation :[["ÉTAPE 1 Emincer les champignons."],["ÉTAPE 2 Effeuiller le cresson."],["ÉTAPE 3 Peler les patates douces et les couper en morceaux."],["ÉTAPE 4 Faire cuire les patates douces dans de l'eau bouillante légèrement salée pendant environ 20 minutes."],["ÉTAPE 5 Réduire les patates cuites en purée avec 1 cuillère à soupe de beurre."],["ÉTAPE 6 Verser éventuellement un peu de lait jusqu'à obtention d'une purée bien onctueuse."],["ÉTAPE 7 Saler, poivrer et épicer de noix de muscade."],["ÉTAPE 8 Préchauffer le four à 180°C."],["ÉTAPE 9 Faire fondre 1 cuillère à soupe de beurre dans une poêle et y faire rissoler les champignons émincés à feu modéré pendant 5 minutes? Il ne doit plus y avoir de jus de cuisson; augmenter le feu si nécessaire."],["ÉTAPE 10 Mélanger régulièrement."],["ÉTAPE 11 Intégrer les feuilles de cresson, mélanger et réserver hors du feu."],["ÉTAPE 12 Dans des ramequins individuels très légèrement beurrés, déposer une couche de purée puis une couche de champignons au cresson et couvrir avec une couche de purée."],["ÉTAPE 13 Saupoudrer de chapelure."],["ÉTAPE 14 Glisser les ramequins dans le four préchauffé."],["ÉTAPE 15 Laisser cuire environ 25 minutes."],["ÉTAPE 16 Démouler le Parmentier."],["ÉTAPE 17 Bon appétit."]]
}


let recette7 = {
    nomRecette : "Poisson au curry express" ,
    photo:"img/recettes/recette7.jpeg",
    categorie : "poisson",
    ingredients : [[0.5,"Cuillère à soupe","Curry"],[0.5,"gousse d'ail"],[0.75,"cuillère à soupe","huile"],[1,"filet de colin"],[5,"cl","lait de coco",]],
    preparation :[["ÉTAPE 1 Dans une sauteuse ou une poêle, faire chauffer à feu doux l'huile, l'ail pilé et les épices pendant 2 min. "],["ÉTAPE 2 Déposer les filets de poisson congelés. Les retourner après 4 min, et verser le lait de coco. "],["ÉTAPE 3 Remuer la sauce."],["ÉTAPE 4 C'est prêt !"]]
}

let recette8 = {
    nomRecette : "Poisson au lait de coco" ,
    photo:"img/recettes/recette8.jpg",
    categorie : "poisson",
    ingredients : [[1,"tomate"],[0.25, "oignon"],[0.25,"oignon"],["curcuma (facultatif)"],[1,"filet de poisson blanc"],[0.25,"boite de lait de coco"]],
    preparation :[["ÉTAPE 1 Faire revenir les oignons coupés fin dans une grande poêle antiadhésive."],["ÉTAPE 2 Ajouter les filets de poisson roulés sur eux-mêmes, les faire revenir doucement 5 à 6 minutes. Saler et poivrer."],["ÉTAPE 3 Ajouter les tomates coupées en petits dés. Cuire à feu doux 5 minutes."],["ÉTAPE 4 Ajouter le lait de coco et le curcuma (facultatif). Laisser mijoter doucement 10 à 15 minutes sans remuer."]]
}

let recettes=[recette1, recette2, recette3, recette4, recette5, recette6, recette7, recette8];

//lis toutes les recettes et donnes les ingrédients de tous
// for (let i = 0; i < recettes.length ; i++){
//         console.log (recettes[i].ingredients);
// }
for (let i = 0; i < recettes ; i++){
    for (let o = 0; o < i; o++){
        // console.log(recette1.ingredients[i]);
    }
}

let objRecettes = {
    nom:"objRecettes",
    valeur:recettes
}

/*
//On vient créer un tableau avec toutes les recettes
let i = 0;
while (i>=0){
    if (typeof window["recette"+string(i)] !== 'undefined') {
        array.push(window["recette"+string(i)])
    }
    else{
        break;
    }
}

console.log(recettes);
*/
