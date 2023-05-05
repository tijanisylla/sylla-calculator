import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

interface IStyles {
  btnBlue: object;
  btnDark: object;
  btnGray: object;
  btnLight: object;
  smallTextLight: object;
  smallTextDark: object;
  row: object;
  viewButton: object;
  screenFirstNumber: object;
  screenSecondNumber: object;
}

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.dark,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  //   Text
  smallTextLight: {
    fontSize: 32,
    color: myColors.light,
  },

  smallTextDark: {
    fontSize: 32,
    color: myColors.dark,
  },
  //   Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewButton: {
    position: "absolute",
    bottom: 50,
  },

  screenFirstNumber: {
    fontSize: 80,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 80,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
}) as IStyles;
