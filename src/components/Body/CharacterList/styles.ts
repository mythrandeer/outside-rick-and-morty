import styled from "styled-components/native";

import { APP_COLORS } from "@@helpers/constants-helper";

export const ListHeader = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${APP_COLORS.BLUE};
  text-transform: uppercase;
  letter-spacing: 0.2px;
`;

export const CharacterItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CharacterImage = styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 8px;
`;

export const CharacterDetails = styled.View``;

export const CharacterName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${APP_COLORS.GRAY3};
`;

export const CharacterStatus = styled.Text`
  font-size: 14px;
  color: ${APP_COLORS.GRAY4};
`;

export const Separator = styled.View`
  height: 8px;
`;
