//Array de métodos (C R U D)
const clientsController = {};
import clientsModel from "../models/Clients.js"

// SELECT
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}


// DELETE
clientsController.deleteClients = async (req, res) => {
    await clientsModel.findOneAndDelete(req.params.id)
    res.json({ message: "client deleted"})
}

// UPDATE 
clientsController.updateClients = async (req, res) => {
    //Solicito todos los valores 
    const {name, email, password, telephone, address, dui, isVerified} = req.body;
    //Actualizo
    await clientsModel.findByIdAndUpdate(req.params.id, {name, email, password, telephone, address, dui, isVerified}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "client updated"});
};

export default clientsController;