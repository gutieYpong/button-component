import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 100%; // 65px
  /* height: 10vh; */
  /* max-height: 95px; // config of sticky bottom */
  display: grid;
  grid-column: 4 / 10;
  align-items: center;
  /* margin-top: -10vh; // config of sticky bottom */
`;

const CreatedBy = styled.p`
  /* Layout */
  width: 100%;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
`;

const Footer = () => {
  return (
    <Container>
      <CreatedBy>created by <b><u>gutieYpong</u></b> - devChallenges.io</CreatedBy>
    </Container>
  )
}

export default Footer;