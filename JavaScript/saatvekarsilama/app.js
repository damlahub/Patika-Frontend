let name=prompt("Adınızı Öğrenebilir miyim :)","Ör: Damla");
let nameText=document.querySelector(".name");
let dateText=document.querySelector(".date");
let now = new Date();
let day=now.getDay();
let hour=now.getHours();
let minute=now.getMinutes();
let second=now.getSeconds();	

nameText.innerHTML=`Merhaba, ${name}! Hoş Geldin!`;
dateText.innerHTML=`${now.toDateString()}`;