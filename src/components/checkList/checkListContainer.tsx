import CheckListContainer from ".";


type Status = "Approved" | "InReview" | "InProgress" | "Wating";

const List: { title: string; status: Status }[]=[
  { title: "간지나게 숨쉬기", status: "Approved" },
  { title: "간지나게 숨쉬기", status: "InReview" },
  { title: "간지나게 숨쉬기", status: "InProgress" },
  { title: "간지나게 숨쉬기", status: "InProgress" },
  { title: "간지나게 숨쉬기", status: "Wating" },
];

const CheckList = () => {
  return (
    <>
      {List.map((item, index) => (
        <CheckListContainer key={index} title={item.title} status={item.status} />
      ))}
    </>
  );
};

export default CheckList;