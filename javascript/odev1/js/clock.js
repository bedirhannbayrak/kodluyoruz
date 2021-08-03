let name = prompt("İsminizi giriniz : ")
document.getElementById("myName").innerText=name;


let showTime = function showTime(){
    let clock = document.getElementById("myClock");
    let date = new Date();

    clock.innerText=`${date.getHours()}:${date.getMinutes() <10 ? "0" + date.getMinutes():date.getMinutes()}:${date.getSeconds()} ${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()}`
    setTimeout(showTime,1000)
}

showTime()