
window.addEventListener('scroll', ()=>{
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
