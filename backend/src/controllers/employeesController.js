//Array de métodos (C R U D)
const employeesController = {};
import employeesModel from "../models/Employees.js"

// SELECT
employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}


// DELETE
employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findOneAndDelete(req.params.id)
    res.json({ message: "employee deleted"})
}

// UPDATE 
employeesController.updateEmployees = async (req, res) => {
    //Solicito todos los valores 
    const {name, email, password, telephone, address, position, hireDate, salary, dui} = req.body;
    //Actualizo
    await employeesModel.findByIdAndUpdate(req.params.id, {name, email, password, telephone, address, position, hireDate, salary, dui}, {new: true});
    //Muestro un mensaje que todo se actualizó
    res.json({message: "employee updated"});
};

export default employeesController;