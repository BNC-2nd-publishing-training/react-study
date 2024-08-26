import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 630px;
  height: 645px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
`;

export const CansleImage = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  align-self: flex-end;
  margin-top: 26px;
  margin-right: 24px;
  cursor: pointer;
`;
