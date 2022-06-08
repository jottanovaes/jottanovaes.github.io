import * as S from "./styles.ts";

export default function Home() {
  return (
    <S.NavBar>
      <S.Logo>Jotta</S.Logo>
      <S.List>
        <S.ListItem>about me</S.ListItem>
        <S.ListItem>projects</S.ListItem>
        <S.ListItem>get in touch</S.ListItem>
      </S.List>
    </S.NavBar>
  )
}