let firstUser =  prompt('Пожалуйста введите: возраст, имя, фамилию', '');
let secondUser = prompt('Пожалуйста введите: возраст, имя, фамилию', '');
let thirdUser = prompt('Пожалуйста введите: возраст, имя, фамилию', '');

console.log('**************');
console.log('Список студентов зарегестрировавшихся на вебинар:');
console.log('1. ', firstUser);
console.log('2. ', secondUser);
console.log('3. ', thirdUser);
console.log('-------------- Средний возраст студента:', (parseInt(firstUser) + parseInt(secondUser) + parseInt(thirdUser)) / 3, ' --------------');
console.log('**************');