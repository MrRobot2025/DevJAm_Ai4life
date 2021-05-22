const fullname = document.getElementById("fullname")
const Uland = document.getElementById("Uland")
const Ucity = document.getElementById("Ucity")
const Ucrop = document.getElementById("Ucrop")




const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const fname = urlParams.get('fname')
const land = urlParams.get('land')
const City = urlParams.get('City')
const Crop = urlParams.get('Crop')

fullname.innerHTML=fname;
Uland.innerHTML=land;
Ucity.innerHTML=City;
Ucrop.innerHTML=Crop;
