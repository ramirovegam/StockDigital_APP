
import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Fondo oscuro
    padding: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#333", // Borde oscuro
    paddingBottom: 10,
  },
  profilePicPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333", // Fondo oscuro para el avatar
    marginBottom: 10,
    justifyContent: "center", // Centra el ícono
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#fff", // Texto blanco para tema oscuro
  },
  headerButtons: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 5,
  },
  logout: {
    marginTop: 5,
    alignSelf: "center",
  },
  grid: {
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    margin: 5,
  },
  fakeImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    backgroundColor: "#333", // Fondo oscuro para imágenes simuladas
  },
  imageLabel: {
    fontSize: 12,
    color: "#fff", // Texto blanco para etiquetas
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#333",
    marginTop: 10,
  },
});
