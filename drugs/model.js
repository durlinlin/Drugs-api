import mongoose from "mongoose";
const mongoose = mongoose.Schema;

const Drug = new mongoose.Schema({
  genericDrugName: { type: String },
  drugBrandName: { type: String },
  drugClass: { type: String },
  "FDA-Indications": { type: String },
  "Rx-only": { type: Boolean }
});

export default mongoose.model('drugs', Drug)