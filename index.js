let pressed = 'X'

function getfunction(btnid){
    document.getElementById(btnid).innerHTML = pressed;
    document.getElementById(btnid).disabled = true;
    
    checking(1,2,3)
    checking(4,5,6)
    checking(7,8,9)
    checking(1,4,7)
    checking(2,5,8)
    checking(3,6,9)
    checking(1,5,9)
    checking(3,5,7)

    if (pressed === 'X'){
        pressed = 'O'
    }
    else{
        pressed = 'X'
    }
}

function checking(a,b,c){
    if (document.getElementById(a).innerHTML === pressed && document.getElementById(b).innerHTML === pressed && document.getElementById(c).innerHTML === pressed){
        document.getElementById('winner').innerHTML = `Player ${pressed} Wins`
        for(let y=1; y<10; y++)
            {document.getElementById(y).disabled = true;}
        
        var timeleft = 5;
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").innerHTML = `The Game will restart in ${timeleft}.`;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
        
        setTimeout(() => {
            location.reload();
        }, 5000);
        
        pass
    }
}