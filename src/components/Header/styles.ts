import styled from "styled-components/native";

import { APP_COLORS } from "@@helpers/constants-helper";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${APP_COLORS.GRAY6};
  border-bottom-width: 1px;
  padding: 8px 16px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: ${APP_COLORS.GRAY1};
`;

export const ResultCountContainer = styled.View`
  width: 28px;
  border-radius: 50%;
  background-color: ${APP_COLORS.GRAY6};
  justify-content: center;
  align-items: center;
`;

export const ResultCount = styled.Text`
  font-weight: 700;
`;
