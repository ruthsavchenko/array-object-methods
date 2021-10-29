console.log(fields)

//1. Необходимо сформироать массив который будет содержать только те поля которые имеют permissions.view: true

// let result = [];
// for (let i = 0; i < fields.length; i++){
//     if (fields[i].permissions.view === true){
//         result.push(fields[i]);
//     }
// }

// console.log(result)


//2. Необходимо сформировать массив который будет содержать только те поля которые имеют все ключи пермиссий false

// let result = [];
// for (let i = 0; i < fields.length; i++){
//     if(Object.values(fields[i].permissions).every(item => item === false)) {
//         result.push(fields[i])
//     }
// }

// console.log(result)


// 3. Необходимо сформировать массив полей и заменить полям которые имеют objectRelation.objectId c айдишника объекта на полный объект данных об объекте. Взаимодействуем со вторым массивом

// const arrays = [...objects, ...fields]; 

// let result = [];
// for (let i = 0; i < arrays.length; i++){
//     if (arrays[i].objectRelation){
//         let indexRelation = arrays[i].objectRelation.objectId;
//         arrays[i].objectRelation.objectId = arrays[indexRelation];
//         result.push(arrays[i]);
//     }
// }

// console.log(result)


/* 4. Необходимо сформировать массив полей с проставленными пермиссиями в зависимости от того, что: 
- если у поля нет objectRelation, то пермиссии поля оставляем без изменений 
- если у поля есть objectRelation, то ставим все пермисии
true, если объект objectRelation имеет enabled: true. Если
же enabled: false, то ставим все пермиссии false */

// let result = []
// for (let i = 0; i < fields.length; i++) {
//     if (!fields[i].objectRelation) {
//         fields[i]
//     } else {
//         for (let j = 0; j < objects.length; j++) {
//             if (fields[i].objectRelation.objectId === objects[j].id && objects[j].enabled) {
//                 (fields[i].permissions.view = true) && (fields[i].permissions.edit = true) && (fields[i].permissions.remove = true);
//             } else if (fields[i].objectRelation.objectId === objects[j].id) {
//                 (fields[i].permissions.view = false) && (fields[i].permissions.edit = false) && (fields[i].permissions.remove = false);
//             }
//         }
//     }
// }

// console.log(fields)


//5. Необходимо сформировать массив объектов только тех у которых есть поля 

// let result = []
// for (let val of fields) {
//     if (val.objectRelation) {
//         for (let value of objects) {
//             if (val.objectRelation.objectId === value.id) {
//                 result.push(value)
//             }
//         }
//     }
// }

// console.log(result)


//6 Необходимо сформировать объект 

// let result = {}
// for (let val of fields) {
//     if (val.objectRelation) {
//         result[val.objectRelation.objectId] = []
//         for (let value of objects) {
//             if (val.objectRelation.objectId === value.id) {
//                 (result[val.objectRelation.objectId]).push({[val.id]: val.permissions}) 
//             }
//         }
//     }
// }

// console.log(result)



//7. Необходимо сформировать массив полей в котором будет изменен ключ edit на true, в том случае когда у нас view тоже true

// for (let i = 0; i < fields.length; i++) {
//     if(fields[i].permissions.view === true) {
//         fields[i].permissions.edit = true
//     }
// }


// 8. Необходимо сформировать массив полей который будетсодержать только те поля у которых есть objectRelation и проставить всем этим полям дополнительный ключ relations: true

// let result = [];
// for(let i = 0; i < fields.length; i++) {
//     if(fields[i].objectRelation) {
//         fields[i].relations = true
//         result.push(fields[i])
//     }
// }

// console.log(result)


//9. Необходимо получить массив полей отсортированных по fieldName 

// const sortName = fields.sort((a, b) => {
//     a = a.fieldName
//     b = b.fieldName
//     return a > b ? 1 : a < b ? -1 : 0;
// });

// console.log(sortName)


// 10. Необходимо получить ответ на понимание того есть ли у нас хоть одно поле у которого все пермиссии true

// for (let i = 0; i < fields.length; i++) {
//     if(fields[i].permissions.view === true && fields[i].permissions.edit === true && fields[i].permissions.remove === true) {
//         console.log(true)
//     }
// }

// //#2
// let arePermissionsTrue = fields.some(item => Object.values(item.permissions).every(item => item === true))
// console.log(arePermissionsTrue)
