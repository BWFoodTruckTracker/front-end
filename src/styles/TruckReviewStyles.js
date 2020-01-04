import styled from "styled-components";

// Inline styles in FieldSet, P tag ,h1 (spacing)

export const Inputtextarea = styled.textarea`
  display: flex;
  line-height: 1.44em;
  border: 0;
  outline: none;
  padding: 0;
  resize: none;
  width: 100%;
  height: 25vh;
  font-size: 1.8rem;

  ::placeholder {
    font-size: 1rem;
    color: gray;
  }
`;
export const StyledTitleInput = styled.input`
  line-height: 1.44em;
  font-size: 1.5rem;
  width: 100%;
  max-width: 592px;
  margin-bottom: 1%;
  height: 30px;
  :invalid {
    box-shadow: 0 0 5px 1px red;
  }

  :focus:invalid {
    box-shadow: none;
  }
  ::placeholder {
    font-size: 1rem;
    color: gray;
  }
`;

export const StyledButton = styled.button`
  margin-left: 20px;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const StyledRating = styled.div`
  width: 200;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledReviewDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: text;
  padding: 18px;
  max-width: 630px;
`;

export const StyledTruckReviewDiv = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
`;

export const StyledTruckReviewFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const StyledTruckReviewMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
`;
