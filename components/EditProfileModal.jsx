
import React from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Text, TextInput, Button } from "react-native-paper";
import { modalStyles as styles } from "../styles/modalStyles"; // ✅ Importa los esti
/**
 * ✅ Componente Modal para editar el nombre de usuario.
 * Props:
 * - visible: boolean → controla si el modal está visible.
 * - onDismiss: función → cierra el modal.
 * - newUsername: string → valor actual del input.
 * - setNewUsername: función → actualiza el valor del input.
 * - onSave: función → guarda el nuevo nombre en la base de datos.
 */
export default function EditProfileModal({ visible, onDismiss, newUsername, setNewUsername, onSave }) {
  return (
    <Portal>
      {/* ✅ Modal centrado con contenido */}
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
        {/* ✅ Título del modal */}
        <Text style={styles.title}>Editar Nombre de Usuario</Text>

        {/* ✅ Campo de texto para ingresar el nuevo nombre */}
        <TextInput
          label="Nuevo nombre"
          value={newUsername}
          onChangeText={setNewUsername}
          style={styles.input}
        />

        {/* ✅ Botón para guardar el nuevo nombre */}
        <Button mode="contained" onPress={onSave} style={styles.button}>
          Guardar
        </Button>

        {/* ✅ Botón para cancelar y cerrar el modal */}
        <Button mode="contained" onPress={onDismiss} style={styles.cancel}>
          Cancelar
        </Button>
      </Modal>
    </Portal>
  );
}

