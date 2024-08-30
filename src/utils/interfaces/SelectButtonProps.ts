// Task 타입 선택 버튼 인터페이스

export interface SelectButtonProps {
    selectedType: string;
    setSelectedType: (type: string) => void;
}