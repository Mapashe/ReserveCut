var slideIndexMov = 1;
    showSlidesMov(slideIndexMov);

    function plusSlidesMov(n) {
        showSlidesMov(slideIndexMov += n);
    }

    function currentSlideMov(n) {
        showSlidesMov(slideIndexMov = n);
    }

    function showSlidesMov(n) {
        var i;
        var slidesMov = document.getElementsByClassName("mySlidesMov");
        var dotsMov = document.getElementsByClassName("dotMov");
        if (n > slidesMov.length) {
            slideIndexMov = 1
        }
        if (n < 1) {
            slideIndexMov = slidesMov.length
        }
        for (i = 0; i < slidesMov.length; i++) {
            slidesMov[i].style.display = "none ";
        }
        for (i = 0; i < dotsMov.length; i++) {
            dotsMov[i].className = dotsMov[i].className.replace("active", "");
        }
        slidesMov[slideIndexMov - 1].style.display = "block";
        dotsMov[slideIndexMov - 1].className += " active";
    }