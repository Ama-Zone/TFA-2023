"use strict";
import { gsap } from "gsap";

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



 //date

    let date = new Date().getFullYear();
    document.getElementById("annee").innerHTML = date;




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