const usersArray = [
    {
    name: "John",
    balance: '2000$',
    friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
    },
    {
    name: "Isaac",
    balance: '20000$',
    friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
    },
    {
    name: "Jane",
    balance: '200$',
    friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
    },
    {
    name: "Russell",
    balance: '100$',
    friends: [],
    },
   ];

//1)
let richUsersArray = JSON.parse(JSON.stringify(usersArray));
richUsersArray= richUsersArray.reduce((a, b) => parseInt(a.balance) > parseInt(b.balance) ? a : b);
console.log(richUsersArray.name)
//2)
let sortedUsersArray = JSON.parse(JSON.stringify(usersArray));
function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}
sortedUsersArray.sort(SortArray)
console.log(sortedUsersArray)

//3)
let sumUser = JSON.parse(JSON.stringify(usersArray));
sumUser=sumUser.reduce((acc,curr) =>{
    return acc += parseInt (curr.balance)
}, 0);

console.log(sumUser)

//4)
let deleteRussel = JSON.parse(JSON.stringify(usersArray));
deleteRussel.splice(3,4);
console.log(deleteRussel);

//5)
let deleteIsaac = JSON.parse(JSON.stringify(usersArray));
deleteIsaac.splice(1,1);
console.log(deleteIsaac);

//6)
let addHarry= JSON.parse(JSON.stringify(usersArray));
addHarry.splice(1,0, {
    name: "Harry",
    balance: '3000$',
    } )
console.log(addHarry);

//7)
let addConor= JSON.parse(JSON.stringify(usersArray));
addConor.push( {
    name: "Conor",
    balance: '4000$',
    } )
console.log(addConor);

//8)
var eachObject = function(usersArray){
    for (key in usersArray) {
        if( typeof(usersArray[key]) === 'object' ){
            eachObject(usersArray[key]);
        }  else {
            if(key === 'name' || key === 'balance' ){

            console.log(usersArray[key]);}
        }
    }
};
eachObject(usersArray);

//9)
let sortRichUsers=(usersArray);
console.log(sortRichUsers)
sortRichUsers= usersArray.filter((item) => parseInt(item.balance)> 2000)
console.log(sortRichUsers)


//10)
let richUsersAllArray = JSON.parse(JSON.stringify(usersArray));
richUsersAllArray= richUsersAllArray.reduce((a, b) => parseInt(a.balance) > parseInt(b.balance) ? a : b);
console.log(richUsersAllArray.name)

//11)

//12)
const arr1 = [10, 'a', '5', 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];
console.log(arr1===arr2)

//13)