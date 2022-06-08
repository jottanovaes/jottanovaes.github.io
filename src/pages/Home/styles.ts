import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 90%;
  margin: auto;
  padding: 1rem;
`

export const Logo = styled.h1`
  color: black;
  font-size: 2rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-size: 1.3rem;
`