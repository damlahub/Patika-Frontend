let name=prompt("Adınızı Öğrenebilir miyim :)","Ör: Damla");
let nameText=document.querySelector(".name");
let dateText=document.querySelector(".date");
let now = new Date();


nameText.innerHTML=`Merhaba, ${name}! Hoş Geldin!`;
dateText.innerHTML=`${now.toDateString()}`;