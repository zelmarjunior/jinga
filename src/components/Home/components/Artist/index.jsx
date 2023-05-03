import styled from "styled-components";
import { Link } from "react-router-dom";

const Artist = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ArtistImage src={props.image}></ArtistImage>
      <ItalicText>{props.italicText}</ItalicText>
      <Description>{props.description}</Description>
      <SeeMore>
        <Link to={props.link}>{props.seeMoreText}</Link>
      </SeeMore>
    </Container>
  );
};

//Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistImage = styled.img`
  width: 100vw;
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 100%);
  border-radius: 16rem;
  border: 3px solid #f2b92a;
`;

const Title = styled.h2`
  color: #d8d2c6fc;
  text-align: center;
  width: 94vw;
  margin: 10px 0 20px 0;
  padding: 0;
`;

const ItalicText = styled.p`
  font-size: 14px;
  font-style: italic;
  color: grey;
  text-align: center;
  margin: 0 0 0 0;
`;

const Description = styled.p`
  font-size: 20px;
  text-align: justify;
  color: white;
  margin: 10px 5px 0px 50px;
  background-color: #2a2a2afc;
  border-radius: 25px;
  padding: 22px;
`;

const SeeMore = styled.p`
  font-size: 16px;
  text-align: end;
  margin: 20px 20px 0 0;
  color: white;
`;
export default Artist;
