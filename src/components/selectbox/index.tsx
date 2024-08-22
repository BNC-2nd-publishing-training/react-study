import Select, { StylesConfig } from "react-select";
import { theme } from "@/styles/theme";

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: (selectedOption: { value: string; label: string } | null) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange }) => {
  const customStyles: StylesConfig<unknown, false> = {
    container: (styles) => ({
      ...styles,
      marginLeft: "75px",
      marginTop: "30px",
      width: "480px",
    }),
    control: (styles) => ({
      ...styles,
      border: `1px solid ${theme.color.gray40}`,
      padding: "5px",
      fontSize: theme.font.textMedium.fontSize,
      fontWeight: theme.font.textMedium.fontWeight,
      outline: "none",
    }),
    menu: (styles) => ({
      ...styles,
      marginTop: "0px",
      width: "100%",
      border: `1px solid ${theme.color.gray40}`,
      borderTop: "none",
      borderRadius: "0 0 1px 1px ",
      padding: "5px 3px",
      fontSize: theme.font.textMedium.fontSize,
      fontWeight: theme.font.textMedium.fontWeight,
      boxShadow: "none",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: theme.color.gray40,
      fontSize: theme.font.titleMedium.fontSize,
      fontWeight: theme.font.textMedium.fontWeight,
    }),
  };

  return (
    <Select
      value={{ label: value, value }}
      onChange={(selectedOption) => onChange(selectedOption as never)}
      options={options.map((option) => ({ label: option, value: option }))}
      styles={customStyles}
      components={{ IndicatorSeparator: () => null }}
    />
  );
};

export default SelectBox;
