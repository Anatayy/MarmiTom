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
    photo:"images/recettes/recette1.jpg",
    categorie : "végan",
    ingredients : [["courgettes rondes",2],["carotte",1], ["quinoa cuit",75,"g"], ["oignon", 0.5], ["ail", 1, "gousse"], ["huile d'olive"], ["cumin"], ["poivre"], ["sel"]],
    preparation :"ÉTAPE 1 </br> Cuire le quinoa : Le quinoa cuit 20 min dans 2 fois son volume d'eau salée (jusqu'à absorption complète de l'eau). Il est conseillé de le rincer avant de le faire cuire.</br> ÉTAPE 2 </br> Préparer les légumes : </br> ÉTAPE 3 </br> Courgettes rondes : les laver, couper le chapeau, et les vider à la cuillère. (Réserver la chair récupéré). Cuire les courgettes vidées à la vapeur, environ 10 min, jusqu'à ce que la chair soit tendre. Réserver. </br> ÉTAPE 4 </br> Laver, gratter, et couper les carottes en rondelles. Les cuire à la vapeur également, environ 10 min. </br> ÉTAPE 5 </br> Emincer ail et oignons et les faire revenir dans l'huile d'olive. Y ajouter la chair de courgette, cuire doucement 10 min. </br> ÉTAPE 6 </br> Ajouter dans la poêle, les carottes cuites, le cumin, et finir en y ajoutant le quinoa. </br> ÉTAPE 7 </br> La farce est prête!! </br> ÉTAPE 8 </br> Rectifier l'assaisonnement, si besoin (l'eau salée du quinoa peut suffire...) </br> ÉTAPE 9 </br> Remplir les courgettes rondes de cette préparation, leur remettre le chapeau, c'est prêt, il ne reste plus qu'à servir!! </br> ÉTAPE 10 </br> Cette recette peut se préparer à l'avance, et se faire doucement réchauffer au four...    "
}

let recette2 = {
    nomRecette : "Chili con tofu et légumes",
    photo:"images/recettes/recette2.jpg",
    categorie : "végan",
    ingredients : [["tomates",100, "g"],["haricots rouges",50,"g"], ["poivron vert",0.25], ["poivron rouge", 0.25], ["poivron jaune", 0.25], ["oignon jaune", 0.25], ["ail", 0.5, "gousse"], ["piment de cayenne"], ["cumin", 0.25, "c à c"], ["sésame"], ["persil"]],
    preparation :"ÉTAPE 1 </br> Si vous utilisez des haricots rouges secs, faites les tremper 12h la veille, et faites les précuire environ 1h30 dans de l'eau légèrement salée. Ils doivent être encore un peu fermes à l'extérieur.</br> ÉTAPE 2 </br> Si vous utilisez des haricots rouges en boite (beaucoup plus rapide mais moins intéressant au niveau texture), rincez-les abondamment et égouttez-les. </br> ÉTAPE 3 </br> Si vous utilisez des tomates fraîches (fortement conseillé), coupez-les en petits dés, et passez-en la moitié au mixeur pour obtenir un coulis. Si vous utilisez de la pulpe de tomates en boite, faites de même (une moitié en pulpe, l'autre en coulis). </br> ÉTAPE 4 </br> PRÉPARATION DU RIZ </br> ÉTAPE 5 </br> Dans une casserole, déposez un peu de matière grasse végétale (huile d'olive par exemple). A feu fort, faites-y revenir 2 minutes l'oignon jaune finement émincé avec le riz et le curcuma, en mélangeant bien tout le temps. Versez du bouillon de légumes de manière à immerger complétement le riz. Baissez légèrement le feu. Au fur et à mesure de l'absorption du liquide, en ajouter un peu. La cuisson du riz se teste chaque minute et ne doit pas excéder 15 minutes. Le riz doit rester un peu ferme, bien que le type de riz choisi ait la particularité d'être très riche en amidon, et donc d'avoir un petit côté pâteux (ou crémeux). Lorsque le riz est cuit, rincez-le à l'eau froide pour arrêter le cuisson, égouttez-le et réservez-le. </br> ÉTAPE 6 </br> LE CHILI </br> ÉTAPE 7 </br> Émincez l'oignon et les piments. Coupez les poivrons en dès. Hachez les gousses d'ail. Émiettez le tofu à la main.  </br> ÉTAPE 8 </br> Dans une grande poêle (30 cm) ou une grande sauteuse, versez un peu d'huile d'olive. Mettez sur feu fort. </br> ÉTAPE 9 </br> Faites revenir pendant 1 minute les oignons en remuant. </br> ÉTAPE 10 </br> Ajoutez le tofu, l'ail, les poivrons et les piments, et faites revenir pendant encore 2 minutes en remuant. Si vous utilisez des tomates fraîches, ajoutez également les dès de tomate. </br> ÉTAPE 11 </br> Incorporez les graines de sésame, le cumin, la coriandre. Baissez le feu à moyen. </br> ÉTAPE 12 </br> Incorporez le mais, les haricots rouges et le piment. Mélangez bien le tout. Mouillez avec le vin rouge. </br> ÉTAPE 13 </br> Versez le coulis de tomates. Salez, sucrez, poivrez, ajoutez le piment de Cayenne. Baissez le feu à doux. </br> ÉTAPE 14 </br> Laissez mijoter pendant encore 20 minutes environ."
}

let recette3 = {
    nomRecette : "Lasagne à la viande" ,
    categorie : "viande",
    ingredients : [["Plaques de lasagnes (précuites)",20,"plaques"],["Oignons",2],["Gousse d'ail",2],["Persil",0.5, "bouquet"],["Farine", 50,"g"],["Beurre",50,"g"],["Lait",0.5,"l"],["Parmesan rapé", 50, "g"],["poivre"],["Sel"],["Viande Hachée", 600,"g"],["Coulis de tomate", 70,"g"]],
    preparation :
    "Etape 1 : Hacher les oignons, l'ail et le persil et les mélanger à la viande hachée. <br> Etape 2 : Faire chauffer un peu d'huile d'olive dans une poêle et faire la cuire la farce en remuant souvent, pendant 5 minutes. En fin de cuisson, éteindre le feu et réserver. Mélanger au coulis de tomate. <br> Etape 3 : Faire une béchamel avec le beurre, la farine et le lait. <br> Etape 4 : Beurrer un plat à gratin, disposer une couche de plaques de lasagnes, puis une couche de viande hachée, puis une couche de béchamel. <br> Etape 5 : Terminer par une couche de sauce béchamel. Parsemer de parmesan râpé. <br> Etape 6 : Faire gratiner à four chaud pendant 1/2 heure."
}





