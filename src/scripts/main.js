"use strict";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let mimiimg = document.querySelector('.soustete__img--mimi');
if (mimiimg){
    gsap.from('.soustete__img--mimi',{
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'.soustete__img--mimi',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
} 

let mokaimg = document.querySelector('.soustete__img--moka');
if  ((window.matchMedia('(min-width: 1000px)').matches) && (mimiimg)) {
    mimiimg.setAttribute('src','assets/images/mimi.png');
    mimiimg.setAttribute('srcset','assets/images/2x/mimi2x.png');
    mokaimg.setAttribute('src','assets/images/photo.png');
    mokaimg.setAttribute('srcset','assets/images/2x/photo2x.png');
    

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
    

}

    //date

    let date = new Date().getFullYear();
    document.getElementById("annee").innerHTML = date;




    