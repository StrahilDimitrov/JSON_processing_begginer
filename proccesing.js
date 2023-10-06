const jsonFile = require("D:/VS PROJECT/JSON_processing_begginer/json/carInfo.json");

for (const element of Object.keys(jsonFile)) {
    let currentArray = jsonFile[element];

    for(let index = 0; index < currentArray.length; index++){
        let currentObj = currentArray[index];

        console.log(`${currentObj.brand} -> ${currentObj.model} -> ${currentObj.color} -> ${currentObj.year}`);
    }
}