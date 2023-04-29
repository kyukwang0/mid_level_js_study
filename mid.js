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

// Number, Math
// toString() 10진수를 >> 2진수or 16진수로 바꾸기

// let num = 10;
// let num1 = num.toString(2);
// console.log(num1); // 1010

// let num2 = 255;
// let num3 = num2.toString(16);
// console.log(num3) // ff

// Math.PI; 원주율을 구해줌

// Math.ceil() :올림
// let num1 = 5.1;
// console.log(Math.ceil(num1));

// Math.floor() : 내림
// let num1 = 5.1;
// console.log(Math.floor(num1));

// Math.round() : 반올림
// let num1 = 5.1;
// let num2 = 5.7;
// console.log(Math.round(num1));
// console.log(Math.round(num2));

// toFixed() : 소숫점 자리수만큼 반환
// 단점 : 문자열로 반환되기 때문에 숫자형태로 바꿔줘야함
// let num = 10.23123
// // 2번째 자리까지
// console.log(num.toFixed(2));
// // 남은부분은 0으로 채워짐
// console.log(num.toFixed(10));
// //문자열로 반환되는걸 숫자형으로 받기
// console.log(Number(num.toFixed(2)));

// isNaN() : NaN인지 판단해줌

// let x = Number('x');
// console.log(x == NaN) //false
// console.log(x === NaN) //false
// console.log(NaN == NaN) //false
// console.log(isNaN(x)) //true
// console.log(isNaN(10)) //false

// parseInt()
// 문자가 혼용되어 있어도 문자열을 숫자로 반환
// 첫글자가 숫자가 아닐경우 NaN반환 
// 두번째 인수를 받아서 진수를 지정할 수 있다

// let margin = '10px';
// console.log(parseInt(margin)); //10

// let redColor = 'f3';
// console.log(parseInt(redColor)); //NaN
// // 2번째 인수를 16진수로 지정
// console.log(parseInt(redColor, 16)); // 243

// parseFloat() : 부동소숫점 반환

// let padding = '18.5%';
// console.log(parseInt(padding)); //18
// console.log(parseFloat(padding)); //18.5

// Math.random() : 0~1 사이 무작위 숫자 생성
// const num = Math.random();
// console.log(num);
// //1부터 100까지 랜덤숫자
// const rd = Math.floor(Math.random()*100)+1;
// console.log(rd);

// Math.max, Math.min :최대값 최소값 구하기
// let num = [1,3,5,5,7,4];
// // console.log(typeof(num));
// console.log(Math.max(...num)); //배열로 되어있기때문에 펼친다
// console.log(Math.min(...num));//배열로 되어있기때문에 펼친다

//Math.abs() : 절대값 반환
// let num = -193;
// console.log(Math.abs(num));

//Math.pow(n,m) : 제곱 (n의 m승 값)
// console.log(Math.pow(3, 2)); //3의 제곱 9출력

//Math.sqrt() : 제곱근
// console.log(Math.sqrt(9)); // 3

// String (문자열) 
// length : 문자열의 길이
// 문자열도 대괄호로 인하여 접근가능
// let desc = '안녕하세요';
// console.log(desc[1]); //녕

// toUpperCase(), toLowerCase() : 영문 대,소문자로 바꾸기
// let desc = "Hi guys. Nice to meet you.";
// console.log(desc.toUpperCase());
// console.log(desc.toLowerCase());

// // str.indexOf(text): 문자열 위치찾기 문자열 찾는문자 없으면 -1
// 포함된 문자가 많아도 첫번째 문자만 반환
// console.log(desc.indexOf('Nice')); //9
// if(desc.indexOf('Hi')> -1){ //if에서 0은 false이므로  > -1 없으면 동작안함
//     console.log('Hi가 포함된 문장입니다.');
// }

// str.slice(n,m) n부터 m까지 문자열 자르기
// console.log(desc.slice(2)); //3번째 문자열부터 끝까지
// console.log(desc.slice(1,3)); //i
// console.log(desc.slice(2,-4)); // 3번째 문자열부터 -4번째 글자까지

//str.substring(n,m)
// n과 m 사이 문자열 반환
// n과 m을 바꿔도 동작함
// 음수는 0으로 인식
// console.log(desc.substring(2,5)); /gu
// console.log(desc.substring(5,2)); /gu

// str.substr(n,m) : n부터 시작해서 m개를 가져옴
// console.log(desc.substr(2,5));

// str.trim() : 앞,뒤 공백 제거
// let de = " .d.  "
// console.log(de.trim()); /.d.

// str.repeat(n): n번 반복
// console.log(desc.repeat(2));

//문자열비교
// 소문자가 대문자보다 크다 a보다 z가 크다

//실습
// let list = [
//     "01. 들어가며",
//     "02. JS의 역사",
//     "03. 자료형",
//     "04. 함수",
//     "05. 배열",
// ];

// let newList = []
// for(let i=0; i <list.length; i++){
//     newList.push(
//         list[i].slice(4)
//     );
// }
// console.log(newList);

//금칙어 : 콜라
//includes 문자가 있으면 True 없으면 false 반환

// function hasCola(str){
//     if(str.includes('콜라')){
//         console.log('금칙어가 있습니다.');
//     } else{
//         console.log('통과');
//     }
// }
// hasCola('와 사이다가 짱이야!'); //-1
// hasCola('와 콜라가 짱이야!'); //-1
// hasCola('콜라!'); //0 

//Array
// Push() : 뒤에삽입, pop() : 뒤에 삭제, unshift() : 앞에 삽입, shift() : 앞에삭제
//arr.splice(n,m,x) : 특정요소지움 n번째 요소부터 m개 까지 제거후 x로 채우기
//arr.splice(n,m) : 삭제된 요소를 반환
// let arr = [1,2,3,4,5];
// arr.splice(1,2); //[1,4,5]
// arr.splice(1,0,1); //[1,1,2,3,4,5] 0을 입력시 아무것도 지우지 않음
// arr.splice(1,2,100); //[1,100,4,5]
// arr.splice(1,2,100,200); //[1,100,200,4,5]
// arr.splice(1,2,100,200,300); //[1,100,200,300,4,5]
// let result = arr.splice(1,2) //[2,3]
// console.log(arr);
// console.log(result);

// arr.slice(n,m) : n부터 m까지 반환
// let arr = [1,2,3,4,5];
// console.log(arr.slice(1,4)); // [2,3,4]
// console.log(arr.slice()); // [1,2,3,4,5]
// console.log(arr);

// arr.concat(arr, arr1 ....) : 합쳐서 새 배열 만들기
// let arr = [1,2];
// console.log(arr.concat([3,4])); //[ 1, 2, 3, 4 ]
// console.log(arr.concat([5],[6])); //[ 1, 2, 5, 6 ]
// console.log(arr.concat([7],8)); // [ 1, 2, 7, 8 ]

// arr.forEach(fn) : 배열 반복
// 보통 item, index만 입력
// item : 해당요소, index : index, arr : 해당배열자채
// let user = ['kim', 'pack', 'choi'];
// user.forEach((item, index, arr) => {
//     console.log(item); //kim
//     console.log(index); //0
//     console.log(arr); //['kim', 'park', 'choi']
// });
// let user = ['kim', 'pack', 'choi'];
// user.forEach((name, index) => {
//     console.log(`${index +1}. ${name} `); //1. kim, 2.pack .....
// })

// arr.indexOf / arr.lastindexOf 
// 발견하면 해당요소의 순서를 반환, 없으면 -1
// indexOf(2,2)이면 2부터 2가 나올때까지 탐색시작
// lastindexOf() : 끝에서 부터 탐색 
// let arr = [1,2,3,4,5,1,2,7,3]
// console.log(arr.indexOf(7)); //7
// console.log(arr.indexOf(3,3)); //8
// console.log(arr.lastIndexOf(7)); //7

// arr.includes() : 포함여부 확인
// let arr = [1,2,3,4,5,1,2,7,3]
// console.log(arr.includes(7)); //ture

// arr.find(fn) / arr.findindex(fn)
// 첫번째 true 값만 반환하고 끝
// 만약 없으면 undefined를 반환함
// 함수 사용 요긴함
// findindex는 위치만 반환

//짝수를 찾아서 반환
// let arr = [1,2,3,4,5,1,2,7,3]
// const arr1 = arr.find((item) => {
//     return item % 2 === 0;
// });
// console.log(arr1); //2

// 미성년자찾기
// let userList = [
//     {name : "mike", age : 30},
//     {name : "jane", age : 27},
//     {name : "kim", age : 10},
// ];
// const user = userList.find((list) => {
//     if(list.age < 19){
//         return true;
//     }
//     return false
// })
// console.log(user) // { name: 'kim', age: 10 }

// const user1 = userList.find((list) => {
//     return list.age < 19;
// })
// console.log(user1) //{ name: 'kim', age: 10 }

// const user = userList.findIndex((list) => {
//     if(list.age < 19){
//         return true;
//     }
//     return false
// })
// console.log(user) //2 위치만 반환


// arr.filter(fn) : 만족하는 모든 요소 반환
// 미성년자찾기
// let userList = [
//     {name : "mike", age : 30},
//     {name : "jane", age : 27},
//     {name : "kim", age : 10},
//     {name : "Lee", age : 11},
// ];

// const user = userList.filter((list) => {
//     if(list.age < 19){
//         return true
//     }
//     return false
// })
// console.log(user); //[ { name: 'kim', age: 10 }, { name: 'Lee', age: 11 } ]

// arr.reverse() : 역순으로 재정렬
// let arr = [1,2,3,4,5]
// console.log(arr.reverse());

// arr.map(fn)
// 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
// let userList = [
//     {name : "mike", age : 30},
//     {name : "jane", age : 27},
//     {name : "kim", age : 10},
//     {name : "Lee", age : 11},
// ];

// let newuser = userList.map((user, index) =>{
//     return Object.assign({}, user, { //user에 isAdult를 만들어 복제
//         ID : index +1 , //ID index값을 추가해봤음
//         isAdult : user.age > 19,
//     });
// });
// console.log(newuser);

// join, split 
// join() 같이 아무것도 주지않으면 ,로 들어감
// split(',') 이라면 ,기준으로 잘림

//join
// let str = ['hello', 'my', 'name', 'is', 'kim'];
// let strjoin = str.join();
// let strjoin1 = str.join('-');
// console.log(strjoin); //hello,my,name,is,kim
// console.log(strjoin1); //hello-my-name-is-kim

//split
// let str = 'hello, my, name, is, kim';
// let strsplit = str.split(',');
// console.log(strsplit); [ 'hello', ' my', ' name', ' is', ' kim' ]

// Array.isArray() : 배열인지 아닌지 확인
// 객체라고 알려줌
// let userList = {name : "mike", age : 30};
// let user = ["kim","back","Lee"];
// console.log(typeof userList) //object
// console.log(typeof user) //object
// console.log(Array.isArray(userList)) //false
// console.log(Array.isArray(user)) //true

//arr.sort() / arr.reduce()
// sort() : 배열 재정렬 // 배열자체가 변경됨 // 인수로 정렬 로직을 담은 함수를 받음

// let arr = [1,5,4,6,2];
// let arr = ['a','b','e','s','k'];
// let arr = [24,12,5,67,3]; //[ 12, 24, 3, 5, 67 ] 문자열로 인식해서 그럼
// arr.sort((a,b) => {
//     console.log(a,b) ;
//     return a-b;
// })
// console.log(arr);
// 좀 복잡하므로 유용한 기능을 모아놓은 Lodash같은 라이브러리를 사용한다
// _.soryBy(arr); // 실무에서 많이 사용

// 배열의 모든수 합치기
// 일반적으로 for, for of, forEach 사용함
// let arr = [1,2,3,4,5];
// let result = 0
// arr.forEach ((num) => {
//     result += num;
// });
// console.log(result)

//위의작업을 한번에 해주는 reduce!
//인수로 함수를 받음
//(누적계산값, 현재값) => {retrun 계산된값, 초기값};
// const result = arr.reduce((prev, cur) =>{
//     return prev + cur ;
// }, 0);
// console.log(result);

//실습
//성인만 뽑아 새로운 배열로
// let userList = [
//     {name : "kim", age : 20},
//     {name : "choi", age : 30},
//     {name : "Lee", age : 10},
//     {name : "kong", age : 12},
//     {name : "min", age : 24},
// ];

// let result = userList.reduce((prev,cur)=>{
//     if(cur.age > 19){
//         prev.push(cur.name, cur.age);
//     }
//     return prev;
// },[])

//나이의 합을 구하려면?
// let result = userList.reduce((prev,cur)=>{
//     return (prev += cur.age);
// },0)
// 이름이 3글자인 사람과 나이
// let result = userList.reduce((prev,cur)=>{
//     if(cur.name.length === 3){
//         prev.push(cur.name, cur.age);
//     }
//     return prev;
// },[]);
// console.log(result);

// 구조 분해 할당 (Destructuting assignment)
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서
// 그 값을 변수에 담을 수 있게 하는 표현식
// 기본값을 설정해주면 배열이 길더라도 undefinde 표시안됨
// 기본값 let [a=1,b=2...]
// 공백을 통하여 일부값 무시가능 [a=1, ,c=2] 가운데 값 무시됨

// let users = ['kim', 'Lee', 'choi'];
// let [user1, user2, user3] = users

// let users = ['kim', 'Lee', 'choi'];
// let [user1, ,user2, user3] = users
// console.log(user2); //choi

// 구조분해 바꿔치기
// let a = 1;
// let b = 2;
// [a,b] = [b,a]; 

//객체 구조 분해 : 순서상관없음 
// let user = {name : 'kim', age : 30};
// let {name, age} = user;
// let {age, name} = user;
// let {name : userName, age : userAge} = user; //새로운 변수 이름으로 할당
// console.log(userName);

//나머지 매개변수, 전개구문(Rest parameters, Spread syntax)
// ... 이렇게 점 3개로 표현 
// 함수에 접근방법 arguments , 나머지 매개변수 
// arguments 
// 함수로 넘어 온 모든 인수에 접근가능
// 함수내에서 이용 가능한 지역 변수
//lenght/index 배열객체 아닌 Array형태의 객체
// 배열의 내장 메서드 없음 사용불가 (forEach, map)

// 나머지 매개변수 ...로 표현
// 개수가 정해지지 않은 매개변수 접근
// 배열 메서드 사용 가능
// 전개 구문 배열

// arguments 실습
// function showName(name){ //개수 제한 없음
//     console.log(name);
// }
// showName() //undefined
// showName('mike'); //mike
// showName('mike', 'tom'); //mike
// ...실습
// function showName(...names){ //개수 제한 없음
//     console.log(names);
// }
// showName() //[]
// showName('mike'); //['mike']
// showName('mike', 'tom'); //['mike', 'tom']

//전달 받은 모든 수를 더해야함
// function add(...numbers){
//     let result = 0;
//     numbers.forEach((num) => (result += num));
//     console.log(result);
// }

// function add(...numbers){
//     let result = numbers.reduce((prev,cur) => (prev += cur));
//     console.log(result);
// }
// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);

//user 객체를 만들어 주는 생성자 함수
// function User(name, age, ...skills){
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
// }
// const user1 = new User ('mike',30,'korean','Java');
// const user2 = new User ('kim',19,'python','english');
// const user3 = new User ('Lee', 23, 'JS','React');

// console.log(user1);
// console.log(user2);
// console.log(user3);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let result = [0,...arr1,...arr2,]
// console.log(result)

//전개 구문 복제
// let arr = [1,2,3];
// let arr2 = [...arr];

// let user = {name:'mike', age  : 30};
// let user2 = user // user = Tom, user2 = Tom
// let user2 = {...user}; // user = mike, user2 = Tom
// user2.name = "Tom";
// console.log(user.name);
// console.log(user2.name);

//실습
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// });
// console.log(arr1);
//전계
// arr1 = [...arr2,...arr1];
// console.log(arr1);

//객체 실습
// let user = {name:'mike'};
// let info = {age : 30};
// let fe = ['js', 'react'];
// let lang = ['korean', 'English'];

// user = Object.assign({}, user, info, {
//     skills : [],
// })

// fe.forEach(item => {
//     user.skills.push(item);
// })

// lang.forEach(item => {
//     user.skills.push(item);
// })

// user = {
//     ...user,
//     ...info,
//     skills : [...fe,...lang],
// }

// console.log(user);

//클로저(Closure)
// 어휘적환경(Lexical Environment)
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능
// 작동순서
// 1. Lexical 환경
// one : 초기화 X<사용불가>, addOne : function <사용가능>

// let one; //one<사용가능> : undefinde 
// one = 1;
// function addOne(num) {
//     console.log(one + num);
// }
// addOne(5); //내부 Lexical환경

// function makeAdder(x){
//     return function(y){
//         return x + y;
//     }
// }
// const add3 = makeAdder(3);
// console.log(add3(2));

// function makeCounter(){
//     let num = 0; //은닉화

//     return function () {
//         return num++;
//     };
// }
// let counter = makeCounter();
// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2

//setTimeout / setInterval
// setTimeout : 일정시간이 지난 후 함수를 실행
// clearTimeout() : 스케줄링 취소
// setInterval : 일정시간 간격으로 함수를 반복

// function fn(){
//     console.log(3)
// }
// setTimeout(fn, 3000); 
//다른표현방식
// setTimeout(function fn(){
//     console.log(3)
// },3000);
// const tID = function showName(name){
//     console.log(name);
// }
// setTimeout(showName, 3000, 'Mike')
// 첫번째는 일정시간이 지난 후 실행되는 함수
// 두번째는 시간 3000 = 3s
// 세번째는 인수
// clearTimeout(tID);

// function showName(name){
//     console.log(name);
// }
// const tId = setInterval(showName, 3000, 'Mike');
// clearInterval(tId);

//주의사항
// 0을 입력하면 바로실행 안되고 4ms이상의 시간이 걸림
// setTimeout(function(){
//     console.log(2)
// },0);
// console.log(1); 

//실습
// let num = 0;
// function showTime(){
//     console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다`);
//     if (num > 5){ 
//     clearInterval(tId);
//     }
// }
// const tId = setInterval(showTime, 1000);

// call,apply,bind 
// 함수 호출 방식과 관계없이 this를 지정할 수 있음
// 매개변수를 직접받음
// apply : 매개변수를 배열로 받음 Array로 받는다
// bind : this 값을 항상 같은 값을 this로 받음

// const mike = {
//     name : 'mike'
// }

// const tom = {
//     name : 'Tom'
// }

// function showThisname(){
//     console.log(this.name);
// }
// showThisname();
// showThisname.call(mike);
// showThisname.call(tom);
// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// };
// update.call(tom, 1992, 'teacher');
// console.log(tom);
// update.call(mike, 1991, 'singer');
// console.log(mike);

// update.apply(tom, [1992, 'teacher']);
// console.log(tom);
// update.apply(mike, [1991, 'singer']);
// console.log(mike);
// const num = [3,10,1,6,5]
// const minNum = Math.min(...num);
// const maxNum = Math.max(...num);
// const minNum = Math.min.apply(null, num);
// const maxNum = Math.max.call(null, ...num); 
// console.log(minNum);
// console.log(maxNum);

// const mike = {
//     name : 'mike',
// }
// function update(birthYear, occupation){
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// const updateMike = update.bind(mike); //bind는 항상 mike만 받음
// updateMike (1977, 'police')
// console.log(mike);

//실습
// const user = {
//     name : 'mike',
//     showname : function () {
//         console.log(`hello, ${this.name}`);
//     },
// };
// user.showname();
// let fn = user.showname;
// fn(); //undefind
// fn(user); //undefind
// fn.call(user);
// fn.apply(user);
// let boundFn = fn.bind(user);
// boundFn();

// 상속, prototype
// hasOwnProperty : 메서드로 설정할 경우 메서드 우선
// 객체가 직접 가지고 있는 프로퍼티만 반환
// 상속은 계속 이어질 수 있음
// A instanceof B : 인스턴스를 확인해보는 것
// A constructor === B : 생성자 확인
// const user = {
//     name : 'mike',
//     hasOwnProperty : function(){
//         console.log('haha');
//     }
// };
// console.log(user.name);
// console.log(user.hasOwnProperty); //[Function: hasOwnProperty]
// console.log(user.hasOwnProperty('name')); //true
// console.log(user.hasOwnProperty('age')); // false

// const car = {
//     wheels : 4,
//     drive() {
//         console.log('drive..');
//     },
// }

// const bmw = {
//     color : 'red',
//     wheels : 4,
//     navigation : 1,
    // drive() {
    //     console.log('drive..');
    // },
// };
// const banz = {
//     color : 'black',
//     wheels : 4,
//     navigation : 1,
    // drive() {
    //     console.log('drive..');
    // },
// };
// const audi = {
//     color : 'blue',
//     wheels : 4,
//     navigation : 1,
    // drive() {
    //     console.log('drive..');
    // },
// };
// 상속 : 공통된 부분은 car가 bmw의 prototype으로 만들어주기
// bmw.__proto__ = car;
// banz.__proto__ = car;
// audi.__proto__ = car;

// 상속은 계속 이어질 수 있음
// const x5 = {
//     color : 'white',
//     name : 'x5'
// }
// x5.__proto__ = bmw;

// console.log(x5); //{ color: 'white', name: 'x5' }
// console.log(x5.name); //x5
// console.log(x5.navigation); // 1

// for(p in x5){
//     console.log(p); //color,name,wheels,navigation,drive
// }

// for(p in x5){
//     if(x5.hasOwnProperty(p)){
//         console.log('o', p);
//     } else {
//         console.log('x',p)
//     }
// }

// const car = {
//     wheels : 4,
//     drive(){
//         console.log('drive..')
//     },
// };
// const Bmw = function(color) {
//     this.color = color;
// };
// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');

// x5.__proto__ = car;
// z4.__proto__ = car;

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//     console.log('drive..');
// };
// Bmw.prototype.navigation = 4;
// Bmw.prototype.stop = function () {
//     console.log('STOP!!');
// };
// console.log(z4.wheels);

// const hd = function(color) {
//     const c = color;
//     this.getColor = function(){
//         console.log(c);
//     };
// };

//class
// constructor로 객체를 만들어 주는 생성자 메서드 
// extends로 상속 반드시 super키워드로 부모클래스 컨스트럭스 실행해줘야함
// super.() : 부모class 매서드를 사용함<메소드 오버라이딩>

// const user = function(name,age){
//     this.name = name;
//     this.age = age;
//     this.showName = function(){
//         console.log(this.name);
//     };
// };

// const mike = new user('mike', 30);

// class user2 {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName(){
//         console.log(this.name);
//     }
// }
// const tom = new user2('tom', 19);

// extends
// class Car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive() {
//         console.log('drive..');
//     }
//     stop(){
//         console.log('stop!');
//     }
// }

// class Bmw extends Car { //자식클래스
//     constructor(color){
//         super(color);
//         this.navigator = 1;
//     }
//     park() {
//         console.log('park');
//     }
//     stop() {
//         super.stop();
//         console.log('off');
//     }
// }
// const z4 = new Bmw('blue');

//프로미스(promise)
// promise가 이행되거나 거부될때 각각 실행
// state : pendind(대기)
// then : 이행 , catch : 거부 finally : 마무리 
// Promise.all :하나의 정보라도 누락되면 페이지를 보여주지 않아야 되는곳에 사용
// Promise.race : 하나의 정보라도 완료되면 실행 종료 
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK')
//     }, 3000)
// });
// pr.then(
//     function(result) { //이행
//         console.log(result + '가지러 가자.')
//     },
//     function(err){ //거부
//         console.log('다시 주문해주세요')
//     }
// )

// 실습 
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("err...."));
//     }, 1000);
// })
// console.log('시작');
// pr.then((result) => {
//     console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
// })
//   .finally(() => {
//     console.log ("끝");
//   })

//1,2,3번의 주문 callback함수로 구현
// const f1 = (callback) => {
//     setTimeout(function () {
//         console.log('1번 주문완료');
//     callback();
//     }, 1000);
// };

// const f2 = (callback) => {
//     setTimeout(function () {
//         console.log('2번 주문완료');
//         callback();
//     }, 2000);
// };

// const f3 = (callback) => {
//     setTimeout(function () {
//         console.log('3번 주문완료');
//         callback();
//     }, 3000);
// };

// console.log('시작')
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('끝');
//         });
//     });
// });

// promise 함수로 구현
// const f1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('1번 주문완료');
//         });
//     });
// };

// const f2 = (massage) => {
//     console.log(massage);
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res('2번 주문완료');
//         }, 3000);
//     });
// };

// const f3 = (massage) => {
//     console.log(massage);
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res('3번 주문완료');
//         }, 2000);
//     });
// };

// console.log('시작')
// f1()
// .then((res) => f2(res))
// .then((res) => f3(res))
// .then((res) => (console.log(res)))
// .catch(console.log)
// .finally(() => {
//     console.log('끝')
// });

// console.time('x')
// Promise.race([f1(),f2(),f3()]).then((res) => {
//     console.log(res);
//     console.timeEnd('x');
// });

// async, await
// 대부분의 상황에서 promise 보다 가독성이 좋음
// async, await 바꿔보기
// promise에서는 에러 발생시 catch 사용했지만
// try catch 문을 사용
// 에러로그를 출력하고 이후 작업을 진행
// 비동기함수를 병렬로 사용 가능 (promise.all 사용가능)
// const f1 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('1번 주문완료');
//         });
//     });
// };

// const f2 = (massage) => {
//     console.log(massage);
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res('2번 주문완료');
//             // rej(new Error('err..'))
//         }, 3000);
//     });
// };

// const f3 = (massage) => {
//     console.log(massage);
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res('3번 주문완료');
//         }, 2000);
//     });
// };
// try , catch
// console.log('시작');
// async function order(){
//     try {
//         const result = await f1();
//         const result1 = await f2(result);
//         const result2 = await f3(result1);
//         console.log(result2);
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('종료');
// }
// order ();

// promise all
// console.log('시작');
// async function order(){
//     try {
//         const result = await Promise.all([f1(),f2(),f3()]);
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('종료');
// }
// order ();


// f1()
// .then((res) => f2(res))
// .then((res) => f3(res))
// .then((res) => (console.log(res)))
// .catch(console.log)

// async function getName() {
//     // return Promise.resolve('Tom');
//     throw new Error('err..');
// }

// getName().catch((err) => {
//     console.log(err);
// });

// await 
// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }

// async function showName(){
//     const result = await getName("mike");
//     console.log(result);
// }
// console.log('시작');
// showName();

// generator
// 함수의 실행을 중간에 멈췄다가 next()해주면  재개할 수 있는 기능
// function 옆에 *을 써서 만들고
// 빌드를 키워드를 사용 하여 함수의 실행을 멈출 수 있음
// iterable : 반복 가능
// Symbole.iterator 메서드가 있다.
// Symbole.iterator 는 iterator를 반환해야 한다.
// next 메서드를 가진다.
// next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
// 작업이 끝나면 done 은 ture 가 된다
// 값을 미리 만들어 두지 않음, 필요한 값을 그때 그때 만듬
// 외부로부터 값을 받을 수 있음
// yield* 을 통하여 다른 generator를 받아옴 

// function* fn() {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     yield 3;
//     return 'finish';
// }

// const a = fn();

// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// const arr = [1,2,3,4,5];
// const it = arr[Symbol.iterator]();