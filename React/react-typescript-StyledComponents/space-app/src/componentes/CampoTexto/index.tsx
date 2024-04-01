import styled from "styled-components";
import iconeLupa from "/icones/lupa.png";

const CampoEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const OuterWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  border: 2px solid;
  border-image: linear-gradient(45deg, #C98CF1, #7B78E5) 1;
  box-sizing: border-box; 
`;

const InputEstilizado = styled.input`
  height: 56px;
  width: 602px;
  padding: 12px 16px 12px 16px;
  box-sizing: border-box; 
  color: #D9D9D9;
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  &:focus {
    outline: none;
  }
`;

const IconeEstilizado = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
`

interface Props {
  
}

export default function CampoTexto(props: Props){
  return (
  <CampoEstilizado>
    <OuterWrapper>
      <InnerWrapper>
        <InputEstilizado type="text" placeholder="O que você procura?" {...props}/>
        <IconeEstilizado src={iconeLupa} alt="Ícone da lupa"/>
      </InnerWrapper>
    </OuterWrapper>
  </CampoEstilizado>);
}