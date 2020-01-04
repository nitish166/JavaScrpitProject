 prompt("What is your name");
 prompt("What is their name");

var loveScore= Math.random();
loveScore = loveScore*100;
loveScore=Math.floor(loveScore);
if(loveScore>=70)
{
    alert("Your love score is :"+loveScore+"% "+"You love is each other like tom and jerry");
}
else if(loveScore>30 && loveScore<70)
{
    alert("Your love score  is :"+loveScore+"%");
}
else
{
    alert("Your love score  is :"+loveScore+"%"+"You go together like oil and water");
}