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
      <FormTitle>Create TODO</FormTitle>
      <InputBox>
        <InputName>Deadline</InputName>
        <InputDate
          type="date"
          {...register("deadline", {
            required: "Please Input deadline..",
          })}
        />
      </InputBox>
      <InputBox>
        <InputName>Content</InputName>
        <InputToDo
          placeholder="Please Input your content.."
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
      <SubmitButton type="submit">Create</SubmitButton>
    </Wrapper>
  );
}
