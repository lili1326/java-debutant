console.log('test');
function calculMoyenne(notes){}

let notes =[10 ,15,2,10];
 console.log(notes);

 let totalNote=0
 
 for(let note of notes){
    totalNote += note;
    console.log(totalNote);
     }

     const moyenne =totalNote / notes.length
     console.log('votre moyenne est de '+ moyenne);
 
     
     if(moyenne > 15){
        console.log( ' vous avez les félicitations');
     }else if(moyenne >10 && moyenne <=15){
        console.log( ' vous avez les  encouragements');
     }else if(moyenne <=10){
        console.log( ' vous devez progresser');
     }

     //si moyenne >15
     //console.log('votre  moyenne  est de '+ moyenne +' vous avez les félicitations');
     //si moyenne >10 & <=15
     //console.log('votre  moyenne  est de '+ moyenne +' vous avez les  encouragements');
      //si moyenne  <=10
      //console.log('votre  moyenne  est de '+ moyenne +' vous devez progresser');