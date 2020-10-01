// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Cal',
//     age: 20,
//     hobbies: ['Sports', 'Cooking', 'Boxing'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 0, READ_ONLY = 1, AUTHOR = 2}

const person = {
    name: 'Cal',
    age: 20,
    hobbies: ['Sports', 'Cooking', 'Boxing'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let faveActivities: string[]
faveActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('aDMIN AcCESs'.toUpperCase())
    
}
console.log(person.name)