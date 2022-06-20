// 1st Task
function getNumbers() {
    for (let i = 0; i <= 10; i++) {
        console.log(i)
    }
}

getNumbers()


// 2nd Task
let num = 1 
while(num <= 10){
    console.log(num)
    num++
}

const arr = [1,2,3,5,6]
function evenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i])
        }
    }
}

evenNumbers(arr)


// 3rd Task
const arra = [1,2,3,5,6]
arr.reverse()
console.log(arr)


const arre = [1,2,3,5,6]
    function getReverseNumbers(arr){
        for(let i = arr.length - 1; i >= 0; i--){
            console.log(arr[i])
        }
    }

    getReverseNumbers(arr)