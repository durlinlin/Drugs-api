import mongoose from "mongoose";
const mongoose = mongoose.Schema;

const DiseaseState = new mongoose.Schema({
  typeOfDisease: { type: String },
  chornicDisease: { type: Boolean },
  treatments: [{ type: String }]
});

export default mongoose.model('diseaseStates', DiseaseState)