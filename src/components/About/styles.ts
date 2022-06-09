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
  border-right: 1px solid black;
`

export const RedBG = styled.div`
  background-color: #f23f3f;
  flex: 1;
  height: 100%;
  border: 2px solid black;
  border-left: 1px solid black;
`

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

export const Polygon = styled.img`
  width: 250px;
  height: 250px;
`