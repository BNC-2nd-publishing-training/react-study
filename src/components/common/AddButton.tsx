import { color } from "@/styles";
import styled from "@emotion/styled";

const AddButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Container type="button" {...props} />;
};
export default AddButton;

const Container = styled.button`
  padding: 11px 12px;
  background-color: ${color.primary20};
  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 2px 10px 0px rgba(98, 60, 231, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 28px;
    background-image: url(data:image/svg+xml,%3csvg%20width%3d%2228%22%20height%3d%2229%22%20viewBox%3d%220%200%2028%2029%22%20fill%3d%22none%22%20xmlns%3d%22http://www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M21%2015.6666H15.1666V21.5C15.1666%2022.1416%2014.6416%2022.6666%2013.9999%2022.6666C13.3583%2022.6666%2012.8333%2022.1416%2012.8333%2021.5V15.6666H7%2015.6666C6.35825%2015.6666%205.83325%2015.1416%205.83325%2014.5C5.83325%2013.8583%206.35825%2013.3333%206.99992%2013.3333H12.8333V7.49998C12.8333%206.85831%2013.3583%206.33331%2013.9999%206.33331C14.6416%206.33331%2015.1666%206.85831%2015.1666%207.49998V13.3333H21%2013.3333C21.6416%2013.3333%2022.1666%2013.8583%2022.1666%2014.5C22.1666%2015.1416%2021.6416%2015.6666%2020.9999%2015.6666Z%22%20fill%3d%22%23fff%22/%3e%3c/svg%3e);
  }
`;
