import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, SafeAreaView, Text, View } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/components/styles/Colors";
import MykeyBoard from "./src/components/MykeyBoard";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: theme === "light" ? myColors.dark : myColors.light,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            By Tijani Sylla
          </Text>
          <Switch
            trackColor={{
              true: "#FFA500",
            }}
            value={theme === "light"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>

        <MykeyBoard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
