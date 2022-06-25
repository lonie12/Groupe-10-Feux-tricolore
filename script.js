// récupérer les variables css de la balise html
const root = document.documentElement
// temps total du passage des 3 feux
let total_animation_time = 60
// valeur du temps de chaque feu pour l'axe x
let red_animation_x = total_animation_time/2
let green_animation_x = 1/3*total_animation_time
let orange_animation_x = 1/6*total_animation_time
// délais d'attente de chaque feu sur l'axe x
let green_delay_x = red_animation_x;
let orange_delay_x = (red_animation_x+green_animation_x); 
// valeur du temps de chaque feu pour l'axe y
let red_animation_y = red_animation_x
let green_animation_y = green_animation_x
let orange_animation_y = orange_animation_x
// délais d'attente de chaque feu sur l'axe x
let red_delay_y = (green_animation_y+orange_animation_y);
let orange_delay_y = green_animation_y;

const start = document.querySelector("#start")
console.log(start)
const feux = document.querySelectorAll(".traffic")

start.addEventListener('click', () => {
    console.log(feux)
})
