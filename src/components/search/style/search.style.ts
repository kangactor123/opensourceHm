import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchWrapper = styled.div`
  height: 10vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 0 10px;
`;
export const SearchBox = styled.form`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  right: 30px;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 35px;
  background-color: #ffffff;
  border: 0;
  padding-left: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
  }
`;
