function clicked() {
    document.getElementById("content").classList.toggle("show")
}

var acimages = ["/static/images/air condition installation (indoor-violent).jpg", "/static/images/air condition installation (outdoor) 2.jpg",
    "/static/images/inverter.jpg", "/static/images/cell.jpg"];
var acpos = 0;
var acslider = document.getElementById("acslider");
var auto = setInterval(acslide, 2000);
function acslide() {
    acpos++;
    if (acpos >= acimages.length) { acpos = 0; }
    acslider.src = acimages[acpos];
}

var swimages = ["/static/images/mlog.png", "/static/images/bmi.png", "/static/images/programmer.jpg", "/static/images/web.png"];
var swpos = 0;
var swslider = document.getElementById("swslider");
var auto = setInterval(swslide, 2000);
function swslide() {
    swpos++;
    if (swpos >= swimages.length) { swpos = 0; }
    swslider.src = swimages[swpos];
}