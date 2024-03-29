

//todo: integrate vue for generated output
//todo: uss CSS grid for the output.
//todo: review js for clarity 
//todo: dry out the js



const ALL_RACES = [
    "Emirates of Hacan",
    "Universities of Jol-Nar",
    "L1Z1X Mindnet",
    "Naalu Collective",
    "Federation of Sol",
    "Barony of Letnev",
    "Mentak Coalition",
    "The Arborec",
    "Yssaril Tribes",
    "Sardakk N’or",
    "Xxcha Kingdom",
    "Clan of Saar",
    "Brotherhood of Yin",
    "The Winnu",
    "Embers of Muatt",
    "Ghosts of Creuss",
    "Nekro Virus"
]

const numberOfPlayers = document.getElementById('numberOfPlayers');
const numberOfRaceChoices = document.getElementById('numberOfRaceChoices'); ``
const generateButton = document.getElementById('generateButton');
const outputDiv = document.getElementById('outputDiv')

const raceMaxChecker = () => {
    if (numberOfPlayers.value * numberOfRaceChoices.value <= ALL_RACES.length) {
        return true;
    }
}

//empties the output div
const outputClearer = () => {
    outputDiv.innerHTML = ""
}

const packageGenerator = () => {
    outputClearer();
    //make sure that there are enough races to go around.
    if (!raceMaxChecker()) {
        let newP = document.createElement("p");
        let newText = document.createTextNode(`Too many races requested for that many players.  Please reduce player or race option count.`);
        newP.appendChild(newText);
        outputDiv.appendChild(newP);
        return;
    }
    //------------------------------------------------------------------------------
    //Package generation portion of this function
    //------------------------------------------------------------------------------
    const activeRacesArray = [...ALL_RACES];
    let optionsOrRace = "Race Options"

    if (numberOfRaceChoices.value === "1") {
        optionsOrRace = "Race"
    }

    for (var i = 1; i <= numberOfPlayers.value; i++) {  //loop for number of players
        let newPlayer = document.createTextNode(`Player ${i}'s ${optionsOrRace}`)
        let newHeader = document.createElement('h2');
        let unusedRacesUl = document.createElement('ul');
        newHeader.appendChild(newPlayer);
        outputDiv.appendChild(newHeader);
        outputDiv.appendChild(unusedRacesUl);

        for (var p = 1; p <= numberOfRaceChoices.value; p++) { //loop for each player's race options
            let activeRaceIndex = Math.floor(Math.random() * activeRacesArray.length);
            var raceToAddToOptions = activeRacesArray[activeRaceIndex];
            let newLi = document.createElement("li");
            let raceText = document.createTextNode(raceToAddToOptions)
            newLi.appendChild(raceText);
            let ulList = document.getElementsByTagName('ul');
            let currentUl=ulList[ulList.length -1];
            currentUl.appendChild(newLi);

            activeRacesArray.splice(activeRaceIndex, 1);
        }



    }

    // //display unused races
    let unusedRaceHeader = document.createTextNode(`Races not in this game`)
    let newHeaderForUnusedRaces = document.createElement('h2');
    let unusedRacesUl = document.createElement('ul');
    newHeaderForUnusedRaces.appendChild(unusedRaceHeader);
    outputDiv.appendChild(newHeaderForUnusedRaces);
    outputDiv.appendChild(unusedRacesUl);


    while (activeRacesArray.length) {       
        var unusedRaceToAddToOutput = activeRacesArray[0];
        let newLi = document.createElement("li");
        let raceText = document.createTextNode(unusedRaceToAddToOutput)
        newLi.appendChild(raceText);
        let ulList = document.getElementsByTagName('ul');
        let currentUl=ulList[ulList.length -1];
        currentUl.appendChild(newLi);

        activeRacesArray.splice(0, 1)
    }
}
generateButton.addEventListener('click', packageGenerator);