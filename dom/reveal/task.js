 
 function isInViewport(){
    const viewportHeight = window.innerHeight;
    const revealElements = Array.from(document.getElementsByClassName("reveal"));
    
    revealElements.forEach(element => {if (element.getBoundingClientRect().top < viewportHeight) element.classList.add("reveal_active")} );
 
}

document.addEventListener("scroll", isInViewport);