var alien = document.getElementById("alien");

document.addEventListener("keyup", jump);

function jump(){
    
    alien.classList.add("animate");
    setTimeout(removeJump, 600);
} ;
function removeJump(){
    alien.classList.remove("animate");
}

var block = document.getElementById("block");


function checkDead(){
    let alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>-20 && alienTop>=200){
        
        if(!alert("You Hit A UFO! Press OK to play again")) location.reload();
    }
}

setInterval(checkDead, 10);