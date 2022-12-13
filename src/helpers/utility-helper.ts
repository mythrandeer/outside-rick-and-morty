import { Dimensions } from "react-native";

const getWindowWidth = () => Dimensions.get("window").width;
const getWindowHeight = () => Dimensions.get("window").height;

export const windowWidth = getWindowWidth();
export const windowHeight = getWindowHeight();
