const Form = require('../models/form');


exports.createIncident = async (req, res, next) => {

    const form = new Form(req.body);

    try {
        const savedForm = await form.save();
        res.status(201).json({
            message: "Form added successfully",
            formId: savedForm._id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Creating a form failed!"
        });
    }
};





exports.getIncidents = async (req, res) => {
    try {
      const incidents = await Form.find();
      res.json(incidents);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };




exports.getIncident = async (req, res) => {
    try {
        const incidents = await Form.findById(req.params.id);
        res.json(incidents);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };



// Update an incident by ID
exports.updateIncident = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedIncident = await Form.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedIncident) {
        return res.status(404).json({ error: 'Incident not found' });
      }
      res.json(updatedIncident);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};



// Delete an incident by ID
exports.deleteIncident = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedIncident = await Form.findByIdAndDelete(id);
      if (!deletedIncident) {
        return res.status(404).json({ error: 'Incident not found' });
      }
      res.json(deletedIncident);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
