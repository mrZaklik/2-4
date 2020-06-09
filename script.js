console.log ('TASK-1');
for (let m1 = 1; m1 <= 5; m1++) console.log (m1);


console.log ('TASK-2');
let m2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
console.log(m2[2], m2[5], m2[7], m2[13]);


console.log ('TASK-3');
let s3 = 0;
for (let m3 = 23; m3 <= 57; m3++) {
    s3 += m3;
    }
    console.log (s3);


console.log ('TASK-4');
let m4 = ['10', '20', '30', '50', '235', '3000'];
for (let i4 = 0; i4 < m4.length; i4++) {
    if (m4[i4][0] == 1 || m4[i4][0] == 2 || m4[i4][0] == 5)
    console.log (m4[i4]);
    }


console.log ('TASK-5');
let m5 = ['ПН', 'ВТ', 'СТ', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i5 = 0; i5 <=4; i5++) {
    document.write (m5[i5], ', ');
}
for (let i55 = 5; i55 <=6; i55++) {
    document.write ('<b>', m5[i55], ', ', '</b>');
}
document.write ('</br>', '</br>');


console.log ('TASK-6');
let m6 = ['30', '40', '10'];
// for (let i6 = 0; i6 < m6.length; i6++) {
//     console.log (m6[i6]);
//     }
    m6.push ('5');
    console.log (m6);


// console.log ('TASK-7');
// не успел


console.log ('TASK-8');
let m8 = [12, 'false', 'Текст', 4, 2, -5, 0];
m8.reverse ();
console.log (m8);


console.log ('TASK-9');
let arr = ['5' , '9' , '21' , ' ' , ' ' , '9' , '78' , ' ' , ' ' , ' ' , '6'];
let counter = 0;

for (let elem of arr) {
	if (elem == ' ') {
		counter++;
	}
}
console.log(counter);


// console.log ('TASK-10');
// не успел


console.log ('TASK-11');
function rightTriangle (n) {
    for (var i = n; i >= 0; i--) {
        for(var k=0; k<i; k++){
          document.write('&nbsp;');
        }
        for (var j = n-1; j >= i; j--) {
            document.write('&and;');
        }
        document.write('<br>');
    }
}
let x = +prompt ('Задание 11. Введите число...');
rightTriangle(x);
