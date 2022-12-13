import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { windowWidth } from "@@helpers/utility-helper";

export const BodyContainer = styled(KeyboardAwareScrollView)`
  padding: 0 16px;
  min-height: 100%;
`;

export const InitialFormContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const HeroImage = styled.Image`
  width: ${0.9 * windowWidth}px;
`;

export const FetchButton = styled.Button``;
