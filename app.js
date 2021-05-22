const text=document.querySelector(".start-text");
const container=document.querySelector(".container");
const btn=document.getElementById("BTN");
const title=document.getElementById('texte');
const start=document.getElementById('start_screen');
const ulNav=document.getElementById('nav-l');
const logo=document.getElementById('logo');
const tl = gsap.timeline({ defaults: { easein: "power1.out" } });
const chatbotimage = document.getElementById("chatbot-img");
const chatbotchat=document.getElementById("chatbot");
const chatbotclose=document.getElementById("chatbot-close");
const form = document.getElementById("main-form");
container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth/2 - e.pageX)/15;
    let yAxis = (window.innerHeight/2- e.pageY)/15;
    btn.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
    btn.style.transition = "none";
    title.style.transform = "translateZ(100px)";   
  });
btn.addEventListener('click',function anime(){

    var delayInMilliseconds = 10000; //1 second
    btn.style.backgroundColor="#b32c39";
    setTimeout(function() {
      start.remove();

    }, delayInMilliseconds);
    var delayInMilliseconds2 = 8500;
    setTimeout(function() {
        ulNav.style.visibility='visible';
  
      }, delayInMilliseconds2);
tl.to(".start-screen", { y: "-100%", duration: 1,delay:1});
tl.to(".text-1", { y: "0%", duration: 1,delay:1});
tl.to(".text-2", { y: "0%", duration: 1,delay:0.5});
tl.to(".text-3", { y: "0%", duration: 1,delay:0.5});
tl.to(".intro", { y:"-100%", duration: 1, delay:1});
});


chatbotimage.addEventListener('click',() => {
  console.log("img pressed")

  chatbotchat.style.animation="chatbot 0.5s linear forwards";
  chatbotimage.style.opacity='0';

}
);

chatbotclose.addEventListener('click',() =>{


  chatbotchat.style.animation="chatbotclose 0.5s linear forwards";
  chatbotimage.style.opacity='1';


});
var City,land,Crop;
var fname;


        


