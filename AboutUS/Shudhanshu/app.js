const cont = document.getElementById('cont');
const card = document.getElementById("card");
const title=document.querySelector(".title");
const profile= document.querySelector(".image");
const description= document.querySelector(".description");
const button= document.querySelector(".hire");
cont.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/20;
    let yAxis = (window.innerWidth/2 - e.pageY)/20;
    console.log(xAxis,yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});
cont.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(50px)";
    profile.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(25px)";
    
    button.style.transform = "translateZ(25px)";
  });

cont.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    profile.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    
    button.style.transform = "translateZ(0px)";
});
  