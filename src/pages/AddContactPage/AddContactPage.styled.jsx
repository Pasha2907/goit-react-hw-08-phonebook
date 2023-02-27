import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const Btn = styled.button`
  margin-bottom: 15px;
  cursor: pointer;
  border: 1px solid #cecece;
  background: #f6f6f6;
  box-shadow: inset 0px 20px 20px #ffffff;
  border-radius: 8px;
  padding: 8px 14px;
  width: 120px;
  :hover {
    box-shadow: inset 0px -20px 20px #ffffff;
  }
`;
