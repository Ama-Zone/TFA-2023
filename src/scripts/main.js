"use strict";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



//animation

let mimiimg = document.querySelector('.soustete__img--mimi');


        //anim icone
let icone = gsap.timeline({});
icone.to('.proso__probleme--icone1',{
   y:15,
   duration: 0.7,
   repeat: 2,
   yoyo: true,
   ease: 'linear', 
   scrollTrigger:{
    trigger:'.proso__probleme--icone1',
    start:'top center',
    end:'50px center',
    scrub:2.5,
    markers: true
}
});

icone.to('.proso__probleme--icone2',{
   y:15,
   duration: 0.7,
   repeat: 2,
   yoyo: true,
   ease: 'linear', 
   scrollTrigger:{
    trigger:'.proso__probleme--icone2',
    start:'top center',
    end:'50px center',
    scrub:2.5,
    markers: true
}
});

        //interview
if (mimiimg){
    gsap.from('.interview--quest2',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon1',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon1',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest1',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest3',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon2',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon2',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest2',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest4',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon3',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon3',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest3',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest5',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon4',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon4',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest4',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest6',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon5',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon5',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest5',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest7',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon6',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon6',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest6',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest8',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon7',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon7',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest7',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--quest9',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--repon8',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
    gsap.from('.interview--repon8',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest8',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
        
    });
    gsap.from('.interview--repon9',{
        opacity:0,
        duration:1.8,
        y: 70,
        scrollTrigger:{
            trigger:'.interview--quest9',
            start:'top center',
            end:'50px center',
            scrub:2.5,
            markers: true
        }
    });
}


let animtab = document.querySelector('.tete');
if  ((window.matchMedia('(max-width: 1000px)').matches) && (animtab)) {
      
      gsap.from(".tete div", { 
        duration: 1.5,
        y: 50,
        opacity: 0,
      });

}

let animpc = document.querySelector('.tete');
if  ((window.matchMedia('(min-width: 1000px)').matches) && (animpc)) {
      
      gsap.from(".tete div", { 
        duration: 1.5,
        x: 50,
        opacity: 0,
      });

}




//images 

let mokaimg = document.querySelector('.soustete__img--moka');
if  ((window.matchMedia('(min-width: 1000px)').matches) && (mimiimg)) {
    mimiimg.setAttribute('src','assets/images/mimi.png');
    mimiimg.setAttribute('srcset','assets/images/2x/mimi2x.png');
    mokaimg.setAttribute('src','assets/images/photo.png');
    mokaimg.setAttribute('srcset','assets/images/2x/photo2x.png');
    

}



let proso = document.querySelector('.proso');
if (proso) {
  
//slider
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




    