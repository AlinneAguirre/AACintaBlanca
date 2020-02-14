/* let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let boton= document.getElementById('boton');
let nombreInput= document.getElementById('nombreInput');
let edadInput= document.getElementById('edadInput');

function maneja (){
    let nombreOutput= nombre.value;
    nombreInput.innerHTML=nombreOutput;
    let edadOutput= edad.value;
    let conducir='Puedes Conducir, TRAMITA TU LICENCIA';
    let noconducir='Lo siento mucho tu NO puedes conducir, TODOS A SALVO';
    let permiso='Vientos puedes empezar el tramite de tu PERMISO';
    let error='Whooops algo raro paso';
    if(edadOutput >= 18 && edadOutput <= 70){
        edadInput.innerHTML= conducir;
    }else if(edadOutput === '16' || edadOutput === '17'){
        edadInput.innerHTML=permiso;
    }else if(edadOutput < 16 || edadOutput >70){
        edadInput.innerHTML= noconducir;
    }else{
        edadInput.innerHTML=error;
    }
   
} 

boton.addEventListener('click', maneja); */


let negocio = document.getElementById('negocio');
let boton= document.getElementById('boton');
let negocioInput= document.getElementById('negocioInput');


function business (){
    let negocioOutput= negocio.value;
    let nego=negocioOutput.toLowerCase()
    negocioInput.innerHTML=nego;   
    let error='Whooops algo raro paso';
    if(nego === 'tecnologia'){
        location.href="tech.html";
    }else if(nego === 'comida'){
        location.href="food.html";
    }else if (nego === 'mascotas'){
        location.href="pets.html";
    }else{
        negocioInput.innerHTML=error;
    }
   
} 

boton.addEventListener('click', business);