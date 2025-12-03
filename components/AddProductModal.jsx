
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Modal, Portal, Text, TextInput, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const techIcons = [
  { name: "cpu" },
  { name: "smartphone" },
  { name: "monitor" },
  { name: "printer" },
  { name: "tablet" },
  { name: "wifi" },
  { name: "hard-drive" },
];

export default function AddProductModal({
  visible,
  onDismiss,
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  productStock,
  setProductStock,
  onSave,
  selectedIcon,
  setSelectedIcon,
}) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        <Text style={styles.title}>Agregar Producto</Text>

        {/* Campos del formulario */}
        <TextInput
          label="Nombre del producto"
          value={productName}
          onChangeText={setProductName}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Precio"
          value={productPrice}
          onChangeText={setProductPrice}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Stock"
          value={productStock}
          onChangeText={setProductStock}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />

        {/* Selector de ícono */}
        <Text style={styles.subtitle}>Selecciona un ícono</Text>
        <View style={styles.iconList}>
          {techIcons.map((icon) => (
            <TouchableOpacity
              key={icon.name}
              style={[
                styles.iconButton,
                selectedIcon === icon.name && { backgroundColor: "#333" },
              ]}
              onPress={() => setSelectedIcon(icon.name)}
            >
              <Feather name={icon.name} size={28} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Botones */}
        <Button mode="contained" onPress={onSave} style={styles.button}>
          Guardar
        </Button>
        <Button mode="text" onPress={onDismiss} style={styles.cancel}>
          Cancelar
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
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
