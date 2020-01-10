import Styled from 'styled-components';

export const EditTrucks = Styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:75vw;
    margin: 0 auto;
    h2 {
        color:#E9BB41;
        
    }

`;
export const FormEdit = Styled.form`

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    input{
        margin:1.5rem 1rem;
        padding:.5rem 1rem;
    }
    textarea{
       margin: 1rem .5rem;
       display:block;
       width:26rem;
       max-width:100%;
       height:10rem;
       max-heght:100%;
    }

    button{
        margin:1rem .5rem;

        font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #DADADA;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #FFB90F;
  }
  &:focus {
    outline: none;
    }
`;