
//Función Menu hamburguesa
function hamburgerMenu(panelBtn,panel){

    const d=document;

    d.addEventListener('click',(e)=>{
        if(e.target.matches(panelBtn)){
            d.querySelector(panel).classList.toggle("active");
        }
    })
}

//Parametros de la funcion cargdos al inicio de página
document.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".btn-hamburger", ".hamburger");
})


//Volver hacia arriba al clickear boton del footer
let btn=document.querySelectorAll(".btn")

btn.onclick=()=>{
    window.scrollTo(0)
}
