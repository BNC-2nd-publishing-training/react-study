import styled from "@emotion/styled";
import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { theme } from "@/styles/theme";
import { SelectBoxProps } from "@/utils/interfaces/SelectBoxProps";

const SelectBox = ({ onChange }: SelectBoxProps) => {
    const status = [
        { value: "In review", label: "In review" },
        { value: "In progress", label: "In progress" },
        { value: "Approved", label: "Approved" },
        { value: "Waiting", label: "Waiting" },
    ];

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const customStyles: StylesConfig = {
        container: (provided) => ({
            ...provided,
            width: `100%`,
        }),
        control: (provided) => ({
            ...provided,
            cursor: 'default',
            border: `1px solid ${theme.color.gray40}`,
            borderRadius: menuIsOpen ? '6px 6px 0 0' : '6px',
            boxShadow: 'none',
            outline: `none`,
            padding: `5px 5px`,
            fontSize: theme.font.textMedium.fontSize,
            fontWeight: theme.font.textMedium.fontWeight,
        }),
        menu: (provided) => ({
            ...provided,
            width: "100%",
            borderRadius: `0 0 6px 6px`,
            boxShadow: 'none',
            margin: 0,
            padding: '5px 3px 5px 3px',
            border: `1px solid ${theme.color.gray40}`,
            borderTop: 'none',
            fontWeight: theme.font.textMedium.fontWeight,
            fontSize: theme.font.textMedium.fontSize,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: 'transparent',
            color: 'black',
            cursor: 'pointer', 
            "&:hover": {
                backgroundColor: theme.color.gray20,
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: theme.color.gray40,
            fontSize: theme.font.textMedium.fontSize,
            fontWeight: theme.font.textMedium.fontWeight,
        }),
    };

    return (
        <Select
            styles={customStyles}
            options={status}
            placeholder="Task의 상태를 선택해주세요"
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            onChange={onChange}
            components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
            }}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: 'transparent',
                    primary: `${theme.colors.neutral20}`,
                },
            })}
        />
    );
};

export default SelectBox;

