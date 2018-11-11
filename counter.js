
var c=0
var t

function timedCount()
{
document.getElementById('txt').value="停止计时!"
document.getElementById("time").value=c
c=c+1
t=setTimeout("timedCount()",1000)
}


function stopCount()
{
    c=0
clearTimeout(t);
document.getElementById('txt').value="开始计时!"
document.getElementById("time").value=0
}

var sign=false

function controller()
{
    if(sign==false)
    {
        sign=true
        timedCount()
    }
    else
    {
        sign=false
        stopCount()
        
    }
}
