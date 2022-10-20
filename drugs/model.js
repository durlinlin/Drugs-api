import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Drug = new Schema({
  genericDrugName: { type: String },
  brandDrugName: [{ type: String }],
  drugClass: { type: String },
  FDAIndications: { type: String },
  "Rx-only": { type: Boolean }
});

export default mongoose.model('drugs', Drug)