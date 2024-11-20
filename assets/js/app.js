console.log ('connecté');

const form=document.getElementById('form');
console.log(form);

form.addEventListener('submit',( event)=>{
    event.preventDefault();
 
  for(let element of form.elements)  {
    if('submit' === element.type){
        continue;
    }
    if('text'=== element.type && element.value.length < 2){
      console.log('error :' +element.id);  
    }
    
  }
});