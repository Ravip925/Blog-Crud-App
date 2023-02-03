import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>About Us</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            ipsa libero. Corrupti, reiciendis? Beatae, impedit, nam possimus
            ratione eligendi laudantium aliquid dolore excepturi, molestias
            veniam cum aspernatur error ipsam repellendus?
          </Desc>
        </Left>
        <Right>
          <Title>Address</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptate similique, iure vel id aliquid cum inventore saepe,
            necessitatibus, aut ducimus repellendus debitis impedit unde earum
            illum dolorem repudiandae! Inventore!
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
