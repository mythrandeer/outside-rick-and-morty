import styled from "styled-components/native";

import { APP_COLORS } from "@@helpers/constants-helper";

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 8px 16px;
  min-height: 48px;
  align-items: center;
  background-color: ${APP_COLORS.WHITE};
  border-top-color: ${APP_COLORS.GRAY6};
  border-top-width: 1px;
`;

export const FooterText = styled.Text``;
