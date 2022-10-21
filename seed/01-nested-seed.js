import db from "../db/connection.js"
import DiseaseState from "../diseaseStates/model.js";
import Drug from "../drugs/model.js";


DiseaseState.find({}).then((diseases) => {
  diseases.forEach((disease) => {
    Drug.find({}).then((drugs) => {
      drugs.forEach((drug) => {
        if (disease.typeOfDisease === drug.FDAIndications && (disease.treatments.length == 0)) {
          console.log(`${disease.typeOfDisease} uses ${drug.genericDrugName}`)
          DiseaseState.findOneAndUpdate(
            { _id: disease._id }, 
            { $push: { treatments: drug.genericDrugName } },
         )   
        }
      })
    })
  })
})





