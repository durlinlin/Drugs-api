import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DiseaseState = new Schema({
  typeOfDisease: { type: String },
  chornicDisease: { type: Boolean },
  treatments: [String]
});
//{ type: Schema.Types.Mixed, ref: 'drugs' }
export default mongoose.model('diseaseStates', DiseaseState)