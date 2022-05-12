var 이름 = "kim"; //이름에는 문자값만 들어가도록 설정
var 이름2 = ["kim", "park"]; // 이름2는 문자값만 들어가는 배열이라 설정
var 이름3 = { name: "kim" };
// 이름3는 객체 안의 name 값은 문자값으로 받겠다 이고 ?옵션은 값이 안들어오고 빈값이라도 에러가 안나도록 해줌
var 이름4 = "kim";
var 이름5 = 123;
// 타입형태를 정해줄수도 있음
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: "kim", age: "jun" };
//key라는건 모든 오브젝트속성을 뜻함 밑의 name이나 age 같은 객체속성 전부 문자값으로 받겠다는뜻
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// tsc -w 터미널에 입력해주면 js파일로 변환해줌
