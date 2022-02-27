### 기한

- 2022/02/24 ~ 2022/03/02

### 작성자

- kangactor123(@owner)

### 개발환경

- Language : Typescript
- CRA (Create React App)<br/>
  `npx create-react-app my-app --template typescript`
- Babel, Webpack
- Styled-Components<br/>
  ` npm i styled-components`<br/>
  ` npm i --save-dev @types/styled-components`
- React-hook-form<br/>
  `npm i react-hook-form`
- Recoil<br/>
  `npm i recoil`
- Framer-motion<br/>
  `npm i framer-motion`
- gh-pages (배포)<br/>
  `npm i gh-pages`
- React-router-dom<br/>
  `npm i react-router-dom`

### 배포

- Github page
- https://kangactor123.github.io/opensourceHm

### 요구사항

- 사용자는 페이지 상단에서 toDo를 추가할 수 있다. toDo는 내용과 날짜가 들어가야한다.
- 사용자는 버튼을 통해서 toDo를 수정할 수 있다.
- 화면에는 멀티버튼이 구현되어 있어서 사용자는 멀티 클릭을 통해서 삭제할 수 있다.
  - 이를 위해 화면 상단에 다중 삭제 버튼이 있어야한다.
  - (삭제 api 수정해야 한다. 매개변수로 배열을 받아야한다.)
- 사용자는 개별 삭제를 할 수 있다.
- 기한이 3일이 남은 경우 사용자에게 경고 표시를 할 수 있다. (테두리를 빨간색으로 한다던지 등...)
- pagination은 5, 10, 15, 20, 중 하나를 선택할 수 있다.
- 리스트 내에서 검색이 가능하게 구현한다. (상단에 서치바를 구현한다.)
  - 검색어는 유지되도록 구현한다.

### 상세설명

- api는 src/api/toDoApi.ts 에 작성된 함수를 활용한다
- 해당 TODO app 은 api가 열려있지 않으므로 localStorage.ts 에 정의된 함수를 활용한다.
- 상단에 있는 검색 기능을 통해 내용을 검색할 수 있다.
- 검색어 리스트는 태그 형식으로 상단에 담겨있다.
- toDo 카드 맨 왼쪽 버튼을 통해서 선택을 할 수 있고 input 박스에 있는 선택삭제 버튼을 통해 선택된 toDo를 삭제할 수 있다.
- toDo는 날짜와 내용을 반드시 입력해야한다.
  - 이미 지난 날짜는 입력할 수 없다.
  - 내용은 반드시 10글자 이상 입력해야한다.
- toDo를 완료했다면 좌측의 두 번째 버튼을 클릭해 상태를 변경할 수 있다.
- toDo의 내용을 수정하려면 수정하기 버튼을 클릭한다.
  - 수정하는 페이지는 modal을 활용했다.
  - 수정 역시 유효성 검사를 통과해야 한다.
- 개별삭제 버튼을 클릭시 개별적인 삭제를 할 수 있다.
- 상단의 header에는 노출하기 원하는 카드의 갯수를 선택할 수 있다.
- home 버튼을 통해 맨 처음 화면 (검색창이라면 전체 ToDo List로) 이동할 수 있다.
- 기한이 3일 이내 남은 toDo 들은 테두리가 빨간색으로 강조된다.
- toDo 리스트는 deadline을 기준으로 정렬되어서 노출된다.
- 검색은 반드시 한 글자 이상 입력해야 한다.
