import Drug from "../drugs/model.js";

export const getDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const getDrugById = async (req, res) => {
  try {
    const { id } = req.params;
    const drug = await Drug.findById(id);
    if (drug) {
      return res.json(drug)
    }
    res.status(404).json({message: "Medication not found!"})
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};
export const getGenericDrug = async (req, res) => {
  try {
    const drug = await Drug.find({ genericDrugName: { $regex: req.params.genericDrugName, $options: "i" } });
    if (drug) {
      return res.json(drug)
    }
    res.status(404).json({ message: "Generic drug not found!" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const getBrandDrug = async (req, res) => {
  try {
    const drug = await Drug.find({ brandDrugName: { $regex: req.params.brandDrugName, $options: "i" } } );
    if (drug) {
      return res.json(drug)
    }
    res.status(404).json({ message: "Brand drug not found!" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createDrug= async (req, res) => {
  try {
    const drug = new Drug(req.body);
    await drug.save();
    res.status(201).json(drug);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const updateDrug = async (req, res) => {
  try {
    const { id } = req.params;
    const drug = await Drug.findByIdAndUpdate(id, req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const deleteDrug = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Drug.findByIdAndDelete(id);
    
    if (deleted) {
      return res.status(200).send("Medication deleted!");
    }
    
    throw new Error("Medication not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
}