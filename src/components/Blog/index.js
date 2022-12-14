import styled from "styled-components";

export const BlogPosts = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); //1fr 1fr 1fr 1fr
  gap: 10px;*/
  display: flex;
  justify-content: center;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 40px;
  padding: 1px;

  .box-content-posts {
    padding: 2rem;
  }

  p {
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 0.1em;
    font-weight: 400;
    text-align: left;
  }

  .wp-block-video {
    max-width: 100%;
  }

  video {
    max-width: 100%;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/*export const ButtonLoadMore = styled.button`
background-color: var(--greenLight);
display: block;
margin: 0 auto 70px auto;//top, right, bottom, left
border: none;
width: 200px;
height:50px;
border-radius: 5px;
color: #fafafa;
cursor: pointer;

&:hover{
  background-color:var(--greenPrimary);
}

&:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}

`
/*import styled from "styled-components";

export const BlogPosts = styled.div`

 /* max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10rem;
  padding-left: 10rem;
  margin-top: 2rem;

  figure {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 16px;

    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.01em;
  }
`;*/
