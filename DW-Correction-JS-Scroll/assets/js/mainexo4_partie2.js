
var appearFirst= document.getElementById('appearFirst'); // premier block //
var appearSecond= document.getElementById('appearSecond');
var appearThird= document.getElementById('appearThird');

var appearTable=[appearFirst, appearSecond, appearThird]; //

appearTable.forEach(element => {  //pour chaque element de CONTENU DANS appearTable on va determiner l'element que l'ont utilise aura le nom element, pour chaque element on va lui DEMANDER D appliquer LE code ENTRE LES accolades

element.style.opacity=0;

});

// window la fenetre du navigateur dans laquelle est affichée le document//
window.addEventListener('scroll', function () {

    var scrollValue= window.scrollY; // scrollY = ax horinzontale
    console.log(scrollValue); // console permet de determiner a quel niveaux on veut qua ca apparaise

    if (scrollValue>500) { 
        appearTable.forEach(element => {    

            element.style.opacity=1;

        });

        // effet d'apparition 
        appearFirst.style.transition="opacity 1s"; 
        appearSecond.style.transition="opacity 1s 0.5s";
        appearThird.style.transition="opacity 2s 1s";
    }
    else {
        appearTable.forEach(element => {    
        
        element.style.opacity=0;
    });

    }


})