import React from "react";
import { Keyboard } from "react-native";

import { useAppContext } from "@@context/AppContext";
import { APP_COLORS } from "@@helpers/constants-helper";

import * as S from "./styles";

// I would ideally use something like formik to manage and submit forms
// if we're dealing multiple inputs. Since we probably simply
// want the name reflected in Header, I utilized a simple TextInput.
const NameInputForm = () => {
  const { setUserName } = useAppContext();

  return (
    <S.NameInputFormContainer onPress={Keyboard.dismiss}>
      <>
        <S.FormHeader>Please enter your name</S.FormHeader>
        <S.NameInput
          placeholder="Rick & Morty"
          placeholderTextColor={APP_COLORS.GRAY6}
          onChangeText={setUserName}
        />
      </>
    </S.NameInputFormContainer>
  );
};

export default NameInputForm;
