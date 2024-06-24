## 240611(화요일)

### 5.1 실습 준비하기

- npm create vite@latest
- npm i
- react strict mode
  - [리액트 공식 문서 설명](https://ko.legacy.reactjs.org/docs/strict-mode.html)
  - 최근 버전에서는 index.js에 기본적으로 생성됨
  - Double-Invoke(두 번 실행해 결과 값이 다르면) 문제가 있다는 방법으로 두 번 수행되는 메서드들을 미리 고칠 수 있게끔 해줌
- eslint
  - vs code extension
  - 작성 코드를 정적으로 검사하여 오류가 발생할만한 코드 발견하면 경고를 띄워줌

### 5.2 리액트 컴포넌트

- html 태그를 반환하는 함수를 '컴포넌트'라 부름
- 컴포넌트 이름은 함수명을 따르는 경우가 많음
- 함수로 만든 컴포넌트를 리액트에서는 '함수 컴포넌트'라고 부름
- 함수 선언식, 화살표 함수 다 가능함
- 클래스를 이용해서 컴포넌트 작성할 수 있음
- 컴포넌트 첫글자는 꼭 대문자여야함!
- import Footer from "./components/Footer" 처럼 .jsx같은 확장자를 작성하지 않아도 됨
- 뷰3는 src폴더 @로 해도 됐는데 리액트는 안되는듯 ...

### 5.3 JSX로 UI표현하기

- JSX (js extensions)
- 사실 js는 HTML태그를 return 할 수 없으며, 문법적인 오류로 판단함
- 하지만 리액트에서 사용되는 확장된 js문법인 JSX에서는 옳은 코드로 판단함
#### jsx 주의사항
1. HTML에서 렌더링하고자 하는 값을 넣는 중괄호{} 안에는 **JS 표현식**만 넣을 수 있음. 조건문이나 반복문은 오류가 생김.
2. 숫자, 문자열, 배열의 값만 정상적으로 렌더링됨. Boolean이나 Null등의 값을 넣는다고 오류가 나지는 않지만 렌더링이 되지 않음. 객체는 렌더링할 수 없고 오류가 남. '.'을 사용해 문자열이나 숫자를 렌더링하도록 처리해주어야한다.
3. 모든 태그는 닫/혀있어야 한다.
4. 최상위태그는 반드시 하나여야 한다.
5. 요소에 스타일 적용할 때 지금껏 해왔던 것 처럼 background-color가 아닌 backgroundColor처럼 카멜 케이스를 사용해야 함
6. JSX는 JS예약어인 Class를 사용할 수 없어서 ClassName을 사용해야함. <button className="logout">

### 5.4 Props로 데이터 전달하기

- 하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달할 때 props를 사용
- 어떤 프롭스가 당연히 넘어올 것이라 생각하고 코드를 짜는 건 위험함 -> default 값을 설정해두어 오류 방지
- [프리코드캠프 Props 설명](https://www.freecodecamp.org/korean/news/how-to-use-props-in-react/)
- [리액트공식문서](https://ko.legacy.reactjs.org/docs/components-and-props.html)

### 5.5 이벤트 핸들링

- 이벤트란 웹 페이지에서 발생하는 사용자의 모든 행동을 말함 ex 클릭, 입력 등
- 이벤트 핸들링 - 이벤트가 발생했을 때 그것을 처리하는 것 ex 버튼 클릭시 경고창
- onClick등 이벤트 핸들링을 담당하는 함수는 이벤트 핸들러 함수라고 부름
- 이벤트 핸들러 함수는 이벤트 객체를 출력함
- 합성 이벤트
  - 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태 (통합된 규격의 이벤트 객체)