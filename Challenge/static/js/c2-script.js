const catDiv = document.getElementById("cat-location");
const imgSource = "static/img/cat.png"


function generateCat()
{
    let image = document.createElement("img");
    image.setAttribute("src",imgSource);
    image.setAttribute("height","60px");

    catDiv.appendChild(image);
}