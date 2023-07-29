"use strict";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

var mimiimg = document.querySelector('.soustete__img--mimi');
if (mimiimg){
    gsap.from('soustete__img--mimi',{
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'soustete__img--mimi',
            start:'top 1300px',
            end:'center 90%',
            scrub:0.5,
            markers: true
        }
    });
} 


let proso = document.querySelector('.proso');
if (proso) {
  

const btnPrev = document.querySelector(".slider__btn--prev"),
      btnnext = document.querySelector(".slider__btn--next");

      btnnext.addEventListener("click", next);
      btnPrev.addEventListener("click", prev);
      
      //touche clavier

      document.addEventListener("keydown" ,function(e){
          if (e.code == "ArrowLeft"){
              prev();
          }else if (e.code == "ArrowRight"){
            next();
          }
      }); 

      //suite slider

      function next(){

        let elShow = document.querySelector(".slider__el--show"),
            elnext = elShow.nextElementSibling;

            elShow.classList.remove("slider__el--show");

            if(elnext){
                elnext.classList.add("slider__el--show");
            }else{
                let elfirst = elShow.parentNode.firstElementChild;
                elfirst.classList.add("slider__el--show");
            }

            
            
      }

      function prev(){

        let elShow = document.querySelector(".slider__el--show"),
            elPrev = elShow.previousElementSibling;

            elShow.classList.remove("slider__el--show");

            if(elPrev){
                elPrev.classList.add("slider__el--show");
            }else{
                let elLast = elShow.parentNode.lastElementChild;
                elLast.classList.add("slider__el--show");
            }
        }



 




//menu


    let navButton = document.querySelector(".menu");


    navButton.addEventListener("click", toggleNavigation);

    function toggleNavigation(){
        if(!document.body.hasAttribute("data-menu")){
            document.body.setAttribute("data-menu", true);
        }else{
            document.body.removeAttribute("data-menu");
        }
    }
    
        let links = document.querySelector(".nav__list");

        if(links){
        links.addEventListener("click", MenuList);

            function MenuList (){
                if(!document.body.hasAttribute("data-menu")){
                    document.body.setAttribute("data-menu", false);
                } else {
                    document.body.removeAttribute("data-menu");
                }
            }
        }


gsap.timeline({
    scrollTrigger: {
      trigger: ".",
      start: "",
      end: "",
      scrub: true,
      pin: true
    }
  })
    .from(".midsole",  { y: innerHeight * 1.5 })
    .from(".outsole", { y: innerHeight * 1.5 });

}

    //date

    let date = new Date().getFullYear();
    document.getElementById("annee").innerHTML = date;




    