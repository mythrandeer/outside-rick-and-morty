import styled from "styled-components/native";

type SafeAreaViewProps = {
  paddingTop?: number;
  paddingBottom?: number;
};

export const SafeAreaView = styled.View<SafeAreaViewProps>`
  padding-top: ${({ paddingTop }) => `${paddingTop}px`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
`;
