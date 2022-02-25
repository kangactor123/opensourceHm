import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Page = styled.li`
  cursor: pointer;
  font-size: 1.2em;
  &:hover {
    color: red;
  }
`;

function PagingSection() {
  const temp = [1, 2, 3, 4];
  return (
    <Wrapper>
      <PageList>
        {temp.map((item, index) => (
          <Page key={index}>{item}</Page>
        ))}
      </PageList>
    </Wrapper>
  );
}

export default PagingSection;
