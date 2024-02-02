function calc(){ 
   var rndNum = (Math.random() * 100) + 1;
    return Math.floor(rndNum)
}
prompt("Write your name: ")
prompt("Now write name of your crush: ")
var lovenum = calc();
 
if(lovenum > 70){
    alert("Match chance is " + lovenum + "% " + "GOOOD you love so hard")
}
if(lovenum > 30 && lovenum <=70){
alert("Match chance is " + lovenum + "%")
}
if (lovenum <=30){
   alert("Match chance is " + lovenum + "%" + " you die alone ") 
}
