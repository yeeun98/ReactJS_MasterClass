import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  txtColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${prop => prop.bgColor}
`;

interface CircleProps {
  bgColor: string;
  txtColor: string;
}

function Circle( { txtColor }: CircleProps ) {
  return <Container txtColor={txtColor} bgColor="pink" />;
}

export default Circle;