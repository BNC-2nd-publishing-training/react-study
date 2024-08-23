import styled from "@emotion/styled";
import CheckListContainer from ".";

type Status = "Approved" | "InReview" | "InProgress" | "Wating";

const List: { title: string; status: Status }[] = [
  { title: "간지나게 숨쉬기", status: "Approved" },
  { title: "간지나게 숨쉬기", status: "InReview" },
  { title: "간지나게 숨쉬기", status: "InProgress" },
  { title: "간지나게 숨쉬기", status: "InProgress" },
  { title: "간지나게 숨쉬기", status: "Wating" },
];

const CheckList = () => {
  return (
    <Container>
      {List.map((item, index) => (
        <CheckListContainer
          key={index}
          title={item.title}
          status={item.status}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  width: 423px;
  height: 258px;
`;
export default CheckList;
