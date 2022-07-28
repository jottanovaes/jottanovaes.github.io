import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  margin: auto;
  padding: 1rem 2rem;
  align-items: center;
  border-bottom: 2px solid black;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const Logo = styled.img`
  height: 24px;
  width: 24px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-size: 1.3rem;
  display: inline-block;
  position: relative;
  font-weight: 400;
  padding: 4px 0;
  cursor: pointer;

  ::after{
    content: '';
    width: 100%;
    position: absolute;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`