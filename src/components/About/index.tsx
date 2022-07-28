import React from 'react';
import profile from '../../asssets/funny.jpg';
// @ts-ignore
import * as S from './styles.ts';

export default function About() {
  return (
    <S.AboutSection>

      <S.BlueBG>
        <S.AboutAside>
          <S.Title>Jotta Novaes</S.Title>
          <S.SubTitle>FullStack Developer</S.SubTitle>
        </S.AboutAside>
      </S.BlueBG>
      
      <S.RedBG>
        <S.ProfileAside>
          <S.StrippedBox>
            <S.Polygon src={profile} alt="Author"/>
          </S.StrippedBox>
        </S.ProfileAside>
      </S.RedBG>

      <S.FullBG>
        <S.AboutTitle>
        who·am·i·?
        </S.AboutTitle>
        <S.AboutText>
          A long-life learner with a contemplative nature a big heart and a even bigger patience
        </S.AboutText>
      </S.FullBG>

    </S.AboutSection>
  )
}