// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: false,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: true,
        age: 30,
    },
];

const names = users
    .filter((user) => user.isActive === true)
    .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
    .map((user) => user.name);

console.log(names);
