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
    preparation :"ÉTAPE 1  Cuire le quinoa : Le quinoa cuit 20 min dans 2 fois son volume d'eau salée (jusqu'à absorption complète de l'eau). Il est conseillé de le rincer avant de le faire cuire.</br> ÉTAPE 2 </br> Préparer les légumes : </br> ÉTAPE 3 </br> Courgettes rondes : les laver, couper le chapeau, et les vider à la cuillère. (Réserver la chair récupéré). Cuire les courgettes vidées à la vapeur, environ 10 min, jusqu'à ce que la chair soit tendre. Réserver. </br> ÉTAPE 4 </br> Laver, gratter, et couper les carottes en rondelles. Les cuire à la vapeur également, environ 10 min. </br> ÉTAPE 5 </br> Emincer ail et oignons et les faire revenir dans l'huile d'olive. Y ajouter la chair de courgette, cuire doucement 10 min. </br> ÉTAPE 6 </br> Ajouter dans la poêle, les carottes cuites, le cumin, et finir en y ajoutant le quinoa. </br> ÉTAPE 7 </br> La farce est prête!! </br> ÉTAPE 8 </br> Rectifier l'assaisonnement, si besoin (l'eau salée du quinoa peut suffire...) </br> ÉTAPE 9 </br> Remplir les courgettes rondes de cette préparation, leur remettre le chapeau, c'est prêt, il ne reste plus qu'à servir!! </br> ÉTAPE 10 </br> Cette recette peut se préparer à l'avance, et se faire doucement réchauffer au four...    "
}

let recette2 = {
    nomRecette : "Chili con tofu et légumes",
    photo:"img/recettes/recette2.jpg",
    categorie : "végan",
    ingredients : [[100, "g","tomates"],[50,"g","haricots rouges"], [0.25,"poivron vert"], [0.25,"poivron rouge"], [0.25,"poivron jaune"], [0.25,"oignon jaune"], [0.5, "gousse","ail"], ["piment de cayenne"], [0.25, "c à c","cumin"], ["sésame"], ["persil"]],
    preparation :"ÉTAPE 1 </br> Si vous utilisez des haricots rouges secs, faites les tremper 12h la veille, et faites les précuire environ 1h30 dans de l'eau légèrement salée. Ils doivent être encore un peu fermes à l'extérieur.</br> ÉTAPE 2 </br> Si vous utilisez des haricots rouges en boite (beaucoup plus rapide mais moins intéressant au niveau texture), rincez-les abondamment et égouttez-les. </br> ÉTAPE 3 </br> Si vous utilisez des tomates fraîches (fortement conseillé), coupez-les en petits dés, et passez-en la moitié au mixeur pour obtenir un coulis. Si vous utilisez de la pulpe de tomates en boite, faites de même (une moitié en pulpe, l'autre en coulis). </br> ÉTAPE 4 </br> PRÉPARATION DU RIZ </br> ÉTAPE 5 </br> Dans une casserole, déposez un peu de matière grasse végétale (huile d'olive par exemple). A feu fort, faites-y revenir 2 minutes l'oignon jaune finement émincé avec le riz et le curcuma, en mélangeant bien tout le temps. Versez du bouillon de légumes de manière à immerger complétement le riz. Baissez légèrement le feu. Au fur et à mesure de l'absorption du liquide, en ajouter un peu. La cuisson du riz se teste chaque minute et ne doit pas excéder 15 minutes. Le riz doit rester un peu ferme, bien que le type de riz choisi ait la particularité d'être très riche en amidon, et donc d'avoir un petit côté pâteux (ou crémeux). Lorsque le riz est cuit, rincez-le à l'eau froide pour arrêter le cuisson, égouttez-le et réservez-le. </br> ÉTAPE 6 </br> LE CHILI </br> ÉTAPE 7 </br> Émincez l'oignon et les piments. Coupez les poivrons en dès. Hachez les gousses d'ail. Émiettez le tofu à la main.  </br> ÉTAPE 8 </br> Dans une grande poêle (30 cm) ou une grande sauteuse, versez un peu d'huile d'olive. Mettez sur feu fort. </br> ÉTAPE 9 </br> Faites revenir pendant 1 minute les oignons en remuant. </br> ÉTAPE 10 </br> Ajoutez le tofu, l'ail, les poivrons et les piments, et faites revenir pendant encore 2 minutes en remuant. Si vous utilisez des tomates fraîches, ajoutez également les dès de tomate. </br> ÉTAPE 11 </br> Incorporez les graines de sésame, le cumin, la coriandre. Baissez le feu à moyen. </br> ÉTAPE 12 </br> Incorporez le mais, les haricots rouges et le piment. Mélangez bien le tout. Mouillez avec le vin rouge. </br> ÉTAPE 13 </br> Versez le coulis de tomates. Salez, sucrez, poivrez, ajoutez le piment de Cayenne. Baissez le feu à doux. </br> ÉTAPE 14 </br> Laissez mijoter pendant encore 20 minutes environ."
}

let recette3 = {
    nomRecette : "Lasagne à la viande" ,
    photo : "img/recettes/recette3.jpeg",
    categorie : "viande",
    ingredients : [[3.5,"plaques","Plaques de lasagnes (précuites)"],[0.30,"Oignons"],[0.25,"Gousse d'ail"],[1, "bouquet","Persil"],[8.5,"g","Farine"],[8.5,"g","Beurre"],[0.5,"l","Lait"],[8.5, "g","Parmesan rapé"],["poivre"],["Sel"],[100,"g","Viande Hachée"],[11.5,"g","Coulis de tomate"]],
    preparation : "Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée. <br> Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate. <br> Etape 3 : Faire une béchamel avec le beurre, la farine et le lait. <br> Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel. <br> Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé. <br> Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."
}

let recette4 = {
    nomRecette : "Poulet au riz et à la crème de curry " ,
    photo : "img/recettes/recette4.jpeg",
    categorie : "viande",
    ingredients : [[0.5,"c.à.s","Moutarde de Dijon"],[5,"g","Beurre"],[0.25,"c.à.s","Huile végétale"],["Filet de poulet"],[0.25,"Echalote"],[20,"cl","Crème fraiche épaisse"]],
    preparation : "Etape 1 : Dans une sauteuse, mettre le beurre et l'huile, ajouter l'échalote, faire revenir ajouter les filets de poulet coupés en dés, les laisser revenir 5 min. <br> Etape 2 : Pendant ce temps la mélanger la moutarde et la crème fraîche. <br> Etape 3 : Lorsque le poulet est doré ajouter le mélange et laisser cuire 15 min à feu doux. <br> Etape 4 : Servir avec du riz sauvage."
}

let recette5 = {
    nomRecette : "Pâtes au basilic, tomates séchées et feta" ,
    photo:"img/recettes/recette5.jpeg",
    categorie : "végé",
    ingredients : [[0.25,"Tomates séchées","poignée(s)"],[0.25,"Pâtes fraîches ou normales","sachet(s)"],[0.25,"Basilic frais","bouquet(s)"],[0.25,"Crème liquide","pot(s)"],["Feta émiéttée"]],
    preparation :"ÉTAPE 1<br/>Mélanger la crème et le basilic couper en petits morceaux. Saler, poivrer, et si possible, mais pas nécessaire, laisser macérer 30 mn.<br/>ÉTAPE 2<br/>Passer la préparation au mixeur jusqu'à ce que la crème soit bien aérée. Ajouter les tomates séchées et laissez-les macérer quelques minutes. Porter la sauce à ébullition.<br/>ÉTAPE 3<br/>Faire cuire les pâtes, ajouter la sauce et saupoudrer avec la feta émiettée."
}

let recette6 = {
    nomRecette : "Parmentier de patates douces aux champignons au cresson" ,
    photo:"img/recettes/recette6.jpeg",
    categorie : "végé",
    ingredients : [[50,"Champignons","g"],[0.5,"Beurre","c.à.s"],[0.25,"Beurre","noix"],["Muscade"],["Lait (facultatif)"],[1.25,"Patate douce"],[0.5,"Cresson","sachet(s)"],["Chapelure"]],
    preparation :"ÉTAPE 1<br/>Emincer les champignons.<br/>ÉTAPE 2<br/>Effeuiller le cresson.<br/>ÉTAPE 3<br/>Peler les patates douces et les couper en morceaux.<br/>ÉTAPE 4<br/>Faire cuire les patates douces dans de l'eau bouillante légèrement salée pendant environ 20 minutes.<br/>ÉTAPE 5<br/>Réduire les patates cuites en purée avec 1 cuillère à soupe de beurre.<br/>ÉTAPE 6<br/>Verser éventuellement un peu de lait jusqu'à obtention d'une purée bien onctueuse.<br/>ÉTAPE 7<br/>Saler, poivrer et épicer de noix de muscade.<br/>ÉTAPE 8<br/>Préchauffer le four à 180°C.<br/>ÉTAPE 9<br/>Faire fondre 1 cuillère à soupe de beurre dans une poêle et y faire rissoler les champignons émincés à feu modéré pendant 5 minutes? Il ne doit plus y avoir de jus de cuisson; augmenter le feu si nécessaire.<br/>ÉTAPE 10<br/>Mélanger régulièrement.<br/>ÉTAPE 11<br/>Intégrer les feuilles de cresson, mélanger et réserver hors du feu.<br/>ÉTAPE 12<br/>Dans des ramequins individuels très légèrement beurrés, déposer une couche de purée puis une couche de champignons au cresson et couvrir avec une couche de purée.<br/>ÉTAPE 13<br/>Saupoudrer de chapelure.<br/>ÉTAPE 14<br/>Glisser les ramequins dans le four préchauffé.<br/>ÉTAPE 15<br/>Laisser cuire environ 25 minutes.<br/>ÉTAPE 16<br/>Démouler le Parmentier.<br/>ÉTAPE 17<br/>Bon appétit.<br/>"
}


let recette7 = {
    nomRecette : "Poisson au curry express" ,
    photo:"img/recettes/recette7.jpeg",
    categorie : "poisson",
    ingredients : [[0.5,"Curry","Cuillère à soupe"],[0.5,"gousse d'ail"],[0.75,"huile","cuillère à soupe"],[1,"filet de colin"],[5,"lait de coco","cl"]],
    preparation :"ÉTAPE 1 <br/> Dans une sauteuse ou une poêle, faire chauffer à feu doux l'huile, l'ail pilé et les épices pendant 2 min. <br/> ÉTAPE 2 <br/> Déposer les filets de poisson congelés. Les retourner après 4 min, et verser le lait de coco. <br/>ÉTAPE 3 <br/>Remuer la sauce. <br/>ÉTAPE 4 <br/>C'est prêt !"
}

let recette8 = {
    nomRecette : "Poisson au lait de coco" ,
    photo:"img/recettes/recette8.jpg",
    categorie : "poisson",
    ingredients : [[1,"tomate"],[0.25, "oignon"],[0.25,"oignon"],["curcuma (facultatif)"],[1,"filet de poisson blanc"],[0.25,"boite de lait de coco"]],
    preparation :"ÉTAPE 1 <br/> Faire revenir les oignons coupés fin dans une grande poêle antiadhésive. <br/> ÉTAPE 2 <br/> Ajouter les filets de poisson roulés sur eux-mêmes, les faire revenir doucement 5 à 6 minutes. Saler et poivrer. <br/>ÉTAPE 3 <br/>Ajouter les tomates coupées en petits dés. Cuire à feu doux 5 minutes. <br/>ÉTAPE 4 <br/>Ajouter le lait de coco et le curcuma (facultatif). Laisser mijoter doucement 10 à 15 minutes sans remuer."
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
