//http://api.open-notify.org/iss-now.json


let kutu1Elemani=document.querySelector("#kutu1")
let haritaOLusturuldu= false
var map ;
var marker;

setInterval(issHaritaGuncelle, 5000 )

function issHaritaGuncelle(){
fetch("http://api.open-notify.org/iss-now.json")
.then( (yanit)=> yanit.json())
.then( ( veri)=>{
  let enlem = veri.iss_position.latitude
  let boylam = veri.iss_position.longitude

  kutu1Elemani.textContent = enlem + ","+ boylam
  if(haritaOLusturuldu ===false){
   map = L.map('map').setView([parseInt(enlem), parseInt(boylam)], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  haritaOLusturuldu = true
  
  }
  if (marker)
  marker.remove()
   marker = L.marker([parseInt(enlem), parseInt(boylam)]).addTo(map);
   map.panto([lat,lon],animate = true);
} )
}