
const images = [
    { src: "images/1.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/2.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/3.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/4.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/5.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/6.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/7.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/8.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/9.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/10.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/11.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/12.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/13.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/14.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/15.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/16.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/17.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/18.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" },
    { src: "images/19.jpg", title: "lorem", width: "100cm", height: "100cm", about: "Lorum ipse" }
];

// gallery navigation
let imgInd = 0;
let nextImg = document.getElementById("nextImage");
let prevImg = document.getElementById("prevImage");

function changeInd(n) {
    showSlide(imgInd += n);
}
// gallery
document.onload = showSlide()


function showSlide() {
    if (imgInd > images.length - 1) {
        imgInd = 0;
    }
    if (imgInd < 0) {
        imgInd = images.length - 1;
    }
    // load image
    let image = document.getElementById("slide");
    image.setAttribute("src", images[imgInd].src);
    // load details of image

    let title = document.querySelector('#title');
    title.innerHTML = images[imgInd].title;
    let size = document.querySelector("#measuremnt");
    size.innerHTML = `width: ${images[imgInd].width}  height: ${images[imgInd].height}`;

    let about = document.querySelector("#about");
    about.innerHTML = images[imgInd].about;
};








