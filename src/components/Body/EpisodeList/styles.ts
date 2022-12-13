import styled from "styled-components/native";

import { APP_COLORS } from "@@helpers/constants-helper";

export const ListHeader = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 32px;
  color: ${APP_COLORS.BLUE};
  text-transform: uppercase;
  letter-spacing: 0.2px;
`;

export const EpisodeItem = styled.View``;

export const EpisodeName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${APP_COLORS.GRAY3};
`;

export const EpisodeAirDate = styled.Text`
  font-size: 14px;
  color: ${APP_COLORS.GRAY4};
`;

export const Separator = styled.View`
  height: 16px;
`;
