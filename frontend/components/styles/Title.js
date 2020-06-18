import styled from "styled-components"

const Title = styled.h1`
  font-size: 2.4rem;
  grid-column: 2 / -2;
  margin: 0;
  margin-block-end: 1em;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 1.3px;
  color: #4c4e4d;
  place-self: center;
  font-weight: bold;

  :hover {
    color: #2f3033;
  }
  ::after {
    content: "";
    width: 100%;
    height: 20px;
    background-color: #ffff0091;
    display: block;
    margin-top: -35px;
    margin-left: 10px;
  }
`;

export default Title;