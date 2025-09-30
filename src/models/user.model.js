const { randomUUID } = require('crypto');
const e = require('express');

let users = [ 
    { id: randomUUID(), name: "Edwar", email: "Edwar@gmail.com" ,active: true, age: 22},
    { id: randomUUID(), name: "Rodrigo", email: "Rodrigo@gmail.com" ,active: true, age: 19},
 ];
 

 function finAll() {
    return users;
}
function findById(id) {
    return users.find((u) => u.id === id) || null;
}

function addUser(item) {
    const user = (
        id = randomUUID(),
        name = item.name,   //Obligatorio
        email = item.email, //Obligatorio
        active = true,
        age = item.age || 0        //Opcional
    );
    users.push(user);
    return user;
}

function updateUser(id, data) {
    const index = users.findIndex((u) => u.id === id);

    if(index === -1) return null;
    
    users[index] = {
        ...users[index],
        name: typeof data.name === "undefined" ? users[index].name : data.name, 
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active),
    }

    return users[index];
}

module.exports = {finAll, findById, addUser, updateUser};
    