


//TODO: strip out the extraneous boilerplate content - especially in the html.



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

var raceMaxChecker = () => {
    if (numberOfPlayers.value * numberOfRaceChoices.value <= ALL_RACES.length) {
        return true;
    }
}

const packageGenerator = () => {
    //clear out the output area 
    outputDiv.innerHTML = ""
    //make sure that there are enough races to go around.
    if (!raceMaxChecker()) {
        let newLi = document.createElement("li");
        let newText = document.createTextNode(`Too many races requested for that many players.`);
        newLi.appendChild(newText);
        outputLi.appendChild(newLi);
        return;
    }

    //------------------------------------------------------------------------------
    //Package generation portion of this function
    //------------------------------------------------------------------------------
    const activeRacesArray = [...ALL_RACES];
    let optionsOrRace = "options"

    if (numberOfRaceChoices.value === "1") {
        optionsOrRace = "race"
    }


    for (var i = 1; i <= numberOfPlayers.value; i++) {  //loop for number of players
        let newPlayer = document.createTextNode(`Player ${i}'s Options`)
        let newHeader = document.createElement('h2');
        let playerRaceOptions = document.createElement('ul');
        newHeader.appendChild(newPlayer);
        outputDiv.appendChild(newHeader);
        outputDiv.appendChild(playerRaceOptions);

        for (var p = 1; p <= numberOfRaceChoices.value; p++) { //loop for each player's race options
            let selectedRaceIndex = Math.floor(Math.random() * activeRacesArray.length);
            var raceToAddToOptions = activeRacesArray[selectedRaceIndex];
            let newLi = document.createElement("li");
            let raceText = document.createTextNode(raceToAddToOptions)
            newLi.appendChild(raceText);
            let ulList = document.getElementsByTagName('ul');
            let currentUl=ulList[ulList.length -1];
            currentUl.appendChild(newLi);

            activeRacesArray.splice(selectedRaceIndex, 1);
        }



    }
}
generateButton.addEventListener('click', packageGenerator);