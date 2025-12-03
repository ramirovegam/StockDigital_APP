📌 Descripción del Proyecto

Este proyecto es una app móvil en React Native que simula una interfaz tipo Instagram, con autenticación mediante Firebase y funcionalidades básicas:

Pantalla de autenticación (Auth.jsx)

Iniciar sesión o registrarse.

Manejo de sesión con Firebase Authentication.

Pantalla principal (Home.jsx)

Muestra el nombre del usuario (editable mediante un modal).

Botón Share Pic que agrega imágenes simuladas en una cuadrícula (Imagen 1, Imagen 2...).

Botón Cerrar Sesión que desconecta al usuario.

Footer con íconos estilo Instagram.

Modales

EditProfileModal: Editar el nombre del usuario y actualizarlo en Firebase.

Tecnologías usadas:

React Native (Expo)

React Native Paper

Firebase (Auth, Realtime Database, Storage)

AsyncStorage

📸 Capturas de Pantalla
<p float="left"> <img src="./images/Multimedia.jpg" width="260"/> <img src="./images/Multimedia (1).jpg" width="260"/> <img src="./images/Multimedia (2).jpg" width="260"/> <img src="./images/Multimedia (3).jpg" width="260"/> </p>
✅ Cómo funciona
Autenticación

Al abrir la app se verifica si hay un usuario autenticado.

Si sí, se muestra Home.jsx.

Si no, se muestra Auth.jsx.

Pantalla principal

El nombre del usuario se obtiene desde Firebase Realtime Database.

El botón Edit Profile abre un modal para editar el nombre.

El botón Share Pic agrega texto simulando imágenes en una cuadrícula.

El botón Cerrar Sesión llama a auth.signOut() y vuelve a la pantalla de login.

Persistencia

La sesión se conserva gracias a ReactNativeAsyncStorage.

🚀 Cómo correr el proyecto
Requisitos previos

Node.js

Expo CLI:

npm install -g expo-cli


Un proyecto de Firebase configurado (datos en firebaseConfig.js)

Pasos

Instalar dependencias:

npm install


Ejecutar el proyecto:

npx expo start


Abrir en Expo Go o en un emulador.

🛠 Configuración de Firebase

En firebaseConfig.js coloca tus credenciales:

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

📂 Estructura del Proyecto
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


Si quieres, también te puedo generar:

✅ Badges (Expo, Firebase, React Native, versión)
✅ Una demo GIF de la app (la puedo armar si me pasas un video corto)
✅ Un README más profesional tipo "awesome template"