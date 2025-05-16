/*
   Campos:
       name
       email
       password
       telephone
       address
       position
       hireDate
       salary
       dui
       isVerified
*/

import { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true
    },
    hireDate: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        require: true
    },
    dui: {
        type: String,
        require: true
    },
    isVerified: {
        type: Boolean,
        require: true
    }
}, 
{
    timestamps: true,
    strict: false
});

export default model("Employees", employeesSchema)