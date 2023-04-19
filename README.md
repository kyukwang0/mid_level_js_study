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

