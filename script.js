let slideIndex = 1; 
showSlides(slideIndex); 

function pluseSlides(n) {
    showSlides(slideIndex += n); 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    if(n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block" ;
    dots[slideIndex - 1].className += " active" ;


}