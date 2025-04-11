//! You have an array of user objects, each one has name, surname and id.
//! Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let userMapped = users.map(item => {
    let fullName = `${item.name} ${item.surname}`
    let id = item.id
    return {fullName, id}
})

console.log(userMapped);
