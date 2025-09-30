const { randomUUID } = require('crypto');
const e = require('express');
// Datos de ejemplo

let users = [ 
    { id: randomUUID(), name: "Edwar", email: "Edwar@gmail.com", active: true, age: 22 },
    { id: randomUUID(), name: "Rodrigo", email: "Rodrigo@gmail.com", active: true, age: 19 },
];

// Obtener todos
function findAll() {
    return users;
}

// Buscar por ID
function findById(id) {
    return users.find((u) => u.id === id) || null;
}

// Crear usuario
function addUser(item) {
    const user = {
        id: randomUUID(),
        name: item.name,     // Obligatorio
        email: item.email,   // Obligatorio
        active: true,
        age: item.age || 0,  // Opcional
    };
    users.push(user);
    return user;
}

// Actualizar usuario
function updateUser(id, data) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    users[index] = {
        ...users[index],
        name: data.name ?? users[index].name,
        email: data.email ?? users[index].email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active),
    };

    return users[index];
}

// Eliminar usuario
function deleteUser(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;

    const deleted = users[index];
    users.splice(index, 1);
    return deleted;
}

module.exports = { findAll, findById, addUser, updateUser, deleteUser };
