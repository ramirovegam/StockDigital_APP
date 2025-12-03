
import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebaseConfig";
import { ref, update, onValue } from "firebase/database";
import { homeStyles as styles } from "../styles/homeStyles";
import EditProfileModal from "../components/EditProfileModal";
import AddProductModal from "../components/AddProductModal";
import ProductActionModal from "../components/ProductActionModal";

export default function Home({ user }) {
  const [images, setImages] = useState([]);
  const [editVisible, setEditVisible] = useState(false);
  const [addProductVisible, setAddProductVisible] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);

  const [newUsername, setNewUsername] = useState("");
  const [username, setUsername] = useState("");

  // Estados para el producto
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("cpu");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Cargar datos del usuario desde Firebase
  useEffect(() => {
    const userRef = ref(db, "users/" + user.uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsername(data.username || "Mi Perfil");
        setImages(data.images || []);
      }
    });
  }, [user.uid]);

  // ✅ Actualiza el nombre en Firebase
  const updateUsername = async () => {
    await update(ref(db, "users/" + user.uid), { username: newUsername });
    setUsername(newUsername);
    setEditVisible(false);
  };

  // ✅ Guardar producto en Firebase
  const handleAddProduct = async () => {
    if (!productName || !productPrice || !productStock) {
      alert("Completa todos los campos");
      return;
    }

    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
      icon: selectedIcon,
    };

    let updatedProducts;
    if (selectedProduct) {
      // Editar producto existente
      updatedProducts = images.map((p) =>
        p === selectedProduct ? newProduct : p
      );
    } else {
      // Agregar nuevo producto
      updatedProducts = [...images, newProduct];
    }

    await update(ref(db, "users/" + user.uid), { images: updatedProducts });
    setImages(updatedProducts);

    // Limpiar y cerrar modal
    setProductName("");
    setProductPrice("");
    setProductStock("");
    setSelectedIcon("cpu");
    setSelectedProduct(null);
    setAddProductVisible(false);
  };

  // ✅ Eliminar producto
  const handleDeleteProduct = async () => {
    const updatedProducts = images.filter((p) => p !== selectedProduct);
    await update(ref(db, "users/" + user.uid), { images: updatedProducts });
    setImages(updatedProducts);
    setActionVisible(false);
    setSelectedProduct(null);
  };

  // ✅ Editar producto
  const handleEditProduct = () => {
    setProductName(selectedProduct.name);
    setProductPrice(selectedProduct.price.toString());
    setProductStock(selectedProduct.stock.toString());
    setSelectedIcon(selectedProduct.icon);
    setActionVisible(false);
    setAddProductVisible(true);
  };

  // ✅ Cierra sesión real
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profilePicPlaceholder}>
          <Feather name="user" size={50} color="#fff" />
        </View>
        <Text style={styles.username}>{username}</Text>

        <View style={styles.headerButtons}>
          <Button mode="contained" onPress={() => setEditVisible(true)} style={styles.button}>
            Edit Profile
          </Button>
          <Button mode="contained" onPress={() => setAddProductVisible(true)} style={styles.button}>
            Agregar producto
          </Button>
        </View>

        {/* Botón Cerrar Sesión con ícono */}
        <Button
          mode="contained"
          onPress={logout}
          style={[styles.button, { flexDirection: "row", alignItems: "center" }]}
          icon={() => <Feather name="x" size={20} color="#fff" />}
        >
          Cerrar
        </Button>
      </View>

      {/* Lista de productos */}
      {images.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20, color: "#fff" }}>
          No hay productos aún
        </Text>
      ) : (
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => {
                setSelectedProduct(item);
                setActionVisible(true);
              }}
            >
              <View style={styles.fakeImage}>
                <Feather name={item.icon || "cpu"} size={60} color="#fff" />
              </View>
              <Text style={styles.imageLabel}>{item.name}</Text>
              <Text style={{ color: "#fff", fontSize: 10 }}>
                ${item.price} | Stock: {item.stock}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Modales */}
      <EditProfileModal
        visible={editVisible}
        onDismiss={() => setEditVisible(false)}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        onSave={updateUsername}
      />

      <AddProductModal
        visible={addProductVisible}
        onDismiss={() => {
          setAddProductVisible(false);
          setSelectedProduct(null);
        }}
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        productStock={productStock}
        setProductStock={setProductStock}
        onSave={handleAddProduct}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />

      <ProductActionModal
        visible={actionVisible}
        onDismiss={() => setActionVisible(false)}
        product={selectedProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </View>
  );
}
