import styled from "styled-components";
import { FiLink2 } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcffeb;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background: #474350;
  color: #f8fff4;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px auto;
  padding: 25px 0;
  min-width: 768px;
  height: 480px;
  background: #fafac6;
  border-radius: 4px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > input {
      height: 32px;
      width: 256px;
      background: #f8fff4;
      margin-top: 8px;
      border: 1px solid #474350;
      border-radius: 4px;
      padding: 0 8px;
    }

    > button {
      margin-top: 16px;
      height: 32px;
      background: #474350;
      color: #f8fff4;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    > span {
      color: #fa7394;
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;

export const Logo = styled(FiLink2)`
  width: 24px;
  height: 24px;
  color: #474350;
  margin: 0 auto;
`;
