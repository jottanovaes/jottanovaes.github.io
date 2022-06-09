import polygon4 from '../../asssets/polygon4.png'
import profile from '../../asssets/profile.png'

import * as S from './styles.ts'

export function About() {
  return (
    <S.AboutSection>

      <S.BlueBG>
        <S.AboutAside>
          <S.Title>Jotta Novaes</S.Title>
          <S.SubTitle>Front-End Developer Jr.</S.SubTitle>
        </S.AboutAside>
      </S.BlueBG>
      
      <S.RedBG>
        <S.ProfileAside>
          <S.Polygon src={profile} alt="polygon"/>
        </S.ProfileAside>
      </S.RedBG>

    </S.AboutSection>
  )
}