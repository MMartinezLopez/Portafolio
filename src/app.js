
window.addEventListener('scroll', ()=>{
    var enlaceEspecial = document.getElementById("scrolltop");
    var seccionHome = document.getElementById("home");

        // Verificar si la sección actual no es #home
        if (window.scrollY > seccionHome.offsetHeight && window.location.hash !== "#home") {
            enlaceEspecial.style.display = "block";
        } else {
            enlaceEspecial.style.display = "none";
        }

    document.querySelectorAll("section").forEach(section=> {
        if(window.scrollY >section.offsetTop-50){
            current=section.id;
        }
        
    })
    document.querySelectorAll(".navlink").forEach(link=>{
    link.classList.remove("active");
        if(link.href.includes(current)){
            link.classList.add('active');
        }
    })

    
})


window