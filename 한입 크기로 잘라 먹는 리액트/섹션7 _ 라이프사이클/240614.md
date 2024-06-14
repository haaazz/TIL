## 240614(금요일)

### 7.1 라이프사이클이란?

> Mount -> Update -> Unmount
- Mount ( 탄생 )
  - 컴포넌트가 탄생하는 순간
  - 화면에 처음 렌더링되는 순간
  - 컴포넌트가 마운트 되었다 = 컴포넌트가 처음으로 화면에 렌더링되었다
- Update
  - 컴포넌트가 다시 렌더링되는 순간
  - 컴포넌트가 리렌더링 될 때를 의미
- Unmount(죽음)
  - 컴포넌트가 화면에서 사라지는 순간
  - 렌더링에서 제외되는 순간을 의미

### 7.2 useEffect 사용하기

- 컴포넌트의 사이드 이펙트(컴포넌트 동작에 따른 파생 효과)를 관리하는 라이프 훅
- useEffect(() => {콜백함수}, [인자]);
- 인자가 변할때마다 콜백함수가 실행되게 하는 구조
- 두 번째 인수로 전달한 배열에 의존함(의존성 배열, dependency arrat, deps)
- 굳이 유즈 이펙트를 사용해야 할까? 그냥 console.log 쓰면 안되는가?
  - 안된다!
  - 리액트의 상태 변화 함수는 비동기로 동작함 (함수의 완료가 늦음)
  - 함수는 호출되었어도 state값은 변경 전일 수 있기 때문에 useEffect를 사용해야 바로바로 변경된 state값을 사용할 수 있다

### 7.3 useEffect로 라이프 사이클 제어하기

- update는 최초 mount와 동시에 실행되므로 진짜 어떤 값의 변화 등이 있을 때만 update를 실행하고 싶다면 isMount같은 useRef레퍼런스를 생성해서 t/f 상태로 특정 조건에서만 실행이 시작되도록 관리하기
- useEffect의 콜백 함수가 반환하는 함수를 클린업, 또는 정리 함수라고 부름

### 7.4 리액트 개발자 도구 사용하기

- [크롬 확장 프로그램 - React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)