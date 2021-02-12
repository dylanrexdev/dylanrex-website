$(function() {
    //Hamburger Menu
    const Hamburger = $('.hamburger');
    const Nav = $('nav');

    Hamburger.click(function() {
        Nav.toggleClass("open");
    })
    //Lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll('.gallery-img');
    images.forEach(image => {
        image.addEventListener('click', e=>{
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target != e.currentTarget) return;
        lightbox.classList.remove('active');
    });
    //Scroll Selection
    var hL = $("#home-link");
    var pL = $("#projects-link");
    var aL = $("#about-link");
    var cL = $("#contact-link");

    var home = $("#home");
    var projects = $("#projects");
    var about = $("#about");
    var contact = $("#contact");
   
    hL.addClass("selected");

    $("#main-content").scroll( function() {
        var scrollPos = $("#main-content").scrollTop();
        
        var hHeight = home.height();
        var pHeight = (2*projects.height());
        var aHeight = (3*projects.height());
        var cHeight = (4*projects.height());

        var buffer = (hHeight * 0.7);

        console.log(scrollPos)
        if ( scrollPos < hHeight && scrollPos >= 0) {
            hL.addClass("selected");
            pL.removeClass("selected");
            aL.removeClass("selected");
            cL.removeClass("selected");
        }
        if ( scrollPos < pHeight && scrollPos >= (hHeight -buffer)) {
            hL.removeClass("selected")
            pL.addClass("selected");
            aL.removeClass("selected");
            cL.removeClass("selected");
        }
        if ( scrollPos < aHeight && scrollPos >= (pHeight -buffer)) {
            hL.removeClass("selected");
            pL.removeClass("selected");
            aL.addClass("selected");
            cL.removeClass("selected");
        }
        if ( scrollPos < cHeight && scrollPos >= (aHeight - buffer)) {
            hL.removeClass("selected")
            pL.removeClass("selected");
            aL.removeClass("selected");
            cL.addClass("selected");
        }
        
    });

    //Lightbox Code
    
    
});