
import React from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";

export default function ProductActionModal({ visible, onDismiss, product, onEdit, onDelete }) {
  if (!product) return null;

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
        <Text style={styles.title}>Acciones para {product.name}</Text>
        <Button mode="contained" onPress={onEdit} style={styles.button}>
          Editar
        </Button>
        <Button mode="contained" onPress={onDelete} style={styles.button}>
          Eliminar
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
    backgroundColor: "#1E1E1E",
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
  button: {
    marginBottom: 10,
  },
  cancel: {
    marginTop: 5,
  },
});
