// var let const 차이

// var 예시
// var name = 'mike';
// console.log(name);
// var name = 'jane'; //가능
// console.log(name);

// let 예시
// let name = 'mike';
// console.log(name);
// let name = 'jane' //에러
// console.log(name);

// let name;
// name = 'mike';
// var age;
// age = 30;
// const gender; (할당을 안했기 때문)
// gender = 'male'; //에러

// var : 함수스코프 
// let, const : 블록스코프

// 생성자 함수
// 객체 리터럴
// let User = {
//     name : 'mike',
//     age : 30,
// }

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(this.name) //this 는 name을 불러옴
//     }
// }

// let User1 = new User('mike', 39); //new 연산자를 사용하여 호출
// let User2 = new User('jane', 19); // 3개 만들기
// let User3 = new User('tom', 32);
// let User5 = new User('kim', 20);

// User5.sayName();

// 생성자 함수 (실습)
// function Item(title, price){
//     // this = {} //생략가능
//     this.title = title;
//     this.price = price;
//     this.Showprice = function(){
//         console.log(`${title}의 가격은 ${price}원 입니다.`);
//     }
//     // return this; //생략가능
// }

// const item1 = new Item('사과', 100);
// const item2 = new Item('배', 200);
// const item3 = new Item('참외', 300);
// const item4 = new Item('수박', 400);

// // console.log(item1, item2, item3)
// item1.Showprice()

//객체(object) - methods / computed property
// let a = 'age';
// const user = {
//     name : 'mike',
//     [a] : 30  //age 대신 [a] 가능
// }
// console.log(user)

// const user = {
//     [1 + 4] : 5,
//     ["안녕" + "하세요"] : "hello"
// }
// console.log(user);

// const user = {
//     name : 'mike',
//     age : 20
// }
// const cloneUser = user; //참조값만 복사됨
//첫번째는 초기값, 두번째 변수부터 복제
// const newUser = Object.assign({}, user);
// newUser.name = 'Tom'; // 같은 객체가 아님
// console.log(user.name);

// const newUser = Object.assign({gender : 'male'}, user); //gender 생성되어 복제
// Object.assign({name : 'Tom'}, user); // key값 같으면 복제 안됨
// console.log(user)

// 여러개 복제
// const user = {
//     name : 'mike',
// }
// const info1 = {
//     age : 30,
// }
// const info2 = {
//     gender : 'male',
// }
// Object.assign(user, info1, info2) //3개 합쳐짐
// console.log(user)

// Object.keys() : 키값 배열 반환
// const user = {
//     name : 'mike',
//     age : 20,
//     gender : 'male',
// }
// console.log(Object.keys(user)); //키값 배열 반환
// console.log(Object.values(user));//value 배열 반환


//Object.entries() : key, value 배열 반환

// const user = {
//     name : 'mike',
//     age : 20,
//     gender : 'male',
// }
// console.log(Object.entries(user)); //key, value값 배열 반환
// [ [ 'name', 'mike' ], [ 'age', 20 ], [ 'gender', 'male' ] ]

// 반대로 Object.fromEntries() : key value 값 배열을 객체로 바꿔줌
// const user =
// [
//     ['name','mike'],
//     ['age', 30],
//     ['gender', 'male'],
// ];
// Object.fromEntries(user);
// console.log(user);


//실습
// let n = 'name';
// let a = 'age';

// const user = {
//     [n] : 'mike',
//     [a] : 30,
//     [1+4] : 5,
// };
// console.log(user);

// function makeObj(key, val){
//     return{
//         [key] : val
//     };
// }
// const obj = makeObj("나이", 33);
// console.log(obj);

// const user = {
//     name: "mike",
//     age : 30,
// };
// const user2 = user; 
// user2.name = "tom"; //이름이 둘다 바뀌여버림(하나의 객체로 봄)

// console.log(user); //이름이 둘다 바뀌여버림
// console.log(user2);//이름이 둘다 바뀌여버림

// const user = {
//     name: "mike",
//     age : 30,
// };
// const user2 = Object.assign({},user); // user2로 복제성공
// user2.name = "tom"
// console.log(user);// user2로 복제성공(결과값이 다름)
// console.log(user2);// user2로 복제성공(수정된 결과값만 출력)

// const user = {
//     name: "mike",
//     age : 30,
// };
// const result = Object.keys(user); //key 값만 배열로 출력
// const result1 = Object.values(user); //value
// const result2 = Object.entries(user); //all
// console.log(result); //key
// console.log(result1); //value
// console.log(result2); //all

// let arr = [
//     ['mon', '월'],
//     ['tue', '화'],
// ]
// const result = Object.fromEntries(arr); //객체 만들기
// console.log(result);

// 심볼(Symbol)
// property key : 문자형으로 접근할때도 obj['1'] 문자형으로 접근해야함
// const obj = {
//     1 : '1입니다',
//     false : '거짓입니다',
// }
// Object.keys(obj);
// console.log(obj['1'])
// console.log(obj['false'])

//symbol : 유일한 식별자를 만들때 사용(전체코드중 딱 1개)
// 심볼형은 object.key, value, entries, for(let a in) 건너뜀
// 숨겨진 Simbol key 보는 법 Object.getOwnPropertySymbols()를 통하여 확인가능
// Reflect.ownKeys()를 통하여 심볼키 포함한 객체 모든 key 조회가능 <잘안씀>
// 심볼형은 a.description 을 통하여 심볼값 조회가능

// const a = Symbol();
// const b = Symbol();

// console.log(a);
// console.log(a === b); // 값은 같아도 일치하지 않음

// const id = Symbol('id');
// console.log(id); //Symbol(id) 출력됨

// property key : 심볼형 
// const id = Symbol('id');
// const user = {
//     name : 'mike',
//     age : 33,
//     [id] : 'king',
// }
// console.log(user); //{ name: 'mike', age: 33, [Symbol(id)]: 'king' } 출력
// console.log(Object.keys(user)); //[ 'name', 'age' ]만 출력

// Symbol.for() : 전역심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통하여 같은 Symbol을 공유
// 전역심볼이 아닐경우 keyFor 사용불가

// const id1 = Symbol.for('id'); //for의 유무로 같은 심볼을 공유
// const id2 = Symbol.for('id');
// console.log(id1 === id2); //true
// console.log(Symbol.keyFor(id1)); //심볼값을 보여줌

// Symbol() 실습
// 다른 개발자가 만들어 놓은 객체
// const user = {
//     name : 'mike',
//     age : 30,
// };

// //내가 작업
// // user.showName = function() {}; //그대로 출력됨

// // 밑에 for in 에서 출력 안됨
// const showName = Symbol('show name');
// user[showName] = function(){
//     console.log(this.name);
// };

// user[showName](); //mike만 출력

// 사용자가 접속하면 보이는 메세지
// for (let a in user) {
//     console.log(`His ${a} is ${user[a]}.`) //key value 값 순회
// }
