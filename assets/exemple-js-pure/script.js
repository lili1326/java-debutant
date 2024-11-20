alert('Fichier chargé avec succès');
console.log('test d affichage');

let boisson=('perrier');

console.log('boisson');

function test(){
    console.log('test');
}
test();

const prenom= document.getElementById('prenom');
console.log('prenom');
const nom=document.querySelector('#nom');
console.log ('nom');

 let fruit=['pomme', 'poire', 'banane'];
 console.log(fruit);

 let note =[10 ,15,20];
 console.log(note);

 //console.log('je mange le fruit:'+fruit[1])

 for(let i=0;i<fruit.length;i++){
    //console.log(i)
    console.log('je mange le fruit '+fruit[i]+'!')
 }
console.log('-----------------');

 for(let fruits of fruit){
    if(fruits=='poire'){
        /*continue;  permet de ne pas afficher poire*/
        /*break; sort de la boucle a poire*/
    }
    console.log('je mange le fruit :'+fruits+'!')
 }
 console.log('-----------------');

 fruit.forEach((fruits)=>{
    console.log('je mange le fruit :'+fruits+'!') 
 });

 const formGroup=document.querySelectorAll('.form-group');
 console.log(formGroup);//affiche une nodelist soit un objet//

 Array.from(formGroup).forEach((element)=>{
    console.log(element);
    //element.remove();  permet de supprimer //
 })
