let negro=false;

document.getElementById("boton").onclick= 
function()
{
    if (negro){
        negro=false
        document.body.style.backgroundColor='#FFFFFF'
        
    }
    else{document.body.style.backgroundColor='#000000';
    negro= true;}

}
