import React from "react";

import * as S from "./styles";

// Ideally, we could utilize a BottomTabNavigator for a footer.
// React Navigation seemed out of scope for this use case as
// there aren't multiple screens.
const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterText>rick-and-morty-explorer</S.FooterText>
    </S.FooterContainer>
  );
};

export default Footer;
