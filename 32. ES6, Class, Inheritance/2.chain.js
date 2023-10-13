const users = [{id: 1, name: 'Abul', job: 'doctor'}];
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Babul', job: 'leader'},
        {id: 2, name: 'Abul', job: 'leader'},
    ]
}
const secondName = data.data[1].name;
// console.log(secondName);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address : {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice : 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.stret?.second;
console.log(userFloor)