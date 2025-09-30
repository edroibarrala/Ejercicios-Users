const user = require('../models/user.model');

exports.finAll = (req, res) => {
    const users = user.finAll();
    res.json(users);
}

exports.findById = (req, res) => {
    const id = req.params.id;
    const userById = user.findById(id);
    if(!userById) return res.status(404).json({message: "User not found"});
    res.json(userById);
}           

exports.addUser = (req, res) => {            
    const { name, email, age } = req.body;
    if(!name || !email) return res.status(400).json({message: "Name and email are required"});
    const newUser = user.addUser({name, email, age});
    res.status(201).json(newUser);
}   

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, age, active } = req.body;
    const updatedUser = user.updateUser(id, {name, email, age, active});
    if(!updatedUser) return res.status(404).json({message: "User not found"});
    res.json(updatedUser);
}



