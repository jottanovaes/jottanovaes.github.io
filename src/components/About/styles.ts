import styled from 'styled-components'

export const AboutSection = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const BlueBG = styled.div`
  background-color: #51b5ff;
  flex: 1;
  height: 100%;
  border: 2px solid black;
  border-top: 0;
  border-right: 1px solid black;
`

export const RedBG = styled.div`
  background-color: #f23f3f;
  flex: 1;
  height: 100%;
  border: 2px solid black;
  border-top: 0;
  border-left: 1px solid black;
`

export const FullBG = styled.div`
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 1rem 0;

  @keyframes appear {
    0% {
      opacity: 1;
    }
    
    100% {
      opacity: 0;
    }
  }

  ::after {
    content: "|";
    animation-name: appear;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }
`;

export const AboutText = styled.div`
  width: 100%;
  font-weight: 400px;
  font-size: 1.3rem;
  text-align: center;
  margin: 1rem 0;
`;

export const AboutAside = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 4rem;
`

export const Title = styled.h1`
  font-size: 4rem;
`

export const SubTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`

export const ProfileAside = styled.aside`
  background-color: #f23f3f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const StrippedBox = styled.div`
  height: 300px;
  width: 300px - 20%;
  margin: 0 20px;
  border: none;
  background-color: transparent;
  background: repeating-linear-gradient(45deg, #000, #000 0.1rem, transparent 0, transparent 0.25rem);
`;

export const Polygon = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  transform: translateX(-7.5%) translateY(-7.5%);
`