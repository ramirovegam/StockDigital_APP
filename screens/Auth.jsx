
import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import logo from "../assets/my-logo.png";
import { authStyles as styles } from "../styles/authStyles";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const changeForm = () => setShowLogin(!showLogin);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      {/* Título llamativo */}
      <Text style={styles.title}>StockDigital</Text>

      {/* Formulario */}
      {showLogin ? (
        <LoginForm changeForm={changeForm} />
      ) : (
        <RegisterForm changeForm={changeForm} />
      )}
    </View>
  );
}
