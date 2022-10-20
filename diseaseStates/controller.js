import DiseaseState from "./model.js";

export const getDiseaseStates = async (req, res) => {
  try {
    const diseaseStates = await DiseaseState.find();
    res.json(diseaseStates);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const getDiseaseStateByID = async (req, res) => {
  try {
    const { id } = req.params;
    const diseaseState = await DiseaseState.findById(id);
    if (diseaseState) {
      return res.json(diseaseState)
    }
    res.status(404).json({message: "Disease state not found!"})
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};
export const getDiseaseState = async (req, res) => {
  try {
    const diseaseState = await DiseaseState.find({ typeOfDisease: { $regex: req.params.typeOfDisease, $options: "i" } });
    if (diseaseState) {
      return res.json(diseaseState)
    }
    res.status(404).json({ message: "Disease state not found!" })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createDiseaseState = async (req, res) => {
  try {
    const diseaseState = new DiseaseState(req.body);
    await diseaseState.save();
    res.status(201).json(diseaseState);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const updateDiseaseState = async (req, res) => {
  try {
    const { id } = req.params;
    const diseaseState = await DiseaseState.findByIdAndUpdate(id, req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const deleteDiseaseState = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DiseaseState.findByIdAndDelete(id);
    
    if (deleted) {
      return res.status(200).send("Disease state deleted!");
    }
    
    throw new Error("Disease state not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
}