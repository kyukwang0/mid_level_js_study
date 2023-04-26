# mid_level_js_study
 
- ## var let const의 차이   

var 와 let 은 비슷    
var는 한번 선언된 변수를 다시 선언 가능    

var는 호이스팅(선언하기 전 최상위로 올라가는것 처럼 사용)     
선언은 호이스팅 되지만 할당은 호이스팅 되지 않음     
name이라는 변수만 올라가고 mike는 할당되지 않음    

let도 호이스팅 되지만 
Temproal Dead Zone (TDZ)때문  TDZ영역 변수 사용 불가    
let과 const는 TDZ에 영향받음(할당전에 사용 불가)    

변수의 생성과정
1. 선언 단계
2. 초기화 단계
3. 할당 단계

var는 선언과 초기화가 같이 일어남 그후 할당 단계    
let은 선언과 초기화가 분리되어 진행됨 그후 할당 단계    
const는 선언 초기화 할당이 동시에 일어남(바꿀수 없기떄문)    

var : 함수스코프 
let, const : 블록스코프

함수스코프 : 함수내에서만 선언된 변수만 그 지역변수가 됨

블록스코프 : 모든 코드블록에서 선언된 변수는 코드블록에서만 유효 외부에서 접근 불가<지역변수>

함수, if, for, while, try/catch 등

- ## 생성자 함수

비슷한 객체를 여러개 만들때 유용   
생성자 함수는 필요한 재료를 넣어 만들어줌    
생성자 함수를 첫글자를 대문자로 하는게 국룰    
new 연산자를 호출하여 만들 수 있음    

- ## 객체(Object // methods / computed property

Object.assign() 복제    
Object.assign({}, user) >> 첫번째 값은 초기값 두번째는 변수 (복제됨)    
초기값에 {gender : 'male'}이 들어간다면 gender 생성됨     
key 값이 같으면 복제 안됨 기존값이 덮어씀      
여러개를 복제하여 한번에 복제    
Object.assign(user, info1, info2) 3개가 합쳐저 복제됨   

Object.key() key값만 배열로    
Object.value() value값만 배열로    
Object.entries key, value 모두 배열로   

Object.fromEntries() : key value 값 배열을 객체로 바꿔줌(반대)

- ## Symbol

property key : 문자형으로 접근할때도 obj['1'] 문자형으로 접근 해야함   
Symbol : 유일한 식별자를 만들때 사용 (전체코드 중 딱 1개만 가능)  
심볼형은 object. key, value, entries, for(let a in ) 건너뛰고 출력   
숨겨진 심볼 key 보는법 Object.geyOwnPropertySymbols()을 통하여 확인가능     
Reflect.ownkeys()를 총하여 심볼 key 포함한 객체 모든 key 조회가능(잘안씀)    
심볼형은 a.description을 통하여 심볼값 조회가능   

Symbol.for() : 전역심볼
하나의 심볼만 보장받을 수 있음   
없으면 만들고 있으면 가져오기 떄문    
Symbol 함수는 매번 다른 Symbol 값을 생성하지만,   
Symbol.for 메소드는 하나를 생성한 뒤 key를 통하여 같은 Symbol을 공유   
전역심볼이 아닐경우 keyFor 사용불가   

- ## Number, Math
toString() 10진수를 >> 2진수or 16진수로 바꾸기   
Math.PI : 원주율을 구해줌   
Math.ceil() : 올림   
Math.floor() : 내림   
Math.round() : 반올림  

toFixed()  
소수점 자리수만큼 반환   
만약 소수점 이상의 숫자를 입력할경우 0으로 채워짐     
단점 : 문자열로 반환되기 떄문에 숫자형태로 바꿔줘야함     
ex ) Number(a.toFixed(2));   

isNaN() : NaN값인지 확인해줌   

parseInt()  
문자가 혼용되어 있어도 문자열을 숫자로 반환해줌   
첫글자가 숫자가 아닐경우 NaN반환   
두번째 인수를 받아서 진수를 지정하 수 있다  
ex ) parseInt(a, 16); // a를 16진수로

parseFloat() : 부동소숫점 반환  

Mathrandom : 0~1사이 무작위 숫자 생성     
ex ) 1 ~ 100까지 숫자 생성     
Math.floor(Math.random()*100)+1);     

Math.max() , Math.min()  : 최대갑 최소값 구하기   
Math.abs() : 절대값 반환   

Math.pow(n,m) : n의 m승 값   
ex ) Math.pow(3,2); // 3의 제곱 9 출력

Math.sqrt() : 제곱근

- ## string (문자열)
문자열도 대괄호를 이용하여 접근가능   
문자열 비교 소문자가 대문자보다 크고 a보다 z가 크다
ex) str[1]   
length : 문자열의 길이     
toUpperCase(), toLowerCase() : 영어 대,소문자 바꾸기   
str.indexOf(text) : 문자열 위치찾기 찾는문자 없으면 -1, 포함된 문자가 많아도 첫번째 문자만 반환    
str.slice(n,m) : n부터 m까지 문자열 자르기      
str.substring(n,m) : n과 m사이 문자열 반환, n,m순서 바꿔도 인식, 음수는 0으로 인식   
str.substr(n,m) : n부터 시작해서 m개를 가져옴     
str.trim() : 앞,뒤 공백제거    
str.repeat(n) : n번 반복   

- ## Array (배열)

push() : 뒤에 삽입, pop() : 뒤에 삭제, unshift() : 앞에 삽입, shift() : 앞에 삭제     

arr.splice(n,m,x)    
특정요소 n번째 요소부터 m개 까지 제거 후 x로 채우기        
특정요소 n번째 요소부터 m개 까지 제거된 요소를 반환(두번째 0을 입력시 이무것도 지우지 않음)    

arr.slice(n,m) : n부터 m까지 반환      
arr.concat(arr1, arr2, .....) : 합쳐서 새 배열 만들기   

arr.forEach(fn)     
배열반복, 보통 item, index만 입력
item = 해당요소, index = index, arr = 해당배열전체    

arr.indexOf / arr.lastindexOf
발견하면 해당요소의 순서를 반환, 없으면 -1    
indexOf(2,2) 이면 2번부터 2가 나올때까지 탐색 시작    
lastindexOf() : 끝에서부터 탐색    

arr.includes() : 포함여부확인    
arr.find(fn), arr.findindex(fn)    
첫번재 true 값만 반환하고 종료    
만약 없으면 undefinde를 반환    
함수사용에 요긴함     
findindex는 위치만 반환    

arr.filter(fn) : 만족하는 모든 요소 반환     
arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환    
join() : 합치기 아무것도 주지않으면 ,로 들어감      
split() : split(',')이 기준이라면 , 기준으로 잘림     
Array.isArray() : 배열인지 아닌지 확인

- ## 구조분해할당(Destructuting assignment)
구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식     
기본값을 설정해주면 배열이 길더라도 undefinde 표시안됨      
기본값 let [a=1, b=2, ...]      
공백을 통하여 일부값 무시가능 [a=1, , c=2] 가운데 값 무시됨      
구조분해 바꿔치기 가능
let a= 1, let b = 2, [a,b] = [b,a];      
객체 구조 분해 : 순서 상관 없음

- ## 나머지 매개변수, 전개구문(Rest parameters, Spread syntax)
...점 3개로 표현     
함수에 접근방법 arguments, 나머지 매개변수    

arguments    
함수로 넘어 온 모든 인수에 접근가능     
함수내에서 이용 가능한 지역 변수      
lenght/index 배열객체 아닌 Array형태의 객체     
배열의 내장 메서드 없음 사용불가 (forEach, map)     

나머지 매개변수 ....
개수가 정해지지 않은 매개변수 접근     
배열 메서드 사용가능     
전개 구문 배열    

- ## 클로져(Closure)
어휘적환경(Laxical Environment)      
함수와 렉시컬 환경의 조합     
함수가 생성될 당시의 외부 변수를 기억     
생성 이후에도 계속 접근 가능     

- ## setTimeout / setInterval
setTimeout() : 일정시간 지난 후 함수 실행      
setTimeout(showName, 3000, 'Mike')      
첫번째는 일정시간이 지난 후 실행되는 함수
두번째는 시간 3000 = 3s
세번째는 인수
주의사항 : 0을 입력하면 바로 실행 안되고 4ms이상의 시간이 걸림

clearTimeout() : 스케줄링 취소      
setInterval : 일정시간 간격으로 함수를 반복     
clearsetInterval : 취소      

- ## call, apply, bind
함수 호출 방식과 관계 없이 this를 지정 할 수 있음     
매개변수를 직접받음     
apply : 매개변수를 배열로 받음 Array로 받음     
bind : this 값을 항상 같은 값으로 받음

- ## 상속, prototype
hasOwnproperty :  메서드로 설정할 경우 메서드 우선     
객체가 직접 가지고 있는 프로퍼티만 반환     
상속은 계속 이어질 수 있음    
A instanceof B : 인스턴스를 확인해 보는 것
A constructor === B : 생성자 확인
