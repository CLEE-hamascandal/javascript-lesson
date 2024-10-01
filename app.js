// Q1
console.log('Q1');
// 基本的に値の変更がないものはconstで定義しておく。(動的型付け言語のため)
let nickname = '濱崎真樹';
nickname = 100;
console.log(typeof nickname);
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2
console.log('Q2');
let languages = ['Javascript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


// Q3
console.log('Q3');
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log('user.age => ', user.age);


// Q4
console.log('Q4');
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// Q5
console.log('Q5');
let sum = 0;
for (i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}

console.log(sum/playerList.length);


// Q6
console.log('Q6');
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();


// Q7
console.log('Q7');
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();


// Q8
console.log('Q8');
let calc = {
  add: function(x, y) {
    // 仮引数
    console.log(x + y);
  },
  subtract: function(x, y) {
    if (x >= y) {
      console.log(x - y);
    } else {
      console.log(y - x);
    }
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    if (y === 0) {
      console.log('0では割ることができません。');
    } else {
      console.log(x / y);
    }
  },
};

calc.add(3, 4); //実引数
calc.subtract(15, 5);
calc.multiply(49, 1);
calc.divide(35,7);


// Q9
console.log('Q9');
let x = 5;
let y = 3;

function remainder(x, y) {
  return x % y;
}

console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');


// Q10

//変数xはスコープがfooという関数内なので、スコープの外から参照することはできない。よってx is not definedというエラーメッセージが出力される。



// 応用問題
// Q1
console.log('Q1');
console.log(Math.floor(Math.random() * 10));


// Q2
console.log('Q2');
let Hello = function() {
  console.log('Hello World!');
}
setTimeout(Hello, 3000);


// Q3
console.log('Q3');
let num = 0;

if (num === 0) {
  console.log('num is 0');
} else if (num > 0) {
  console.log('num is greater than 0');
} else {
  console.log('num is less than 0');
}


// Q4
console.log('Q4');
let numbers = [];

for (i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);


// Q5
console.log('Q5');
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== "number") {
    console.log('not number');
  } else {
    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}
