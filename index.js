function showMarks()
{
    let m=Number(document.getElementById("mathmarks").value);
    let e=Number(document.getElementById("engmarks").value);
    let s=Number(document.getElementById("scimarks").value);
    let c=Number(document.getElementById("compmarks").value);

    let sum=m+e+s+c;
    let p=(sum/400)*100;

    if((m>=0 && m<=100) && (e>=0 && e<=100) && (s>=0 && s<=100) && (c>=0 && c<=100))
    {
        document.getElementById("showMarks").innerHTML=`You got ${sum} out of 400 and your percentage is ${p}`;
    }

    else
    {
        document.getElementById("showMarks").innerHTML="Enter Correct Marks";
    }


    
}