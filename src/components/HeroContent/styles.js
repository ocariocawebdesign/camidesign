import styled from "styled-components";

export const HeroH1 = styled.div`
  font-size: 3rem;
  color: #333333;
  opacity: 1;
  font-weight: bolder;
  text-align: center;
  margin-top: 4rem;
  line-height: 1.2;
  letter-spacing: -0.06em;
  /*border: 1px solid #e3e3e3;
  border-radius: 3px;*/
  padding: 0.5rem;
  transition: 0.6s;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    //border: 1px solid #e3e3e3;
    background-color: #fff; /*#dbdbdb;*/
    border-radius: 5px;
    opacity: 0.6;
  }

  p {
    font-size: 14px;
    letter-spacing: 0.1em;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  a {
    color: #333333;
    text-decoration: none;
  }

  .camiLogo {
    width: 220px;
    height: 220px;
    margin-top: 50%;
  }

  .camiLogo:hover {
  }

  // Medium devices (tablets, 768px and up)
  /*@media (min-width: 768px) {
    .camiLogo {
      margin-top: 0;
    }
  }*/

  @media (max-width: 732px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 360px) and (height: 740px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 360px) and (height: 640px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 390px) and (height: 844px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 412px) and (height: 732px) {
    .camiLogo {
      margin-top: -20%;
    }
  }

  @media (width: 375px) and (height: 667px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 375px) and (height: 812px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 412px) and (height: 915px) {
    .camiLogo {
      margin-top: 0;
    }
  }

  @media (width: 414px) and (height: 896px) {
    .camiLogo {
      margin-top: 0;
    }
  }
`;
