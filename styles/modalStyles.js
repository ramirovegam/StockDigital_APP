
import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "#1E1E1E", // Fondo oscuro
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#1E1E1E",
    color: "#fff",
  },
  iconList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 15,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  button: {
    marginBottom: 10,
  },
  cancel: {
    marginTop: 5,
  },
});
