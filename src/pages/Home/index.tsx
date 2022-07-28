import React from "react";
// @ts-ignore
import * as S from "./styles.ts";

import logo from '../../asssets/logo.svg'
// @ts-ignore
import About from "../../components/About/index.tsx";

export function Home() {
  return (
    <>
      <S.NavBar>
        <S.Logo src={logo} alt="logo"/>
        <S.List>
          <S.ListItem>about me</S.ListItem>
          <S.ListItem>projects</S.ListItem>
          <S.ListItem>get in touch</S.ListItem>
        </S.List>
      </S.NavBar>
      <About />
    </>
  )
}