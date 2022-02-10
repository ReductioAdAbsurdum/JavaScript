const wonMsg = "WON";
const lostMsg = "LOST";
const tieMsg = "TIE";

const flexBox = document.getElementById("flex-box-rps");

const rockImage = document.createElement("img");
rockImage.setAttribute("id", "rock");
rockImage.setAttribute("src", "static/img/rock.png");
rockImage.addEventListener("click", function (e) {move("rock")});

const paperImage = document.createElement("img");
paperImage.setAttribute("id", "paper")
paperImage.setAttribute("src", "static/img/paper.png");
paperImage.addEventListener("click", function (e) {move("paper")});

const scizzorsImage = document.createElement("img");
scizzorsImage.setAttribute("id", "scizzors");
scizzorsImage.setAttribute("src", "static/img/scizzors.png");
scizzorsImage.addEventListener("click", function (e) {move("scizzors")});

/**
 * Starts a new game
 */
function newGame()
{
    flexBox.innerHTML = "";

    flexBox.appendChild(rockImage);
    flexBox.appendChild(paperImage);
    flexBox.appendChild(scizzorsImage);
}


/**
 * 
 * @param {string} choice string that is sent from HTML via action
 */
function move(choice)
{
    console.log(`human choice is ${choice}`); // Debug line

    let botChoice = getBotChoice();
    console.log(`bot choice is ${botChoice}`); // Debug line

    showResoult(choice, botChoice, calculateWinner(choice, botChoice))
}

/**
 * @returns {string} string that represents bot choice
 */
function getBotChoice()
{
    let randomNumber = Math.floor((Math.random()*3));

    switch (randomNumber) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scizzors";
    }
}

/**
 * 
 * @param {string} humanChoice string that represents human choice
 * @param {string} botChoice string that represents bot choice 
 * @returns {Number} (-1, 0, 1) for (bot, tie, human)
 */
 function calculateWinner(humanChoice, botChoice)
 {
     if(humanChoice == "rock")
     {
         if(botChoice == "rock")
         {
             console.log("Tie"); // Debug line
             return 0;
         }
         if(botChoice == "paper")
         {
             console.log("Bot win"); // Debug line
             return -1;
         }
         if(botChoice == "scizzors")
         {
             console.log("Human win"); // Debug line
             return 1;
         }
     }
 
     if(humanChoice == "paper")
     {
         if(botChoice == "rock")
         {
             console.log("Human win"); // Debug line
             return 1;
         }
         if(botChoice == "paper")
         {
             console.log("Tie"); // Debug line
             return 0;
         }
         if(botChoice == "scizzors")
         {
             console.log("Bot win"); // Debug line
             return -1;
         }
     }
 
     if(humanChoice == "scizzors")
     {
         if(botChoice == "rock")
         {
             console.log("Bot win"); // Debug line
             return -1;
         }
         if(botChoice == "paper")
         {
             console.log("Human win"); // Debug line
             return 1;
         }
         if(botChoice == "scizzors")
         {
             console.log("Tie"); // Debug line
             return 0;
         }
     }
 }

/**
 * 
 * @param {string} humanChoice string that represents human choice
 * @param {string} botChoice string that represents bot choice 
 * @param {number} winner number that represents winner (-1, 0, 1) for (bot, tie, human)
 * 
 */
function showResoult(humanChoice, botChoice, winner)
{
    flexBox.innerHTML = "";

    flexBox.appendChild(getImageFromText(humanChoice));

    let h1 = document.createElement("h1");
    h1.innerHTML= getMessageFromNumber(winner);
    flexBox.appendChild(h1);

    flexBox.appendChild(getImageFromText(botChoice));
    
}

/**
 * 
 * @param {string} imageName name of image
 * @returns {image} image that is represented by the name
 */
function getImageFromText(imageName) 
{
    switch (imageName) { 
        case "rock":
            let r = document.createElement("img");
            r.setAttribute("src", "static/img/rock.png");
            return r;

        case "paper":
            let p = document.createElement("img");
            p.setAttribute("src", "static/img/paper.png");
            return p;

        case "scizzors":
            let s = document.createElement("img");
            s.setAttribute("src", "static/img/scizzors.png");
            return s;
    }
}


/**
 * 
 * @param {number} number that represents a winner
 * @returns {string} message that is represented by number
 */
function getMessageFromNumber(number)
{
    switch (number) {
        case 0:
            return tieMsg;
    
        case -1:
            return lostMsg;
        
        case 1:
            return wonMsg;
    }
}



