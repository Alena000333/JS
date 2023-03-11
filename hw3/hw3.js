// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for(i=0; i<11; i++){
if(i===0){
console.log(`${i} - это ноль`);
}
else if(i%2==0){
console.log(`${i} - это четное число`);
}
else{
console.log(`${i} - это нечетное число`);
}
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7,]
array.splice(3,2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов

const arr=[];
let sum=0;
function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}
for(let i = 0; i<5; i++){
arr.push(getRandomNumber(0, 9));
}
console.log(arr);

// 1. Рассчитать сумму элементов этого массива
for(let i = 0; i<5; i++){
sum=sum+arr[i];
}
console.log(sum);

// 2. Найти минимальное число

let minValue = Math.min.apply(null, arr);
console.log(minValue);

// 3. Найти есть ли в этом массиве число 3
alert( arr.includes(3) );