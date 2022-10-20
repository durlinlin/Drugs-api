import db from "../db/connection.js"
import DiseaseState from "../diseaseStates/model.js";
import Drug from "../drugs/model.js";
import diseaseStates from "../diseaseStates/diseaseStates.json" assert { type: "json" };
import drugs from "../drugs/drugs.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();
  // insert database
  await DiseaseState.create(diseaseStates);
  await Drug.create(drugs);
  // close db connection
  db.close();
};

insertData();

// const updateTreatment = async() => {
//   Drug.find({}).then((response) => {
//     // console.log(response)
//     response.forEach(async (eachResponse) => {
//       await DiseaseState.updateMany(
//         // console.log(eachResponse)
//         { typeOfDisease: eachResponse.FDAIndications},
//         { $set: { treatments: eachResponse.brandDrugName } }
//       );
//     });
//   });
//   db.close();
// };
// updateTreatment();
