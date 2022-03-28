function OCNav() {
    var nav = document.getElementById("mySidenav");
    var estado = nav.style.width;

    if (estado <= "0px") {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    setTimeout(() => {
        document.getElementById("Nibba").style.backgroundColor = "rgba(0,0,0,0.5) ";
    }, 300);
    document.getElementById("Nibba").style.width = "100%"
    document.getElementById("Nibba").style.height = "100%"
    document.getElementById("mySidenav").style.width = "18rem";
}

function closeNav() {
    document.getElementById("Nibba").style.backgroundColor = "rgba(0,0,0,0) ";
    setTimeout(() => {
        document.getElementById("Nibba").style.width = "0%"
        document.getElementById("Nibba").style.height = "0%"
    }, 700);
    document.getElementById("mySidenav").style.width = "0px ";
}