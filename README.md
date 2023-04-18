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
