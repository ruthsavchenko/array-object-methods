// console.log(objects)

//1 Необходимо получить отсортированный массив объектов по дате.

// const sortDate = objects.sort((a, b) => {
//     a = a.date.split('-').reverse().join('');
//     b = b.date.split('-').reverse().join('');
//     return a > b ? 1 : a < b ? -1 : 0;
// });

// console.log(sortDate)


//2 Необходимо получить массив объектов которые имеют enabled: true

// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].enabled === true){
//         result.push(objects[i]);
//     }
// }

// console.log(result)


//3 Необходимо получить объект объектов собранных по месяцам и годам.

////reduce
// let result = objects.reduce((accOfYears, year) => {
//     accOfYears[year.date.split('-')[2]] = objects.reduce((accOfMonths, month) => {
//         if (year.date.split('-')[2] === month.date.split('-')[2]) {
//             accOfMonths[month.date.split('-')[1]] = objects.reduce((accOfObjects, object) => {
//                 if (month.date.split('-')[2] === object.date.split('-')[2]) {
//                     accOfObjects.push(object);
//                 }
//                 return accOfObjects
//             }, [])
//         }
//         return accOfMonths
//     }, {})
//     return accOfYears
// }, {})

// console.log(result)

////for 
// let result = {}
// for (let i = 0; i < objects.length; i++) {
//     let year = objects[i].date.split('-')[2]
//     result[year] = {};
//     for (let j = 0; j < objects.length; j++) {
//         if (objects[j].date.split('-')[2] === year) {
//             let month = objects[j].date.split('-')[1]
//             result[year][month] = [];
//             for (let k = 0; k < objects.length; k++) {
//                 if (objects[k].date.split('-')[2] === year && objects[k].date.split('-')[1] === month) {
//                     result[year][month].push(objects[k])
//                 }
//             }
//         }
//     }
// }

// console.log(result)


//4 Необходимо получить массив объектов которым необходимо заменить relationId на полный объект данных.

// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         objects[i].relation.relationId = objects[objects[i].relation.relationId];
//         result.push(objects[i]);
//     }
// }

// console.log(result)


//5 Необходимо получить массив объектов у которых есть relation.

// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         result.push(objects[i]);
//     }
// }

// console.log(result)


//6 Необходимо получить получить объект в котором сформировать данные по relation объектам.

// let result = {}
// for (let i = 0; i < objects.length; i++) {
//     if (objects[i].relation) {
//         result[objects[i].relation.relationId] = [];
//         for(let j = 0; j < objects.length; j++) {
//             if (objects[j].relation && objects[j].relation.relationId == objects[i].relation.relationId) {
//                 (result[objects[i].relation.relationId]).push(objects[j])
//             }
//         }
//     }
// }

// console.log(result)


//7 

// let result = []
// for(let i = 0; i < objects.length; i++) {
//     if (objects[i].date.split('-')[2] === '2020') {
//         objects[i].enabled = true;
//         result.push(objects[i])
//     }
// }

// console.log(result)

// let result = objects.reduce((acc, item) => {
//     item.date.split('-')[2] === '2020' ? acc.push(item) : acc
//     return acc
// }, [])

// console.log(result)

//8 

// let result = [];

// for (let i = 0; i < objects.length; i++) {
//     if(!objects[i].relation) {
//         objects[i].enabled = false;
//         result.push(objects[i])
//     } 
//     else if (objects[i].relation) {
//         objects.find(x => x.id === objects[i].relation.relationId);
//         objects[i].enabled = objects[objects[i].enabled]
//         result.push(objects[i])
//     }
// }

// console.log(result)

//Доделаю


//9 Необходимо получить понимание того, что есть ли у всех объектов relation или нет

////#1
// let result;
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         result = true;
//     }
//     else {
//         result = false;
//         break;
//     }
// }

// console.log(result);

////#2
// let isRelationExist = objects.every(item => item.relation)
// console.log(isRelationExist)


//10 Необходимо получить понимание есть ли объекты с enabled: true

// //#1
// for (let i = 0; i < objects.length; i++) {
//     if(objects[i].enabled == true) {
//         console.log(true)
//     }
// }

// //#2
// let isRelationExist = objects.some(item => item.enabled === true)
// console.log(isRelationExist)