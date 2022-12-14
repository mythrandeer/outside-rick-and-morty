import styled from "styled-components/native";

import { APP_COLORS } from "@@helpers/constants-helper";

export const NameInputFormContainer = styled.TouchableWithoutFeedback``;

export const FormHeader = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 32px;
  color: ${APP_COLORS.BLUE};
  text-transform: uppercase;
  letter-spacing: 0.2px;
`;

export const NameInput = styled.TextInput`
  font-size: 20px;
  margin-bottom: 96px;
  background-color: ${APP_COLORS.GRAY7};
  padding: 8px;
  border-radius: 8px;
`;
