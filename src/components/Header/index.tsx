import React from "react";

import { useAppContext } from "@@context/AppContext";

import * as S from "./styles";

const Header = () => {
  const { resultCount, userName } = useAppContext();
  return (
    <S.HeaderContainer>
      <S.UserName>{userName}</S.UserName>
      <S.ResultCountContainer>
        <S.ResultCount>{resultCount}</S.ResultCount>
      </S.ResultCountContainer>
    </S.HeaderContainer>
  );
};

export default Header;
