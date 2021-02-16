// let year = 2548;
let year = prompt("WE ARE GENERATION : คุณอยู่รุ่นไหน")

if (year<=2490)
{
    alert(year + " = You are generation Builders");
    console.log(year + "You are generation Builders");
    document.getElementById("hContent").innerHTML = year + " = You are generation Builders";
}

else if(year>2490 && year<=2507)
{
    alert(year + " = You are generation Baby Boomers");
    console.log(year + " = You are generation Baby Boomers");
    document.getElementById("hContent").innerHTML = year + " = You are generation Builders";
}

else if(year>=2508 && year<=2524)
{
    alert(year + " = You are generation Gen X");
    console.log(year + " = You are generation Gen X");
    document.getElementById("hContent").innerHTML = year + " = You are generation Gen X";
}

else if(year>=2525 && year<=2538)
{
    alert(year + " = You are generation Gen Y");
    console.log(year + " = You are generation Gen Y");
    document.getElementById("hContent").innerHTML = year + " = You are generation Gen Y";
}

else if(year>=2539 && year<=2552)
{
    alert(year + " = You are generation Gen Z");
    console.log(year + " = You are generation Gen Z");
    document.getElementById("hContent").innerHTML = year + " = You are generation Gen Z";
}

else if(year>=2553)
{
    alert(year + " = You are generation Gen Alpha");
    console.log(year + " = You are generation Gen Alpha");
    document.getElementById("hContent").innerHTML = year + " = You are generation Gen Alpha";
}

