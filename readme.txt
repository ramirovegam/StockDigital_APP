Aquí tienes el texto listo para copiar y pegar en tu README:

***

## 📌 **Descripción del Proyecto**

Este proyecto es una **app móvil en React Native** que simula una interfaz tipo **Instagram**, con autenticación mediante **Firebase** y funcionalidades básicas:

*   **Pantalla de autenticación (`Auth.jsx`)**:
    *   Permite **iniciar sesión** o **registrarse**.
    *   Usa Firebase Authentication para manejar la sesión.
*   **Pantalla principal (`Home.jsx`)**:
    *   Muestra el **nombre del usuario** (editable mediante un modal).
    *   Botón **Share Pic** que simula agregar imágenes en una cuadrícula con texto incremental:  
        `Imagen 1, Imagen 2, Imagen 3...`
    *   Botón **Cerrar Sesión** que desconecta al usuario y regresa a la pantalla de login.
    *   Footer con íconos estilo Instagram.
*   **Modales**:
    *   `EditProfileModal`: Permite editar el nombre del usuario y actualizarlo en Firebase.

La app está construida con:

*   **React Native** + **Expo**.
*   **React Native Paper** para componentes UI.
*   **Firebase** (Auth, Database, Storage).
*   **AsyncStorage** para persistencia de sesión.

***

## ✅ **Cómo funciona**

1.  **Autenticación**:
    *   Al abrir la app, se verifica si hay un usuario autenticado.
    *   Si **sí**, se muestra la pantalla principal (`Home.jsx`).
    *   Si **no**, se muestra la pantalla de login/registro (`Auth.jsx`).

2.  **Pantalla principal**:
    *   El nombre del usuario se obtiene desde Firebase.
    *   El botón **Edit Profile** abre un modal para cambiar el nombre.
    *   El botón **Share Pic** agrega un bloque simulado con texto incremental en una cuadrícula.
    *   El botón **Cerrar Sesión** llama a `auth.signOut()` y regresa a la pantalla de login.

3.  **Persistencia**:
    *   Firebase mantiene la sesión activa gracias a `ReactNativeAsyncStorage`.

***

## 🚀 **Cómo correr el proyecto**

### **Requisitos previos**

*   Node.js instalado.
*   Expo CLI instalado globalmente:
    ```bash
    npm install -g expo-cli
    ```
*   Tener una cuenta en **Firebase** y configurar el proyecto (ya incluido en `firebaseConfig.js`).


PASOS PARA CORRER
1.  Instala dependencias:
    ```bash
    npm install
    ```
2.  Inicia el proyecto con Expo:
    ```bash
    npx expo start
    ```
3.  Escanea el QR con la app **Expo Go** en tu dispositivo o usa un emulador.

***

## 🛠 **Configuración de Firebase**

*   En `firebaseConfig.js` coloca tus credenciales de Firebase:
    ```javascript
    const firebaseConfig = {
      apiKey: "...",
      authDomain: "...",
      databaseURL: "...",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "...",
    };
    ```

***

## 📂 **Estructura del proyecto**

    src/
      components/
        EditProfileModal.jsx
        ImageModal.jsx
      screens/
        Auth.jsx
        Home.jsx
      styles/
        authStyles.js
        homeStyles.js
        editProfileModalStyles.js
      firebaseConfig.js
    App.js

***

¿Quieres que también te prepare **una sección para el README con capturas de pantalla o un GIF mostrando la app en funcionamiento**?  
¿O lo dejamos solo con texto y pasos?

imagenes
Puedes ver una vista previa de la aplicación a continuación:
<img width="1289" height="938" alt="image" src="https://github.com/ramirovegam/myapp-movilCRUD/blob/047846eae590e48d71597c889c749f87005299a9/images/Multimedia.jpg"/>
<img width="1289" height="938" alt="image" src="https://github.com/ramirovegam/myapp-movilCRUD/blob/047846eae590e48d71597c889c749f87005299a9/images/Multimedia%20(1).jpg"/>
<img width="1289" height="938" alt="image" src="https://github.com/ramirovegam/myapp-movilCRUD/blob/047846eae590e48d71597c889c749f87005299a9/images/Multimedia%20(2).jpg"/>
<img width="1289" height="938" alt="image" src="https://github.com/ramirovegam/myapp-movilCRUD/blob/047846eae590e48d71597c889c749f87005299a9/images/Multimedia%20(3).jpg"/>


