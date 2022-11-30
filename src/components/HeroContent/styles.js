import styled from "styled-components";

export const HeroH1 = styled.h1`
  font-size: 3rem;
  color: #333333;
  opacity: 1;
  font-weight: bolder;
  text-align: center;
  margin-top: 4rem;
  line-height: 1.2;
  letter-spacing: -0.06em;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  padding: 0.5rem;
  transition: 0.6s;
  cursor: pointer;
  

  &:hover {
    filter: brightness(1.75);
    transform: scale(1.03);
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    color:#000;
  }

  p {
    font-size: 14px;

    line-height: 1.2;
    letter-spacing: 0.1em;

    font-weight: 400;
  }
`;
