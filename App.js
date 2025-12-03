
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider, MD3DarkTheme } from "react-native-paper";
import Auth from "./screens/Auth";

import Home from "./screens/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

const theme = {
  ...MD3DarkTheme,      // Base MD3 en dark
  dark: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#000000",        // Botón/acentos negros
    onPrimary: "#ffffff",      // Texto sobre primary
    background: "#121212",     // Fondo general oscuro
    onBackground: "#ffffff",   // Texto en fondo
    surface: "#1E1E1E",        // Tarjetas/inputs
    onSurface: "#ffffff",      // Texto en surface
    outline: "#3A3A3A",        // Borde cuando NO está enfocado
    // 👇 Estos dos hacen que labels/placeholders se vean translúcidos y suaves
    onSurfaceVariant: "rgba(255,255,255,0.6)",
    placeholder: "rgba(255,255,255,0.6)",
  },
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <PaperProvider theme={theme}>
      {user ? <Home user={user} /> : <Auth />}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Usa el color del tema mejor que "#fff"
    backgroundColor: theme.colors.background,
    justifyContent: "center",
  },
});
