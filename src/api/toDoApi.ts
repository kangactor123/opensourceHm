import { IToDo } from "../interface";

const BASE_URL = "/api/todos";

//HTTP status 가 500 일 경우 서버가 offline이라고 가정

/*
saveInLocalStroage : localStorage에 저장
getFromLocalStroage : 
  매개변수 id가 존재할 경우 해당 toDo만 반환, 
  아닐 경우 localStorage에서 조회한 전체 리스트 반환
*/
function saveInLocalStroage(toDo: IToDo) {
  localStorage.setItem("TODOS", JSON.stringify(toDo));
}

function getFromLocalStroage(id?: number) {
  const toDos = JSON.parse(localStorage.getItem("TODOS") as any);

  //id가 존재할 경우 (선택 toDo 조회)
  if (id !== undefined) {
    for (let toDo of toDos) {
      if (toDo.id === id) {
        return toDo;
      }
    }
  }
  return toDos;
}

/*
updateFromLocalStorage :
500상태 (Server 가 offline 일 경우) 일 때 localStorage에서 상태를 업데이트 하는 함수
filter 함수를 이용해 해당하는 아이디를 걸러내고, 수정한 객체를 집어넣고 localStorage에 저장

deleteFromLocalStorage :
500상태 (Server 가 offline 일 경우) 일 때 localStorage에서 삭제하려는 toDo를 삭제하는 함ㅅ
filter 함수를 이용해 해당하는 아이디를 걸러내고 나머지 toDo는 다시 localStorage에 저장
*/

function updateFromLocalStorage(toDo: IToDo) {
  const toDos = getFromLocalStroage();
  const newToDo = [
    ...toDos.filter((oldToDo: IToDo) => oldToDo.id !== toDo.id),
    toDo,
  ];
  saveInLocalStroage(newToDo as any);
}

function deleteFromLocalStorage(id: number) {
  const toDos = getFromLocalStroage(id);
  const newToDo = [...toDos.filter((oldToDo: IToDo) => oldToDo.id !== id)];
  saveInLocalStroage(newToDo as any);
}

//전체 toDo 불러오는 api
export async function getAllToDo() {
  return await (
    await fetch(BASE_URL)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);

        if (error.status === 500) {
          return getFromLocalStroage();
        }
      })
  )();
}

//선택한 toDo 불러오는 api
export async function getToDo(id: number) {
  return await (
    await fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);

        if (error.status === 500) {
          return getFromLocalStroage(id);
        }
      })
  )();
}

//새로운 toDo 생성 api
//ID는 문제에 없어서 전송하지 않았습니다. 서버에서 ID를 생성해서 데이터화 시킨다고 가정하겠습니다.

export async function createToDo(toDo: IToDo) {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: toDo.title,
      done: toDo.done,
      deadline: toDo.deadline,
    }),
  })
    .then((response) =>
      response.status === 200 ? console.log("Create Success") : false
    )
    .catch((error) => {
      console.log(error);

      if (error.status === 500) {
        return saveInLocalStroage(toDo);
      }
    });
}

export async function updateToDo(toDo: IToDo) {
  return await fetch(`${BASE_URL}/${toDo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: toDo.title,
      done: toDo.done,
      deadline: toDo.deadline,
    }),
  })
    .then((response) =>
      response.status === 200 ? console.log("Update Success") : false
    )
    .catch((error) => {
      console.log(error);

      if (error.status === 500) {
        return updateFromLocalStorage(toDo);
      }
    });
}

export async function deleteToDo(toDo: IToDo) {
  return await fetch(`${BASE_URL}/${toDo.id}`, {
    method: "DELETE",
  })
    .then((response) =>
      response.status === 200 ? console.log("Delete Success") : false
    )
    .catch((error) => {
      console.log(error);

      if (error.status === 500) {
        return deleteFromLocalStorage(toDo.id as any);
      }
    });
}
