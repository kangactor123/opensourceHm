import { useRecoilValue } from "recoil";
import { searchList } from "../../store";

function DataList() {
  const list = useRecoilValue(searchList);
  return (
    <datalist id="searchList">
      {list.map((keyword, index) => (
        <option key={index} value={keyword} />
      ))}
    </datalist>
  );
}

export default DataList;
