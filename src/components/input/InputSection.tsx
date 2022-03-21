import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IToDo } from "../../interface";
import { saveInLocalStroage } from "../../localStorage";
import { toDos } from "../../store";
import {
  FormTitle,
  Wrapper,
  InputDate,
  InputName,
  InputToDo,
  SubmitButton,
  InputBox,
} from "./input.style";

export default function InputSectionn() {
  const { register, handleSubmit } = useForm<IToDo>();
  const setLocalToDos = useSetRecoilState(toDos);
  const navigator = useNavigate();
  const onValid = (data: IToDo) => {
    const toDo = {
      id: Date.now(),
      title: data.title,
      deadline: data.deadline,
      done: false,
    };
    saveInLocalStroage(toDo);
    setLocalToDos((prev) => [...prev, toDo]);
    navigator("/opensourceHm");
  };
  return (
    <Wrapper onSubmit={handleSubmit(onValid)}>
      <FormTitle>투두 생성하기</FormTitle>
      <InputBox>
        <InputName>기 한 : </InputName>
        <InputDate
          type="date"
          {...register("deadline", {
            required: "날짜를 입력해주세요",
          })}
        />
      </InputBox>
      <InputBox>
        <InputName>할 일 : </InputName>
        <InputToDo
          placeholder="20글자 이내로 입력해주세요."
          {...register("title", {
            required: "할 일을 입력해주세요.",
            minLength: {
              value: 0,
              message: "한 글자 이상 입력해주세요.",
            },
            maxLength: {
              value: 40,
              message: "40글자 이하로 입력해주세요.",
            },
          })}
        />
      </InputBox>
      <SubmitButton type="submit">생성하기</SubmitButton>
    </Wrapper>
  );
}
