import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { saveSearchKeyword } from "../../localStorage";
import { searchKeyword, searchList } from "../../store";
import DataList from "./DataList";
import {
  Icon,
  SearchBar,
  SearchBox,
  SearchWrapper,
} from "./style/search.style";

interface IKeyword {
  keyword: string;
}

function SearchSection() {
  const { register, handleSubmit, setValue } = useForm<IKeyword>();
  const setSearchList = useSetRecoilState(searchList);
  const setSearchKeyword = useSetRecoilState(searchKeyword);

  const onValid = (data: IKeyword) => {
    setSearchList((prev) => {
      return [...prev, data.keyword];
    });
    setSearchKeyword(data.keyword);
    saveSearchKeyword(data.keyword);
    setValue("keyword", "");
  };
  return (
    <>
      <SearchWrapper>
        <SearchBox onSubmit={handleSubmit(onValid)}>
          <SearchBar
            placeholder="Please Input Keyword.."
            list="searchList"
            {...register("keyword", {
              required: "검색어를 입력해주세요.",
              minLength: {
                value: 1,
                message: "한 글자 이상 입력해주세요.",
              },
            })}
          />
          <Icon />
        </SearchBox>
        <DataList />
      </SearchWrapper>
    </>
  );
}

export default SearchSection;
