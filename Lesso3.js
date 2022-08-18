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
richUsersArray= richUsersArray.reduce((acc, curr) => parseInt(acc.balance) < parseInt(curr.balance) ?  curr.name: acc );
console.log(richUsersArray)


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
const arrFriends = usersArray.map(x=> x.friends)
const arrAllUsers = usersArray.concat(arrFriends.flat())
let sumAllUser = JSON.parse(JSON.stringify(arrAllUsers));
sumAllUser=sumAllUser.reduce((acc,curr) =>{
    return acc += parseInt (curr.balance)
}, 0);
console.log(sumAllUser)


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
const arrUser = usersArray.map(x=> x.friends)
const arrUsers = usersArray.concat(arrFriends.flat())
const removeDuplicates = (array, key) => {
    return array.reduce((arr, item) => {
      const removed = arr.filter(i => i[key] !== item[key]);
      return [...removed, item];
    }, []);
  };
console.log(removeDuplicates(arrUsers, 'name'));

//9)
let sortRichUsers=JSON.parse(JSON.stringify(arrUsers));
sortRichUsers= sortRichUsers.filter((item) => parseInt(item.balance)> 2000)
console.log(sortRichUsers)


//10)
let richFriend = JSON.parse(JSON.stringify(usersArray));
richFriend = richFriend.reduce((acc,curr) =>{
    let richestInside = acc;
    if(acc.friends?.length){
         acc.friends.forEach((friend)=>{
            if(parseInt(friend.balance)>parseInt(acc.balance)){
                richestInside=friend
            }
         });
    }
    const friendOrUser= parseInt(curr.balance)< parseInt(richestInside.balance)? richestInside:curr;
    return parseInt(acc.balance) < parseInt(friendOrUser.balance)? friendOrUser:acc.name;
});

console.log(richFriend )


//11)

//12)
const arr1 = [10, 'a', '5', 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];
console.log(arr1===arr2)

//13)

let str1= "искать такси"

let str2= "привет мир"

function palindrome1(str1) {
    return str1.split('').reverse().join('') == str1;
  }
console.log(palindrome1(str1))

function palindrome2(str1) {
    return str1.split('').reverse().join('') == str2;
  }
console.log(palindrome2(str2))





 
