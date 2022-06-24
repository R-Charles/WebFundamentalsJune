// function greetUser(firstName, lastName){
//     console.log("Hello " + firstName + "" + lastName);
// }

// greetUser("Thiery", "Nis")
// greetUser("Jennifer", "Lopez")
// greetUser("Inspector", "Gadget")

// THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS
// function sum(num1,num2){
//     console.log("before the return")
//     return num1 + num2
// }

// let someNum = sum(3,9) + sum(1,2)

// console.log(someNum)

function searchForArtist(artistName){
    for(let i=0; i<artists.length; i++){
        if(artists[i] == artistName){
            return "Found" + artistName + "at index number" + i
        }
            
    }
    return "No artist foind with that name."
    }
