import styled from "styled-components";

interface FigureProps {
  imagemSource: string
}

const FigureBanner = styled.figure<FigureProps>`
  background-image: ${(props) => `url(${props.imagemSource})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const BannerText = styled.h1`
  position: absolute;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

interface props {
  texto: string,
  imagemSource: string
}

export default function Banner(props: props) {
  const {texto, imagemSource} = props
  return (
    <FigureBanner imagemSource={imagemSource}>
      <BannerText>
        {texto}
      </BannerText>
    </FigureBanner>
  );
}
