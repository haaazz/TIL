## 240606(목요일)

### 2.1 Truthy와 Falsy

- 자바 스크립트에서는 불린 타입이 아니어도 상황에 따라 참/거짓을 평가하는 경우가 존재한다
- 참은 아니지만 상황 내에서 참으로 평가되는 값 -> 트루시한 값, 참 같은 값
- 거짓은 아니지만 상황 내에서 거짓으로 평가되는 값 -> Falsy, 거짓같은 값
- 이를 잘 이용하면 조건문을 간결하게 만들 수 있음
- falsy = NaN, 0, -0, undefined, null, "", 0n
- truthy = 위의 7개 빼고 다
- 실제 개발 상황에서 객체의 값에 접근하려는데 Undefined 출력되는 상황 자주 발생함
- 그래서 보통 객체의 특정 프로퍼티에 접근하는 기능을 담는 함수에서는 조건문으로 person값이 null이나 undefined가 아닌지 확인해야한다
- 방법 1. person === undefined || person === null 로 if문 구분
  - 방법 1의 경우 코드의 규모가 커지면 복잡해짐
- 방법 2. undefined 와 person 모두 falsy함을 이용해 if (!person) + 종료 코드로 확인하는 방법

### 2.2 단락 평가 (Short-circuit Evaluation)

- 단축 평가
- AND와 OR 연산자에서 기호 앞의 결과로 전체 식의 참거짓이 정해지면 뒤의 기호는 확인하지 않고 식의 결과를 확정시키는 것

### 2.3 구조분해할당

- 배열이나 객체에 저장된 여러가지 값들을 각각 다른 변수에 할당하는 것
- 배열의 구조 분해 할당
  - let [선언할변수] = 원래 배열
- 객체의 구조분해할당
  - let {선언할변수} = 원래객체

### 2.4 Spread 연산자와 Rest 매개변수

- 스프레드 연산자 ...
- 객체나 배열에 저장된 여러가지 값을 개별로 흩뿌려주는 역할
- rest 매개변수 뒤에는 rest 뒤에 추가 변수 선언 불가능, 가장 마지막이어야 함
- ... 뒤의 이름은 마음대로

### 2.5 원시타입 vs 객체타입

- 원시 타입 : 값 자체로써 변수에 저장되고 복사됨
  - 값 자체를 메모리 어딘가에 저장을 하고, 이름을 붙여줌 (그 공간을 가르키도록)
  - 재할당이 되더라도 메모리 공간에 저장된 원래 값은 수정되지 않고, 변경해야 할 값을 새로운 공간에 새로이 추가해 변수가 그를 가르키도록 함
  - 원본 데이터 수정이 안된다는 특성 -> '불변값'이라 불림
- 객체 타입 : 참조값(주소값)을 통해 변수에 저장되고 복사됨
  - 메모리에 값을 저장, 그 주소값도 저장
  - 변수가 그 참조값을 가르키도록 함
  - 저장하는 값이 동적으로 크기나 값이 변하기에 값 자체를 가르키지 않고 주소값을 가르키는 것
  - 주소값은 변하지 않고 그 주소가 가르키는 값을 수정해버림
  - 원본 데이터가 수정이 된다는 특성 => '가변값'이라 불림
    - 객체 타입 주의사항
      - 객체 타입을 다룰 때 의도치 않게 값이 수정될 수 있다 (얕은 복사)
      - Side Effect를 주의하기 위해 스프레드 연산자 등을 사용해서 내부값만 불러온 새 변수 생성하거나 하는 방식을 사용 (깊은 복사)
      - 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
  - 얕은 비교
    - o1 === 02 처럼 , 참조값을 기준으로 비교하는 것
  - 깊은 비교
    - JSON.stringify(o1) === JSON.stringify(o2)처럼, 객체를 문자열로 변환하여 비교
    - 위에 사용한 JSON.stringify처럼 별도 내장 함수를 이용해야 함
  

---
### 얕은 복사, 깊은 복사   

- 깊은 복사는 객체의 실제 값을 복사
  
원시값을 복사할 때 그 값은 또 다른 독립적인 메모리 공간에 할당하기 때문에, 복사를 하고 값을 수정해도 기존 원시값을 저장한 변수에는 영향을 끼치지 않는다. 이처럼 실제 값을 복사하는 것을 깊은 복사라고 한다.

- 얕은 복사는 객체의 참조값(주소 값)을 복사  
 
참조값을 복사할 때는 변수가 객체의 참조를 가리키고 있기 때문에 복사된 변수 또한 객체가 저장된 메모리 공간의 참조를 가리키고 있다. 그래서 복사를 하고 객체를 수정하면 두 변수는 똑같은 참조를 가리키고 있기 때문에 기존 객체를 저장한 변수에 영향을 끼친다. 이처럼 객체의 참조값(주소값)을 복사하는 것을 얕은 복사라고 한다.

<img width="511" alt="copy" src="https://user-images.githubusercontent.com/109197023/220908789-ae457dfd-6726-4c1c-be2e-fd02777d6c8c.PNG">
