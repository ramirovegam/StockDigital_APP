
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000", // Negro
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 2, // Espaciado entre letras
    textShadowColor: "rgba(0,0,0,0.3)", // Sombra ligera
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});
