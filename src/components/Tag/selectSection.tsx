// Task 생성 시 유형 선택 박스 컴포넌트
// 타입스크립트 문법 더 공부하고 완성하기 (중요!)

import React, { useState } from 'react';
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const TypeSelect: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectType, setSelectType] = useState('Task 유형을 선택하세요');

    const ListIcon = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (type: string) => {
        setSelectType(type);
        setIsOpen(false);
    };

    return (
        <section className="SelectType">
            <h2 className="hidden">Task 유형을 선택하세요</h2>
            <button className="{`SelectButton ${isOpen ? 'click' : ''}`}" onClick={ListIcon}>{selectType}</button> 
            {isOpen && (
                <ul className="list-member">
                    {['In Review', 'In Progress', 'Approved', 'Waiting'].map((type) => (
                        <li key={type}>
                            <button className="button" onClick={() => handleSelect(type)}>{type}</button>
                        </li>
                    ))}
                </ul>
            )}
        </section> 
    );
};

export default TypeSelect;

// import React, { useState } from "react";

// // TaskOption 타입 정의
// type TaskOption = "개발" | "디자인" | "기획" | "테스트";

// const TaskSelector: React.FC = () => {
//   // 선택된 옵션을 관리하는 state
//   const [selectedTask, setSelectedTask] = useState<string>("Task 유형을 선택하세요");
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

//   // 선택 가능한 옵션 목록
//   const taskOptions: TaskOption[] = ["개발", "디자인", "기획", "테스트"];

//   // 드롭다운 열기/닫기 핸들러
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // 옵션 선택 핸들러
//   const handleOptionClick = (option: TaskOption) => {
//     setSelectedTask(option);
//     setIsDropdownOpen(false); // 옵션 선택 후 드롭다운 닫기
//   };

//   return (
//     <div style={{ width: "200px", margin: "50px auto", textAlign: "center" }}>
//       {/* 선택된 내용이 표시되는 버튼 */}
//       <div 
//         onClick={toggleDropdown} 
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "5px",
//           cursor: "pointer",
//           backgroundColor: "#f8f8f8",
//         }}
//       >
//         {selectedTask}
//       </div>

//       {/* 드롭다운 메뉴 */}
//       {isDropdownOpen && (
//         <ul 
//           style={{
//             listStyleType: "none",
//             padding: 0,
//             margin: 0,
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             backgroundColor: "#fff",
//             marginTop: "5px"
//           }}
//         >
//           {taskOptions.map((option) => (
//             <li
//               key={option}
//               onClick={() => handleOptionClick(option)}
//               style={{
//                 padding: "10px",
//                 cursor: "pointer",
//                 borderBottom: option !== taskOptions[taskOptions.length - 1] ? "1px solid #ddd" : "none"
//               }}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskSelector;
