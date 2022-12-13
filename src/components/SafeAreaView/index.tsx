import React from "react";
import { ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";

// This cross-platform component will ensure that our
// main app content does not overlap with hardware notches or home bars.
const SafeAreaView = ({ children }: ViewProps) => {
  const safeInsets = useSafeAreaInsets();

  return (
    <S.SafeAreaView
      paddingTop={safeInsets.top}
      paddingBottom={safeInsets.bottom + safeInsets.top}
    >
      {children}
    </S.SafeAreaView>
  );
};

export default SafeAreaView;
