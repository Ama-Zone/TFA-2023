import { gsap } from "gsap";
console.log(gsap.version);




/*let fleche = document.querySelector('.fleche');*/
const tlFleche = gsap.timeline({});
tlFleche.to('.fleche',{
   y:25,
   duration: 0.7,
   repeat: -1,
   yoyo: true,
   ease: 'linear' 
});




/*date*/

let date = new Date().getFullYear();
document.getElementById("annee").innerHTML = date;