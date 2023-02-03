import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
  flex-direction: column;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 1)
    ),
    url("https://i.ibb.co/JzSL7Jc/final-dl-beatsnoop-com-Tn-Mp2-V3-S9i.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${mobile({
    width: "100vw",
    height:"100vh",
    alignItems:"center"
  })}
`;
const Wrapper = styled.div`
  width: 52%;
  height: 40vh;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({
    width:"85vw",
    flexDirection: "column",
    justifyContent:"center",
    
  })}
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  text-align: center;
  font-family: "Open Sans";
  font-weight: 800;
  margin: 15px 0;
  color: white;
`;
const TextHeading = styled.h1`
  font-family: "Montserrat";
  background: #4a28bb;
  background: linear-gradient(to left, #451bcf 0%, #cf2525 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: 850;
  text-align: center;
  ${mobile({ fontSize: "30px" })}
`;
const Button = styled.button`
  width: 100%;
  align-items: center;
  margin: 15px 0;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }
  &:hover Span {
    background: none;
  }
`;
const Span = styled.span`
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  transition: 300ms;
`;

const HomeBody = () => {
  return (
    <>
      <Container>
        <TextHeading>WELCOME TO BLOG EXPRESS</TextHeading>
        <Wrapper>
          <Right>
            <TextContainer>
              <Text>EXPLORE ALL THE BLOGS</Text>
              <NavLink to="/blogs" style={{ width: "100%" }}>
                <Button>
                  <Span className="text">Explore</Span>
                </Button>
              </NavLink>
            </TextContainer>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeBody;
