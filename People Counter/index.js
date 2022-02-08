let counter = 0;

const savedTextPrefix = "Last entries:";
let savedNumbers = []; 

function increment()
{
    counter++;
    document.getElementById("count-el").innerText = counter;

    // Log
    console.log(`new value of the "counter" is: ${counter}`)
}

function save()
{
    // Escapes if count did not change
    if(savedNumbers[savedNumbers.length - 1] == counter)
    {        
        //Log if value stays the same
        console.log(`the count did not change since last save`);

        return;
    }

    // Add's counter value to saved numbers
    savedNumbers.push(counter);

    // Cut's saved numbers to 5 if nessesary
    if(savedNumbers.length > 5)
    {
        savedNumbers.shift();
    }

    // converts saved numbers to string
    let savedTextSufix = "";
    for (let i = 0; i < savedNumbers.length; i++) 
    {
        let element = savedNumbers[i];
        if(i == 0)
        {
            savedTextSufix += ` ${element}`;
            continue;
        }
        savedTextSufix += ` - ${element}`;
    }

    // Updates value in html
    document.getElementById("save-el").innerText = savedTextPrefix + savedTextSufix;
    
    // Log updated value
    console.log(`new entry of "${counter}" is saved`);
}

