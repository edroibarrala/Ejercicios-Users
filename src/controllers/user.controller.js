const user = require('../models/user.model');

// Listar todos
exports.findAll = (req, res) => {
    const users = user.findAll();
    res.json(users);
};

// Buscar por ID
exports.findById = (req, res) => {
    const id = req.params.id;
    const userById = user.findById(id);
    if (!userById) return res.status(404).json({ message: "User not found" });
    res.json(userById);
};

// Crear usuario
exports.addUser = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

    const newUser = user.addUser({ name, email, age });
    res.status(201).json(newUser);
};

// Actualizar usuario
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, age, active } = req.body;
    const updatedUser = user.updateUser(id, { name, email, age, active });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
};

// Eliminar usuario
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const deletedUser = user.deleteUser(id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted", user: deletedUser });
};
