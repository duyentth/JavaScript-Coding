/** using concat and spread operator to concatenate some arrays will not munitate the original array
should not use push function, it will change the original array */
const mergeArray = (arr1, arr2, arr3) => {
    //return [...arr1, ...arr2, ...arr3];
    return arr1.concat(arr2, arr3);
};
const arr1 = [1],
    arr2 = [2, 3],
    arr3 = [4];
console.log(mergeArray(arr1, arr2, arr3));
console.log(arr1, arr2, arr3);

/**
 * use "some", "find", "findIndex" to check something is exit in the array
 * "some" function return true or false
 * "find" return an element of array
 * "findIndex" return an index of array where the element is found
 */

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

const isNameExisted = (users, name) => {
    //return users.some((user) => user.name === name);

    // const index = users.findIndex((user) => user.name === name);
    // return index >= 0;

    const user = users.find((user) => user.name === name);
    return Boolean(user);
};

console.log(isNameExisted(users, "Duyen"));

/**
 * use Set, forEach, reduce functions to remove duplicate in an array
 * these approaches do not work with array of objects
 */

const removeDuplicate = (arr) => {
    //using Set
    //return [...new Set(arr)];

    //using forEach
    // const result = [];
    // arr.forEach((element) => {
    //     if (!result.includes(element)) {
    //         result.push(element);
    //     }
    // });
    // return result;

    //using reduce
    return arr.reduce((acc, currentValue) => {
        return acc.includes(currentValue) ? acc : [...acc, currentValue];
    }, []);
};

console.log(removeDuplicate([1, 2, 4, 3, 1]));
console.log(removeDuplicate([{ a: 1 }, { a: 1 }]));
