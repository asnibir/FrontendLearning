// Literals and properties
let user = {
    name: "John",
    age: 25,
    "likes football": true
};
console.log( user.name );
console.log( user.age );
console.log( user["likes football"] );

delete user["likes football"];
console.log( user["likes football"] );

let user2 = {
    name: "Nibir",
    age: 24
};
let key = prompt("What do you want to know about the user?", "name");
alert( user2[key] );

// Computed properties
let fruit = prompt("Which fruit to buy?", "mango");

let bag = {
    [fruit]: 5 // the name of the fruit is taken from the variable fruit
};

let bag2 = {};
bag2[fruit] = 10;

alert( bag.mango ); // 5 if fruit is mango
alert( bag2.apple ); // 10 if fruit is apple

// Property value shorthand
function makeUser(name, age){
    return {
        name: name,
        age: age,
    };
}
let user3 = makeUser("Lisa", 23);
console.log(user3);
console.log( "name" in user3 );

// The "for..in" loop
let user4 = {
    name: "Nobita",
    age: "17",
    isAdmin: true
};

for (let key in user4){
    console.log( key );
    console.log( user4[key] );
}

let salaries = {
    Mamun: 100,
    Clinton: 200,
    Nakshi: 300
};

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj){
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
            console.log(obj[key]);
        }
    }
}

// Object references and copying
let firstUser = { name: "Alpha" };
let cpyFirstUser = firstUser;
cpyFirstUser.name = 'Beta'; // changed by the 'cpyFirstUser'
console.log(firstUser.name);  // 'Beta' changes are seen from the "firstUser" reference


// Cloning and merging, Object.assign(dest, ...sources)
let user5 = {
    name: "Akkas",
    age: 45
};

let cloneUser5 = {};

for (let key in user5){
    cloneUser5[key] = user5[key];
}
console.log(cloneUser5.name);
cloneUser5.name = "Mofiz";
console.log(cloneUser5.name);

let user6 = { name: "Rabbi" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };
Object.assign(user6, permission1, permission2); // If the copied property name already exists, it gets overwritten:
console.log(user6.canView);
console.log(user6.canEdit);

let user7 = Object.assign({}, user6);
console.log(user7.name);

// Nested cloning
let user8 = {
    name: "Tas",
    address: {
        road: "4",
        house: "17"
    }
};
console.log( user8.address.house );

// structuredClone
// The call structuredClone(object) clones the object with all nested properties.
// separate objects

let user9 = {
    name: "Prokrita",
    details: {
        year: "4th",
        semester: "2nd"
    }
};
let cloneUser9 = structuredClone(user9);
console.log( user9.details == cloneUser9.details );
user9.year = "3rd";
console.log(cloneUser9.details.year);