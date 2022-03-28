//Para la funcionalidad del staff

function OCSta() {
    var snav = document.getElementById("staff");
    var sestado = snav.style.height;

    if (sestado <= "0%") {
        document.getElementById("txtprod").style.color = "transparent";
        document.getElementById("txtprod").style.background = "rgba(0,0,0,0)";
        openSta();

    } else {
        document.getElementById("txtprod").style.color = "white";
        closeSta();

    }
}

function openSta() {
    document.getElementById("staff").style.height = "100%";
    console.log("open");
}

function closeSta() {
    document.getElementById("staff").style.height = "0%";
    document.getElementById("txtprod").style.background = "rgba(0,0,0,0.8)";
    console.log("close");
}
/*********************************************/
function OCSta1() {
    var snav = document.getElementById("staff1");
    var sestado = snav.style.height;

    if (sestado <= "0%") {
        document.getElementById("flechaJul").style.visibility = "hidden";
        document.getElementById("txtprod1").style.color = "transparent";
        document.getElementById("txtprod1").style.background = "rgba(0,0,0,0)";
        openSta1();

    } else {
        document.getElementById("txtprod1").style.color = "white";
        closeSta1();

    }
}

function openSta1() {
    document.getElementById("staff1").style.height = "100%";
    console.log("open");
}

function closeSta1() {
    document.getElementById("flechaJul").style.visibility = "visible";
    document.getElementById("staff1").style.height = "0%";
    document.getElementById("txtprod1").style.background = "rgba(0,0,0,0.8)";
    console.log("close");
}
/*********************************************/
function OCSta2() {
    var snav = document.getElementById("staff2");
    var sestado = snav.style.height;

    if (sestado <= "0%") {
        document.getElementById("flechaPet").style.visibility = "hidden";
        document.getElementById("txtprod2").style.color = "transparent";
        document.getElementById("txtprod2").style.background = "rgba(0,0,0,0)";
        openSta2();

    } else {
        document.getElementById("txtprod2").style.color = "white";
        closeSta2();

    }
}

function openSta2() {
    document.getElementById("staff2").style.height = "100%";
    console.log("open");
}

function closeSta2() {
    document.getElementById("flechaPet").style.visibility = "visible";
    document.getElementById("staff2").style.height = "0%";
    document.getElementById("txtprod2").style.background = "rgba(0,0,0,0.8)";
    console.log("close");
}

function OCSta4() {
    var snav = document.getElementById("staff4");
    var sestado = snav.style.height;

    if (sestado <= "0%") {
        document.getElementById("flechaNan").style.visibility = "hidden";
        document.getElementById("txtprod4").style.color = "transparent";
        document.getElementById("txtprod4").style.background = "rgba(0,0,0,0)";
        openSta4();

    } else {
        document.getElementById("txtprod4").style.color = "white";
        closeSta4();

    }
}

function openSta4() {
    document.getElementById("staff4").style.height = "100%";
    console.log("open");
}

function closeSta4() {
    document.getElementById("flechaNan").style.visibility = "visible";
    document.getElementById("staff4").style.height = "0%";
    document.getElementById("txtprod4").style.background = "rgba(0,0,0,0.8)";
    console.log("close");
}