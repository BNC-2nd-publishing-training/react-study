// import { useState, ChangeEvent } from 'react';
// import styled from "@emotion/styled";

// // 카테고리 목록
// interface Category {
//   id: number;
//   data: string;
// }

// const CATEGORY_LIST: Category[] = [
//   { id: 0, data: '서울' },
//   { id: 1, data: '인천' },
//   { id: 2, data: '경기' },
//   { id: 3, data: '경북' },
//   { id: 4, data: '경남' },
//   { id: 5, data: '전북' },
//   { id: 6, data: '전남' },
//   { id: 7, data: '제주' },
// ];

// function ProdBasicInfo() {
//   // 데이터를 넣을 빈배열
//   const [checkedList, setCheckedList] = useState<string[]>([]);

//   // onChange함수를 사용하여 이벤트 감지, 필요한 값 받아오기
//   const onCheckedElement = (checked: boolean, item: string) => {
//     if (checked) {
//       setCheckedList([...checkedList, item]);
//     } else if (!checked) {
//       setCheckedList(checkedList.filter(el => el !== item));
//     }
//   };

//   // x를 누르면 리스팅 목록에서 카테고리가 삭제되며 체크도 해제 된다
//   const onRemove = (item: string) => {
//     setCheckedList(checkedList.filter(el => el !== item));
//   };

//   return (
//     <CategoryContainer>
//       <Category>카테고리 *</Category>
//       <SelectContainer>
//         {/* map 함수를 이용해 체크박스 container에 체크박스 목록 생성하기 */}
//         <CheckBox>
//           {CATEGORY_LIST.map(item => (
//             <Label key={item.id}>
//               <Check
//                 type="checkbox"
//                 value={item.data}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                   onCheckedElement(e.target.checked, e.target.value);
//                 }}
//                 checked={checkedList.includes(item.data)}
//               />
//               <Type>{item.data}</Type>
//             </Label>
//           ))}
//         </CheckBox>
//         <SelectedBox>
//           {/* checkedList가 빈배열일 경우, 조건부 렌더링 사용 */}
//           {checkedList.length === 0 && (
//             <AlertMessage>카테고리를 지정해 주세요.</AlertMessage>
//           )}
//           {/* checkedList에 데이터가 들어가있을 경우 리스팅 */}
//           {checkedList.map(item => (
//             <SelectedCategory key={item}>
//               <Selected>{item}</Selected>
//               <CancelChecked onClick={() => onRemove(item)}>X</CancelChecked>
//             </SelectedCategory>
//           ))}
//         </SelectedBox>
//       </SelectContainer>
//     </CategoryContainer>
//   );
// }

// const Type = styled.div`
// `;

// const Label = styled.div`
// `;
// const Check = styled.div`
// `;
// const Category = styled.div`
// `;


// const Selected = styled.div`
// `;

// const CheckBox = styled.div`
// `;


// const AlertMessage = styled.div`
// `;


// const CategoryContainer = styled.div`
// `;

// const SelectContainer = styled.div`
// `;

// const SelectedBox = styled.div`
// `;

// const SelectedCategory = styled.div`
// `;

// const CancelChecked = styled.div`
// `;


// export default ProdBasicInfo;

const [isCheckAll, setIsCheckAll] = useState(false)
const [isCheckingBox, setIsCheckingBox] = useState(false)
const [checkedArr, setCheckedArr] = useState([])

const changeAllCheck = (e) => {
    if (e.target.checked) {
      setIsCheckAll(true)
    } else {
      setIsCheckAll(false)
      setCheckedArr([])
    }
  }

  const checkingCheckedBox = () => {
    setIsCheckAll(false)
    setIsCheckingBox(true)
    setCheckedArr([])
  }

<div className='class_check_box'>
     <input type='checkbox' id='all_class_checkbox' onClick={e=> changeAllCheck(e)} checked={isCheckAll} />
     <label htmlFor='all_class_checkbox' />
         {checkedArr.length > 0 && checkedArr.length !== classData.length && (
                  <img src={checkingCheckbox} onClick={checkingCheckedBox} alt='checkingCheckbox' />
          )}
</div>

