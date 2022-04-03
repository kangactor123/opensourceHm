# ToDo List

<img width="1440" alt="스크린샷 2022-02-28 오후 2 34 00" src="https://user-images.githubusercontent.com/82820237/155929648-3aa8b0d7-efb7-42c2-984d-e7772331c1ee.png">
- https://kangactor123.github.io/opensourceHm

## Contributor

- @kangactor123

## Dev period

- 2022/02/24 ~ 2022/03/01

## Tech Requirement (Tech Stack)

- Language : Typescript
- CRA (Create React App)
  ```
  npx create-react-app my-app --template typescript
  ```
- Babel, Webpack
- Styled-Components
  ```
  npm i styled-components
  npm i --save-dev @types/styled-components
  ```
- React-hook-form
  ```
  npm i react-hook-form
  ```
- Recoil
  ```
  npm i recoil
  ```
- Framer-motion
  ```
  npm i framer-motion
  ```
- gh-pages (배포)
  ```
  npm i gh-pages
  ```
- React-router-dom
  ```
  npm i react-router-dom
  ```

## Script

```
$ npm start
$ npm run deploy
```

## Deploy

- <a href="https://kangactor123.github.io/opensourceHm">Github page</a>

## Description

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

## Update

- 3/14 검색 Enter 입력 시 검색되도록 수정, 검색 시 localStorage 제대로 저장 작동 안되던 버그 수정

## Refactoring (3/17 ~ )

- 데이터 플로우 설계 다시하기
- 3/21 : Input Page Refactoring
- 3/22 : Update 모달 창 리뉴얼 및 수정할 데이터 노출되도록 Update, 컴포넌트 최적화 작업
- 3/28 : Trash 쓰래기통 구현 (localStorage 이용), Did, Done 구현
- 3/30 : isMenuOpen state Custom Hook 으로 빼고 style 파일 분리

## Issue

- 검색 후 삭제했을때 리스트가 비어졌을시 돌아가야함
