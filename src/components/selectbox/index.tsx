import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const SelectBox=()=>{
    return(
        <Container placeholder="Task의 상태를 선택해주세요">

        </Container>
    )
}

const Container=styled.input`
    width: 480px;
    height:42px;
    padding: 10.5px 16px;
    outline: none;
    border: 1px solid rgba(205, 205, 205, 1);
    margin-left: 75px;
    margin-top: 31px;
    ::placeholder{
        color: ${theme.color.gray40};
        font-size: ${theme.font.textMedium};
        font-weight: 100${theme.font.textMedium};
    }
    
`

export default SelectBox;