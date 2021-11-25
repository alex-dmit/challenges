// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
/** @param {string} observed */
function getPINs(observed) {
    let variants = {
        '0': ['0', '8'],                 // 0
        '1': ['1', '2', '4'],            // 1
        '2': ['1', '2', '3', '5'],       // 2
        '3': ['2', '3', '6'],            // 3
        '4': ['1', '4', '5', '7'],       // 4
        '5': ['2', '4', '5', '6', '8'],  // 5
        '6': ['3', '5', '6', '9'],       // 6
        '7': ['4', '7', '8'],            // 7
        '8': ['5', '7', '8', '9', '0'],  // 8
        '9': ['6', '8', '9']             // 9
    }
    function cartesian(arrays) {
        const result = [];
        const recursion = (tuplePart) => {
            if (tuplePart.length === arrays.length) {
                result.push(tuplePart);
            } else {
                const array = arrays[tuplePart.length];
                for (const element of array) {
                    const tuplePartWithNewElement = tuplePart.concat([element]);
                    recursion(tuplePartWithNewElement);
                }
            }
        };
        recursion([]);
        return result;
    }
    const sets = observed.split('').map(digit => {
        return variants[digit]
    })
    return cartesian(sets).map(comb => {
        return comb.join('')
    })
}

console.log(getPINs('11'));

// ##############################



// let deadline = new Date('Dec 1 2021 00:00:00'); 
// function counts() {
//     let now = new Date() 
//     let gap = deadline - now; 
//     let days = Math.floor(gap / 1000 / 60 / 60 / 24); 
//     let hours = Math.floor(gap / 1000 / 60 / 60) % 24; 
//     let min = Math.floor(gap / 1000 / 60) % 60; 
//     let sec = Math.floor(gap / 1000) % 60; 
//     document.getElementById("days").innerText = days; 
//     document.getElementById("hours").innerText = hours; 
//     document.getElementById("min").innerText = min; 
//     document.getElementById("sec").innerText = sec; 
// } 
// const createClock = setInterval(counts, 1000); 

// console.log(createClock);


// @ts-check
// https://www.codewars.com/kata/598820d3e84986bef1000005/train/javascript

// const pTable = {
//     '100m': { A: 25.4347, B: 18, C: 1.81 },
//     'Long jump': { A: 0.14354, B: 220, C: 1.4 },
//     'Shot put': { A: 51.39, B: 1.5, C: 1.05 },
//     'High jump': { A: 0.8465, B: 75, C: 1.42 },
//     '400m': { A: 1.53775, B: 82, C: 1.81 },
//     '110m hurdles': { A: 5.74352, B: 28.5, C: 1.92 },
//     'Discus throw': { A: 12.91, B: 4, C: 1.1 },
//     'Pole vault': { A: 0.2797, B: 100, C: 1.35 },
//     'Javelin throw': { A: 10.14, B: 7, C: 1.08 },
//     '1500m': { A: 0.03768, B: 480, C: 1.85 }
// }

// function decathlon(athletes) {
//     // INT(A(B — P)^C)
//     const timePoints = (a, b, c, p) => Math.round(a * Math.pow(b - p, c))
//     // INT(A(P — B)^C)
//     const scorePoints = (a, b, c, p) => Math.round(a * Math.pow(p - b, c))
//     Object.keys(athletes).forEach(athleteName => {
//         console.log(athleteName + ': ');
//         console.log(athletes[athleteName]);
//     })
// }

// var athletes = {
//     "Bob": { "100m": 12.3, "Long jump": 530, "Shot put": 9.4, "High jump": 160, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 23, "Pole vault": 270, "Javelin throw": 19, "1500m": 300.5 },
//     "Fred": { "100m": 11.9, "Long jump": 500, "Shot put": 9.4, "High jump": 150, "400m": 59.6, "110m hurdles": 19.2, "Discus throw": 19, "Pole vault": 320, "Javelin throw": 19, "1500m": 295.5 }
// }
// var res = decathlon(athletes);

// ##############################



// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// /** @param {number[]} dice */
// function score(dice) {
//     let diceCount = Array(6).fill(0) // [0,0,0,0,0,0]
//     let triplePoints = [1000, 200, 300, 400, 500, 600]
//     let singlePoints = [100, 0, 0, 0, 50, 0]
//     dice.forEach(score => {
//         diceCount[score - 1]++
//     })
//     return diceCount.map((count, index) => {
//         return count > 2 ?
//             triplePoints[index] + singlePoints[index] * (count - 3) :
//             singlePoints[index] * count
//     }).reduce((acc, el) => acc + el)
// }

// console.log(score([2, 3, 4, 6, 2]));  // 0
// console.log(score([4, 4, 4, 3, 3]));  // 400
// console.log(score([5, 1, 3, 4, 1]));  // 250
// console.log(score([1, 1, 1, 3, 1]));  // 1100
// console.log(score([2, 4, 4, 5, 4]));  // 450

// ##############################



// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// /**  @param {number[]} arr */
// var moveZeros = function (arr) {
//     let arrWithoutZero = arr.filter(el => el !== 0)
//     return arrWithoutZero.concat(Array(arr.length - arrWithoutZero.length).fill(0))
// }

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

// ##############################



// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// /** @param {string} str */
// function pigIt(str) {
//     return str.split(/\s+/).map(word => {
//         return /^[!.,-?]$/.test(word) ? word : word.substring(1) + word.charAt(0) + 'ay'
//     }).join(' ')
// }

// console.log(pigIt('Pig latin is cool'))
// console.log(pigIt('This is my string !'))

// ##############################


// https://www.codewars.com/kata/5877786688976801ad000100/train/javascript

// function wordsToObject(input) {
//     let resultArr = input.match(/[a-z]+\s+\d+/ig).map(el => {
//         const arr = el.split(/\s+/)
//         return { name: arr[0], id: arr[1] }
//     })
//     let result = `[${resultArr.reduce((acc, el) => {
//         return acc + `{name : '${el.name}', id : '${el.id}'}, `
//     }, '')}]`
//     return result.replace(/,\s+\]$/, ']')
// }

// red 2 white 3 violet 4
// console.log(wordsToObject("1 red 2 white 3 violet 4"))
// [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]

// ##############################


// https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript

// class Quark {
//     constructor(color, flavor) {
//         this.color = color
//         this.flavor = flavor
//         this.baryon_number = 1 / 3
//     }
//     interact(quark) {
//         let color = this.color
//         this.color = quark.color
//         quark.color = color
//     }
// }

// let q1 = new Quark("red", "up")
// console.log(q1.color);
// let q2 = new Quark("blue", "strange")
// console.log(q2.flavor);
// q1.interact(q2)
// console.log(q1);
// console.log(q2);

// ##############################


// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

// let a1 = ["arp", "live", "strong"];
// let a2 = ["lively", "alive", "harp", "armstrong", "sharp"];

// // чистая функция
// function inArray(array1,array2) {
//     // функциональный стиль (через свертку)
//     return array1.sort().filter(word1 => {
//         return array2.reduce((acc, word2) => acc || word2.includes(word1), false)
//     })
//     // императивный стиль
//     // return array1.sort().filter(word1 => {
//     //     // flag
//     //     let included = false
//     //     array2.forEach(word2 => {
//     //         if (word2.includes(word1)) included = word2.includes(word1)
//     //     })
//     //     return included
//     // })
// }

// console.log(inArray(a1, a2))

// ##############################


// @ts-check
// class Ship {
//     constructor(draft, crew) {
//         this.draft = draft;
//         this.crew = crew;
//     }
//     isWorthIt() {
//         return (this.draft - this.crew * 1.5) > 20
//     }
// }


// function Ship(draft, crew) {
//     this.draft = draft;
//     this.crew = crew;
//     // this.isWorthIt = function () {
//     //     return (this.draft - this.crew * 1.5) > 20
//     // }
// }

// Ship.prototype.isWorthIt = function () {
//     console.log(this)
//     return (this.draft - this.crew * 1.5) > 20
// }

// let titanic = new Ship(35, 10);
// let olimpic = new Ship(46, 10);
// console.log(olimpic.isWorthIt())



// function solution(number) {
//     const ones = num => ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][num]
//     const decs = num => ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][num]
//     const hunds = num => ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'][num]
//     const mils = num => ['', 'M', 'MM', 'MMM'][num]
//     let num = number.toString()
//     while (num.length < 4) num = "0" + num;
//     let digits = num.split('').map(digit => +digit).slice(-4)
//     return mils(digits[0]) + hunds(digits[1]) + decs(digits[2]) + ones(digits[3])
// }

// console.log(solution(11))
// console.log(solution(22))
// console.log(solution(1990))
// console.log(solution(2007))

// function filter (callback) {
//     let arr = this
//     let filteredArr = []
//     arr.forEach(el => {
//         if (callback(el)) filteredArr.push(el)
//     })
//     return filteredArr
// }

// Array.prototype.filter = filter;
// let callback = function (num) {
//     return num > 3
// }

// console.log([1,2,3,4].filter(callback));

// let callback2 = callback
// console.log(typeof callback);
// console.log(typeof callback2);
// console.log(callback === filter);

// console.log(callback instanceof Object);





// let rows = 1

// function numbersOfTriangle(rowsNumber, numbersInRow = 1, count = 0) {
//     if (rowsNumber === 0) return 0
//     if (numbersInRow === rowsNumber) return count + numbersInRow
//     const result = numbersOfTriangle(rowsNumber, numbersInRow + 1, count + numbersInRow)
//     return result
// }

// let nums = numbersOfTriangle(rows - 1)
// // Формулы прогрессии
// let firstNumInNextRow = 1 + 2 * nums
// let result = (2 * firstNumInNextRow + 2 * (rows - 1)) * rows / 2


// console.log(result);



// let count = 0
// let rowsNum = 5
// for (let numbersInRow = 1; numbersInRow <= rowsNum; numbersInRow++) {
//     count = count + numbersInRow
// }



// let text = "Indivisibility";
// console.log(duplicateCount.toString())

// function duplicateCount(text) {
//     let text1 = text.toLowerCase().split(""); // кладем в переменную , массив их строки в нижнем регистре 
//     let uniqueSymbolsNums = {}//создаем новый объект

//     text1.forEach(symbol => {
//         if (uniqueSymbolsNums[symbol] !== undefined) uniqueSymbolsNums[symbol]++ // если елемент уже назначен (складывает) , то идем на следующий шаг 
//         else uniqueSymbolsNums[symbol] = 1  //если нет то он равен 1 
//     })

//     const answer = Object.keys(uniqueSymbolsNums)
//         .filter(key => uniqueSymbolsNums[key] >= 2)
//         .length
//     return answer
// }



// function findEvenIndex(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         let leftSum = arr.slice(0, index).reduce((acc, el) => acc + el, 0)
//         let rightSum = arr.slice(index + 1).reduce((acc, el) => acc + el, 0)
//         if (leftSum == rightSum) return index
//     }
//     return -1
// }
// (('a')())()
// let result = findEvenIndex([1, 2, 3, 4, 3, 2, 1])

// console.log(result);