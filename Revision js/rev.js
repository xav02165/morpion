// nombre de 1 a 100

/*let nombre = 7;
let tentative = 0;

while (tentative !== nombre) {
    tentative = parseInt(prompt("devinez un nombre entre 1 et 100 :"));

    console.log("ce n'est pas le bon nombre" );
}
console.log("bravo, vous avez deviné le nombre!");*/


//calendrier

/*function infoMois(Nombrejours) {
    const mois = [
        { nom: "janvier", jour: 31 },
        { nom: "fevrier", jour: 28 },
        { nom: "mars", jour: 31 },
        { nom: "avril", jour: 30},
        { nom: "mai", jour: 31 },
        { nom: "juin", jour: 30 },
        { nom: "juillet", jour: 31 },
        { nom: "aout", jour: 31 },
        { nom: "septembre", jour: 30 },
        { nom: "octobre", jour: 31 },
        { nom: "novembre", jour: 30 },
        { nom: "decembre", jour: 31},
    ];
}*/

/*let compteur = 1 ;
let sommeTotal = 0;

while (compteur<=100) {
    sommeTotal = compteur + sommeTotal++;
    compteur++
    
}

  console.log(sommeTotal);*/

   //nombre de 1 a 10

/*let nombre = 7;
let tentative = 0;

while (tentative !== nombre) {
    tentative = parseInt(prompt("devinez un nombre entre 1 et 10 :"));

    console.log("ce n'est pas le bon nombre" );
}
console.log("bravo, vous avez deviné le nombre!");*/

//OUI OU NON

/*let lundi = 1;
let mardi = 2 ;
let mercredi = 3 ;
let jeudi = 4 ;
let vendredi = 5 ;

switch (lundi) {
    case 1 : 
    console.log ("spaghetti bologanaise");
    break;
    case 2 : 
    console.log ("poulet roti");
    break;
    case 3 : 
    console.log ("poisson pané");
    break;
    case 4 : 
    console.log ("salade composée");
    break;
    case 5 : 
    console.log ("pizza margherita");
    break;
    default:
    console.log("non applicable");
    break;
}*/



 /*let mois = parseInt (prompt ("quel est le numero du mois?")) ;


switch (mois) {
    
    case 1:
        console.log("janvier a 31 jours");
        break;
    case 2 : 
    annee = (prompt ("en quel année somme nous")) ;
        if  (annee % 4 === 0 && annee % 100 !== 0)  (annee % 400 === 0);{
        console.log("Fevrier a 29 jours");
    }
        if (annee % 4 != 0){
        console.log("Fevrier a 28 jours");
    }
        break;
    case 3:
        console.log("Mars a 31 jours");
        break;
    case 4:
        console.log("Avril a 30 jours");
        break;
    case 5:
        console.log("Mai a 31 jours");
        break;
    case 6:
        console.log("juin a 30 jours");
        break;
    case 7:
        console.log("juillet a 31 jours");
        break;
    case 8:
        console.log("aout a 31 jours");
        break;
    case 9:
        console.log("septembre a 30 jours");
        break;
    case 10:
        console.log("octobre a 31 jours");
        break;
    case 11:
        console.log("novembre a 30 jours");
        break;
    case 12:
        console.log("decembre a 31 jours");
        break;

    default:
        break;
}

function combienDeJourDansLeMois(a) {

    switch (a) {
        case 1:
            console.log("Le mois de janvier comporte 31 jours");
            return 31;


        case 2:
            let year = new Date();
            console.log("Le mois de février comporte 28 ou 29 jours");

            if ((year.getFullYear % 4 === 0 && year.getFullYear % 100 > 0) || (year.getFullYear % 400 === 0)) {
                console.log("on est sur une année bissextile");
                return 29;
            }
            else {
                console.log("ce n'est pas une année bissextile");
                return 28;
            }



        case 3:
            console.log("Le mois de mars comporte 31 jours");
            return 31;

        case 4:
            console.log("Le mois de avril comporte 30 jours");
            return 30;

        case 5:
            console.log("Le mois de mai comporte 31 jours");
            return 31;

        case 6:
            console.log("Le mois de juin comporte 30 jours");
            return 30;

        case 7:
            console.log("Le mois de juillet comporte 31 jours");
            return 31;

        case 8:
            console.log("Le mois de août comporte 31 jours");
            return 31;

        case 9:
            console.log("Le mois de septembre comporte 30 jours");
            return 30;

        case 10:
            console.log("Le mois de octobre comporte 31 jours");
            return 31;

        case 11:
            console.log("Le mois de novembre comporte 30 jours");
            return 30;

        case 12:
            console.log("Le mois de décembre comporte 31 jours");
            return 31;

        default:
            console.log("Le mois sélectionner n'est pas disponible, veuillez entrer un nombre entre 1 et 12");
            break;
    }
}

let nombreDeJour = combienDeJourDansLeMois(2);
console.log(nombreDeJour); */


//addition de nombres pairs du tableau: 
/*function sumOfEvens(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvens(1, 15)); */

//fusion de 2 tableaux
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function fusionTableau() {
const mergedArray = arr1.concat(arr2);
}

console.log(mergedArray); */

/*const h1 = document.querySelector('h1');
const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    h1.style.color = 'red';
})*/

//exercice 3
/*const button = document.querySelector('button')
const ul = document.getElementById("list");
const li = document.createElement("li");

 

 

    const text = document.createTextNode('Nouvel-Element');
    li.appendChild(text);
    ul.appendChild(li);
 })*/

//exercice 4:
/*const button = document.querySelector('button');
const ul = document.querySelector('ul');



button.addEventListener('click', (event) => {
    ul.firstElementChild
    ul.removeChild(ul.firstElementChild);

})*/

//exercice 5:
/*const bouton1 = document.querySelector('.b1');
const bouton2 = document.querySelector('.b2');
const bouton3 = document.querySelector('.b3');

function quiAClické () {

    bouton1.addEventListener('click', () => {
        console.log("le bouton 1 a été clické");
         })

    bouton2.addEventListener('click', () => {
        console.log("le bouton 2 a été clické");  
         }) 

     bouton3.addEventListener('click', () => {
        console.log("le bouton 3 a été clické");
         })
}


quiAClické()*/

//tableau: foreach
/*const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach((element) => {
    console.log ('le nombres est ' + element);
})
*/
//filter:
/*const nombres = [1, 5, 12, 8, 130, 44];

const filter = nombres.filter(function(grandNombres) {
    return grandNombres > 10 ;
    
});
console.log(filter); */

//map:
const nombres = [1, 5, 12, 8, 130, 44];

const double = nombres.map(function(nombre) {
    return nombre * 2 ;
})
console.log(double);




