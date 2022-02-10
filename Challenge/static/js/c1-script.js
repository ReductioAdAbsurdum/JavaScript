
function ageInWeeks()
{
    reset();

    let birthYear = prompt("Your birth year: ");
    let ageInWeeksValue = (2022 - Number.parseInt(birthYear)) * 51;
    let textAnswerNode = document.createTextNode(`Your age in weeks is ${ageInWeeksValue}`);

    let h1 = document.createElement("h1");
    h1.setAttribute("id", "ageInWeeks");
    h1.appendChild(textAnswerNode);

    document.getElementById("flex-box-resoult").appendChild(h1);
}

function reset()
{
    let resoultFlexBox = document.getElementById("flex-box-resoult");
    resoultFlexBox.innerHTML = "";
}