var randnum = Math.floor(Math.random()*100)+1;
var count =0;
document.getElementById("submit").addEventListener("click",function(){
    var guess=parseInt(document.getElementById("num").value);
    count++;
    if(guess===randnum){
        displayMessage("Congratulations!!! you guessed the number in "+ count+" attempts.");
        document.getElementById("submit").disabled=true;

    }
    else if(guess<randnum)
    {
        displayMessage("Number too low...Try a higher number.");
    }
    else if(guess>randnum)
    {
        displayMessage("Number too high...Try a lower number.");
    }
});
function displayMessage(txt){
    document.getElementById("txt").textContent=txt;
}