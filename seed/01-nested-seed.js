import db from "../db/connection.js"
import DiseaseState from "../diseaseStates/model.js";
import Drug from "../drugs/model.js";


// const updateTreatment = async () => {
//   let drugs = await Drug.find({})
//   drugs.forEach(async (drugsObj) => {
//     await DiseaseState.updateMany(
//       { typeOfDisease: drugsObj.FDAIndications },
//       { $push: { treatments: drugsObj.genericDrugName } }
//     )
//   .then(db.close());
//   });
// };
updateTreatment();


