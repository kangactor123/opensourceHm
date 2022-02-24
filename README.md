## Open Source Consulting Homework

### 기한

- 2022/02/24 ~ 2022/03/02

### 문제

- 다음 내용을 프로그램으로 작성 후 소스코드, 동작 원리를 설명하는 문서를 README.md파일로 제출.
- 제공된 API를 사용하는 Application 작성 (API가 offline인 경우 로컬스토리지로 작동될 수 있도록 처리)

### 개발환경

- Language : Typescript
- CRA (Create React App)
- Babel, Webpack
- Styled-Components
  ` npm i styled-components`
  ` npm i --save-dev @types/styled-components`
- React-hook-form
  `npm i react-hook-form`
- React-Helmet
  `npm i react-helmet`
  `npm i --save-dev @types/react-helmet`

### ToDo

- 요구사항
  - 상단에서 신규 TODO 입력하여 추가 가능
    - 내용, 기한 (날짜) 입력
  - Row 단위로 선택하여 수정 가능
  - Multiple Row 선택 후 삭제 가능
  - 기한이 3일 이내로 남은 경우 경고 표시
  - List는 Page Size 5, 10, 15, 20 중 선택하여 표시
  - 리스트 검색 가능 (검색 키워드는 브라우저를 다시 열었을 때 유지되도록)
- 디자인 요구사항
  - Styled Components 사용하여 사용자에게 거부감 없는 디자인 반영
- ES5 환경으로 빌드되어 배포될 수 있도록 패키지 환경 구성

### 배포

- Github page

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
  - 검색어는 유지되도록 구현한다. (localStorage 이용하자)
