const variables = document.querySelector(':root');
const emailVerify = document.getElementById('Email');
const emailFlag = document.getElementById('submit');
const todo = document.querySelector('*');
const menu = document.querySelector('.menu-links');
document.getElementById('submit').disabled=true;
document.addEventListener('scroll',changeHeaderColor);
window.addEventListener('resize',reziseMenu);

function changeColor(){
    let luna = document.getElementById('modo-noche');
    let sol = document.getElementById('modo-dia');
    let blnc = document.querySelectorAll('.blnc');
    let yValue = window.scrollY;
    let clientHeight = document.querySelector('.presentacion').clientHeight;
    let changeHeight = (clientHeight-(clientHeight/20))
    
    
    if(luna.style.display == 'none'){
        luna.style.display = 'block';
        sol.style.display = 'none';
        variables.style.setProperty('--blanco','black');
        variables.style.setProperty('--letra-blanca','black');
        variables.style.setProperty('--background-negro','white');
        variables.style.setProperty('--form-background','lightgray');
        variables.style.setProperty('--background-footer','black');
        blnc.forEach(element => {
            element.style.color='black';
        });
    }else{
        luna.style.display = 'none';
        sol.style.display = 'block';
        variables.style.setProperty('--blanco','white');
        variables.style.setProperty('--letra-blanca','rgb(208, 232, 232)');
        variables.style.setProperty('--background-negro','rgb(39, 48, 67)');
        variables.style.setProperty('--form-background','rgb(39, 48, 67)');
        variables.style.setProperty('--background-footer','rgb(22, 27, 37)');
        blnc.forEach(element => {
            element.style.color='white';
        });
    }
    if(yValue >= changeHeight && sol.style.display=='none'){
        blnc.forEach(element => {
            element.style.color='black';
        });
    }else{
        blnc.forEach(element => {
            element.style.color='white';
        });
    }
}

function verifyForm(){
    let emailval=document.getElementById('Email').value;
    let nameval=document.getElementById('Nombre').value;
    let surnameval=document.getElementById('Apellido').value;
    let submitbtn =document.getElementById('submit');
    let error = document.getElementById('textError');
    let regex = /\w+@\w+.com/g;

    if(!regex.test(emailval)){
        if(emailval=="")  {
            error.style.display = 'none';
            emailFlag.disabled = true; 
            return;
        }
        error.style.display = 'block';
        emailFlag.disabled = true;
    }else{
        if(emailval == "" || nameval=="" || surnameval ==""){
            submitbtn.disabled = true;
            return;
        }
        error.style.display = 'none';
        emailFlag.disabled = false;
    }
   
}

function changeHeaderColor(){
    let yValue = window.scrollY;
    let clientHeight = document.querySelector('.presentacion').clientHeight;
    let changeHeight = (clientHeight-(clientHeight/20))
    let sol = document.getElementById('modo-dia');
    let blnc = document.querySelectorAll('.blnc');
    if(yValue >= changeHeight && sol.style.display=='none'){
        blnc.forEach(element => {
            element.style.color='black';
        });
    }else{
        blnc.forEach(element => {
            element.style.color='white';
        });
    }

}

function scrollToAbout(){
    let height = document.querySelector('.presentacion').clientHeight;
    scrollTo({top:height,behavior:"smooth"});
    
}

function scrollToGalery(){
    let height = document.querySelector('.presentacion').clientHeight +  document.querySelector('.about').clientHeight;
    scrollTo({top:height,behavior:"smooth"});
    
}

function scrollToForm(){
    let height = document.querySelector('.main').clientHeight;
    scrollTo({top:height,behavior:"smooth"});
}



function showMenu(){
    if(menu.style.display=='none'){
        menu.style.display='flex';
    }else{
        menu.style.display='none'; 
    }
    
}

function reziseMenu(){
    if(window.innerWidth>=426){
        menu.style.display='flex';
    }else{
        menu.style.display='none';
    }
}


