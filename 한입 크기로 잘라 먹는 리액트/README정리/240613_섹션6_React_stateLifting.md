## 240613(목요일)

### 6.1 프로젝트 소개 및 준비하기
### 6.2 UI 구현하기
### 6.3 기능 구현하기

- 섹션 6 프로젝트 기준 뷰어 컴포넌트와 컨트롤러 컴포넌트는 서로 부모 자식 관계를 갖지 않는다
- 따라서, 서로 값을 공유할 수 있는 방법이 없음
- 그렇기 때문에 State는 App.vue에 작성하는게 맞다
---

### state lifting

- 단방향 데이터 흐름
  - 리액트에서 데이터는 항상 위->아래 (부모->자식)으로 흐르고, 이는 props로 구현됨.
  - 자식 컴포넌트는 부모 컴포넌트로부터 받은 props를 사용할 수 있지만, 이를 직접 수정할 수 없음
  - 상태(state)의 변경은 항상 소유하고 있는 컴포넌트 내에서 발생하며, 필요한 경우 자식 컴포넌트로 전달됨
- 상태 끌어올리기(Lifting State Up)
  - 두 개 이상의 자식 컴포넌트가 동일한 데이터를 공유해야 할 때 공유되는 상태를 가장 가까운 공통 부모 컴포넌트로 "끌어올림"
- [React State 끌어올리기(Lifting State Up)](https://velog.io/@devjade/React-State-%EB%81%8C%EC%96%B4%EC%98%AC%EB%A6%AC%EA%B8%B0Lifting-State-Up)
- [공식문서](https://ko.legacy.reactjs.org/docs/lifting-state-up.html)